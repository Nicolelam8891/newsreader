import "./ArticleDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ArticleDetails = ({ articles }) => {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState("");
  const { index } = useParams();

  useEffect(() => {
    const numericIndex = parseInt(index, 10);
    const articleDetail = articles.find(
      (article, index) => index === numericIndex
    );

    if (!articleDetail) {
      setError("Article not found");
    } else {
      setArticle(articleDetail);
    }
  }, [index, articles]);

  if (error) {
    return <div>{error}</div>;
  }
  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className='single-article-page'>
      <div className='article-details-container'>
        <div className='article-image-container'>
          <img
            className='article-image'
            src={article.urlToImage}
            alt={article.title}
          />
        </div>
        <div className='article-info-container'>
          <p className='article-title'>{article.title}</p>
          <p className='article-date'>
            {" "}
            Published:{" "}
            {new Date(article.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <p className='article-content'>{article.content}</p>
          <a
            href={article.url}
            className='article-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            Read the rest of the article
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
