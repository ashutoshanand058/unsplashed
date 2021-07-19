import React,{ useState } from 'react';
import "./App.css"
import Gallery from './Gallery';
import Introbox from './Introbox';

const App = () => {
  const [data, setData] = useState([]);

  return ( 
    <div className="app">
      <Introbox setData={setData}/>
      <Gallery results={data} />
    </div>
  )
}

export default App
