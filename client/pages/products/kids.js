import styles from '../../styles/product_show.module.scss';

const KidsProducts = ({product}) => {

    return (
        <div className={styles.wrapper}>MEN proDUCT
            {/* <div className={styles.left_container}>
                <img className={styles.product_img} src={product.productUrl}/> 
            </div>
            <div className={styles.right_container}>
                <div className={styles.product_info}>
                    <h1 className={styles.product_name}>{product.name}</h1>
                    <div className={styles.product_details}>{product.type}</div>
                    <p className={styles.product_price}>$ {product.price}</p>
                    <p className={styles.product_details}>{product.details}</p>
                    <Button />
                </div>
            </div> */}
        </div>
    )
}

export default KidsProducts;