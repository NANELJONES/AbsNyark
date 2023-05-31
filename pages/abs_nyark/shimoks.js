import React from 'react'
import Shimoks_Nav from '../../components/shimoks/Shimoks_Nav'
import Image from 'next/image'
import Link from 'next/link'
import About_shimok from '../../components/shimoks/About_shimok'
import Testimonials from '../../components/shimoks/Testimonials'
import Contact_Shimok from '../../components/shimoks/Contact_Shimok'
import Shimok_products from '../../components/shimoks/Shimok_products'
import Footer from '../../components/shimoks/Footer'
import Layout from "../../components/layout/Layout"
import { motion } from "framer-motion"



const shimoks = () => {
  const more_info =[
    {image:"/dip_it.png",
    heading:"DIP IT",
    details:"You may choose to use it as a dip with fries, tortilla chips and crisps."    
  },
    {image:"/dip_it.png",
    heading:"LET IT MARINATE!",
    details:"Try it as a marinate on your meat, chicken or fish. These are just some of the many ways our sauces can be used, but you decide!"    
     },
    {image:"/dip_it.png",
    heading:"SPREAD IT!",
    details:"It’s delicious on a bagel, in a burger and with rice."    
    },

  ]


 


  return (
    
    <div className='font-[Fraunces] bg-[white] text-white relative  overflow-x-hidden '>
    <Layout>
     <Shimoks_Nav/> 
      
    
      

      <div id="#header" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.63)), url(/BRAND.png)", backgroundSize:"cover" }} className=' flex flex-col items-center py-[11vw] 2xl:py-[150px]  w-full max-h-[1200px] rounded-br-[15vw] 2xl:rounded-br-[300px] mt-[5vw] md:mt-[auto]'>
          
        <div className='flex flex-col items-center'>

          <motion.div 
          initial={{ opacity: 0,  y:50 }}
          whileInView={{ opacity: 1, y:0}}
          transition={{duration:2}}
          
          className='relative w-[80%] md:w-[50%] min-h-[200px] h-[20vw] max-h-[500px]'>
              <Image src={"/shimok_logo.svg"} layout='fill' className='object-contain' />
    
          </motion.div>
          

            <motion.p
             initial={{ opacity: 0,  y:50 }}
             whileInView={{ opacity: 1, y:0}}
             transition={{duration:2, delay:0.5}}
            
            className='text-center text-lg md:text-xl w-[70%] md:w-[40%] font-thin'>Shimoks is our authentic Ghanaian Hot sauces. Our sauces are inspired by love for our Ghanaian cultural foods and spices. Shimoks Hot sauces each have their own unique tastes but complement each other. However, the choice is yours. Get a taste of Ghana.</motion.p>
            <br/>
          
            <Link href={"/abs_nyark/shimoks/#products"}><button className='font-[Fraunces] font-thin text-[3vw] bg-[orange] text-white px-[3vw] py-[1vw]  md:text-[1.5vw] xl:text-[1.2vw] 2xl:text-[20px]  md:px-[1.5em] md:py-[.6em] md:hover:bg-pink md:hover:text-white md:hover:px-[2.2em] md:hover:py-[0.8em] md:hover:text-1.5xl duration-500   '> PURCHASE {">>"} </button></Link> 



        </div>

      </div>


      < motion.div  initial={{ opacity: 0, y:40 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{duration:2}}
       
        
       className='flex flex-col items-center  md:flex-row relative  '> 

             <img src={"/leaves.png"} className = "absolute w-[30%] right-[0px] top-[0px] animate-[wiggle1_4s_ease-in-out_infinite] "></img> 
            


            <div className='w-full md:w-1/2  '>
             <img src={"/shitor.png"} className = "w-full"></img> 
            
            </div>
        
          <div className='w-full md:w-1/2 flex flex-col items-center md:block  md:self-end '>
            <h1 className='text-center md:text-left   leading-[83.9%]  md:text-[10vw] text-[18vw] text-[#4B4B4B] w-[70%] md:w-[40%] font-thin 2xl:text-[150px]  '> SHITOR </h1>
           
            <p className='text-center  text-base md:text-[2vw] lg:text-lg md:text-left text-[#4B4B4B] w-[70%] md:w-[70%]  xl:tracking-[0.2em] font-thin'>The hot sauce is traditionally called “Shito” which means pepper in the Ghanaian dialect is a popular delicacy
            from the Ga tribe of Ghana. 
            It is eaten with many Ghanaian dishes such as Kenkey,
            Banku, Fried Yam and Waakye. Theses are just a few of the dishes.
            Our sauces are very versatile and can be used in many ways.
          
            </p>

            <br/>
            <Link href="/"><button className='font-[Fraunces] font-thin text-[4vw] bg-[#42A880] text-white px-[3vw] py-[1vw] md:text-[1.5vw] 2xl:text-[1vw] md:px-[1.5em] md:py-[.6em] md:hover:bg-pink md:hover:text-white md:hover:px-[2.2em] md:hover:py-[0.8em] md:hover:text-1.5xl duration-500 2xl:text-[20px]   '>PURCHASE {">>"}</button></Link>  



          </div>



      </motion.div>



      
    <div className='w-full h-[1vw] bg-[orange] mt-[3vw] 2xl:mt-[40px]'> </div>

      <div className='flex flex-col gap-[10vw] md:gap-[1vw]  md:flex-row  items-center justify-around mt-[3vw] 2xl:mt-[40px]  '>
    
      {more_info.map((each_info, index)=>{
          return <motion.div 
          initial={{ opacity: 0, y:40 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{duration:2, delay:(index/10) + 0.6}}
 
          key={index} className="mx-auto text-center text-[#4B4B4B] flex flex-col  self-start w-[50%]  md:w-[20%] h-full">
            <img src={each_info.image} className = "w-[100%] bg-orange  object-fit"/>
            <h1 className='font-bold'>{each_info.heading}</h1>
            <p className='font-thin'>{each_info.details}</p>


          </motion.div>
        })}

          

      </div>

   
      <div id="products">
           <Shimok_products/> 
     </div>
      <div id="about_us" 
      
      
      className='w-full h-[1vw] bg-[orange] mt-[3vw] 2xl:mt-[40px] '> </div>

      <About_shimok/>


      <Testimonials/> 
        <div id="contact_us">
      <Contact_Shimok/>
      </div>
      <Footer/>
      </Layout>
   





    </div>
  )
}

export default shimoks