import { useEffect, useState } from "react";
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './Steps.module.css';

export default function Steps() {
  const handleDragStart = (e) => e.preventDefault();
  const [ carouselItems, setCarouselItems ] = useState([]);
  useEffect(() => {
    const items = Array.apply(null, {length: 8}).map((item, index) => <Image src={`/product (${index+1}).webp`} onDragStart={handleDragStart} width={500} height={500} role="presentation" />);
    setCarouselItems(items);
  }, []);
  return (
    <>
      <div className={styles.step}>
        <div>
          <h2>
            1. Elige estilos
          </h2>
          <p>Explora en nuestro perfil algun estilo de ilustración que te guste. Si no encuentras uno que te guste, puedes proponernos uno nuevo, podemos hacer cualquier estilo.</p>
          <ul className={styles.prices}>
            <li><strong>10 €</strong> 1 Estilo + collage</li>
            <li><strong>16 €</strong> 2 Estilos + collage</li>
            <li><strong>20 €</strong> 3 Estilos + collage</li>
          </ul>
        </div>
        <div>
          <Image
            src="/chose_style.webp"
            alt="chose Style"
            layout='responsive'
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
      <div className={`${styles.step} ${styles.reverse}`}>
        <div>
          <Image
            src="/upload_photos.webp"
            alt="upload photos"
            layout='responsive'
            width={1099}
            height={742}
            priority
          />
        </div>
        <div>
          <h2>
            2. Sube fotos de tu mascota
          </h2>
          <p>Mándanos de 12 a 20 fotos de tu mascota, en diferentes perspectivas y ángulos. Queremos conocer todos los detalles de tu peludito.</p>
        </div>
      </div>
      <div className={styles.step}>
        <div>
          <h2>
            3. Aprueva los resultados
          </h2>
          <p>Te crearemos mínimo 4 ilustraciones de cada estilo que hayas elegido. Elige las que más te gusten o quédatelas todas. Si quieres modificar algo aún estas a tiempo.</p>
        </div>
        <div>
          <Image
            src="/chose_results.webp"
            alt="approve results"
            layout='responsive'
            width={1105}
            height={842}
            priority
          />
        </div>
      </div>
      <div className={`${styles.step} ${styles.reverse}`}>
        <div>
          <Image
            src="/complete.webp"
            alt="complete"
            layout='responsive'
            width={1056}
            height={781}
            priority
          />
        </div>
        <div>
          <h2>
            4. Disfruta de tus ilustraciones
          </h2>
          <p>Ahora que ya tienes las ilustraciones, puedes hacer lo que quieras con ellas. Qué tal enmarcarlas? Imprimir un lienzo? Crear una taza personalizada? O una bolsa reutilizable? Las opciones son infinitas!</p>
        </div>
      </div>
      <div className={styles.carouselDiv}>
        <h2>Ideas originales de regalos</h2>
        {carouselItems && carouselItems.length > 0 &&
          <AliceCarousel
            autoPlay
            infinite
            mouseTracking
            disableButtonsControls
            items={carouselItems}
            responsive={{
              0: { items: 1 },
              568: { items: 2 },
              1024: { items: 3 },
            }}
          />
        }
      </div>
    </>
  )
};
