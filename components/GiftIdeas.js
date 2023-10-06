import { useEffect, useState } from "react";
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './GiftIdeas.module.css';

export default function GiftIdeas() {
  const handleDragStart = (e) => e.preventDefault();
  const [ carouselItems, setCarouselItems ] = useState([]);
  useEffect(() => {
    const items = Array.apply(null, {length: 8}).map((item, index) => <img className={styles.imgCarousel} src={`/product-${index+1}.webp`} alt={`product ${index+1}`} onDragStart={handleDragStart} width={500} height={500} role="presentation" />);
    setCarouselItems(items);
  }, []);
  return (
    <div className={styles.carouselDiv}>
      <h2>Ideas originales para tus ilustraciones</h2>
      {carouselItems && carouselItems.length > 0 &&
        <AliceCarousel
          autoPlay
          infinite
          mouseTracking
          disableButtonsControls
          animationDuration={3000}
          items={carouselItems}
          responsive={{
            0: { items: 1 },
            568: { items: 2 },
            1024: { items: 3 },
          }}
        />
      }
    </div>
  )
};
