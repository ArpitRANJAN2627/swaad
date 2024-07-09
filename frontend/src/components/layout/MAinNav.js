
import { Link } from 'react-router-dom';
import styles from './MainNav.module.css';
import CartContext from '../../store/CartContextProvider';
import { useContext, useState ,useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MAinNav() {
  const {cartLength}=useContext(CartContext)
  const { loginWithRedirect } = useAuth0();
  const { logout,isAuthenticated,user } = useAuth0();
  
 
   
   
  useEffect(()=>{
     if(isAuthenticated){
      toast.success('Logged  In Successfully', {
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
    
  },[user])
 

  return (

    
    
    <nav className={styles.nav}>
    <ul>
        <li><Link to="/"><i class="fa-solid fa-burger"></i> SWAAD</Link></li>
        <li><Link to="/mycart"><i class="fa-solid fa-cart-shopping"></i> Cart{isAuthenticated&&cartLength!==0&&<sup>{cartLength}</sup>}</Link></li>
        

        {!isAuthenticated&& <li><button onClick={() =>{  loginWithRedirect() }}>Log In</button></li>}
       { isAuthenticated&&  <li> <button onClick={() =>{  logout({ logoutParams: { returnTo: window.location.origin }, })
        toast.success('Logged out Successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
     
      });
     
       }}>
      {user.name}
    </button></li>}


  
    
        
    </ul>
    
   
</nav>




  );
}

export default MAinNav;