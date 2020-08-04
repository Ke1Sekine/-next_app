import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from '../../styles/Utils.module.scss'
import Chips from "../../components/chips";

const chips = [
    { value : "JavaScript"},
    { value: "ECMAScript"}
];

export default function Fist() {
    return (
        <Layout>
            <Head>
                <title>Javascriptの基礎学習</title>
            </Head>
            <Chips items={chips}/>
            <React.Fragment>
                <h1>Javascriptの基礎学習</h1>
                <p>
                    <a href="https://jsprimer.net/use-case/setup-local-env/" target="_blank" rel="noopener" rel="noreferrer">JavaScript Primer</a>のWebサイトを参考にJavaScriptの基礎を学習を実施しました。
                </p>
                <p>もともと、WebサービスのエンジニアとしてJavaScriptの基本的なスキル（他、JQuery）は持ち合わせており、ある程度の要件は開発してきた実績はあります。</p>
                <p>とはいえ、ECMAシリーズやArrow関数をしっかり学習したことがなかっため、改めて知見を集めました。</p>
                <ul className={utilStyles.list}>
                    <li className={utilStyles.listItem}>
                        <h3>第1部: 基本文法</h3>
                        <dl>
                            <dd>Arrow Function</dd>
                            <dd>同期処理（sync）と非同期処理（async）（Promise）</dd>
                            <dd>ECMAScriptの基礎</dd>
                        </dl>
                    </li>
                </ul>
                <p>同じWebサイトにあるユースケース（応用編）を実施しました。</p>
                <p>過去にREST　API開発を通してAjaxを用いたフロント開発をしてきましたが、Promiseを用いた実装はなかったので参考にしました。</p>
                <p>また、後者のTODOアプリではViewにおけるイベント周りとデータモデルを分ける実装スタイルです。クラスわけし業務を分け見通しをよくすることで保守性を高める良さを理解しました。
                </p>
                <ul className={utilStyles.list}>
                    <li className={utilStyles.listItem}>
                        <h3>第2部: ユースケース</h3>
                        <dl>
                            <dd>Ajax（非同期：Promise　通信：Http）</dd>
                            <dd><a href="https://ke1sekine.github.io/todo/" target="_blank" rel="noopener" rel="noreferrer">Todoアプリ</a>(イベントクラスとモデルクラス)</dd>
                        </dl>
                    </li>
                </ul>
            </React.Fragment>
        </Layout>
    );
}