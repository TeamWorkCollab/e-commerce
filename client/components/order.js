import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/components/order.module.scss';

function Order({order}) {
    console.log('Order ', order.products);
    const [productList, setProductList] = useState();

    useEffect(() => {
        const getProductDetails = async () => {
            let list = [];
            // let { data } = await axios.get('/api/orders');
            // setOrderList(data)
            for (const id of order.products) {
                let { data } = await axios.get(`/api/products/${id}`);
                list.push(data);
            };
            setProductList(list);
        } 
        getProductDetails();
    }, [])
    console.log('product list ', productList)

    return (
        <div className={styles.container}>
            {/* === Header section === */}
            <div className={styles.header}>
                <div className={styles.order_status}>
                    <p>
                        ORDER
                        <span>{order.status}</span>
                    </p>
                    <p className={styles.header_value}>Date</p>
                </div>
                <div className={styles.order_total}>
                    <p>TOTAL</p>
                    <p className={styles.header_value}>$35</p>
                </div>
                <div className={styles.order_shipto}>
                    <p>SHIP TO</p>
                    <p className={styles.header_value}>Vu Nguyen</p>
                </div>
                <div className={styles.order_number}>
                    <p>ORDER #</p>
                    <p className={styles.header_value}>{order.id}</p>
                </div>
            </div>
            {/* === Body section === */}
            { 
                productList 
                    ?   productList.map((product, index) => (
                        <div>
                        <div className={styles.body}> 
                            <div className={styles.product_image_section}>
                                <img className={styles.img} src={product.productUrl} />
                            </div>
                            <div className={styles.product_detail_section}>
                                <p>{product.details}</p>
                            </div>
                            <div className={styles.product_count}>
                                X 2
                            </div>
                            
                        </div>
                            {productList.length > 1 && index !== productList.length -1 ? <hr className={styles.divider}/> : null}
                        </div>
                        ))
                    :   null
            }
            
        </div>
    )
}

export default Order