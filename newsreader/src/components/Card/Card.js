import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ index, title, image, description, date }) => {
  return (
    <Link className='no-underline article-card' to={`/articleDetails/${index}`}>
      <div className='card'>
        <img src={image} className='article-card-image' alt={title}/>
        <div className='article-card-info'>
          <p className='article-card-title'>{title}</p>
          <p className='article-card-description'>{description}</p>
          <p className='article-card-date'>{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
