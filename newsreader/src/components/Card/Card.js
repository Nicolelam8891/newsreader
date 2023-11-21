import './Card.css'

const Card = ( { id, title, image, description, date } ) => {
  
  return (
    <div className='card'>
      <p>{title}</p>
      <img src={image} /> 
      <p>{description}</p>
      <p>{date}</p>
    </div>
  )
}

export default Card;