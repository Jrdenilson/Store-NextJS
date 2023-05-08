import Link from "next/link";
import Image from "next/image";

import styles from "/styles/Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.link}>
                <div className={styles.logo}>
                <Image src="/images/logo.png" width="100" height="50" alt="Store"/>
                <h1 className={styles.home}>Outlet Import</h1>
            </div>
            </Link>
            
            <ul className={styles.link_items}>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        Contato
                    </Link>
                </li>
            </ul>
        </nav>
    )
}