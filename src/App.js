import React ,{useEffect} from "react";
import Header from './Header.js'
import './App.css';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login.js";
import Checkout from "./Checkout"; 
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise=loadStripe(
    'pk_test_51ImUNkSBS17XGbgmrQvmz1yOWsEuEZlB8QobOBa8TIW5cFsweL3OUw6ZaNdbtnKtpf8LE1V9xi7yMKVIQQF9XwlM00QzxfJ5yT');

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() =>{
    // Will only run once when the app component loads...
    
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>',authUser);

      if (authUser) {
        // The user just logged in /the user was logged in
      dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
      else{
        // The User is logged out
        dispatch({
          type:'SET_USER',
          user:null,
        });
      }
    })
  },[])
   
  return (
    <Router>
    <div className="app">
      {/* Header */}
      {/*Home */}
      <Switch>
        <Route path='/orders'>
          <Header/>
          <Orders/>
        </Route>
      <Route path="/login">
         <Login />
      </Route>
      <route path="/Checkout">
         <Header/>
         <Checkout/>
      </route>
      <Route path="/Payment">
        <Header/>
        <Elements stripe={promise}>
           <Payment/>
        </Elements>
       
        
        </Route>
      <Route path="/">
      <Header/> 
      <Home />
      </Route>
      </Switch>
      </div>
    </Router>
      
  );
}

export default App;
