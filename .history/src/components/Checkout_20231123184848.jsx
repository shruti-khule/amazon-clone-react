import React ,{useContext} from 'react'
import styles from '../styles/Checkout.module.css'
import Subtotal from './Subtotal'
import image_ad from '../assets/amazon__ad.jpeg'
import CartProducts from './CartProducts'
import { StateContext } from '../Stateprovider';

function Checkout() {
  const {cart,user}=useContext(StateContext);


  return (
    <div className={styles.checkout}>
         <img className={styles.checkout__ad} src={image_ad} alt=''></img>
        <div className={styles.checkout__wrapper}>
            <div className={styles.checkout__items}>
              <h4>Hello, {user?.email}</h4>
                <h2 className={styles.checkout__title}>Your Shopping Basket</h2>
                 {cart.map(item=>(
                  <CartProducts
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  title={item.title}
                  id={item.id}
                  />

              ))}

            </div>
        <div className={styles.checkout__subtotal}>
            <Subtotal/>
        </div>
        </div>
      
    </div>
  )
}

export default Checkout
