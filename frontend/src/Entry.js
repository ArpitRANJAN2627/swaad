import React,{useState,Fragment} from 'react';
import App from './App';
import { CartContextProvider } from './store/CartContextProvider';
import  {BrowserRouter} from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import { useAuth0 } from "@auth0/auth0-react";

const E = () => {
const { user, isAuthenticated } = useAuth0();
const [cartname,setName]=useState('cart');

   let f=false;
   if(!isAuthenticated){
    f=false
   }
   if(isAuthenticated&&f){
    
    setName(user.name);
    f=true;
   }

   

  return (
    <Fragment>
      
  <BrowserRouter>
     <CartContextProvider cartname={cartname}>
      <App  />
    </CartContextProvider>
  </BrowserRouter>
    </Fragment>
  )
}

export default E;