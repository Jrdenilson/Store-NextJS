import Head from 'next/head'
import Image from 'next/image'
import Card from '@/components/Card';

import styles from '@/styles/Home.module.css';

export async function getStaticProps() {
  

  const res = await fetch('https://fakestoreapi.com/products/');
  const data = await res.json();

  
  return {
    props: {
      clothes: data || null,
    },
  };

}



export default function Home({ clothes }) {
  return (
    <>
    <Head>
    <title>Outlet Imports</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;700;900&family=Oswald:wght@300&display=swap" rel="stylesheet" />
    
    </Head>
    <div className={styles.container}>
    

    <div className={styles.principal}>
        
        <div className={styles.item_container}>
          {clothes.map((clothe) => (
        <Card key={clothe.id} clothes={clothe} />
      ))}
        </div>
      
    </div>
    </div>
    </>
    
    
  )
}
