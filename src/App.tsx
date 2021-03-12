import logo from './logo.svg';
import './App.css';

import {useState, useEffect} from 'react';
import axios from 'axios';
import TableContainer from './components/Table/TableContainer';

function App() {
  let [items, setItems] = useState();
  useEffect(() => {
    axios.get('https://api.spacexdata.com/v3/launches?limit=12&sort=launch_year&order=desc')
    .then((res) => {
      setItems(res.data.results);
      console.log(res.data)
    })
  }, []);
  return (
    <div className="App">
      {/* {items.map((item) => {
          return <div>{item.name}</div>
      })} */}
      <TableContainer />
    </div>
  );
}

export default App;
