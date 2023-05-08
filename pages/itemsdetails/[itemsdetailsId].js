import Image from "next/image";

import styles from "../../styles/[itemsdetailsId].module.css"


export async function getStaticProps(context){
    const { params } = context;
    const api = `https://fakestoreapi.com/products/${params.itemsdetailsId}`;

    const data = await fetch(api);

    const items = await data.json();
    
    return {
        props: { items },
    }
}

export async function getStaticPaths() {

    const response = await fetch('https://fakestoreapi.com/products/');

    const data = await response.json();

    const paths = data.map((item) => {
        return {
            params: {
                itemsdetailsId: `${item.id}`,
            },
        }
    })

    

    return {
        paths, 
        fallback: false,
    }
    
}


export default function Itemdetails({ items }) {

    var price = parseFloat(items.price);
    return (
        <div className={styles.box}>
            <div className={`${styles.img}`}>
                <Image srcset={items.image} alt={items.title} width="200" height="200" />
            </div>
            <div className={`${styles.description}`}>
                <h1>{items.title}</h1>
                <p className={styles.discount}>de <i>R${(price * 1.20).toFixed(2)}</i></p>
                <p className={styles.price}>R$ {items.price.toFixed(2)}</p>
                <p><span>Avaliação: {items.rating.rate}</span>  <span>Estoque: {items.rating.count}</span></p>

                <content>{items.description}</content>
                <div>
                    <button className={styles.glow_on_hover}>Comprar</button>
                </div>
            </div>
        </div>
    )
}