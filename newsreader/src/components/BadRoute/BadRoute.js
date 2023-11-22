import React from "react";
import "./BadRoute.css";
import { Link } from "react-router-dom";

const BadRoute = ({ errorRoute, messageRoute }) => {
  return (
    <div className='error-bad-route-container'>
      <Link to='/' className='error-home-button'>
        <button className='nonsense-home-button'> HOME </button>
      </Link>
      <img
        className='error-nonsense-image'
        alt='back home picture with branches'
        src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4c960925-08d7-4216-ab5b-8a6b53c68ab8/dbwck80-372f81c9-de1c-4fba-8114-6bf4a8f823c0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRjOTYwOTI1LTA4ZDctNDIxNi1hYjViLThhNmI1M2M2OGFiOFwvZGJ3Y2s4MC0zNzJmODFjOS1kZTFjLTRmYmEtODExNC02YmY0YThmODIzYzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dpfhq-7_qgeFrkymsMXmqClkfGBimlFAXyKVxQKlK-g'
      />
      <h1 className='error-message-nonsense'>ERROR</h1>
      {errorRoute && <h3 className='error-nonsense'>{errorRoute}</h3>}
      <p className='bad-route-message'>{messageRoute}</p>
    </div>
  );
};

export default BadRoute;
