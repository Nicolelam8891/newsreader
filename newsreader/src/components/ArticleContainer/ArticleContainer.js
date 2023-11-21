import './ArticleContainer.css'
import Card from '../Card/Card';

const ArticleContainer = ( { articles } ) => {

  const articleCards = articles.articles.map((article) => {
    const { title, urlToImage, description, publishedAt, id } = article; 
    
    return (
      <Card 
        key={id}
        id={id}
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
