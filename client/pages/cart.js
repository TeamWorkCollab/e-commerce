import { useEffect, useState } from 'react';
import styles from '../styles/cart.module.scss';
import ProductBag from '../components/productBag';
import CustomButton from '../components/customButton';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const storage = JSON.parse(window.sessionStorage.getItem('cart'));
        setCartItems(storage)
        }, [])
    
    console.log('cart ', cartItems);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.payment}>
                    <h1>E-Commerce</h1>
                    <div style={{margin: '0.5rem 0'}}>
                        <span>
                            Information &nbsp;
                        </span>
                        <span>
                            > Shipping &nbsp;
                        </span>
                        <span>
                            > Payment
                        </span>
                    </div>
                    <form className={styles.form}>
                        <label className={styles.label}>Contact Information</label>
                        <input className={styles.input} style={{width: '100%'}} type="text" placeholder="Email"/>
            
                        <label className={styles.label}>Shipping address</label>
                        <input className={styles.input} style={{width: '47.5%'}} type="text" type="text" placeholder="First name"/>
                        <input className={styles.input} style={{width: '47.5%', float: 'right'}} type="text" type="text" placeholder="Last name"/>
                        <input className={styles.input} style={{width: '100%'}} type="text" type="text" placeholder="Address"/>
                        <input className={styles.input} style={{width: '100%'}} type="text" placeholder="Apartment, suit, etc (optional)"/>
                        <input className={styles.input} style={{width: '100%'}} type="text" placeholder="City"/>
                        <input className={styles.input} style={{width: '30%'}} type="select" type="text" placeholder="Country"/>
                        <input className={styles.input} style={{width: '30%', marginLeft: '5%', marginRight: '5%'}} type="select" type="text" placeholder="State"/>
                        <input className={styles.input} style={{width: '30%'}} type="text" type="text" placeholder="ZIP code"/>
                        <input className={styles.input} style={{width: '100%'}} type="text" placeholder="Phone"/>
                    </form>
                    <div style={{marginTop: '5%'}}>
                        <CustomButton text={'Continue shipping'} bgColor={'black'} color={'white'} />
                        <CustomButton text={'Cancel'} bgColor={'#c8c8c8'} color={'white'} mLeft={'5%'} />
                    </div>
                    
                </div>

                <div className={styles.bag}>
                    <div>
                        Your shopping bag
                        {/* <ProductBag /> */}
                        { cartItems 
                            ? cartItems.map(item => <ProductBag productDetails={item}/>)
                            : null
                        }
                    </div>
                    <hr />
                    <div className={styles.inline_form}>
                        <input  className={styles.input} style={{width: '60%', margin: '0 0'}} type="text" placeholder="Gift card or discount code"/>
                        {/* <button style={{foat: 'right'}}>
                            Apply
                        </button> */}
                        <CustomButton color={'white'} bgColor={'#c8c8c8'} text={'apply'}/>
                    </div>
                    <hr />
                    <div className={styles.inline_form}>
                        <span>Subtotal</span>
                        <span>$ {cartItems ? (cartItems.reduce((preValue, currentValue) => preValue + currentValue.price, 0)) : 0}</span>
                    </div>
                    <div className={styles.inline_form}>
                        <span>Shipping</span>
                        <span>Calculate at next step</span>
                    </div>
                    <hr />
                    <div className={styles.inline_form}>
                        <span>Total</span>
                        <span>USD $ {cartItems ? (cartItems.reduce((preValue, currentValue) => preValue + currentValue.price, 0)) : 0}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cart;