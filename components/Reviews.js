import { useEffect, useState } from "react";
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './Reviews.module.css';

export default function Reviews() {
  const handleDragStart = (e) => e.preventDefault();
  const [ carouselItems, setCarouselItems ] = useState([]);
  useEffect(() => {
    const items = Array.apply(null, {length: 7}).map((item, index) => <img className={styles.imgCarousel} src={`/reviews-${index+1}.jpg`} onDragStart={handleDragStart} alt={`review ${index+1}`} width={'100%'} height={'auto'} />);
    setCarouselItems(items);
  }, []);
  return (
      <div className={styles.carouselDiv}>
        <h2>Qué dicen de nosotros</h2>
        {carouselItems && carouselItems.length > 0 &&
          <AliceCarousel
            autoPlay
            infinite
            disableButtonsControls
            disableDotsControls
            disableSlideInfo
            animationDuration={3000}
            items={carouselItems}
            responsive={{
              0: { items: 1 },
              568: { items: 3 },
              1024: { items: 3 },
            }}
          />
        }
      </div>
  )
};
