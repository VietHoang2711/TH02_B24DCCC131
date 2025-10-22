import React, { useState, useEffect } from 'react';
import axios from 'axios';
import type { NewsArticle } from '../types/types';
import './News.css';

const News: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get<{ results: NewsArticle[] }>('https://api.spaceflightnewsapi.net/v4/articles?limit=10');
        setArticles(response.data.results);
      } catch (err) {
        setError('Không thể tải tin tức');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="news-container">
      <h2>Tin tức</h2>
      {loading && <p>Đang tải...</p>}
      {error && <p className="error-message">{error}</p>}
      <div className="news-list">
        {articles.map(article => (
          <div key={article.id} className="news-item">
            <img src={article.image_url} alt={article.title} className="news-image" />
            <h3>{article.title}</h3>
            <p className="news-summary">{article.summary}</p>
            <p className="news-date">
              Ngày đăng: {new Date(article.publishedAt).toLocaleDateString('vi-VN')}
            </p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more-btn">
              Đọc tin gốc
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;