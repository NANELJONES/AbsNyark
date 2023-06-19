import React from 'react'
import Link from 'next/link'
import { useStateContext } from '../../context/StateContext';
import { motion } from "framer-motion"
import { useState } from 'react';
import {handle_toast_notification} from "/components/Toast.jsx"

const Cart = () => {


const {totalPrice, clear_local_storage, totalQuantities, cartItems, setshowCart, onRemove, handleUpdate, setcartItems} = useStateContext()

const [hide, setHide] = useState(false)

const onOpen  = {
  hidden:{ opacity:0, z:-25},
  show: {opacity:1, y:0}
}


const onClose  = {
  hidden:{ opacity:1, z:0},
  show: {opacity:0, y:-25}
}

const closeCart = ()=>{
  setHide(!hide)
  setTimeout(()=>{setshowCart(false)}, 500)
  return () => clearTimeout()
}


    

return (
    <motion.div 
    variants={hide ? onClose : onOpen}
    initial="hidden"
    animate="show"
   
        transition={{duration:1}}
    
    className='fixed shadow w-[100vw] md:w-[50vw]  lg:w-[40vw] font-[Montserrat] right-[0px] top-[-20px] md:top-[0px] md:max-w-[600px] z-[100] bg-[rgba(0,0,0,1)] h-[auto] py-[3%] px-[20px] bg-red text-white '>
      <br/>
      <p className='absolute right-[20px] cursor-pointer text-[orange] text-[1.3em] rounded-full' onClick={()=>{closeCart()}}>x</p>
      <h1 className='font-[Display] text-[6vw] md:text-[5vw] lg:text-[4vw] 2xl:text-[45px] leading-[80%]'> Your <br/> Cart  Items</h1>
      <br/>
      <p>Total Items: {totalQuantities}</p>
      <br/>
      <p onClick={()=>{clear_local_storage()}}  className='text-[red] font-bold cursor-pointer'>EMPTY CART X </p>
      <br/>
      <div className='flex flex-col gap-[1vw]  max-h-[500px]'>
      {cartItems && cartItems.length != 0  ? cartItems.map((each_item, index)=>{
       return <div className='flex px-[10px] items-center justify-around w-full  bg-[#373737] py-[2vw] md:py-[0.8vw] '  key={index}>
            <button onClick={()=>{onRemove(each_item), handle_toast_notification("Item Removed From Cart")}} className='bg-[white] rounded-full leading-[0px] text-[black] p-[0px] w-[20px] h-[20px]'  >x</button>
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

      </div>

        <br/>
      <div className='text-right'>
        
        <p className='text-[2vw] md:text-[1.5vw] xl:text-[1em]'>TOTAL :</p>
       <p className='text-[8vw] md:text-[5vw] xl:text-[4em] '>€ {parseFloat(totalPrice)} </p> 
       
        
      </div>
      <br/>
   <Link href={"/abs_nyark/delivery"}><button className='bg-[white] text-[black] mx-[40%] px-[2vw] py-[0.5vw] hover:bg-[orange] hover:text-[white] duration-500 '> CHECKOUT</button></Link>   
      </motion.div >
  )
}

export default Cart