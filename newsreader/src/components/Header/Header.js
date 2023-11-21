import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <div className='logo-title-container'>
        <Link to='/'>
          <img src='news.png' className='news-logo' />
        </Link>
          <p className='header-title'>Dark News Reader</p>
      </div>
      <div className='search-bar-container'></div>
    </header>
  );
};

export default Header;
