import './ArticleContainer.css'
import Card from '../Card/Card';

const ArticleContainer = ( { articles } ) => {

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
    )
  })

  return (
    <main className='article-container'>
      {articleCards}
    </main>
  )
}

export default ArticleContainer;
