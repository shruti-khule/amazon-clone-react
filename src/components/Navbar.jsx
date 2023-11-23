import styles from '../styles/Navbar.module.css'
import amazon_logo from '../assets/amazon-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { StateContext} from '../Stateprovider';
import React,{useContext} from 'react'
import { auth } from '../firebase';



function Navbar() {
const {cart,user}=useContext(StateContext);

const handleSignIn=()=>{
  if(user){
   auth.signOut();
  }

}

  return (
    <div className={styles.nav}>
      <Link to="/">
        <img src={amazon_logo} alt="amazon_logo" className={styles.nav__logo} />
      </Link>
      
      <div className={styles.nav__search}>
        <input type="text" className={styles.nav__searchInput} />
        <SearchIcon className={styles.nav__searchIcon}/>
      </div>
      <div className={styles.nav__options}>
      <Link className={styles.nav__optionlink} to={!user && "/login"}>
        <div className={styles.nav__option} onClick={handleSignIn}>
          <span className={styles.nav__optionLineOne}>Hello {!user? 'Guest':user?.email}</span>
          <span className={styles.nav__optionLineTwo}>{user? 'Sign Out':'Sign In'}</span>
        </div>
        </Link>
        <Link to="/orders" className={styles.nav__optionlink}>
        <div className={styles.nav__option}>
        <span className={styles.nav__optionLineOne}>Returns</span>
          <span className={styles.nav__optionLineTwo}>& Orders</span>
        </div>
        </Link>
        <div className={styles.nav__option}>
        <span className={styles.nav__optionLineOne}>Your</span>
          <span className={styles.nav__optionLineTwo}>Prime</span>
        </div>
        <Link to="/checkout" className={styles.nav__optionlink}>
        <div className={styles.nav__basket}>
          <ShoppingCartIcon/>
          <span className={styles.nav__optionLineTwo +' '+ styles.nav__basketCount}>{cart?.length}</span>
        </div>
        </Link>

      </div>
      
    </div>
  )
}

export default Navbar
