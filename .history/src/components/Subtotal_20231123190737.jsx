import React,{useContext} from 'react'
import styles from'../styles/Subtotal.module.css'
import CurrencyFormat from 'react-currency-format';
import { StateContext } from '../Stateprovider';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
const {cart}=useContext(StateContext);

const navigate =useNavigate('')


const getTotalPrice=(cart)=>{
  return cart?.reduce((amount,item)=>amount+item.price,0) || 0;

}

  return (
    
    <div className={styles.subtotal}>
        
        <CurrencyFormat
         renderText={(value)=>(
            <>
            <p>Subtotal({cart.length} items): <strong> {value} </strong>
            </p>
            
            <small className={styles.subtotal__gift}>
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
       <button className={styles.subtotal__button} onClick={()=>navigate("/payment")}>Proceed to Checkout</button>
        
      
    </div>
  )
}

export default Subtotal
