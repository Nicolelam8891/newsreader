import './ArticleContainer.css'
import Card from '../Card/Card';

const ArticleContainer = ( { articles } ) => {
  console.log("articles:=====", articles);

  const articleCards = articles.articles.map((article) => {
    const { title, urlToImage, description, publishedAt, id } = articles; 
    
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
    <h2>Articles Go here!</h2>
    </main>
  )
}

export default ArticleContainer;
