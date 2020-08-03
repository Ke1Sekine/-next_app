import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from '../../styles/Utils.module.scss'
import Link from 'next/link'
import Chips from "../../components/chips";

const chips = [
    { value: "JavaScript" },
    { value: "ECMAScript" },
    { value: "React.js" },
    { value: "Material-UI" },
    { value: "Next.js" }
];

export default function Second() {
    return (
        <Layout>
            <Head>
                <title>Next.jsの学習</title>
            </Head>
            <Chips items={chips} />
            <React.Fragment>
                <h1>Next.jsの学習</h1>
                <p>
                    <a href="https://nextjs.org/" target="_blank" rel="noopener" rel="noreferrer">Next.js</a>の公式サイトのドキュメントを読み概要を理解しました。
                </p>
                <p>コンポーネントの作成に<a href="https://nextjs.org/" target="_blank" rel="noopener" rel="noreferrer">Material-UI</a>を導入し、アプリケーションの作成を通してNext.jsの理解を深めました。</p>
                <ul className={utilStyles.list}>
                    <li className={utilStyles.listItem}>
                        <h3>第1部: Next.jsの基礎概念</h3>
                        <dl>
                            <dd>ルーティングの概念</dd>
                        </dl>
                        <h3>第2部: サービス開発</h3>
                        <dl>
                            <dd>
                                <Link href="/"><a className={utilStyles.colorInherit}>本サイトを作成</a></Link>
                            </dd>
                        </dl>
                    </li>
                </ul>
            </React.Fragment>
        </Layout>
    );
}