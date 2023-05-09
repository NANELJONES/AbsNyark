import React from 'react';
// import small_logo from  "../public/assets/small_logo.svg"
import Link from "next/link"
import { useState, useEffect } from 'react';
import { useStateContext } from '../../context/StateContext';
import { faBars, faClose, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cart from '../cart/Cart';

const Shimoks_Nav = () => {
  const [menu, setmenu] = useState(true)

  
  const {showCart, setshowCart,totalQuantities} =  useStateContext()
 


  useEffect(() => {

    window.addEventListener("resize", ()=>{
      if(window.innerWidth > 640){
        setmenu(true)
      }
    })
  }, [])
  
  return (


        <>
         {showCart && <Cart/> }
  
       <nav className={`absolute duration-600 z-[100] ${menu ? "bg-[#3E3939]" : "bg-[transparent]"} md:bg-[transparent]  h-auto top-0 left-0   w-full p-1 shadow gap-10 py-[8vw] md:py-[1vw]  flex items-center flex-col  md:flex-row md:w-full md:items-center md:justify-between overflow-x-hidden`} >
      
      {!menu &&<FontAwesomeIcon  icon={faBars}color='white' className='absolute left-[3vw] md:hidden  w-[20px]' onClick={()=>{ setmenu(!menu)}}/>}
     
        {menu &&      
        
             <>
             <FontAwesomeIcon  icon={faClose}color='white' className='absolute left-[3vw] md:hidden w-[20px]' onClick={()=>{ setmenu(!menu)}}/>
              <div className=' w-auto  flex  h-auto items-center cursor-pointer md:ml-[2vw] gap-[1vw] md:w-1/5 '  >
                          
                          {/* <img
                          className='h-10 inline'
                          src={small_logo.src}/> */}
                        <Link href={"/"}><h1 className='text-[0.8em] font-[Fraunces] font-bold text-white'>AbysNyark</h1></Link> 
              </div>

              <ul   className='w-full flex flex-col justify-evenly items-center  flex-wrap gap-10  md:flex-row md:w-full    md:gap-5 md:w-[70%] 2xl:w-3/6 duration-300'>
            
                  <li className='w-auto hover:border-l-[1vw] hover:border-[orange] duration-300'>
                    <Link href={"/"}><p className='text-resp text-white w-auto hover:text-3xl hover:font-thin duration-500 font-thin font-[Fraunces] md:text-resp2 lg:text-[1em]'>Shimoks</p></Link> 
                  </li>

                  <li className='w-auto flex items-center hover:border-l-[1vw] hover:border-[orange] duration-300'  onClick={()=> {setshowCart(!showCart)}}>
                  
                       <p  className='text-resp text-white w-auto hover:text-3xl hover:font-thin duration-500 font-thin font-[Fraunces] md:text-resp2 lg:text-[1em]'>Cart</p>
                      <FontAwesomeIcon icon={faCartShopping} size='' />
                        <p suppressHydrationWarning={true} className='bg-[white] text-[black] h-[unset]  text-center rounded-[10vw]  w-[20px] h-[20px]  '>{totalQuantities}</p>
                 
                  </li>

                  <li className='w-auto hover:border-l-[1vw] hover:border-[orange] duration-300'>
                  <Link href={"/abs_nyark/shimoks/#about_us"} scroll={true}><p className='text-resp text-white w-auto hover:text-3xl hover:font-thin duration-500 font-thin font-[Fraunces] md:text-resp2 lg:text-[1em]'>About Us</p></Link>
                  </li>

                  <li className='w-auto hover:border-l-[1vw] hover:border-[orange] duration-300'>
                  <Link href={"/abs_nyark/shimoks/#contact_us"} scroll={true}><p  className='text-resp text-white w-auto hover:text-3xl hover:font-thin duration-500 font-thin font-[Fraunces] md:text-resp2 lg:text-[1em]'>Contact Us</p></Link>
                  </li>

                  <li className='w-auto hover:border-l-[1vw] hover:border-[orange] duration-300'>
                  <Link href={"/"} scroll={true}><p  className='text-resp text-white w-auto hover:text-3xl hover:font-thin duration-500 font-thin font-[Fraunces] md:text-resp2 lg:text-[1em]'>Login</p></Link>
                  </li>


              </ul>


          </>}



  
  </nav>
  </>


  )
}


  


export default Shimoks_Nav