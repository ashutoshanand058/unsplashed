import React,{ useState } from 'react'
import "./Searchbox.css"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
const API_KEY = "J-nX5vfqhwL5mbYnFkmYcGqsD7oDgn2eQqz34dZwOXA";

const Searchbox = ({setData}) => {
    const [value, setValue] = useState("");
    const [results, setResults] = useState([]);
    const getImages = () =>{
        console.log("Get Images called");
        fetch(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${value}&orientation=squarish&per_page=50`)
        .then(res=>res.json())
        .then(data =>{
        setResults(data.results);
        setData(data.results);
        console.log("Results : ",results);
        })
    }
    return (
        <div className="searchbox">
            <SearchRoundedIcon className="searchIcon" />
            <input type="text" value ={value} onChange={e => setValue(e.target.value)}/>
            <button onClick={getImages}>Submit</button>
        </div>
    )
}

export default Searchbox
