import React, { createContext,useEffect,useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
const CartContext = createContext()

export const CartContextProvider = (props) => {

   
    


    let str=props.cartname;
    // let msgg="mm";
   
       
  
    const intialCart = JSON.parse(window.localStorage.getItem(str) || '[]');
    const [cart, setCart] = useState(intialCart);
   // const intialMsg = JSON.parse(window.localStorage.getItem(msgg) || '[]');
   

    const addToCart = (item) => {
        console.log(item)
      

        const isPresent = cart.some((food) => food.id === item.id);

        if (isPresent) {
          
            const c=cart.map((food) => (food.id === item.id &&(food.qty+item.qty)>0)? { ...food, qty: food.qty + item.qty } : food);
            
             
            console.log(c)
            setCart(c)  
           
        } else {
            setCart((prevState) => {
                return [...prevState, item];

            })
            
        }
       
    }

    const clearCart = () => {
        setCart(() => []);
       
    }
    const deleteItem=(id)=>{
        setCart(() => {
            return cart.filter((food) => food.id !== id );
        })
        
    }
  

    const context = {
    
        cart: cart,
        cartLength: cart.length,
        addToCart: addToCart,
        clearCart:clearCart,
        deleteItem:deleteItem,
      
    }

    useEffect(() => {
        window.localStorage.setItem(str,JSON.stringify(cart));
     //   window.localStorage.setItem(str,JSON.stringify(msg));
    }, [cart]);

    return (
        
        <CartContext.Provider value={context}>
            {props.children}
      </CartContext.Provider>
    
    )
}

export default CartContext;