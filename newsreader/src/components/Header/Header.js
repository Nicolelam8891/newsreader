import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from 'react'

const Header = ( { setSearchInput }) => {
  const [searchArticle, setSearchArticle] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchInput();
    setSearchInput(searchArticle);
  }
  return (
    <header className='header'>
      <div className='logo-title-container'>
        <Link to='/'>
          <img src='news.png' className='news-logo' />
        </Link>
          <p className='header-title'><em>Your nightly news reader</em></p>
      </div>
      <div className='search-bar-container'>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchArticle}
            onChange={(event) => setSearchArticle(event.target.value)}
          />
          <button type='submit'>SEARCH</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
