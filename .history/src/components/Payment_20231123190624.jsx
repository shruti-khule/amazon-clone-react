import React, { useEffect, useState } from 'react'
import styles from '../styles/Payment.module.css'
import { StateContext } from '../Stateprovider';
import { useContext } from 'react'
import CartProducts from './CartProducts';
import { Link, useNavigate } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from '../axios';
import { StateDispatchContext } from '../Stateprovider';
import { db } from '../firebase';

function Payment() {
const {cart,user}=useContext(StateContext);
const dispatch=useContext(StateDispatchContext);


const[error,setError]=useState(null);
const[disable,setDisable]=useState(true);
const[succeeded,setSucceeded]=useState(false);
const[processing,setProcessing]=useState('');
const[clientSecret,setClientSecret]=useState(true);


const stripe = useStripe();
const elements = useElements();
const navigate=useNavigate()


const getTotalPrice=(cart)=>{
    return cart?.reduce((amount,item)=>amount+item.price,0) || 0;
  
  };

useEffect(()=>{
    const getClientSecret=async()=>{
        const response=await axios({
            method:'post',
            url:`/payment/create?total=${Math.round(getTotalPrice(cart)*100)}`,
            
        })
        console.log(response.data);
        setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
  },[cart]);

  console.log("The secret is>>",clientSecret);
  console.log(user)

const handleSubmit=async(e)=>{
    e.preventDefault();
    setProcessing(true);

    const payload=await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:elements.getElement(CardElement),
        },
        

    }).then(({paymentIntent})=>{

    db.collection('users')
    .doc(user?.uid)
    .collection('orders')
    .doc(paymentIntent.id)
    .set({
        cart:cart|| null,
        amount: paymentIntent.amount ||null,
        created:paymentIntent.created || null,
    })

    setSucceeded(true);
    setError(null);
    setProcessing(false);
    navigate('/orders', {replace: true});


    dispatch({
        type:'EMPTY_CART'
    }) 
    
    })
        
}
        

const handleChange=(e)=>{
    setDisable(e.empty);
    setError(e.error? e.error.message:"");

}

return (
    <div className={styles.payment}>
        <div className={styles.payment__container}>
            <h1>
                Checkout (<Link to={"/checkout"} className={styles.payment__link}>
                    {cart?.length}  
                    { ((cart?.length > 1)? ' items':' item')}</Link>)
            </h1>
            <div className={styles.payment__delivery}>
                <h3>Delivery Address</h3>
                <h5>{user?.email}</h5>
                <h6>Mersinweg D</h6>
                <h6>Paderborn, NRW</h6>
                <h6>33100</h6>
            </div>

            <div className={styles.payment__review}>
                <h3>Review Items</h3>
                {cart.map((item)=>(
                    <CartProducts
                    key={item.id}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    title={item.title}
                    id={item.id}
                    />

                ))}

            </div>
            <div className={styles.payment__pay}>
                <h3>Payment Method</h3>
                <form onSubmit={handleSubmit} >
                    <CardElement onChange={handleChange}/>
                    <div className={styles.payment__paytotal}>
                     
                     <CurrencyFormat
                         renderText={(value)=>(
                         <>
                         <p className={styles.payment__orderTotal}>Order Total({cart.length} items): <strong> {value} </strong>
                         </p>
                         <small>
                         <input type='checkbox'></input>  This order contains a gift
                         </small>
                         </>
                            )}
                            decimalScale={2}
                            value={getTotalPrice(cart)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={"€"}
                            />
                     <button disabled={processing || disable || succeeded}
                     className={styles.payment__button}>
                        <span>{processing? <p>Processing</p>:"Buy Now"}</span>

                        </button>


                     </div>
                     {error && <div>{error}</div>}
                </form>
               
            </div>

        </div>
      
    </div>
  )
}

export default Payment;