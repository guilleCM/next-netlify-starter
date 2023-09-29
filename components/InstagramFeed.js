import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import styles from './Instagram.Feed.module.css'

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
}

const InstagramFeed = ({token, ...props}) => {
    const [feeds, setFeedsData] = useState([])
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${token}`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                    // setFeedsData(resp.data.data.filter((post) => post.media_type !== 'VIDEO'))
                })
          } catch (err) {
              console.log('error', err)
          }
        }
        
        // manually call the fecth function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        <div className={styles.feed} onClick={() => window.open("https://www.instagram.com/dream.pup.art/", "_blank")}>
            {feeds.map((feed) => (
              <div className={styles.post} key={feed.id} >
                <Feed feed={feed} />
              </div>
            ))}
        </div>
    );
}

export default InstagramFeed;