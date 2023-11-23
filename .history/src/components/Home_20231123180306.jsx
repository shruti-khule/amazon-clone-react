import React from 'react'
import styles from '../styles/Home.module.css'
import bg_image from '../assets/homepage_bg.jpg'
import Products from './Products'
import img1 from '../assets/kafkaOnTheShore.jpg'

function Home() {
  return (
    <div className={styles.home}>
        <div className={styles.home__container}>
            <img src={bg_image} alt="homepage" className={styles.home__image}/>

            <div className={styles.home__row}> 
            <Products 
            heading="Top Deal"
            title="Amazon Fire TV Stick 4K, watch TV and movies in vibrant 4K Ultra HD, Dolby Atmos support for surround sound (1. Generation)"
            price={34.99}
            image="https://m.media-amazon.com/images/I/31+O9MrU74L._AC_SR400,600_AGcontrast_.jpg"
            rating={5}
            />

            <Products
            heading="Discover Echo Devices"
            title="Echo Dot (5th Gen, 2022 release) | smart speaker with Alexa | Charcoal"
            price={64.99}
            image="https://m.media-amazon.com/images/I/71C3lbbeLsL._AC_UL640_QL65_.jpg"
            rating={4}/>

            </div>

            <div className={styles.home__row}> 
            <Products
            heading="Home Decor"
            title="Dorma Sofa with Sleep Function, Easy Assembly, Modern Design, Upholstered Furniture."
            price={229.49}
            image="https://m.media-amazon.com/images/I/71Euj5MRyML._AC_UL640_QL65_.jpg"
            rating={4}/>

            <Products
            heading="Kitchen & Home"
            title="Storage container set, including Peeler the most stylish way to keep vegetables fresh even longer"
            price={29.99}
            image="https://m.media-amazon.com/images/I/61zk8Bd6feL._AC_SX679_.jpg"
            rating={4}/>

            <Products
            heading="Fashion"
            title="Tommy Hilfiger Damen T-Shirt Hilfiger C-NK Reg Tee mit Rundhalsausschnitt"
            price={49.99}
            image="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/455f899f-9076-4fe7-8ead-194a6faba53d._CR0%2C0%2C1080%2C1080_SX480_SY480_.jpg"
            rating={5}/>

            
            </div>
            <div className={styles.home__row}> 
            <Products 
            
             heading="Best Seller in Books"
             title="Kafka on the Shore"
             price={19.99}
             image={img1}
             rating={5}/>

            
            </div>
        </div>
      
    </div>
  )
}

export default Home
