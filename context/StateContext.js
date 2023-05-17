

import React, {createContext,useContext, useState, useEffect} from 'react';
import axios from 'axios';

const Context =  createContext();

export const StateContext = ({children})=>{

    let cartFromLocalStorage;
    let total_quant_from_lc;
    let delivery_cost_from_lc;
    let delivery_details_from_lc;

    let total_price_from_lc;

    let full_price_from_lc ;


    if(typeof window !== "undefined"){
        cartFromLocalStorage =JSON.parse(localStorage.getItem("cart") || "[]" )
        total_quant_from_lc =JSON.parse(localStorage.getItem("total_quant") || "0")
        delivery_cost_from_lc =JSON.parse(localStorage.getItem("deliv_cost") || "0")
        delivery_details_from_lc =JSON.parse(localStorage.getItem("deliv_details") || "{}")
        total_price_from_lc =JSON.parse(localStorage.getItem("tot_price") || "0")
        full_price_from_lc = JSON.parse(localStorage.getItem("ful_price") || "0")

     }


    
    const [showCart, setshowCart] = useState(false);
    const [cartItems, setcartItems] = useState([]);
    const [totalPrice, settotalPrice] = useState(0);
    const [delivery_details, setDeliveryDetails] = useState({customer_name:"", customer_email:"", customer_mobile:"" , customer_order_code:"", customer_addresslines_1:"",customer_addresslines_2:"",customer_country:"",customer_postal:"", order_date:"",  delivery_date:"" , status:"Order In Progress"})
    const [totalQuantities, settotalQuantities] = useState(0);
    const [qty, setqty] = useState(1);
    const [delivery_cost, setdelivery_cost] = useState(0)
    const [delivery_rate, setDeliveryRate] = useState([])
     const [total_weight, setTotalWeight] = useState(0)
     const [full_price, setFullPrice] = useState(0)


    useEffect(() => {
        const fetchData = async()=>{
            try{
                const res   = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/delivery-prices?populate=*",
                {
                    headers:{
                        Authorization:"bearer " + process.env.NEXT_PUBLIC_SHIMOK_API_TOKEN,
                    },
                });
              
               setDeliveryRate(res.data.data)
            }catch(err){
                    console.log("An Error has occured" + err)
            }
        }

        fetchData();

     
       }, [])
    

    useEffect(() => {
     setcartItems(cartFromLocalStorage)
     settotalQuantities(total_quant_from_lc)
     setdelivery_cost(delivery_cost_from_lc)
     setDeliveryDetails(delivery_details_from_lc)
     settotalPrice(total_price_from_lc)
     setFullPrice(full_price_from_lc)

    
    
    
    }, [])


    
    

   


    const deliveryFunction=()=>{
        
        
        if(cartItems.length > 0){
           setTotalWeight(()=>   cartItems.reduce((accumulator, currentValue)=>accumulator + currentValue.TotalWeight, 0) )
        }
       

        delivery_rate.map((each_del_rate)=>{
            if(total_weight >= each_del_rate.attributes.Min_Weight && total_weight <= each_del_rate.attributes.Max_Weight ){
               if(cartItems.length > 0){
                setdelivery_cost( each_del_rate.attributes.Delivery_Price)
               }else{
                setdelivery_cost(0)
               }
                    
               
                
               }
        })
    }

    
const full_price_calculator =()=>{
  
    setFullPrice(totalPrice + delivery_cost)

}

  

    useEffect(() => {
        
        localStorage.setItem("cart", JSON.stringify(cartItems)  )
        localStorage.setItem("total_quant",  JSON.stringify(totalQuantities) )
        localStorage.setItem("deliv_cost", JSON.stringify(delivery_cost))
        localStorage.setItem("deliv_details", JSON.stringify(delivery_details))

        localStorage.setItem("tot_price", JSON.stringify(totalPrice))
        
        localStorage.setItem("ful_price", JSON.stringify(full_price))
        full_price_calculator()
        deliveryFunction()
        
      
        
 

}, [cartItems, totalQuantities, delivery_cost, totalPrice, total_weight, full_price, delivery_details])









    const onAdd = (product)=>{
            const checkProductInCart = cartItems.find((item)=> item.ProductName == product.ProductName )
           if(!checkProductInCart){
            setcartItems((cartItems) => {return[...cartItems, {...product, TotalPrice: product.Price * product.Quantity, TotalWeight: (product.Weight * product.Quantity) }]})
          
             settotalPrice((prevTotalPrice)=> prevTotalPrice + product.Quantity * product.Price)
           
             settotalQuantities((prevTotalQuantities)=> prevTotalQuantities + product.Quantity)
        }
        

        
     
    }   

    const onRemove = (product)=>{
    setcartItems(cartItems.filter((each_cart_item)=> each_cart_item.ProductName !== product.ProductName))
      
    settotalPrice((prevTotalPrice)=> prevTotalPrice - product.Quantity * product.Price)
           
    settotalQuantities((prevTotalQuantities)=> prevTotalQuantities - product.Quantity)

}


    const handleUpdate=(product, update_type)=>{
            const new_cart_items = cartItems.map(one_cart_item =>{
                if(product.ProductName === one_cart_item.ProductName){
                        if(update_type === "inc"){
                            
                            if(one_cart_item.Quantity >= 1){

                                settotalPrice((prevTotalPrice)=> prevTotalPrice +   one_cart_item.Price)
           
                                settotalQuantities((prevTotalQuantities)=> prevTotalQuantities + 1 )
                            
                                
                                return {...one_cart_item, Quantity: one_cart_item.Quantity + 1, TotalPrice: (one_cart_item.Quantity + 1) * one_cart_item.Price, TotalWeight: one_cart_item.Weight  * (one_cart_item.Quantity +1)}
                                
                                
                            }
                        }else{
                            if(one_cart_item.Quantity  > 1){
                                settotalPrice((prevTotalPrice)=> prevTotalPrice -   one_cart_item.Price)
                                settotalQuantities((prevTotalQuantities)=> prevTotalQuantities - 1 )
                                return {...one_cart_item, Quantity: one_cart_item.Quantity - 1, TotalPrice:(one_cart_item.Quantity -1) * one_cart_item.Price, TotalWeight:one_cart_item.Weight * (one_cart_item.Quantity -1 ) }
                            }   else return {...one_cart_item, Quantity: one_cart_item.Quantity }
                        }                      
                    }else{
                           
                        return one_cart_item
                    } 
                })    
              
                setcartItems(new_cart_items)

                
 
       


             
              
                
        
        
    }

    const incQty =()=>{
        setqty((prevQty)=> prevQty + 1)
    }

    const decQty =()=>{
        setqty((prevQty)=> {
            
            if(prevQty - 1 < 1) return 1
            return prevQty - 1
        } );
    }



    return(
        <Context.Provider value={{showCart,full_price, handleUpdate, onRemove, cartItems, setshowCart, totalPrice, totalQuantities, qty, incQty, decQty, onAdd, delivery_details,setDeliveryDetails, setcartItems, delivery_cost, total_weight}}>
            {children}
        </Context.Provider>
    ) 
}

export const useStateContext = ()=> useContext(Context);