import "./ArticleContainer.css";
import Card from "../Card/Card";

const ArticleContainer = ({ articles }) => {
  
  if (articles.length === 0) {
    return (
      <div className='no-articles-message'>
        <p className="no-articles-user">There are no articles that match your search criteria, please try searching for another topic or go back home by clicking on the logo.</p>
        </div>
    )
  }
  
  const articleCards = articles.map((article, index) => {
    const { id, title, urlToImage, description, publishedAt } = article;

    return (
      <Card
        key={id || index}
        index={index}
        title={title}
        image={urlToImage}
        description={description}
        date={publishedAt}
      />
    );
  });

  return <main className='article-container'>{articleCards}</main>;
};

export default ArticleContainer;
