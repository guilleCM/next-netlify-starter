import React from 'react';

import styles from './AvailableStyles.module.css';

const Style = (props) => {
  const { caption, media_url, href} = props.category;

  return (
    <a href={href || "#"} className={styles.anchor}>
      <div className={styles.imgDiv}>
        <img
          alt={caption}
          src={media_url}
        />
      </div>
      <h3>{caption}</h3>
    </a>
  );
};

const AvailableStyles = ({ data, title = 'Estilos populares' }) => {
  return (
    <>
      <h2 id='available-styles' className={styles.title}>{title}</h2>
      <div className={styles.wrapper}>
        {data.map((category) => (
          <div className={styles.category} key={category.id} >
            <Style category={category} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AvailableStyles;