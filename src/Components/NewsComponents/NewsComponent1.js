import React from 'react';
import './NewsComponent1.css';
import { useNavigate } from 'react-router-dom';

export default function NewsComponent1({ articles }) {
  const navigate = useNavigate();

  const handleReadMore = (article) => {
    navigate(`/article/${article.id}`);
  };

  return (
    <div>
      <div className='flex cont'>
        <div className='left'>
          <h2 className='grad' style={{ fontSize: '2rem' }}>VIDEOS</h2>
          {articles && articles.length > 0 ? (
            <>
              <img src={articles[0].coverImage} alt={articles[0].title} />
              <h3 className='heading' onClick={() => handleReadMore(articles[0])}>{articles[0].title}</h3>
            </>
          ) : (
            <p>No articles found</p>
          )}
        </div>
        <div className='mid'>
          {articles && articles.length > 0 ? (
            articles.map((article, index) => (
              <div key={index} className='mid-1 flex margin border' onClick={() => handleReadMore(article)}>
                <img src={article.coverImage} alt={article.title} width={'50%'} />
                <p className='cl'>{article.title}</p>
              </div>
            ))
          ) : (
            <p>No articles found</p>
          )}
        </div>
        <div className='right'>
          <div className='mid-1 flex margin border'>
            <img src='https://i.ytimg.com/vi/6ar8UNkMfu8/maxresdefault.jpg' alt='error' width={'50%'} />
            <p className='cl'>Geo News Headlines 9pm</p>
          </div>
          <div className='mid-1 flex margin border'>
            <img src='https://www.geo.tv/assets/uploads/updates/2024-02-21/video_thumb_image_76660092.jpg' alt='error' width={'50%'} />
            <p className='cl'>Geo News Headlines 6 pm | 20 Feb 20024</p>
          </div>
          <div className='mid-1 flex margin border'>
            <img src='https://www.geo.tv/assets/uploads/updates/2021-05-30/l_352633_62282_updates.jpg' alt='error' width={"50%"} />
            <p className='cl'>Geo Headlines 3pm</p>
          </div>
          <div className='mid-1 flex margin border'>
            <img src='https://www.geo.tv/assets/uploads/updates/2021-08-31/l_368085_8718227_updates.jpg' alt='error' width={"50%"} />
            <p className='cl'>Geo Headlines 5pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
