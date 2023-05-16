import Navbar from "./Navbar";
import Footer from "./Footer";
import Categories from "./Categories";

import Head from "next/head";

export default function Layout({children}){
    return (
        <>
        <Head>
            <link rel="shortcut icon" href="/images/favicon-32x32.png" />
            <title>PokeNext</title>
        </Head>
        <Navbar />
        <Categories />
        <main className="main-container">{children}</main>
        <Footer />
        </>
    )
}