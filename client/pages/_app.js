import { useState, useEffect } from 'react';
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import buildClient from "../api/build-client";
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import CartItemContext from "../context/cartItemContext";

const AppComponent = ({ Component, pageProps, currentUser }) => {
    const [cartItemCount, setCartItemCount] = useState(0);
    const updateCartItemCount = (count) => {
        setCartItemCount(cartItemCount + count);
    }

    if (typeof window !== 'undefined') {
        let cart = JSON.parse(sessionStorage.getItem('cart'));
        if (cart !== null) {
            let count = cart.reduce((preValue, currentValue) => preValue + currentValue.count, 0);
            if (count > cartItemCount) setCartItemCount(count);
        }  
    }


    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <CartItemContext.Provider value={{ cartItemCount: cartItemCount, updateCartItemCount: updateCartItemCount }}>
                <NavBar currentUser={currentUser} />
                <Component {...pageProps} currentUser={currentUser} />
            </CartItemContext.Provider>  
            <Footer />
        </div>
    );
}
    
AppComponent.getInitialProps = async (appContext) => {

    const client = buildClient(appContext.ctx);

    let pageProps = {};

    try {
        const res = await client.get('/api/users/currentuser');

        if( appContext.Component.getInitialProps) {
            pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, res.data.currentUser);
        }
        
        return {
            pageProps,
            ...res.data
        }
    } catch(err) {
        console.log(err)
        return {}
    }
};

export default AppComponent;