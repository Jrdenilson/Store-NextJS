import styles from "/styles/Footer.module.css"

import Image from "next/image"
import Link from "next/link";


import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
    return (
        <>
        <footer className={styles.footer}>
            <p><span>Outlet Imports</span> &copy; 2023</p>
                <ul className={styles.social}>
                    <li><Link href="/" target="_blank"><FacebookIcon /></Link></li>
                    <li><Link href="/" target="_blank"><InstagramIcon /></Link></li>    
                    <li><Link href="/" target="_blank"><TwitterIcon /></Link></li>
                </ul>
        </footer>
        </>
        
    )
}