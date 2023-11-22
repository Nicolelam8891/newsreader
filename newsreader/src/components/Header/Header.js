import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = ({ setSearchInput }) => {
  const [searchArticle, setSearchArticle] = useState("");
  const location = useLocation();

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchInput();
    setSearchInput(searchArticle);
  };

  const isNotHomePage = location.pathname !== "/";

  return (
    <header className='header'>
      <div className='logo-title-container'>
        <Link to='/'>
          <img src='news.png' className='news-logo' alt='News Logo' />
        </Link>
        <p className='header-title'>
          <em>Your nightly news reader</em>
        </p>
      </div>
      <div className='search-bar-container'>
        {isNotHomePage ? (
          <Link to='/' className='home-button'>
            HOME
          </Link>
        ) : (
          <form onSubmit={handleSearch}>
            <input
              className='search-input-bar'
              type='text'
              placeholder='Search Article Title...'
              value={searchArticle}
              onChange={(event) => setSearchArticle(event.target.value)}
            />
            <button className='search-button' type='submit'>
              SEARCH
            </button>
          </form>
        )}
      </div>
    </header>
  );
};

export default Header;
