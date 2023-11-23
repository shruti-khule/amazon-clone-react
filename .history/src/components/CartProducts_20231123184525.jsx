import React,{useContext} from 'react'
import styles from'../styles/CartProduct.module.css'
import { StateDispatchContext} from '../Stateprovider';


function CartProducts({id,image,price,rating,title,hidebutton}) {
    const dispatch=useContext(StateDispatchContext);

    const removeFromCart = ()=>{
        dispatch({
            type:'REMOVE_FROM_CART',
            id:id,
            title:title       })

    }
    
    return (
    <div className={styles.cartproducts}>
       <img src={image} className={styles.cartproducts__image} alt=''/>
        <div className={styles.cartproducts__info}>
            <h4 className={styles.cartproducts__title}>{title}</h4>
            <p className={styles.cartproducts__price}>
                <small>€</small>
                <strong>{price}</strong>
            </p>
            <div className={styles.cartproducts__rating}>
               {Array(rating).fill().map((_,i)=>(
                <p>⭐</p>
            ))
            }
            </div>
            {!hideButton && (
            <button onClick={removeFromCart} className={styles.cartproducts__button}>Remove from Basket</button>
            )}
        </div>
      
    </div>
  )
}

export default CartProducts
