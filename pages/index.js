import Head from 'next/head';
import Image from 'next/image';

import Footer from '@components/Footer';
import Ribbon from '@components/Ribbon';
import InstagramFeed from '@components/InstagramFeed';
import Steps from '@components/Steps';

import styles from '../styles/index.module.css';

export default function Home({ igFeed }) {
  return (
    <div className="container">
      <Head>
        <title>Dream Pup Art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Ribbon />
      <main>
        <div className={styles.hero}>
          <h1>🎨<br />Crea una obra de arte de tu mascota<br />🐶🐱</h1>
          <div>
            <Image
              src="/hero1.webp"
              alt="hero image"
              layout='responsive'
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
        <Steps />

        <a href='https://www.instagram.com/dream.pup.art/' target='_blank' className={styles.followUs}>
          <span>Síguenos en Instagram</span>
        </a>
        <InstagramFeed feed={igFeed} />

      </main>

      <Footer />
    </div>
  )
};

export async function getStaticProps() {
  const limit = 12;
  const token = process?.env?.IG_TOKEN;
  const igFeed = [];
  if (token) {
    console.log(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${limit}&access_token=${token}`);
    try {
      const igRs = await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${limit}&access_token=${token}`)
      const igFeedRs = await igRs.json();
      if (igFeedRs?.data) {
        igFeedRs?.data.map((post) => {
          igFeed.push(post);
          return post;
        })
      }
    } catch (error) {
      console.log(error);
    }
  }
  return { props: { igFeed }};
};
