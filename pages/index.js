import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout'
import BasicTimeline from '../components/basicTimeline'
import utilStyles from '../styles/Utils.module.scss'

const items = [
  { value: 'Javascript' },
  { value: 'React.js' },
  { 
    color: 'primary',
    value: 'Next.js'
  }
];
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <BasicTimeline items={items} />
      <section className={utilStyles.headingMd}>
        <p>
          Next.jsを利用したサンプルサイトになります。
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem} key="first">
            <Link href="/chapter/first"><a>CHAPTER1</a></Link>: Javascript
          </li>
          <li className={utilStyles.listItem} key="second">
            <Link href="/chapter/second"><a>CHAPTER2</a></Link>: React.js
          </li>
          <li className={utilStyles.listItem} key="third">
            <Link href="/chapter/third"><a>CHAPTER3</a></Link>: Next.js
          </li>
        </ul>
      </section>
    </Layout>
  )
}