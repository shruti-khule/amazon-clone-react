import React, { useState } from 'react'
import styles from'../styles/Login.module.css'
import { Link, useNavigate} from 'react-router-dom'
import { auth } from '../firebase';


function Login() {
    const navigate =useNavigate('')
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signIn=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password).then(
            (auth) =>{
                console.log(auth);}
        )
        .catch(error => alert(error.message))
        if(auth){
            console.log("till navigate")
           navigate("/");
        }
    }

    const register=(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password).then(
            (auth) =>{
                console.log(auth);}
        )
        .catch(error => alert(error.message))
    }

  return (

    <div className={styles.login__container}>
        <Link to="/">
            <img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' alt='amazon__logo' className={styles.login__logo}></img>
        </Link>
        <div >

            <form className={styles.login__form}>
                
                <h1>Sign In</h1>

                <h5>Email</h5>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)}></input>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
               <button className={styles.login__button} onClick={signIn}>Sign In </button>

               <span>By continuing, you agree to 
                Amazon clone's Conditions of Use and Privacy Notice.</span>

            </form>
            <h6>New to Amazon?</h6>
            
            <button className={styles.login__newAccount} onClick={register}>Create your Amazon Account</button>


        </div>
    </div>
  )
}

export default Login
