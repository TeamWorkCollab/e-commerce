
import styles from '../styles/components/cart_item.module.scss';
import Router from 'next/router'; 

const CartItem = ({productDetails}) => {
    
    return (
        <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.img_container}>
                <img className={styles.img} src={productDetails.productUrl}/>
            </div>
            <div className={styles.product_info}>
                <span>{productDetails.name}</span> <span>x {productDetails.count}</span>
                {/* <p className={styles.size}>{productDetails.size.map(size => size)}</p> */}
                <div className={styles.count}>
                    <button className={styles.button}>-</button>
                    <div className={styles.number}>{productDetails.count}</div>
                    <button className={styles.button}>+</button>
                </div>
            </div>
            <div className={styles.price}>
                ${productDetails.price}
            </div>
        </div>
        </div>
       
    )
}

export default CartItem;