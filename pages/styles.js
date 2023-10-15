import Head from 'next/head';
import Image from 'next/image';

import Footer from '@components/Footer';
import Ribbon from '@components/Ribbon';
import AvailableStyles from '@components/AvailableStyles';

import styles from '../styles/index.module.css';

const availableStyles = [
  {
    id: '1',
    media_url: '/available-styles/minimalist-portrait/1.webp',
    caption: 'Retrato minimalista',
  },
  {
    id: '2',
    media_url: '/available-styles/aquarela-water/1.webp',
    caption: 'Aquarela',
  },
  {
    id: '3',
    media_url: '/available-styles/catching-treats/1.webp',
    caption: 'Atrapando comida',
  },
  {
    id: '4',
    media_url: '/available-styles/then-and-now/1.webp',
    caption: 'Pasado y presente',
  },
  {
    id: '5',
    media_url: '/available-styles/animated/1.webp',
    caption: 'Animado',
  },
  {
    id: '6',
    media_url: '/available-styles/bold-drawing/2.webp',
    caption: 'Comic lineado grueso',
  },
  {
    id: '7',
    media_url: '/available-styles/fine-comic/1.webp',
    caption: 'Comic oriental',
  },
  {
    id: '7.5',
    media_url: '/available-styles/western-comic/1.webp',
    caption: 'Comic Western',
  },
  {
    id: '8',
    media_url: '/available-styles/wild-drawing/1.webp',
    caption: 'Dibujo salvaje',
  },
  {
    id: '9',
    media_url: '/available-styles/business-portrait/1.webp',
    caption: 'Retrato elegante',
  },
  {
    id: '10',
    media_url: '/available-styles/fantasy-portrait/1.webp',
    caption: 'Retrato de fantasía',
  },
  {
    id: '11',
    media_url: '/available-styles/ink-style/2.webp',
    caption: 'Ink Style',
  },
  {
    id: '12',
    media_url: '/available-styles/nature-portrait/1.webp',
    caption: 'Retrato naturaleza',
  },
  {
    id: '13',
    media_url: '/available-styles/cartoon/1.webp',
    caption: 'Cartoon',
  },
  {
    id: '14',
    media_url: '/available-styles/jedi/1.webp',
    caption: 'Jedi',
  },
  {
    id: '15',
    media_url: '/available-styles/cooking/1.webp',
    caption: 'Cocinero',
  },
  {
    id: '16',
    media_url: '/available-styles/custom-outfit/1.webp',
    caption: 'Disfraz personalizado',
  },
  {
    id: '17',
    media_url: '/available-styles/bathroom/1.webp',
    caption: 'WC',
  },
  {
    id: '18',
    media_url: '/available-styles/autumn/1.webp',
    caption: 'Otoñal',
  },
  {
    id: '19',
    media_url: '/available-styles/oil-painting/2.webp',
    caption: 'Oil painting',
  },
  {
    id: '20',
    media_url: '/available-styles/halloween/1.webp',
    caption: 'Halloween',
  },
  {
    id: '21',
    media_url: '/available-styles/christmas/1.webp',
    caption: 'Navidad',
  },
  {
    id: '22',
    media_url: '/available-styles/happy-bday/1.webp',
    caption: 'Feliz Cumpleaños',
  },
  {
    id: '23',
    media_url: '/available-styles/collage/1.webp',
    caption: 'Collage',
  },
];
export default function Styles() {
  return (
    <div className="container">
      <Head>
        <title>Dream Pup Art | Estilos</title>
        <meta name="title" content="Descubre los estilos de arte que encajan con tu mascota" />
        <meta name="description" content="Explora los estilos con los que crear una obra de arte de tu mascota. Regalos únicos para los amantes de los perros y gatos." />
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
      <Ribbon />
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

        <AvailableStyles data={availableStyles} title='Todos los estilos' />
        <a href='https://www.instagram.com/dream.pup.art/' target='_blank' className={styles.followUs}>
          <span>Explora más en Instagram</span>
        </a>
        <p className={styles.subtitle}>
          Si no encuentras el estilo que estás buscando, podemos crearlo para ti! Contáctanos
        </p>
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
      </main>
      <Footer />
    </div>
  )
};