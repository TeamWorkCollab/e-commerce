import { useEffect, useState } from 'react';
import styles from '../styles/components/sidebar.module.scss';
import CartItem from './cartItem';

const Sidebar = ({ open, onClose, width, zIndex, cart }) => {
    const [cartItems, setCartItems] = useState([cart]);
    useEffect(() => {
        const storage = JSON.parse(window.sessionStorage.getItem('cart'));
        let sortStorage = [];

        if (storage) {
            storage.forEach(item => {
                let index = sortStorage.findIndex(x => x.id === item.id);
                if (index > -1) {
                    sortStorage[index].count++;
                } else {
                    sortStorage.push({...item, count: 1});
                }
      
            })
            setCartItems(sortStorage)
        }
    }, [])
    
    console.log('sidebar cart ', cartItems);
    const onClick = () => {
        onClose()
    }

    return (
        <>
            {
                open 
                    ?   <div className={styles.container} style={{width: width}} >
                            <div className={styles.top}>
                                <div className={styles.sidebar_top_row}>
                                    <span className={styles.sidebar_title}>Cart</span>
                                    <button className={styles.sidebar_close_button} onClick={onClick}>x</button>
                                </div>
                               
                                <div className={styles.sidebar_cart_items}>
                                    {cart.length > 0 
                                        ?   cart.map(item => (
                                                <CartItem key={item.id} cartItem={item} />
                                            )) 
                                        :   cartItems.map(item => (
                                                <CartItem  key={item.id} cartItem={item} />
                                            ))
                                    }
                                </div>
                            </div>
                            <div className={styles.bottom}>
                                <div className={styles.total}>
                                    <p>subtotal</p>
                                    <p>$ 500</p>
                                </div>
                                <p className={styles.shipping_note}>Shipping and discount coders are added at checkout</p>
                                <button className={styles.checkout_button}>
                                    Checkout
                                </button>

                            </div>
                        </div>
                    :   <div style={{width: 0}}/>
            }
        </>
    )
}

export default Sidebar;