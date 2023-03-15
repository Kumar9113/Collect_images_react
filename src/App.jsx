
import React,{useState} from 'react';
import axios from 'axios';
import classes from'./App.module.css'

import Gallary from './Gallary';
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";


const App = () => {
 
  const [search,setSearch] = useState("");
  const [data,setData]=useState([]);
  
  const changeHandler = e =>{
    setSearch(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then((response)=>
    {
      setData(response.data.photos.photo)
      
    })
    console.log(search)
   
  }
  
  return (
    <div>
      <center>
        <h1>Gallery Snapshot</h1><br></br>
        <form onSubmit={submitHandler}>
          <input className={classes.text} size="50" type="text"  placeholder='Search Here' onChange={changeHandler} value={search}/> <br /><br />
          <input type="submit" name="Search" />
        </form>
        <br/>
        <h2>Hiii</h2>
        {data.length>=1?<Gallary data={data}/>:<h4>No Data Found</h4>}
       

       
      </center>
    </div>
  )
}

export default App

