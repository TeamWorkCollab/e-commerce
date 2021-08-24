import styles from '../styles/products.module.scss';
import Product from '../components/product';

const Products = ({ currentUser, products }) => {
    // const renderProducts = (products) => {
    //     console.log('PRODUCT IN FUC ')
    //     if (products.length > 0) {
    //         console.log('RENDER')
    //         return (
    //             products.map(product => (
    //                 <Product productDetails={product} key={product.id}/>
    //             ))
    //         )
    //     }
    // }

    return (
        <div className={styles.wrapper}>
            <div className={styles.contain}>
                <nav className={styles.sidebar}>
                    <ul className={styles.side_nav}>
                        <li className={styles.side_nav_menu_item}>
                            <a href='/products' className={styles.side_nav_menu_item_link}>Shop All</a>
                            {/* <ul className={styles.side_nav_sub_menu}>
                                <li className={styles.side_nav_sub_menu_item}>
                                    <a href='#' className={styles.side_nav_link}>Polo</a>
                                </li>
                                <li className={styles.side_nav_sub_menu_item}>
                                    <a href='#' className={styles.side_nav_link}>Shirt</a>
                                </li>
                            </ul> */}
                        </li>
                        <li className={styles.side_nav_menu_item}>
                            <a href='/products/men' className={styles.side_nav_menu_item_link}>Men</a>
                            <ul className={styles.side_nav_sub_menu}>
                                <li className={styles.side_nav_sub_menu_item}>
                                    <a href='/products/men/top' className={styles.side_nav_sub_menu_item_link}>Top</a>
                                </li>
                                <li className={styles.side_nav_sub_menu_item}>
                                    <a href='/products/men/bottom' className={styles.side_nav_sub_menu_item_link}>Bottom</a>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.side_nav_item}>
                            <a href='/products/women' className={styles.side_nav_menu_item_link}>Women</a>
                            <ul className={styles.side_nav_sub_menu}>
                                <li className={styles.side_nav_sub_menu_item}>
                                    <a href='/products/women/top' className={styles.side_nav_sub_menu_item_link}>Top</a>
                                </li>
                                <li className={styles.side_nav_sub_menu_item}>
                                    <a href='/products/women/bottom' className={styles.side_nav_sub_menu_item_link}>Bottom</a>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.side_nav_item}>
                            <a href='/products/kids' className={styles.side_nav_menu_item_link}>Kids</a>
                            <ul className={styles.side_nav_sub_menu}>
                                <li className={styles.side_nav_sub_menu_item}>
                                    <a href='/products/kids/boys' className={styles.side_nav_sub_menu_item_link}>Boys</a>
                                </li>
                                <li className={styles.side_nav_sub_menu_item}>
                                    <a href='/products/kids/girls' className={styles.side_nav_sub_menu_item_link}>Girls</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <main className={styles.product_view}>
                    {products.length > 0 
                        ? products.map(product => (
                            <Product productDetails={product} key={product.id}/>
                        ))
                        : null
                    }
                    {/* {renderProducts()} */}
                </main>
            </div>

        </div>
    )
};

Products.getInitialProps = async (context, client, currentUser) => {
    console.log('CLIENT IN IN PRODUCTDEX ', client)
    console.log('GET INITIAL CALL FROM PRODUCTS PAGE ')
    try {
        const { data } = await client.get('/api/products');
        console.log('data ', data);
        return { products: data };
    } catch (err) {
        console.log(err);
        return {};
    }
}

export default Products;