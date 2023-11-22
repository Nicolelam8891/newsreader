//   const getAllArticles = () => {
//     return fetch("https://newsapi.org/v2/everything?q=apple&from=2023-11-19&to=2023-11-19&sortBy=popularity&apiKey=0f379f20ac8f44c8b3d787d28a09635a")
//     .then((response) => {
//       if(!response.ok) {
//         throw new Error(`${response.status} ${response.statusText}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log("data:=====", data);
//       setArticles(data.articles);
//       console.log("data.articles:=====", data.articles);
//     })
//     .catch((event) => {
//       console.error(event.message);
//       setError(event.message);
//     })
//   }
//   useEffect(() => {
//     getAllArticles();
//   }, []);


// export default getAllArticles








