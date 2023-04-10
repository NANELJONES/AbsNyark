import React from 'react'

const Testimonials = () => {
const testimonials =[
    {title:"“Aside from helping keep employees engaged, motivated, and proactive, reviews are ideal for collecting actionable feedback and .It’s a way to show them that you’re paying attention and that you care about”",
    stars:4,
    image:"/testimonials/image1.png",
    witness_name:"Jojo Jones" 
},
    {title:"“Aside from helping keep employees engaged, motivated, and proactive, reviews are ideal for collecting actionable feedback and .It’s a way to show them that you’re paying attention and that you care about”",
    stars:5,
    image:"/testimonials/image1.png",
    witness_name:"Abigail Nyarko" 
    },
    {title:"“Aside from helping keep employees engaged, motivated, and proactive, reviews are ideal for collecting actionable feedback and .It’s a way to show them that you’re paying attention and that you care about”",
    stars:4,
    image:"/testimonials/image1.png",
    witness_name:"Kevin Addington" 
    },
    {title:"“Aside from helping keep employees engaged, motivated, and proactive, reviews are ideal for collecting actionable feedback and .It’s a way to show them that you’re paying attention and that you care about”",
    stars:4,
    image:"/testimonials/image1.png",
    witness_name:"Jeremy Kely" 
    },
]

  return (
    <div className='font-[Fraunces] mt-[5vw] 2xl:mt-[90px]'>
        <h1 className='text-center   leading-[83.9%]  md:text-[7vw] xl:text-[5vw] 2xl:text-[100px] text-[10vw] text-[#4B4B4B] w-full font-bold'> TESTIMONIALS </h1>
        <br/>
        <p className='text-center  text-sm md:text-lg  text-[#4B4B4B] w-[50%] mx-auto md:w-[60%]  xl:tracking-[0.2em] font-bld 2xl:w-[40%]'>Let’s listen to some Testimonies from various customers and consumers of Shimorks.  </p>   
        <br/>
        <div className='flex font-[Montserrat] font-regular  items-center justify-center items-center flex-wrap gap-[1vw]   '>
            {testimonials.map((testimonial, index)=>{
                return  <div key={index}  className="text-center w-[45vw] min-w-[400px] md:w-[20vw] xl:w-[30vw] 2xl:w-[200px] bg-secondary flex flex-col justify-between items-center py-[5vw] 2xl:py-[50px]" >
                    <p className='w-[70%] leading-[6vw] md:leading-[30px]'>{testimonial.title}</p>
                    <br/>
                    <br/>
                    <img src = {testimonial.image} className="w-[90px] h-[90px] rounded-full border-[2px] border-[white] object-cover "/>
                   <br/>
                    <p className='italic'>{testimonial.witness_name}</p>
                    
                     </div>
            })}
        </div>
    </div>
  )
}

export default Testimonials