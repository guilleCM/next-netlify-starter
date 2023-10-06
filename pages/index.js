import Head from 'next/head';
import Image from 'next/image';

import Footer from '@components/Footer';
import Ribbon from '@components/Ribbon';
import InstagramFeed from '@components/InstagramFeed';
import Steps from '@components/Steps';
import Reviews from '@components/Reviews';
import GiftIdeas from '@components/GiftIdeas';

import styles from '../styles/index.module.css';

export default function Home({ igFeed }) {
  const onClickOrderNow = () => {
    document.querySelector('#order-now').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  return (
    <div className="container">
      <Head>
        <title>Dream Pup Art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Ribbon />
      <main className={styles.main}>
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
        <h2 id='order-now' className={styles.orderUs}>Haz tu pedido</h2>
        <div className={styles.contactUs}>
          <a href='https://www.instagram.com/dream.pup.art/' target='_blank' className={styles.followUs}>
            <span>
              <Image
                src="/instagram-logo.png"
                alt="ig logo"
                layout="fixed"
                width={20}
                height={20}
                priority
              />
              Instagram
            </span>
          </a>
          <a href='https://wa.me/34717114964' target='_blank' className={`${styles.followUs} ${styles.whatsapp}`}>
            <span>
              <Image
                src="/whatsapp-logo.png"
                alt="whatsapp logo"
                layout="fixed"
                width={20}
                height={20}
                priority
              />
              Whatsapp
            </span>
          </a>
          <a href='mailto:dream.pup.art.ig@gmail.com' className={`${styles.followUs} ${styles.orderNowButton}`}>
            <span>
              <Image
                src="/mail-logo.png"
                alt="mail logo"
                layout="fixed"
                width={28}
                height={20}
                priority
              />
              Email
            </span>
          </a>
        </div>
        <Steps />
        <p onClick={onClickOrderNow} className={`${styles.followUs} ${styles.orderNowButton}`}>
          <span>Haz tu pedido ahora</span>
        </p>
        <GiftIdeas />

        <a href='https://www.instagram.com/dream.pup.art/' target='_blank' className={styles.followUs}>
          <span>Síguenos en Instagram</span>
        </a>
        <InstagramFeed feed={igFeed} />
        <Reviews />
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
