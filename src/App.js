import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Mainpage from "./Mainpage";
import { getData } from './ApiGETConfig'
import {DataContext} from "./dataContext";

function App() {
  const [users, setUsers] = useState([]);

  // const [page, setPage] = useState(1);
  // const [commitHistory, setCommitHistory] = useState([]);
  // const [count, setCount] = useState(0);
  // const [isLoading, setIsLoading] = useState(true);

  // const loadMoreCommit = () => {
  //   setPage(page + 1);
  // };

  // useEffect(() => {
  //   fetch(
  //     `https://api.github.com/search/commits?q=repo:facebook/react+css&page=${page}`,
  //     {
  //       method: "GET",
  //       headers: new Headers({
  //         Accept: "application/vnd.github.cloak-preview"
  //       })
  //     }
  //   )
  //     .then(res => res.json())
  //     .then(response => {
  //       setCommitHistory(response.items);
  //       setCount(response.total_count);
  //       setIsLoading(false);
  //     })
  //     .catch(error => console.log(error));
  // }, [page]);

  // const contextValue = {
  //   comments: commitHistory,
  //   count,
  //   isLoading,
  //   loadMoreCommit
  // }

  // useEffect( async () => {
  // const response =
  //     await axios.get("https://jsonplaceholder.typicode.com/users",
  //       // { params: {name: 'bruno'}},
  //       { headers: {'Content-Type': 'application/json'}}
  //     )
  //     setUsers(response.data);
  // }, []);
    useEffect(() => {
      const config = { headers: {'Content-Type': 'application/json'}}
      // const params = { params: {name: 'bruno'}}
      const URL = `https://jsonplaceholder.typicode.com/users`;
      // const payload = {}
       getData(URL, config, (res) => {
        setUsers(res.data);
        },(err) => {
          //error
          alert(err);
      });
      }, []);

  const contextValue = {
    users
  }

  return (
    <DataContext.Provider value={contextValue}>
      <Mainpage/>
    </DataContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;