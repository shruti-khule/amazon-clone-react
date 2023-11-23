import React, { useState,useContext} from 'react'
import { useEffect } from 'react';
import { StateContext } from '../Stateprovider';
import { db } from '../firebase';
import Order from './Order';
import styles from '../styles/Orders.module.css'



function Orders() {
  const {cart,user}=useContext(StateContext);
  const [orders,setOrders]=useState([]);

    useEffect(()=>{
        console.log('user is',user)
        console.log(user?.uid)
        if(user){
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot((snapshot) => {
                setOrders(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                })))
        })
    } else {
        setOrders([])
    }

           

    },[user])

  return (
    <div className={styles.orders}>
        <h1>Your orders</h1>
        <div>
            {orders?.map(order=>(

                <Order order={order}/>
                ))}
    </div>
    </div>
  )
}

export default Orders
