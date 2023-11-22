import "./ArticleDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ArticleDetails = () => {
  const [article, setArticle] = useState('');
  const [error, setError] = useState("");
  const { id } =useParams();

  return (
    <div className='single-article-page'>
      <div className='article-details'>
        <div className='article-image-container'>
          <img className='article-image' src={article.image} />
        </div>
        <div className='article-info-container'>
          <p className='article-header'>{article.title}</p>
          <p className='article-data'>{article.publishedAt}</p>
          <p className='article-content'>{article.content}</p>
          <p className='article-link'>{article.url}</p>
        </div>
      </div>
    </div>
  );

};

export default ArticleDetails;
