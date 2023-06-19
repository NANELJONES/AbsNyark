import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
 

    try {
        const taxR = await stripe.taxRates.list()
      
      res.status(200).json({taxR}); 
     
      
    } catch (err) {
 
      res.status(err.statusCode || 500).json(err.message);
    }

}