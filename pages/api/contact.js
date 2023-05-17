
export default function (req, res){
   
   
    const mailData ={
        from: process.env.NEXT_PUBLIC_EMAIL,
        to:   process.env.NEXT_PUBLIC_EMAIL,
        subject:`Message from  ${req.body.user_name}`,
        text: req.body.user_message,
        html:`<div> <h1 classname="text-[3em] text-red text-[red]  ">"MESSAGE FROM THE USER:"</h1>  ${req.body.user_message}</div>
        <p>Sent from:
        ${req.body.user_email}</p>
     
        `
       
    }




    let nodemailer  =  require("nodemailer")
    const transporter =  nodemailer.createTransport({
        
        port:465,
        host: "smtp.gmail.com",
        auth:{
            user: process.env.NEXT_PUBLIC_EMAIL,
            pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
        },
        secure:true,
    });

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



