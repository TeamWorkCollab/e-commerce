import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import buildClient from "../api/build-client";
import NavBar from '../components/navbar';

const AppComponent = ({ Component, pageProps, currentUser }) => {
    
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <NavBar currentUser={currentUser} />
            <Component {...pageProps} currentUser={currentUser}/>
        </div>
    );
}
    
AppComponent.getInitialProps = async (appContext) => {
    //console.log('APP CONTEXT ', Object.keys(appContext));
    const client = buildClient(appContext.ctx);

    let pageProps = {};
    if( appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    }
    try {
        const res = await client.get('/api/users/currentuser');
        return {
            pageProps,
            ...res.data
        }
    } catch(err) {
        //console.log(err)
        return {}
    }
};

export default AppComponent;