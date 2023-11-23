import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = ({ setSearchInput, resetSearchInput }) => {
  const [searchArticle, setSearchArticle] = useState("");
  const [searchError, setSearchError] = useState("");
  const location = useLocation();

  const handleSearch = (event) => {
    event.preventDefault(); 
    if (!searchArticle.trim()) {
      setSearchError("Please enter a topic in your seach");
    } else {
      setSearchInput(searchArticle);
      clearInput('');
      setSearchError("");
    }
  };

  const clearInput = () => {
    setSearchArticle("");
  }

  const isNotHomePage = location.pathname !== "/";

  return (
    <header className='header'>
      <div className='logo-title-container'>
        <Link to='/'>
          <img src='news.png' className='news-logo' alt='News Logo' onClick={resetSearchInput} />
        </Link>
        <p className='header-title'>
          <em>Your nightly news reader</em>
        </p>
      </div>
      <div className='search-bar-container'>
        {isNotHomePage ? (
          <Link to='/' className='home-button no-underline'>
            HOME
          </Link>
        ) : (
          <form onSubmit={handleSearch}>
            <input
              className='search-input-bar'
              type='text'
              placeholder='Search for articles...'
              value={searchArticle}
              onChange={(event) => setSearchArticle(event.target.value)}
            />
            <button className='search-button' type='submit'>
              SEARCH
            </button>
          </form>
        )}
      <div className="search-error-container">
        {searchError && <p className="search-error">{searchError}</p>}
      </div>
      </div>
    </header>
  );
};

export default Header;
