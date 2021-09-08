import { Link } from "react-router-dom";


const City = ({ city, setCityList }) => {
    const {
        id,
        name,
        sys: {country},
        weather: [{main: weatherMain,
        description: weatherDescription}],
        main: {temp_min, temp_max},
        coord
      } = city;
    return(
       <article className="city">
           <span
                className="close"
                onClick={() => {
                    setCityList(cityList => cityList.filter(city => city.id !==id))
                }}
           >
                <i className="far fa-times-circle fa-2x"></i>
           </span>
           <Link to={`/${id}`}>
           <h2>{`${name}, ${country}`}</h2>
           </Link>
           <p>
                <strong>{weatherMain}</strong><br />
                {weatherDescription}
           </p>
           <p>min temp: {temp_min}</p>
           <p>max temp: {temp_max}</p>
           <p>location: {`${coord.lon}, ${coord.lat}`}</p>
       </article>
    )
}

export default City;