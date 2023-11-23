import React from 'react'
import styles from '../styles/Footer.module.css'

function Footer() {
   
  return (
    <div className={styles.footer}>
       
        <div className={styles.footer__link} onClick={()=>{window.scrollTo({top:0,left:0, behavior:'smooth'})}}>
            <h5 className={styles.footer__linkText}>Back to top</h5>

        </div>
        <div className={styles.footer__info}>
            <div>
                <h6>Get to Know Us</h6>
                <span>Careers</span>
                <span>Press Releases</span>
                <span>About us</span>
                <span>Amazon Science</span>

            </div>
            <div>
                <h6>Make Money With Us</h6>
                <span>Sell on Amazon</span>
                <span>Sell on Amazon Business</span>
                <span>Sell on Amazon Handmade</span>
                <span>Associates Programme</span>
                <span>Protect and Build your Brand</span>
                <span>Advertise your Products</span>
                <span>Independently Publish with us</span>
                <span>Amazon Pay</span>
                <span>Fulfilment by Amazon</span>
                <span>Host on Amazon Hub</span>




                </div>
            <div>
                <h6>Amazon Pament Methods</h6>
                 <span>SShop with Points</span>
                <span>Instalments by Barcays</span>
                <span>Amazon Business Card</span>
                <span>Gift Cards</span>
                <span>Monthly invoice</span>
                <span>Top up your Account</span>
            </div>

            <div>
                <h6>Let us Help You</h6>
                <span>COVID-19 and Amazon</span>
                <span>Track Packages or view Orders</span>
                <span>Delivery rates & Ploicies</span>
                <span>Amazon Prime</span>
                <span>Returns & Replacements</span>
                <span>Recycling</span>
                <span>Cancel Contracts</span>

                </div>


        </div>
        
    </div>
  )
}

export default Footer
