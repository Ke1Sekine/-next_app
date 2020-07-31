import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default  function FistPost() {
    return (
        <Layout>
            <Head>
                <title>fist page</title>
            </Head>
            <React.Fragment>
                <h1>first post</h1>
                <h2><Link href="/">Back Pages</Link></h2>
            </React.Fragment>
        </Layout>
    );
}