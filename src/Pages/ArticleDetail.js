import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find(article => article.id === id);

  if (!article) {
    return <div>Article not found</div>;
  }

  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  // Inline styles
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '20px',
    },
    author: {
      fontStyle: 'italic',
      color: '#555',
    },
    date: {
      fontStyle: 'italic',
      color: '#555',
    },
    content: {
      marginTop: '20px',
    },
    contentImage: {
      maxWidth: '100%',
      height: 'auto',
      marginTop: '20px',
      marginBottom: '20px',
      display: 'block',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{article.title}</h1>
      <p style={styles.author}>By {article.author}</p>
      <p style={styles.date}>{new Date(article.createdAt.seconds * 1000).toLocaleDateString()}</p>
      <div style={styles.content} dangerouslySetInnerHTML={createMarkup(article.content)}></div>
    </div>
  );
};

export default ArticleDetail;
