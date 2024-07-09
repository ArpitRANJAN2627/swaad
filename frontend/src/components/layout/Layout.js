import React,{Fragment, useContext, useEffect} from 'react'
import MAinNav from './MAinNav'
import { useAuth0 } from "@auth0/auth0-react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = (props) => {
  const { loginWithRedirect } = useAuth0();
  const { logout,isAuthenticated,user } = useAuth0();
  
  
  return (
    <Fragment>
        <header>

         <MAinNav/>
     
       
        </header>
        
        <main style={{marginTop:'10.5rem'}}>
          
       
        

     
           {props.children}
        </main>
        <footer>
       {isAuthenticated && <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"


/>}
        </footer>
    </Fragment>
  )
}

export default Layout