import "./ArticleContainer.css";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const ArticleContainer = ({ articles }) => {


  if (articles.length === 0) {
    return (
      <div className='no-articles-message'>
        <p className='no-articles-user'>
          There are no articles that match your search criteria. Please try
          searching for another topic or find your way back home by clicking on
          the DarkSky logo.
        </p>
      </div>
    );
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

ArticleContainer.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string.isRequired,
      }).isRequired,
      author: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      url: PropTypes.string.isRequired,
      urlToImage: PropTypes.string,
      publishedAt: PropTypes.string.isRequired,
      content: PropTypes.string,
    })
  ).isRequired,
};

export default ArticleContainer;
