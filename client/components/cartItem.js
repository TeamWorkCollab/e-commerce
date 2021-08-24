
import styles from '../styles/components/cart_item.module.scss';
import Router from 'next/router'; 

const CartItem = ({cartItem}) => {
    
    return (
        <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.img_container}>
                <img className={styles.img} src={cartItem.productUrl}/>
            </div>
            <div className={styles.product_info}>
                <span>{cartItem.name}</span> <span>x {cartItem.count}</span>
                {/* <p className={styles.size}>{cartItem.size.map(size => size)}</p> */}
                <div className={styles.count}>
                    <button className={styles.button}>-</button>
                    <div className={styles.number}>{cartItem.count}</div>
                    <button className={styles.button}>+</button>
                </div>
            </div>
            <div className={styles.price}>
                ${cartItem.price}
            </div>
        </div>
        </div>
       
    )
}

export default CartItem;