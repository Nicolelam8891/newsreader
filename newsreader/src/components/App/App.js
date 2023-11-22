import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import mockData from "../../MockData";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import ArticleDetails from "../ArticleDetails/ArticleDetails";
import Header from "../Header/Header";

const App = () => {
  const [articles, setArticles] = useState(mockData);
  const [error, setError] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const filterdArticles = articles.articles.filter((article) => {
    return article.title.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <Router>
      <main className='App'> </main>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header setSearchInput={setSearchInput} />
              <ArticleContainer articles={filterdArticles} />
            </>
          }
        ></Route>
        <Route
          path='/articleDetails/'
          element={
            <>
              <ArticleDetails />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
