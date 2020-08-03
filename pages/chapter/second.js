import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from '../../styles/Utils.module.scss'
import Chips from "../../components/chips";

const chips = [
    { value: "JavaScript" },
    { value: "ECMAScript" },
    { value: "React.js" },
    { value: "Material-UI" }
];

export default function Second() {
    return (
        <Layout>
            <Head>
                <title>React.jsの学習</title>
            </Head>
            <Chips items={chips} />
            <React.Fragment>
                <h1>React.jsの学習</h1>
                <p>
                    <a href="https://ja.reactjs.org/" target="_blank" rel="noopener" rel="noreferrer">React.js</a>の公式サイトのドキュメント、および関連する情報を読み、概要を理解しました。
                </p>
                <p>基礎概念から入り、マスゲームを通してReactでのアプリの作り方を学びました。</p>
                <p>次にJavascriptの学習でもありましたが、TODOアプリをReactでリプレイスしました。</p>
                <ul className={utilStyles.list}>
                    <li className={utilStyles.listItem}>
                        <h3>第1部: React.jsの基礎概念</h3>
                        <dl>
                            <dd>コンポーネント開発</dd>
                            <dd>props、stateのデータの扱い方</dd>
                        </dl>
                        <h3>第2部: サービス開発</h3>
                        <dl>
                            <dd><a href="https://github.com/Ke1Sekine/react-chapter1/tree/feature/tutorial/2_game" target="_blank" rel="noopener" rel="noreferrer">マスゲーム開発(github)</a></dd>
                            <dd><a href="https://ke1sekine.github.io/react-chapter1/" target="_blank" rel="noopener" rel="noreferrer">TODOアプリ</a></dd>
                        </dl>
                    </li>
                </ul>
            </React.Fragment>
        </Layout>
    );
}