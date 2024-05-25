import React from 'react'
import './Card1.css';

export default function Card1({ article }) {
    if (!article) {
        return <div>No article to display</div>;
    }

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    return (
        <div>
            <h1 className='latest'>Latest News</h1>
            <div className="blog-card">
                <div className="meta">
                    {article.coverImage && (
                        <div className="cover-image" style={{ backgroundImage: `url(${article.coverImage})` }}></div>
                    )}
                    <ul className="details">
                        <li className="author"><a href="/">{article.author || 'Unknown Author'}</a></li>
                        <li className="date">{new Date(article.createdAt?.seconds * 1000).toLocaleDateString()}</li>
                        <li className="tags">
                            <ul>
                                <li><a href={article.url} target="_blank" rel="noopener noreferrer">Learn More</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="description">
                    <h1>{article.title}</h1>
                    <a className='blank' href={article.url} target='_blank' rel='noopener noreferrer'><h2>{article.subtitle || 'Subtitle'}</h2></a>
                    <div dangerouslySetInnerHTML={createMarkup(article.content.slice(0, 200))}></div>
                    <p className="read-more">
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
