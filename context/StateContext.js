import React, {createContext,useContext, useState, useEffect} from 'react'

const Context =  createContext();

export const StateContext = ({children})=>{
    const [showCart, setshowCart] = useState(false);
    const [cartItems, setcartItems] = useState([]);
    const [totalPrice, settotalPrice] = useState(0);

    const [totalQuantities, settotalQuantities] = useState(0);
    const [qty, setqty] = useState(1);

    const onAdd = (product)=>{
  
        
        
            const checkProductInCart = cartItems.find((item)=> item.ProductName == product.ProductName )
           if(!checkProductInCart){
            setcartItems((cartItems) => {return[...cartItems, {...product, TotalPrice: product.Price * product.Quantity }]})
          
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
                            console.log(one_cart_item)
                            if(one_cart_item.Quantity >= 1){

                                settotalPrice((prevTotalPrice)=> prevTotalPrice +   one_cart_item.Price)
           
                                settotalQuantities((prevTotalQuantities)=> prevTotalQuantities + 1 )
                            
                                
                                return {...one_cart_item, Quantity: one_cart_item.Quantity + 1, TotalPrice: (one_cart_item.Quantity + 1) * one_cart_item.Price}
                                
                                
                            }
                        }else{
                            if(one_cart_item.Quantity  > 1){
                                settotalPrice((prevTotalPrice)=> prevTotalPrice -   one_cart_item.Price)
           
                                settotalQuantities((prevTotalQuantities)=> prevTotalQuantities - 1 )
                                

                                return {...one_cart_item, Quantity: one_cart_item.Quantity - 1, TotalPrice:(one_cart_item.Quantity -1) * one_cart_item.Price}
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
        <Context.Provider value={{showCart, handleUpdate, onRemove, cartItems, setshowCart, totalPrice, totalQuantities, qty, incQty, decQty, onAdd}}>
            {children}
        </Context.Provider>
    ) 
}

export const useStateContext = ()=> useContext(Context);