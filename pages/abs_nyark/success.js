import React from 'react'
import Nav from '../../components/abs-nyark/Nav';
import { useEffect } from 'react';
import { useStateContext } from '../../context/StateContext';
import axios from 'axios';
import {v4 as uuidv4} from "uuid";

const success = () => {
    const {delivery_cost,totalPrice, full_price, cartItems, onRemove, handleUpdate,  delivery_details,setDeliveryDetails} = useStateContext()
    


    useEffect(() => {
        const PostData = async()=>{
            try{
                const res   = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/orders",
                {         
                        "data": { 
                            "Customer_Name":delivery_details.customer_name,
                           "Customer_Email":delivery_details.customer_email,

                           "Customer_Mobile":delivery_details.customer_mobile,
                           "Customer_Order_Code":delivery_details.customer_order_code,
                           "Customer_AddressLine_1":delivery_details.customer_addressLine_1,
                           "Customer_AddressLine_2":delivery_details.customer_addressLine_2,
                           "Customer_Country":delivery_details.customer_country,
                           "Customer_Postal":delivery_details.customer_postal,
                           "Cart_Items":"r3r",
                           "Total_Quantities":"43",
                           "Total_Cost":"3r",
                           "Delivery_Fee":"3r3",
                           "Total_Weight":"3r3r",
                           "Aggregate_Product_Cost":"3r3r",
                           "Order_Date":"33",
                            "Store":"AbsNyark"
                        }

                        
                  
                });

                console.log(res)

               
             
               
            }catch(err){
                    console.log("An Error has occured " + err)
            }
        }

        
       
        console.log(JSON.stringify(cartItems.map((each_cart_item)=>{return `${each_cart_item.ProductName}  Quantity(${each_cart_item.Quantity}) `}).join(""))  )
          
        if(cartItems.length > 0){
              //  console.log(cartItems.map((each_cart_item)=>{return each_cart_item.ProductName + "   " + "Quantity("+ each_cart_item.Quantities }))
           
                //  setDeliveryDetails({...delivery_details, customer_order_code: uuidv4()})

               //PostData()
        }
       
      
    
    
    },[cartItems])
    
  return (
    <div className='bg-secondary h-[100vh] text-white font-[Montserrat]'>
        <Nav></Nav>
        
        Payment Successfully made</div>
  )
}

export default success