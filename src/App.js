import './App.css';
import { BrowserRouter as Router ,Route,  Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import Login from './components/Login';
import { auth } from '../src/firebase';
import { useContext,useEffect } from 'react';
import { StateDispatchContext } from './Stateprovider';


function App() {
  const dispatch=useContext(StateDispatchContext);

  useEffect(() =>{
  auth.onAuthStateChanged(authUser=>{
    console.log('The user is >>>', authUser);
    if (authUser){
      dispatch({
        type:'SET_USER',
        user:authUser
      })
    }else
    {
      dispatch({
        type:'SET_USER',
        user:null,
    })
    }

    }
  )
  },[dispatch])
  
  return (

    <div className="App">

      <Router>

      <Routes>

      
        <Route path="/" element={<><Navbar/> <Home/><Footer/></>}></Route>
        <Route path="/checkout" element={<><Navbar/> <Checkout/><Footer/></>}></Route>
        <Route path="/login" element={<Login/>}></Route>


      </Routes>
    
    </Router>

      
    </div>

  );
}

export default App;
