import React, { useContext,useRef } from "react";
import CartContext from "../store/CartContextProvider";
import styles from "./MyCart.module.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyCart = () => {
  const { cart, clearCart,deleteItem,addToCart} = useContext(CartContext);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * parseInt(item.qty), 0);
  const qtyref=useRef();

  const placeOrderHandler = async () => {
   
    try {
      const res = await axios.post("https://foodapp-bacckend.onrender.com/placeOrder", {
        cart,
      });
      if (res.status !== 200) {
        toast.error('Cannot Place The Order Right Now  ', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
         
          });
      
      
        throw new Error("cannot place the order");
      }
     
      clearCart();
      // setMsgg(" Order Placed Successfully");
      toast.success('Order Placed Successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
       
        });

      
      
    } catch (err) {
      toast.error('Cannot Place The Order Right Now  ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
    }
  };

  const ClearCartHandler=()=>{
    if(cart.length==0){
      toast.error('Cart Is Empty  ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
        return
    }
   
    clearCart();
    toast.success('Cart Cleared Successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
     
      });
   
  }
  

  return (
    <ul className={styles.cart}>
      <li>My Cart</li>
      {cart.map((item, idx) => {
      
        return (
          <li key={idx}>
            <p className={styles["item-name"]}>
              {item.name}{" "}
            
              <span className={styles["item-qty"]} ref={qtyref} > x {item.qty}  </span>

              <button onClick={()=>{
               
                  addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      desc: item.desc,
      qty: 1
    });
    toast.success('1 Item Added Successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
     
      });
              }}  className="p-1 mx-2">+</button> 
              <button onClick={()=>{
                if(item.qty===1){
                  deleteItem(item.id);
                  toast.success('Item Removed Successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
     
      });
                  return
                }else{
                         addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      desc: item.desc,
      qty: -1
    }
    
    );
    toast.success('1 Item Removed Successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
     
      });
                }
              }} className="p-1 mx-2">-</button> 
             </p>
            <p className={styles["item-desc"]}>{item.desc}</p>
            <p className={styles["item-price"]}>$ {item.price}</p>
            <button onClick={()=>{ deleteItem(item.id);
            }}>Delete</button>
          </li>
        );
      })}
      <li>
        Total:{(Math.round(totalPrice * 100) / 100).toFixed(2)}{" "}
        <span className={styles["place-order-btn"] }>
          <button onClick={ClearCartHandler}>Clear Cart</button>
        </span>
        <span className={styles["place-order-btn"]}>
          <button onClick={placeOrderHandler}>Place Order</button>
        </span>{" "}
      </li>
    </ul>
  );
};

export default MyCart;
