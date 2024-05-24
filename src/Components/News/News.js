import React from 'react';
import NewsItem from '../News/NewsItem';
import Spinner from '../../Assets/Spinner';
import PropTypes from 'prop-types';

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const News = (props) => {
    const { articles, loading, category } = props;

    return (
        <div>
            <h1 className='text-center'>Latest News On {capitalizeFirstLetter(category)} - MSR News</h1>
            {loading && <Spinner />}

            <div className='containerr'>
                {!loading && articles && articles.map((element, index) => (
                    <NewsItem
                        key={`${element.id}-${index}`}
                        title={element.title}
                        description={element.content.substring(0, 100)}
                        imageUrl={element.coverImage}
                        newsUrl={`#`} // Placeholder, update this if you have a news detail page
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source}
                    />
                ))}
            </div>
            {/* Pagination buttons can be added here if needed */}
        </div>
    );
}

News.defaultProps = {
    pageSize: 8,
    category: 'general',
    articles: [],
    loading: false,
}

News.propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
    articles: PropTypes.array.isRequired,
    loading: PropTypes.bool,
}

export default News;
