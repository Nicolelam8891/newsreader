import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import mockData from "../../MockData";

const App = () => {
  const [articles, setArticles] = useState(mockData);
  console.log("articles:=====", articles);
  console.log("mockData:=====", mockData);
  const [error, setError] = useState("");


  return <main className='App'>
    <Routes>
      {/* <Route path="/" element={} /> */}
    </Routes>
  </main>;
};

export default App;
