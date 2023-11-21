import './Card.css'

const Card = ( { id, title, image, description, date } ) => {
  
  return (
    <div className='card'>
      <img src={image} className='article-card-image'/> 
      <div className='article-card-info'>
        <p className='article-card-title'>{title}</p>
        <p className='article-card-description'>{description}</p>
        <p className='article-card-date'>{date}</p>
      </div>
    </div>
  )
}

export default Card;