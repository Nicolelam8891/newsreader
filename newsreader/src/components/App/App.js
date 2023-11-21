import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import mockData from "../../MockData";
import ArticleContainer from "../ArticleContainer/ArticleContainer";

const App = () => {
  const [articles, setArticles] = useState(mockData);
  console.log("articles:=====", articles);
  console.log("mockData:=====", mockData);
  const [error, setError] = useState("");

  return (
  <main className='App'>
    <h1>News Reader</h1>
    <ArticleContainer articles={articles}/>
  </main>

  )
};

export default App;
