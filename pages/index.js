import Head from 'next/head';
import Image from 'next/image';

import Footer from '@components/Footer';
import Ribbon from '@components/Ribbon';
import InstagramFeed from '@components/InstagramFeed';
import Steps from '@components/Steps';
import Reviews from '@components/Reviews';
import GiftIdeas from '@components/GiftIdeas';
import AvailableStyles from '@components/AvailableStyles';

import styles from '../styles/index.module.css';

const availableStyles = [
  {
    id: '1',
    media_url: '/available-styles/minimalist-portrait/1.webp',
    caption: 'Retrato minimalista',
    href: '/styles',
  },
  {
    id: '2',
    media_url: '/available-styles/aquarela-water/1.webp',
    caption: 'Aquarela',
    href: '/styles',
  },
  {
    id: '3',
    media_url: '/available-styles/catching-treats/1.webp',
    caption: 'Atrapando comida',
    href: '/styles',
  },
  {
    id: '4',
    media_url: '/available-styles/then-and-now/1.webp',
    caption: 'Pasado y presente',
    href: '/styles',
  },
];
export default function Home({ igFeed }) {
  const onClickOrderNow = () => {
    document.querySelector('#order-now').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  return (
    <div className="container">
      <Head>
        <title>Dream Pup Art</title>
        <meta name="title" content="Dream Pup Art. Crea un recuerdo personalizado de tu mascota" />
        <meta name="description" content="Creamos ilustraciones originales y a medida de tu mascota. Regalos únicos para los amantes de los perros y gatos." />
        <meta name="keywords" content="regalos originales, perros, gatos" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Spanish"></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      {/* <Ribbon /> */}
      <main className={styles.main}>
        <div>
          <a href='/' className={styles.logo}>
            <span className={styles.logoWrapper}>
              <Image
                src="/logo.webp"
                alt="dreampupart logo"
                layout="fixed"
                width={40}
                height={40}
                priority
              />
              <span className={styles.logoText}>
                Dream Pup Art
              </span>
            </span>
          </a>
        </div>
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
        <h2 id='order-now' className={styles.orderUs}>Haz tu pedido a través de:</h2>
        <div className={styles.contactUs}>
          <a href='https://ig.me/m/dream.pup.art' className={styles.followUs}>
            <span>
              <Image
                src="/ig.webp"
                alt="ig logo"
                layout="fixed"
                width={20}
                height={20}
                priority
              />
              Instagram
            </span>
          </a>
          <a href='https://wa.me/34717114964' className={`${styles.followUs} ${styles.whatsapp}`}>
            <span>
              <Image
                src="/wa.webp"
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
                src="/mail.webp"
                alt="mail logo"
                layout="fixed"
                width={20}
                height={20}
                priority
              />
              Email
            </span>
          </a>
        </div>
        <h2 className={styles.howItWorks}>¿Cómo funciona?</h2>
        <Steps />
        <p onClick={onClickOrderNow} className={`${styles.followUs} ${styles.orderNowButton}`}>
          <span>Haz tu pedido ahora</span>
        </p>
        <GiftIdeas />
        <AvailableStyles data={availableStyles} />
        <a href='/styles' className={`${styles.followUs} ${styles.whatsapp} ${styles.moreStyles}`}>
          <span>Ver más estilos</span>
        </a>
        <Reviews />
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
