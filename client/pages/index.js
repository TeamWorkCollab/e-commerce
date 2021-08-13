import React from 'react';
//import buildClient from '../api/build-client';
// import HomeNav from '../components/navbar';
import styles from '../styles/home.module.scss';


const Landing =  ({ currentUser, products }) => {
    console.log('props in landing', products)
    const productList = products ? (products.map(product => {
        return (
            <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.details}</td>
            </tr>
        )
    })) : null;

    return (
        <div className={styles.landing}>
            {/* <HomeNav /> */}
            <h1>Landing Page</h1>
            <div className={styles.test}>TEST ME IN SASS</div>
            {/* {currentUser ? <p>You are signed in</p> : <p>You're not sign in</p>} */}
            {products ? 
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList}
                    </tbody>
                </table>
            : null
            }
        </div>
        
    );
};

Landing.getInitialProps = async (context, client, currentUser) => {
    //console.log('CLIENT IN INEDEX ', client)
    console.log('GET INITIAL CALL FROM INDEX ')
    const { data } = await client.get('/api/products');
    console.log('data ', data)
    return { products: data };
    // return {};
}

export default Landing;