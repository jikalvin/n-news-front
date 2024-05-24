import React, { useEffect, useState } from 'react'
import './NewsComponent1.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

export default function News() {
    const [newsArticles, setNewsArticles] = useState([{
        coverImage: "",
        title: "",
    }]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNewsArticles = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const newsRef = collection(db, 'news');
                const querySnapshot = await getDocs(newsRef);
                const articles = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setNewsArticles(articles);
            } catch (err) {
                console.error('Error fetching news articles:', err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchNewsArticles();
    }, []);

    return (
        <div>
            <div className='flex cont'>
                <div className='left'>
                    <h2 className='grad' style={{ fontSize: '2rem' }}>VIDEOS</h2>
                    {
                        newsArticles && (
                            <>
                                <img src={newsArticles[0].coverImage} alt={newsArticles[0].title} />
                                <h3 className='heading'>{newsArticles[0].title}</h3>
                            </>
                        )
                    }
                    {
                        !newsArticles && (
                            <>
                                <img src='https://i.ytimg.com/vi/VK67FIBK4HI/maxresdefault.jpg' alt='error' />
                                <h3 className='heading'>Process of govt formation remains unclear 12 days after election </h3>
                            </>
                        )
                    }
                </div>
                <div className='mid'>
                    {isLoading && <p>Loading articles...</p>}
                    {error && <p className='text-danger'>{error.message}</p>}
                    {newsArticles && newsArticles.map((article, index) => {
                        return (
                            <div className=' mid-1 flex margin border'>
                                <img src={article.coverImage} alt={article.title} width={'50%'} />
                                <p className='cl'>{article.title}</p>
                            </div>
                        )
                    })}
                </div>

                <div className='right'>
                    {/* <h2 className='grad hidden' style={{ fontSize: '2rem' }}>NEWS HEADLINES</h2> */}
                    <div className=' mid-1 flex margin border'>
                        <img src='https://i.ytimg.com/vi/6ar8UNkMfu8/maxresdefault.jpg' alt='error' width={'50%'} />
                        <p className='cl'>Geo News Headlines 9pm </p>
                    </div>
                    <div className=' mid-1 flex margin  border'>
                        <img src='https://www.geo.tv/assets/uploads/updates/2024-02-21/video_thumb_image_76660092.jpg' alt='error' width={'50%'} />
                        <p className='cl'>Geo News Headlines 6 pm | 20 Feb 20024 </p>
                    </div>
                    <div className=' mid-1 flex margin border'>
                        <img src='https://www.geo.tv/assets/uploads/updates/2021-05-30/l_352633_62282_updates.jpg' alt='error' width={"50%"} />
                        <p className='cl'>Geo Headlines 3pm  </p>
                    </div>
                    <div className=' mid-1 flex margin border'>
                        <img src='https://www.geo.tv/assets/uploads/updates/2021-08-31/l_368085_8718227_updates.jpg' alt='error' width={"50%"} />
                        <p className='cl'>Geo Headlines 5pm </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
