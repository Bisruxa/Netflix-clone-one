import React ,{useState,useEffect}from 'react' //we used the command rafce
import axios from '../../utils/axios'
import requests from '../../utils/requests'
import './banner.css'

const Banner = () => {
  const [Movie,setMovie] = useState([]);
  useEffect(()=>{(
async  ()=> {
  try {
    const request = await axios.get(requests.fetchNetflixOriginals);
    console.log(request);
    setMovie(request.data.results[
      Math.floor(Math.random()*request.data.results.length)
    ]);
    
    
  } catch (error) {
    console.log("error",error);
  }

})() },[]);
  return (
    <div
      className="banner"
      style={
        {
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${Movie?.backdrop_path}')`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat"
}
      }>
        <div className="banner_contents">
          <h1 className="banner_tittle">
            {Movie?.title || Movie?.name || Movie?.original_name}
          </h1>
          <div className="banner_buttons">
           <button className="banner_button play">Play</button>
           <button className="banner_button">My List</button>

          </div>
          {/* <h1 className="banner_description">{truncate(Movie?.overview,150)}</h1> */}
        </div>
        <div className="banner_fadeBotton"></div>


    </div>
  );
}

export default Banner;
