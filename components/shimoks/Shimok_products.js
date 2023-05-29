import React from 'react'
import { useState } from 'react'

import { useEffect } from 'react';
import { useStateContext } from '../../context/StateContext';
import axios from 'axios';
const Shimok_products = () => {

    


    const { onAdd} = useStateContext()


    const [showMore, setshowMore] = useState("")
    const [selected, set_selected] = useState(false)

    const [products, set_products] =  useState([])



    useEffect(() => {
        const fetchData = async()=>{
            try{
                const res   = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/shimok-products?populate=*",
                {
                    headers:{
                        Authorization:"bearer " + process.env.NEXT_PUBLIC_SHIMOK_API_TOKEN,
                    },
                });

                console.log(res)
             
                set_products(res.data.data)
            }catch(err){
                    console.log("An Error has occured" + err)
            }
        }

        fetchData();
      
    
    
    }, [])
    

    const increase_qty=(i, quantity)=>{
   

        const new_products = products.map(one_product =>{
            if(i == products.indexOf(one_product)){
                    
                    if(one_product.attributes.Quantity >= 1){
                        return {...one_product, attributes:  {...one_product.attributes, Quantity: one_product.attributes.Quantity + 1}}
                    }
                    
                }else{
                    return one_product
                } })

      set_products(new_products)


      }

      const decrease_qty=(i )=>{

        const dec_products = products.map(one_product =>{
            if(i == products.indexOf(one_product)){
                    
                    if(one_product.attributes.Quantity >= 2){
                        return {...one_product, attributes:  {...one_product.attributes, Quantity: one_product.attributes.Quantity - 1}}
                    }else{
                        return one_product
                    }

                }else{
                    return one_product
                } })
                set_products(dec_products)


      }
     



        

   
     
     


 


  return (
    <div className='font-[Serif] text-[black]'>
        <h1 className='text-[#659B5E] font-[Serif] text-center text-[8vw] md:text-[4vw] mt-[10vw] md:mt-[3vw]'>PRODUCTS</h1>
        <div className='flex font-[Fraunces]   flex-wrap items-center gap-[1vw] justify-center '>
            {products.map((each_product, index)=>{
                return<div className='md:w-[30vw] text-center  flex flex-col items-center self-start ' key={index}> 
                  
                     <img src={each_product.attributes?.Image.data.attributes.url} className="w-[50%] md:w-[60%]" alt=""></img>
                    <p className='text-[4vw] md:text-[2vw] w-[70%] 2xl:text-[2em]'>{each_product?.attributes.ProductName}</p>
                    <p className='text-[1.5em]'>${each_product?.attributes.Price} € </p>

                    <button className='text-[orange]' onClick={()=>{setshowMore(index), set_selected(!selected)}}> {showMore ? "Read Less " : "Read More"}</button>
                    <br/>

                    {showMore == index && selected ?                     <div className='font-thin w-[70%]'>
                        <h1 className='font-bold'>DESCRIPTION</h1>
                        <h1> {each_product?.attributes.Description}</h1>
                        <br/>
                        <h1 className='font-bold'>INGREDIENTS</h1>
                        <h1>{each_product?.attributes.Ingredients}</h1>

                    </div>: "" }


                    <br/>
                    <div className='flex  w-[50%] md:w-2/3 2xl:w-1/3 items-center justify-between '>
                            <button  className='shrink-0  flex items-center justify-around w-[10vw] h-[10vw] md:w-[4vw] md:h-[4vw] 2xl:w-[2vw] 2xl:h-[2vw] rounded-full text-white  text-2xl bg-[#5F5F5F]' onClick={()=>{decrease_qty(index)}}  > - </button>
                            <input className='border text-center w-[40%] p-[0.5em] '  onChange={()=>{}} value={each_product?.attributes.Quantity}/>
                            <button  className='shrink-0  flex items-center justify-around w-[10vw] h-[10vw] md:w-[4vw] md:h-[4vw] 2xl:w-[2vw] 2xl:h-[2vw]  rounded-full text-white  text-2xl bg-[orange]' onClick={()=>{increase_qty(index)  }}   > + </button>

                    </div>
                    <br/>

                    <button className='font-[Fraunces] font-thin text-[2vw] bg-[#42A880] text-white px-[3vw] py-[2vw] md:text-[1.5vw] lg:text-[1.3vw] xl:text-[1vw]  md:px-[1.5em] md:py-[.6em] md:hover:bg-pink md:hover:text-white md:hover:px-[2.2em] md:hover:py-[0.8em] md:hover:text-1.5xl duration-500 2xl:text-[15px]    '  onClick={()=>{onAdd(each_product.attributes)}} > ADD TO CART {">>"} </button> 




                </div>
            })}
        </div>
    
    </div>
  )
}

export default Shimok_products