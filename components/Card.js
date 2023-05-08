import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Card.module.css";

export default function Card({ clothes }) {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Image
          width="120"
          height="120"
          alt={clothes.title}
          src={clothes.image}
          
        />
      </div>
      <div className={styles.item_description}>
        <h5>{clothes.title.substring(0,20)}...</h5>
        <p>R$ {clothes.price}</p>
        <Link href={`/itemsdetails/${clothes.id}`} className={styles.glow_on_hover}>Detalhes</Link>
      </div>
    </div>
  );
}
