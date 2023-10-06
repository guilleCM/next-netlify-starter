import Image from 'next/image';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <span className={styles.logoWrapper}>
          <Image
            src="/logo.webp"
            alt="dreampupart logo"
            layout="fixed"
            width={80}
            height={80}
            priority
          />
          <span className={styles.logoText}>
            Dream Pup Art
          </span>
        </span>
        <span>Made with ❤️ by guilleCM</span>
      </div>
    </footer>
  )
};

