
import { useState } from 'react';
import styles from '../styles/components/cart_item.module.scss';

const CartItem = ({cartItem, total, updateTotal, updateCart}) => {

    const [count, setCount] = useState(cartItem.count);

    const onMinus = () => {
        let currentCart = JSON.parse(sessionStorage.getItem('cart'));
        let index = currentCart.findIndex(x => x.id === cartItem.id);
        if (index > -1) {
            currentCart[index].count--;
            sessionStorage.setItem('cart', JSON.stringify(currentCart));
            updateCart(currentCart)
        }
        setCount(count -1);
    }

    const onPlus = () => {
        let currentCart = JSON.parse(sessionStorage.getItem('cart'));
        let index = currentCart.findIndex(x => x.id === cartItem.id);
        if (index > -1) {
            currentCart[index].count++;
            sessionStorage.setItem('cart', JSON.stringify(currentCart));
            updateCart(currentCart)
        }
        setCount(count + 1);
    }


    return (
        <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.img_container}>
                <img className={styles.img} src={cartItem.productUrl}/>
            </div>
            <div className={styles.product_info}>
                <span>{cartItem.name}</span> 
                {/* <p className={styles.size}>{cartItem.size.map(size => size)}</p> */}
                <div className={styles.count}>
                    <button className={styles.button} onClick={onMinus}>-</button>
                    <div className={styles.number}>{count}</div>
                    <button className={styles.button} onClick={onPlus}>+</button>
                </div>
            </div>
            <div className={styles.price}>
                ${cartItem.price * count}
            </div>
        </div>
        </div>
       
    )
}

export default CartItem;