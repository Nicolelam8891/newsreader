import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import mockData from "../../MockData";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import Header from "../Header/Header";

const App = () => {
  const [articles, setArticles] = useState(mockData);
  console.log("articles:=====", articles);
  console.log("mockData:=====", mockData);
  const [error, setError] = useState("");

  return (
    <Router>
  <main className='App'>
      <Routes>
        <Route path='/' element={
          <>
          <Header />
          </>
        }>

        </Route>
      </Routes>
    <ArticleContainer articles={articles}/>
  </main>
    </Router>

  )
};

export default App;
