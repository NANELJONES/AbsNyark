
export  default function handler (req, res){
console.log(req.body)
let html = [];



 function stringGenerator() {
        console.log("string function is being run")
        const convertedHtml = req.body.cart_info.map((each_item) => {
          return `<tr> <td style="display:flex; align-items:center; gap: 10px;"> <p>${each_item.ProductName}£</p><p>   (${each_item.Price}  £)</p> </td>   <td>${each_item.Quantity}</td><td>${each_item.TotalPrice}£</td> </tr>`;
        })
        
        html = convertedHtml
    };

    stringGenerator()
   




const path = require('path')
var hbs = require('nodemailer-express-handlebars');
let nodemailer = require("nodemailer")
const transporter =  nodemailer.createTransport({
        
    port:465,
    host: "smtp.gmail.com",
    auth:{
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
    },
    secure:true,
});

const handlebarOptions = {
    viewEngine: {
      extName: ".handlebars",
      partialsDir: path.resolve('./views'),
      defaultLayout: false,
    },
    viewPath: path.resolve('./views'),
    extName: ".handlebars",
  }


transporter.use('compile', hbs(handlebarOptions));


const mailData ={
    from: process.env.NEXT_PUBLIC_EMAIL,
    to:   process.env.NEXT_PUBLIC_EMAIL,
    subject:`Message from  ${req.body.delivery_info.customer_name}`,
    template:"ordernotification",
    context:{
        cart_orders: html.toString(),
        subtotal:req.body.total_cost,
        full_cost: req.body.full_total,
        delivery_cost: req.body.delivery_fee,
        tax: req.body.taxes,
        tax_percentage:req.body.tax.rate ,
        c_name:req.body.delivery_info.customer_name,
        c_email:req.body.delivery_info.customer_email,
        c_mobile:req.body.delivery_info.customer_mobile,
        c_order_code: req.body.delivery_info.customer_order_code,
        c_address_1:  req.body.delivery_info.customer_addresslines_1,
        c_address_2:  req.body.delivery_info.customer_addresslines_2,
        c_country:  req.body.delivery_info.customer_country,
        c_postal:  req.body.delivery_info.customer_postal,
        c_order_date: req.body.delivery_info.order_date

    }
   
}


transporter.sendMail(mailData, function(err, info){

    if(err){
        console.log("we have encountered an error ")
        console.log(err)

    }else{
        console.log(info)
    }
})



return res.status(200).json(req.body)






}