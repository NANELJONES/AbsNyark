import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
   
    
    try {
        const params ={
            submit_type:"pay",
            mode:"payment",
            payment_method_types:["card"],
            billing_address_collection:"auto",
           
            // automatic_tax: {
            //   enabled: true,
            // },
    
 

            shipping_options:[
              {
                shipping_rate_data:{
                  type:"fixed_amount",
                  fixed_amount:{amount:req.body.delivery_fee * 100, currency:"eur"},
                  display_name:"Delivery Cost",
                  delivery_estimate:{
                    minimum:{
                      unit:"business_day",
                      value:3
                    },
                    maximum:{
                      unit:"business_day",
                      value:5
                    }
                  }

                }
              }
            ],
            

            line_items: req.body.data.map((item)=> {
                //const img = process.env.NEXT_PUBLIC_API_URL+item.attributes.Image.data.attributes.url
               
              // const imgUrl = `${process.env.NEXT_PUBLIC_API_URL}${item.Image?.data?.attributes?.formats?.thumbnail?.url}`;
                
                return {
                    price_data : {
                        currency: "eur",
                        product_data:{
                            name:item.ProductName,
                           
                        },
                        unit_amount: item.Price * 100
                    },
                  
                    quantity: item.Quantity,
                   
                }
            }
            ),

        
         
            success_url: `${req.headers.origin}/success`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
          }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      
      
      res.status(200).json(session); 
     
      
    } catch (err) {
 
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}