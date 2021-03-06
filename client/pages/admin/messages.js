import { useState, useEffect } from 'react';
import styles from '../../styles/admin_pages/messages.module.scss';
import SidebarNav from '../../components/sidebarNav';

function Messages() {
    // const [displayProducts, setDisplayProducts] = useState(false);
    // const [displayOrders, setDisplayOrders] = useState(false);

    return (
        <div className={styles.wrapper}>
            {/*=========== Sidebar ========== */}
            <div className={styles.sidebar}>
                <SidebarNav />
                {/* <div className={styles.sidebar_items} onClick={onProductsButtonClick}>
                    Products
                </div>
                <div className={styles.sidebar_items} onClick={onOrdersButtonClick}>
                    Orders
                </div> */}
            </div>
            {/*=========== Main ========== */}
            <div className={styles.main}>
                <div className={styles.main_container}>
                    {/* MAIN SECTION
                    { displayProducts && <ProductList /> }
                    { displayOrders && <OrderList /> } */}
                    Messages Pages
                </div>
            </div>
        </div>
    )
}

export default Messages
