
import './App.css';
import Layout from './components/layout/Layout'
import {Routes,Route} from 'react-router-dom'
import AllFood from  './pages/AllFood'
import MyCart from './pages/MyCart'
function App() {
  return (
   
     <Layout>
      <Routes>
        <Route  path='/' element={<AllFood/>}></Route>
        <Route  path='/mycart' element={<MyCart/>}></Route>
      </Routes>
     </Layout>
  
  );
}

export default App;
