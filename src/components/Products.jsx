import React, { useContext } from 'react'
import styles from '../styles/Products.module.css'
import { StateDispatchContext} from '../Stateprovider';

function Products({id,heading,title,image,price,rating}) {
    const dispatch=useContext(StateDispatchContext);

    
    const addToCart=()=>{
         dispatch({
            type:'ADD_TO_CART',
            item:{
                id:id,
               heading:heading,
               title:title,
               image:image,
               price:price,
               rating:rating,
                
          },
     });

    }

  return (
    <div className={styles.product}>
        <h2 className={styles.product__heading}>{heading}</h2>

        <img src={image} alt="" className={styles.product__image} />
        <div className={styles.product__info}> 
        <p>{title}</p>
        <p className={styles.product__price}>
            <small>€</small>
            <strong>{price}</strong>
        </p>
        <div className={styles.product__rating}>
        
            {Array(rating).fill().map((_,i)=>(
                <p>⭐</p>
            ))
            }
        
            </div>
        </div>
        <button className={styles.product__button} onClick={addToCart}>Add to Basket</button>
    </div>
  )
}

export default Products
