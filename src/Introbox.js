import React,{ useState } from 'react'
import "./Introbox.css"
import Searchbox from './Searchbox';

const Introbox = ({setData}) => {
    const [data1, setData1] = useState([]);
    setData(data1);
    return (
        <div className="introbox">
            <div className="writebox">
                <h1>Unsplashed</h1>
                <h4>The internet’s source of freely-usable images.</h4>
                <h4>Powered by creators everywhere.</h4>
                <Searchbox setData={setData1}/>
                
            </div>
        </div>
    )
}

export default Introbox
