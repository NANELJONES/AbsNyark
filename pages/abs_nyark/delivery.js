import React from 'react'
import Nav from "../../components/abs-nyark/Nav"
import { useStateContext } from '../../context/StateContext'
import getStripe from '../../lib/getStripe'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {v4 as uuidv4} from "uuid";

 
const delivery = () => {
  const {delivery_cost,totalPrice, full_price, cartItems, onRemove, handleUpdate,  delivery_details,setDeliveryDetails} = useStateContext()
  const router = useRouter()

 
  
  const  handleCheckout  = async()=>{
   

    const stripe = await getStripe();
    const response = await  fetch("/api/checkout_session", {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({data:cartItems, delivery_fee:delivery_cost, customer_info:delivery_details})
    })

    if(response.statusCode === 500) return
    const data =  await response.json();
    

    
    stripe.redirectToCheckout({sessionId:data.id});
  }


  const handleSubmit = (event)=>{
    event.preventDefault()
   
    if(!delivery_details.customer_name || !delivery_details.customer_email || !delivery_details.customer_mobile || !delivery_details.customer_addresslines_1 || !delivery_details.customer_country || !delivery_details.customer_postal ){
      toast.error('Please Fill All Fields', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
     
    
    }else{
      console.log("we are good")
      if(!delivery_details.customer_order_code){
        setDeliveryDetails({...delivery_details, customer_order_code: uuidv4(), order_date: new Date()})
     }
      handleCheckout()
    }
  }



  return (
    <div className='bg-secondary h-auto'>
      <Nav></Nav>
    
      <ToastContainer position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"  />
     <div className='w-full h-[100vh] text-[white] bg-[#2A6243] flex justify-between max-w-[1400px] mx-auto '>
            
            <div className=' w-[25%] md:w-1/2 hidden md:block md:h-auto bg-secondary relative font-[Display] text-[white] py-[1vw] '>
                  <h1 className='font-[Display] text-[6vw] md:text-[5vw] lg:text-[4vw] 2xl:text-[45px] leading-[80%]'> Your <br/>  Cart  Items</h1>
                  <br/>
                  {  typeof cartItems !=="undefined" && cartItems.length != 0 ? cartItems.map((each_item, index)=>{
                  return <div  className='flex px-[10px] items-center justify-around w-full  bg-[#3C6950] py-[2vw] md:py-[0.8vw] '  key={index}>
                        <button onClick={()=>{onRemove(each_item)}} className='bg-[white] rounded-full leading-[0px] text-[black] p-[0px] w-[20px] h-[20px]'  >x</button>
                      <img src={each_item.Image.data.attributes.url} className='w-[15%] border rounded-[10px] bg-[#322C2C] 2xl:w-[10%]'></img>
                        <div className='w-auto '>
                          <p className=' text-[2.5vw] w-[80%] md:text-[2vw] lg:text-[1.3vw] 2xl:text-[20px] font-regular leading-[90%] ' >{each_item.ProductName}</p>
                          <p className='w-[30%] font-thin italic '>€ {each_item.Price} </p>
                        </div>

                        <div className='flex   w-[20%]  md:w-1/5 items-center justify-around gap-[-10px]'>
                                        <button  className='shrink-0  flex items-center justify-around w-[33.3%] h-[33.3%] h-[100%]  text-2xl bg-[#5F5F5F]' onClick={()=>{handleUpdate(each_item,"dec")}}  > - </button>
                                        <input className=' text-center bg-[transparent] w-[40%] p-[0.25em] border  text-[white]  '  onChange={()=>{}} value={each_item.Quantity}/>
                                        <button  className='shrink-0  flex items-center justify-around w-[33.3%] h-[33.3%] h-[100%]   text-white  text-2xl bg-[orange]' onClick={()=>{ handleUpdate(each_item,"inc")}}   > + </button>

                        </div>

                        <p>${each_item.TotalPrice}</p>


                    </div>
                  }) :  <p  className='text-center'>You have no items</p>}



                    <br/>

                  <div className='flex justify-between bg-[rgba(256,256,256,0.1)] py-[0.6em] '>
                      <div className='flex flex-col items-center h-[40px]  font-Montserrat w-[30%]'>
                            <p className='md:text-[0.6em] lg:text-[0.8em]  '> DELIVERY:</p>
                            <p className='md:text-[3em] lg:text-[4em]  leading-[86%]'>€{delivery_cost} </p>
                      
                      </div> 

                      <div className='flex flex-col items-center  font-Montserrat w-[30%]'>
                            <p className='md:text-[0.6em] lg:text-[0.8em]'>PRODUCT TOTAL:</p>
                            <p className='md:text-[3em] lg:text-[4em]  leading-[86%] '>€{ totalPrice} </p>

                      </div>


                  </div>  

                  <br/>
                  <div className='flex flex-col items-center items-center justify-around w-full font-Montserrat w-[30%]'>
                            <p className='text-[0.8em]  '>TOTAL COST</p>
                            <p className='text-[4em] leading-[86%] '>€{full_price} </p>

                      </div>



                 
                  {/* <p className='mx-[]]'>TOTAL COST: <br/>{delivery_cost + totalPrice} </p> */}

          
            </div> 
                  {/*this is the form for the delivery */}
               <form className='w-full  md:w-[65%]  font-[Display] md:px-[30px] py-[1vw]   '>
                <h1 className='text-[6vw] md:text-[5vw] lg:text-[4vw] 2xl:text-[40px] text-[white] leading-[80%]'> DELIVERY <br/> Details</h1>
              
            

                <div className='px-[20px]  flex flex-wrap    gap-[1em] 2xl:gap-[10px] w-full'>

                      <div className='flex  w-auto  grow flex-col  md:mt-[3vw] gap-[1vw] 2xl:text-[1em] 2xl:mt-[20px] w-full md:w-[40%]  max-w-[400px] 2xl:gap-[10px]'>
                                            <label  className='font-light text-[2.3vw] md:text-[90%]  '>Name:</label>
                                            <input 
                                            required={true}
                                            value={delivery_details.customer_name||""}
                                            name="name"
                                            onChange={(event)=>{
                                                setDeliveryDetails({...delivery_details, customer_name: event.target.value})         
                                            }}
                                            
                                            className= 'bg-[transparent]  border    focus:text-white  p-[3vw] text-[2vw] md:text-[1.1vw] md:focus:text-[1.7vw] lg:focus:text-[0.9vw] lg:text-[0.85vw] md:p-[1.5vw]  duration-700 2xl:p-[14px] 2xl:text-[1em]  ' placeholder='Please Enter Your Name'/>
                      </div>

                      <div className='flex  w-auto  grow flex-col  md:mt-[3vw] gap-[1vw] 2xl:text-[1em] 2xl:mt-[20px] w-full md:w-[40%]  max-w-[400px] 2xl:gap-[10px]'>
                                            <label  className='font-light text-[2.3vw] md:text-[90%]  '>Email:</label>
                                            <input 
                                            value={delivery_details.customer_email||""}
                                            name="email"
                                            type='email'
                                    
                                            onChange={(event)=>{
                                                setDeliveryDetails({...delivery_details, customer_email: event.target.value})         
                                            }}
                                            required 
                                            className= 'bg-[transparent]  border    focus:text-white  p-[3vw] text-[2vw] md:text-[1.1vw] md:focus:text-[1.7vw] lg:focus:text-[0.9vw] lg:text-[0.85vw] md:p-[1.5vw]  duration-700 2xl:p-[14px] 2xl:text-[1em]  ' placeholder='Please Enter Your Email'/>
                      </div>

                      <div className='flex  w-auto  grow flex-col  md:mt-[3vw] gap-[1vw] 2xl:text-[1em] 2xl:mt-[20px] w-full md:w-[40%]  max-w-[400px] 2xl:gap-[10px]'>
                                            <label  className='font-light text-[2.3vw] md:text-[90%]  '>Mobile:</label>
                                            <input 
                                            required
                                            name="phone"
                                            value={delivery_details.customer_mobile ||""}
                                    
                                            onChange={(event)=>{
                                                setDeliveryDetails({...delivery_details, customer_mobile: event.target.value})         
                                            }}
                                            
                                            className= 'bg-[transparent]  border    focus:text-white  p-[3vw] text-[2vw] md:text-[1.1vw] md:focus:text-[1.7vw] lg:focus:text-[0.9vw] lg:text-[0.85vw] md:p-[1.5vw]  duration-700 2xl:p-[14px] 2xl:text-[1em]  ' placeholder='Please Enter Your Phone Number'/>
                      </div>



                </div>


                <br/>
                <br/>
                

                <h1 className='text-[6vw] md:text-[5vw] lg:text-[4vw] 2xl:text-[40px] text-[white] leading-[80%]'> DELIVERY <br/> Options</h1>
                <br/>
              
                <div className='px-[20px]  flex flex-wrap    gap-[1em] 2xl:gap-[10px] w-full'>
                
            
                          <div className='flex  w-auto  grow flex-col  md:mt-[1.5vw] gap-[1vw] 2xl:text-[1em] 2xl:mt-[20px] w-full md:w-[40%]  max-w-[400px] 2xl:gap-[10px]'>
                                                <label  className='font-light text-[2.3vw] md:text-[90%]  '>Address Line1:</label>
                                                <input 
                                                required
                                                value={delivery_details.customer_addresslines_1 || ""}
                                                name="address"
                                                onChange={(event)=>{
                                                    setDeliveryDetails({...delivery_details, customer_addresslines_1: event.target.value})         
                                                }}
                                                
                                                className= 'bg-[transparent]  border    focus:text-white  p-[3vw] text-[2vw] md:text-[1.1vw] md:focus:text-[1.7vw] lg:focus:text-[0.9vw] lg:text-[0.85vw] md:p-[1.5vw]  duration-700 2xl:p-[14px] 2xl:text-[1em]  ' placeholder='Please Enter Your Addressline 1'/>
                          </div>

                          <div className='flex  w-auto  grow flex-col  md:mt-[1.5vw] gap-[1vw] 2xl:text-[1em] 2xl:mt-[20px] w-full md:w-[40%]  max-w-[400px] 2xl:gap-[10px]'>
                                                <label  className='font-light text-[2.3vw] md:text-[90%]  '>Address Line 2:</label>
                                                <input 
                                                value={delivery_details.customer_addresslines_2 || ""} 
                                        
                                                onChange={(event)=>{
                                                    setDeliveryDetails({...delivery_details, customer_addresslines_2: event.target.value})         
                                                }}
                                              name="address"
                                                className= 'bg-[transparent]  border    focus:text-white  p-[3vw] text-[2vw] md:text-[1.1vw] md:focus:text-[1.7vw] lg:focus:text-[0.9vw] lg:text-[0.85vw] md:p-[1.5vw]  duration-700 2xl:p-[14px] 2xl:text-[1em]  ' placeholder='Please Enter Your Addressline 2'/>
                          </div>

                          <div className='flex  w-auto  grow flex-col  md:mt-[1.5vw] gap-[1vw] 2xl:text-[1em] 2xl:mt-[20px] w-full md:w-[40%]  max-w-[400px] 2xl:gap-[10px]'>
                                                <label  className='font-light text-[2.3vw] md:text-[90%]  '>Country:</label>
                                                <input 
                                                required
                                                value={delivery_details.customer_country || "" }
                                        
                                                onChange={(event)=>{
                                                    setDeliveryDetails({...delivery_details, customer_country: event.target.value})         
                                                }}
                                              
                                                className= 'bg-[transparent]  border    focus:text-white  p-[3vw] text-[2vw] md:text-[1.1vw] md:focus:text-[1.7vw] lg:focus:text-[0.9vw] lg:text-[0.85vw] md:p-[1.5vw]  duration-700 2xl:p-[14px] 2xl:text-[1em]  ' placeholder='Please Enter Your Country'/>
                          </div>

                          <div className='flex  w-auto  grow flex-col  md:mt-[1.5vw] gap-[1vw] 2xl:text-[1em] 2xl:mt-[20px] w-full md:w-[40%]  max-w-[400px] 2xl:gap-[10px]'>
                                                <label  className='font-light text-[2.3vw] md:text-[90%]  '>Postal:</label>
                                                <input 
                                                required
                                                value={delivery_details.customer_postal ||"" }
                                        
                                                onChange={(event)=>{
                                                    setDeliveryDetails({...delivery_details, customer_postal: event.target.value})         
                                                }}
                                              
                                                className= 'bg-[transparent]  border    focus:text-white  p-[3vw] text-[2vw] md:text-[1.1vw] md:focus:text-[1.7vw] lg:focus:text-[0.9vw] lg:text-[0.85vw] md:p-[1.5vw]  duration-700 2xl:p-[14px] 2xl:text-[1em]  ' placeholder='Please Enter Your Postal'/>
                          </div>
                          <button type="submit" className='  flex items-center justify-around w-[70%] md:w-[33.3%]  py-[1em] text-[black]  text-[1em] md:text-[0.95em] mx-[20px] md:mx-[auto] bg-[white] ml-[0px] mt-[2em]' onClick={(event)=>{ handleSubmit(event)}}  >  PAYMENT </button>
           
                </div>

          
        
      
          
            
            
            
            
            </form>


     </div>
      
      
      </div>
  )
}

export default delivery