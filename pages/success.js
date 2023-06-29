import React from 'react'
import Nav from '../components/abs-nyark/Nav';
import { useEffect, useState } from 'react';
import { useStateContext } from '../context/StateContext';
import axios from 'axios';
import {useRouter} from 'next/router';
import moment from 'moment/moment';

const success = () => {
    const { user_taxes,  delivery_cost,totalPrice, total_weight, totalQuantities, full_price, cartItems,  delivery_details,clear_local_storage} = useStateContext()
    
    const [final_cost, set_Final_Cost] = useState(0)

    const router  = useRouter()

    const PostData = async()=>{ 
        try{
            const res   = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/orders",
            {         
                    "data": { 
                        "Customer_Name":delivery_details.customer_name,
                       "Customer_Email":delivery_details.customer_email,
                       "Customer_Mobile":delivery_details.customer_mobile,
                       "Customer_Order_Code":delivery_details.customer_order_code,
                       "Customer_AddressLine_1":delivery_details.customer_addresslines_1,
                       "Customer_AddressLine_2":delivery_details.customer_addresslines_2,
                       "Customer_Country":delivery_details.customer_country,
                       "Customer_Postal":delivery_details.customer_postal,
                       "Cart_Items":cartItems.map((each_cart_item)=>{return `${each_cart_item.ProductName}  Quantity(${each_cart_item.Quantity}) \n`}).join("\n")   ,
                       "Total_Quantities":totalQuantities,
                       "Total_Cost":totalPrice,
                       "Delivery_Fee":delivery_cost,
                       "Total_Weight":total_weight,
                       "Aggregate_Product_Cost":final_cost,
                       "Order_Date": delivery_details.order_date,
                       "Delivery_Date":  moment().add(5,'days') , 
                       "Status":delivery_details.status,
                       "Store":"Shimoks",
                       "Taxes": `${user_taxes.tax_amount}(${user_taxes.rate}%)`

                    }

            });
  
        }catch(err){

                console.log("An Error has occured " + err)
        }
    }

    const SendReceipt = async () =>{
      
        try{
            const response = await axios.post("/api/receipt",
            {"cart_info":cartItems,
            "delivery_info": delivery_details,
            "delivery_fee": delivery_cost,
            "taxes": user_taxes.tax_amount ,
            "total_cost": totalPrice,
            "full_total": final_cost,
            "total_quantities":  totalQuantities,
            "tax":user_taxes


        }
            )
            console.log(response.data)
          
        }catch(err){
            console.log("An error was generated sending the receipt," + err)
        }
    }

    const SendNotification = async () =>{
      
        try{
            const response = await axios.post("/api/receipt_notification",
            {"cart_info":cartItems,
            "delivery_info": delivery_details,
            "delivery_fee": delivery_cost,
            "taxes": user_taxes.tax_amount ,
            "total_cost": totalPrice,
            "full_total": final_cost,
            "total_quantities":  totalQuantities,
            "tax":user_taxes


        }
            )
            console.log(response.data)
          
        }catch(err){
            console.log("An error was generated sending the receipt," + err)
        }
    }
    
    
  

    useEffect(() => {
        if(!isNaN(user_taxes.tax_amount)){
            set_Final_Cost(()=>{return (totalPrice + user_taxes.tax_amount + delivery_cost).toFixed(2)   })
        }      

    },[delivery_details,final_cost])


    useEffect(() => {
          
        if(cartItems.length > 0 && delivery_details){
            try{  
            SendReceipt()
            alert("Receipt Email Has Been Sent Has Been")
            SendNotification()
            PostData()
            
       
             clear_local_storage()
             
              
              
            }catch(err){
                  console.log("An Error has been ran into " + err )
            } 
         
  
          }
  
    },[final_cost])
    
    
  return (
    <div className='bg-secondary h-[100vh] text-white font-[Montserrat]'>
        <Nav></Nav>
        <div className='  flex flex-col items-center mt-[10em] bg-nav_bg rounded-[1em] shadow  w-[60%] mx-auto py-[5em] '>
     
        
        <h1 className='text-center text-[5vw] w-[80%] '>Payment Successfully made</h1>
        <button className=' hover:bg-[orange] duration-500 hover:text-[white]  flex items-center justify-around w-[70%]  py-[1em] text-[black]  text-[.8em] md:text-[0.95em] mx-[20px] md:mx-[auto] bg-[white] ml-[0px] mt-[2em]' onClick={()=>{ router.push("/")}}  >  Continue Shopping </button>
      
       
        </div>
        
        </div>
  )
}

export default success