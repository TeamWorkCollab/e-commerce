import React, { useEffect } from 'react';
import ScrollReveal from '../components/scrollReveal';
import dynamic from 'next/dynamic';

// import config from 'react-reveal/globals';

// config({ ssrFadeout: true });
//import buildClient from '../api/build-client';
// import HomeNav from '../components/navbar';
import styles from '../styles/home.module.scss';
// import ScrollAnimation from 'react-animate-on-scroll';

//import Zoom from 'react-reveal/Zoom.js';

const Landing =  () => {
   
    
        return (
            <div >
                <ScrollReveal>
                <div className={styles.landing}>
                    <img  className={styles.img_landing} src="https://images.pexels.com/photos/5235725/pexels-photo-5235725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                </div>
                </ScrollReveal>
                
                <ScrollReveal >
                    <div className={styles.double_image}>
                        <div className={styles.img_container_left}>
                            <img className={styles.img_left} src="https://images.pexels.com/photos/4936358/pexels-photo-4936358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                            <p className={styles.img_caption}>Id eu nisl nunc mi - ipsum faucibus vitae aliquet nec</p>   
                        </div>
                        <div className={styles.img_container_right}>
                            <img className={styles.img_right} src="https://images.pexels.com/photos/1374128/pexels-photo-1374128.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                            <p className={styles.caption}>Bibendum est ultricies - integer quis auctor elit sed vulputate</p> 
                        </div>
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div className={styles.single_img}>
                        <img className={styles.img} src="https://images.pexels.com/photos/1937336/pexels-photo-1937336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <p className={styles.caption}>Curabitur vitae nunc sed velit dignissim sodales ut eu sem.</p>
                    </div>
                </ScrollReveal>
                <ScrollReveal height={'20vh'}>
                    <div className={styles.text_section}>
                        <p className={styles.text}>
                            Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Donec pretium vulputate sapien nec sagittis. Rutrum quisque non tellus orci ac auctor augue mauris. Bibendum est ultricies integer quis auctor elit sed vulputate. Purus semper eget duis at. Et pharetra pharetra massa massa ultricies mi. Quis vel eros donec ac.
                        </p>       
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div className={styles.double_img_center_container}>
                        <div className={styles.img_container}>
                            <img className={styles.img} src="https://images.pexels.com/photos/3942930/pexels-photo-3942930.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                            <p className={styles.caption}>Pulvinar etiam non quam lacus.</p>
                        </div>
                        <div className={styles.img_container}>
                            <img className={styles.img} src="https://images.pexels.com/photos/6995902/pexels-photo-6995902.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                            <p className={styles.caption}>Odio morbi quis commodo odio aenean sed.</p>
                        </div>
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div className={styles.double_img_center_container}>
                        <div className={styles.img_container}>
                            <img className={styles.img_size} src="https://images.pexels.com/photos/3889819/pexels-photo-3889819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                            <p className={styles.caption}>Ullamcorper a lacus vestibulum sed arcu.</p>
                        </div>
                        <div className={styles.img_container}>
                            <img className={styles.img_size} src="https://images.pexels.com/photos/6995709/pexels-photo-6995709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        </div>
                        
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div className={styles.double_img_center_container}>
                        <div className={styles.img_container}>
                            <img className={styles.img_size} src="https://images.pexels.com/photos/1030946/pexels-photo-1030946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                            <p className={styles.caption}>Odio morbi quis commodo odio aenean sed.</p>
                        </div>
                        <div className={styles.img_container}>
                            <img className={styles.img_size} src="https://images.pexels.com/photos/5789582/pexels-photo-5789582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        </div>
                        
                    </div>
                </ScrollReveal>
            </div>
            
        );
   

    //console.log('props in landing', products)
    // const productList = products ? (products.map(product => {
    //     return (
    //         <tr key={product.id}>
    //             <td>{product.name}</td>
    //             <td>{product.price}</td>
    //             <td>{product.details}</td>
    //         </tr>
    //     )
    // })) : null;

   
};

// Landing.getInitialProps = async (context, client, currentUser) => {
//     //console.log('CLIENT IN INEDEX ', client)
//     console.log('GET INITIAL CALL FROM INDEX ')
//     const { data } = await client.get('/api/products');
//     console.log('data ', data)
//     return { products: data };
//     // return {};
// }

export default Landing;