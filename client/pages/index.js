import React from 'react';
import HomeNav from '../components/navbar';
import styles from '../styles/home.module.scss';


const Landing = () => {
    return (
        <div className={styles.container}>
            <HomeNav />
            <h1>Landing Page Test</h1>
            <div className={styles.test}>TEST ME IN SASS</div>
        </div>
    );
};

export default Landing;