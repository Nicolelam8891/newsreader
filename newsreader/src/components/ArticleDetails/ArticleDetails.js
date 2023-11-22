import "./ArticleDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ArticleDetails = ( {articles} ) => {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState("");
  const { index } =useParams();

  useEffect(() => {
    const numericIndex = parseInt(index, 10);
    const articleDetail = articles.find((article, index) => index === numericIndex);
  
    if (!articleDetail) {
      setError('Article not found')
    } else {
      setArticle(articleDetail);
    }

  }, [index, articles])

  if (error) {
    return <div>{error}</div>
  }
  if(!article) {
    return <div>Loading...</div>
  }

  return (
    <div className='single-article-page'>
      <div className='article-details'>
        <div className='article-image-container'>
          <img className='article-image' src={article.urlToImage} alt={article.title} />
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
