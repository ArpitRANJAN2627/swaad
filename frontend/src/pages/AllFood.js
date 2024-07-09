import React, { useEffect,useState, Fragment} from 'react';
import axios from 'axios';
import FoodList from '../components/FoodList/FoodList';
import Spinner from '../components/Spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllFood = () => {
    
    const [foods,setFoods]=useState([]);
    
    useEffect(() => {
      
        async function getfoods(){
            try {
                const res = await axios.get('https://foodapp-bacckend.onrender.com/allfoods');
                
                if (res.status !== 200) {
                    throw new Error('something went wrong');
                }
               setFoods(() => res.data);
               
            }
            catch (err) {
                toast.error('Cannot Get Foods Right Now  ', {
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
        
        }
        getfoods();
      

    },[]);
    
   
    if(foods.length===0){
        return <Spinner/>
    }

  return (
    <Fragment>
       <FoodList foods={foods} />
    </Fragment>
  )
}

export default AllFood;