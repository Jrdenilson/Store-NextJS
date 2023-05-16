import Link from "next/link";

import styles from "../styles/Categories.module.css";

export default function Categories() {
    return (
        <div className={styles.categories_bar}>
            <p>Categorias</p>
            <ul className={styles.link_categories}>
                <li>
                    <Link href="/">
                        Todas
                    </Link>
                </li>
                <li>
                    <Link href="/categories/electronics">
                        Eletronicos
                    </Link>
                </li>
                <li>
                    <Link href="/categories/jewelery">
                        Jóias
                    </Link>
                </li>
                <li>
                    <Link href="/categories/men's%20clothing">
                        Masculino
                    </Link>
                </li>
                <li>
                    <Link href="/categories/women's%20clothing">
                        Feminina
                    </Link>
                </li>
            </ul>
        </div>
    )
}