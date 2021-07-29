import React from 'react';
import buildClient from '../api/build-client';
//import HomeNav from '../components/navbar';
import styles from '../styles/home.module.scss';

const Landing =  (props) => {

    return (
        <div className={styles.landing}>
            {/* <HomeNav /> */}
            <div className={styles.container}>
                <h1>Landing Page Test</h1>
                <div className={styles.test}>TEST ME IN SASS</div>
                {props.currentUser ? <p>You are signed in</p> : <p>You're not sign in</p>}
            </div>
        </div>
        
    );
};

Landing.getInitialProps = async (context) => {
    const client = buildClient(context)
    try {
        const res = await client.get('/api/users/currentuser');
        return res.data;
    } catch(err) {
        console.log(err)
        return {}
    }
}

export default Landing;