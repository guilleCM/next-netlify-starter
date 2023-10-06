import { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './Ribbon.module.css';

const Collapse = ({ collapsed, carouselItems }) => {
  return (
    <div
      className={`${styles.collapseContent} ${collapsed ? styles.collapsed : styles.expanded}`}
      aria-expanded={collapsed}
    >
      {carouselItems && carouselItems.length > 0 &&
        <AliceCarousel
          autoPlay
          infinite
          disableButtonsControls
          disableDotsControls
          disableSlideInfo
          animationDuration={3000}
          autoPlayStrategy="none"
          items={carouselItems}
          responsive={{
            0: { items: 3 },
            568: { items: 5 },
            1024: { items: 5 },
          }}
        />
      }
    </div>
  );
};

export default function Ribbon() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [ carouselItems, setCarouselItems ] = useState([]);

  const handleDragStart = (e) => e.preventDefault();

  useEffect(() => {
    const items = Array.apply(null, {length: 10}).map((item, index) => <img className={styles.imgCarousel} src={`/halloween/halloween-dog-${index+1}.webp`} onDragStart={handleDragStart} alt={`review ${index+1}`} width={'100%'} height={'auto'} />);
    setCarouselItems(items);
  }, []);

  return (
    <div className={styles.ribbon}>
      <p onClick={() => setIsCollapsed(!isCollapsed)}>
      ↓ 🦇🎃Durante el mes de Octubre, recibe una ilustracion de Halloween <b>GRATIS</b> con tu pedido🎃🦇 ↓
      </p>
      <Collapse collapsed={isCollapsed} carouselItems={carouselItems} />
    </div>
  )
};

