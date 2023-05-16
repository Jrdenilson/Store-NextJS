import Image from "next/image";
import Head from "next/head";

import Card from "@/components/Card";

import styles from "../../styles/[bycategories].module.css";

export async function getStaticProps(context) {
  const { params } = context;
  const api = `https://fakestoreapi.com/products/category/${params.bycategories}`;

  const data = await fetch(api);

  const items = await data.json();
  

  return {
    props: { items },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://fakestoreapi.com/products/categories/");

  const data = await response.json();

  const paths = data.map((item) => {
    return {
      params: {
        bycategories: `${item}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default function ByCategories({ items }) {
  return (
    <>
      <Head>
        <title>{items[0].category.toUpperCase()}</title>
      </Head>
    <div  className={styles.principal}>
        <div className={styles.item_container}>
        {items.map((item) => (
          <Card key={item.id} clothes={item} />
        ))}
        </div>
    </div>
      
    </>
  );
}
