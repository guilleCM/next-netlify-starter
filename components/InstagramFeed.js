import React from 'react';

import styles from './Instagram.Feed.module.css';

const Feed = (props) => {
  const { id, caption, media_type, media_url} = props.feed
  let post;

  switch (media_type) {
    case "VIDEO":
      post = (
        <video
          width='100%'
          height='auto' 
          src={media_url} 
          type="video/mp4" 
          controls playsInline>
        </video>
      )
      break;
    case "CAROUSEL_ALBUM":
      post = (
        <img 
          width='100%'
          height='auto'
          id={id} 
          src={media_url} 
          alt={caption} 
        />
      );
      break;
    default:
      post = (
        <img 
          width='100%'
          height='auto'
          id={id} 
          src={media_url} 
          alt={caption} 
        />
      );
  }       

  return (
    <React.Fragment>
      {post}
    </React.Fragment>
  );
};

const InstagramFeed = ({ feed }) => {
  return (
    <div className={styles.feed} onClick={() => window.open("https://www.instagram.com/dream.pup.art/", "_blank")}>
      {feed.map((post) => (
        <div className={styles.post} key={post.id} >
          <Feed feed={post} />
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed;