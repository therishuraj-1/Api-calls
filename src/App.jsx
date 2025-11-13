import axios from "axios"
import { useState } from "react"

const App = () => {

    const [data,setData]=useState([])
 const getdata= async ()=>{

    const response= await axios.get("https://picsum.photos/v2/list?page=2&limit=10")
    setData(response.data);
    
 }
 
 
    
  return (
    < >
     <button className="p-2 text-2xl bg-green-400 m-2"
      onClick={getdata}>GetData</button>

       <div className="flex flex-wrap  p-10 pl-15  gap-15" >
        {data.map(function(elem,idx){
          return(
            <div key={elem}
            className=" relative h-35 w-60 rounded-xl " >
                <img src={elem.download_url} />
                <h1 className="text-white text-xl font-bold" >{elem.author}</h1>
            </div>
          )})}
      </div>    
    </>
  )
}

export default App

