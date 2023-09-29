import Head from 'next/head'
import Image from 'next/image'

import Footer from '@components/Footer'
import Ribbon from '@components/Ribbon'
import InstagramFeed from '@components/InstagramFeed'

import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dream Pup Art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Ribbon />
      <main>
        <div className={styles.hero}>
          <h2>🎨<br />Crea una obra de arte de tu mascota<br />🐶🐱</h2>
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
        <a href='https://www.instagram.com/dream.pup.art/' target='_blank'>
          <p className={styles.followUs}>SIGUENOS EN INSTAGRAM</p>
        </a>
        <InstagramFeed token={'IGQWRNNkRUVWFkZAzd4U3NWSEVCQmdwaGRqZA3FtR0ZANUlBXWUtGeDBXcjFSNVVGbVpId1ZAvOEUzVHhOQ19faWo5YlhDWEwxekh0ZAks3VUtPVmxLQm1kZAUMtVzB4NFdKYUZApR3ZABZAi1WamllN2hUVDVtclNmQmdfdkkZD'} limit={12} />

      </main>

      <Footer />
    </div>
  )
}
