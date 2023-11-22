import './ArticleContainer.css'
import Card from '../Card/Card';

const ArticleContainer = ( { articles } ) => {

  const articleCards = articles.map((article) => {
    const { title, urlToImage, description, publishedAt, id, name } = article; 
    
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
  console.log("articleCards:=====", articleCards);

  return (
    <main className='article-container'>
      {articleCards}
    </main>
  )
}

export default ArticleContainer;
