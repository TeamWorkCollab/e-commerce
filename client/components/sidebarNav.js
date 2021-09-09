import { useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BiSearch, BiUser, BiChat, BiAnalyse, BiBarChartAlt, BiCart, BiCog, BiLogOut, BiMenu, BiMenuAltLeft } from "react-icons/bi";
import styles from '../styles/components/sidebar_nav.module.scss';
// import 'boxicons';

const SidebarNav = () => {



    return (
       <div className={styles.sidebar}>
           <div className={styles.logo_content}>
                <div className={styles.logo}>
                    {/* <BsFillGrid3X3GapFill /> */}
                    <div className={styles.logo_name}>E-Commerce</div>
                </div>
                <BiMenu className={styles.menu_button} />
           </div>
           <ul className={styles.nav_list}>
                <li>
                    <Link href="/products/men">
                        <a  >
                            <BiSearch className={styles.icon_search}/>
                            <input type="text" placeholder="Search..."></input>
                        </a>
                    </Link>   
                </li>

                <li>
                    <Link href="/products/men">
                        <a  >
                            <BsFillGrid3X3GapFill className={styles.icon}/>
                            <span>Dashboard</span>
                        </a>
                    </Link>   
                </li>

                <li>
                    <Link href="/products/men">
                        <a  >
                            <BiUser className={styles.icon}/>
                            <span>User</span>
                        </a>
                    </Link>   
                </li>

                <li>
                    <Link href="/products/men">
                        <a  >
                            <BiChat className={styles.icon}/>
                            <span>Messages</span>
                        </a>
                    </Link>   
                </li>

                <li>
                    <Link href="/products/men">
                        <a  >
                            <BiBarChartAlt className={styles.icon}/>
                            <span>Analytics</span>
                        </a>
                    </Link>   
                </li>

                <li>
                    <Link href="/products/men">
                        <a  >
                            <BiCart className={styles.icon}/>
                            <span>Order</span>
                        </a>
                    </Link>   
                </li>

                <li>
                    <Link href="/products/men">
                        <a  >
                            <BiCog className={styles.icon}/>
                            <span>Setting</span>
                        </a>
                    </Link>   
                </li>
           </ul>
           <div className={styles.profile_content}>
                <div className={styles.profile}>
                    <div className={styles.profile_details}>
                        <img src="https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.6435-9/81644247_10216748283247559_950395074838003712_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=1_Ndgl9ORK0AX_eXIT8&_nc_ht=scontent.ftpa1-2.fna&oh=fb223e23a305a56c979b4a5564b256ee&oe=615DFFAF" alt="" />
                        <div className={styles.name_title}>
                            <div className={styles.name}>Vu Nguyen</div>
                            <div className={styles.title}>Admin</div>
                        </div>  
                    </div>
                    <BiLogOut className={styles.log_out}/>
                </div>
           </div>
       </div>
    )
}

export default SidebarNav;