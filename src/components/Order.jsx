import React  from 'react'
import moment from 'moment'
import CartProducts from './CartProducts'
import CurrencyFormat from 'react-currency-format';
import styles from '../styles/Order.module.css'


function Order({order}) {

  return (
    <div className={styles.order}>
        <p>{moment.unix(order.data.created).format("MM/DD/YYYY, h:mma")}</p>
        <p >
        <small className={styles.order_id}>{order.id}</small>
        </p>
            {order.data.cart?.map(item=>(
            <CartProducts
                image={item.image}
                price={item.price}
                rating={item.rating}
                title={item.title}
                id={item.id}
                hideButton
            />
            ))}
               <CurrencyFormat
         renderText={(value)=>(
            <h3 className={styles.order_total}>Order Total : {value}</h3>
            )}
          decimalScale={2}
          value={order.data.amount/100}
          displayType={'text'}
          thousandSeparator={true}
          prefix={"€"}
        />
    </div>
  )
}

export default Order
