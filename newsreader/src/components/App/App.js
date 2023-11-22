import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import mockData from "../../MockData";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import ArticleDetails from "../ArticleDetails/ArticleDetails";
import Header from "../Header/Header";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const getAllArticles = () => {
    return fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2023-11-19&to=2023-11-19&sortBy=popularity&apiKey=0f379f20ac8f44c8b3d787d28a09635a"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((event) => {
        console.error(event.message);
        setError(event.message);
      });
  };
  useEffect(() => {
    getAllArticles();
  }, []);

  const filterdArticles = articles.filter((article) => {
    return article.title.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <Router>
      <Header setSearchInput={setSearchInput} />
      <main className='App'> </main>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <ArticleContainer articles={filterdArticles} />
            </>
          }
        ></Route>
        <Route
          path='/articleDetails/:index'
          element={
            <>
              <ArticleDetails articles={filterdArticles} />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
