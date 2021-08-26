

const City = ({ city }) => {
    const {name,
        sys: {country},
        weather: [{main: weatherMain,
        description: weatherDescription}],
        main: {temp_min, temp_max},
        coord
      } = city;
    return(
       <article className="city">
           <h2>{`${name}, ${country}`}</h2>
           <p>
                <strong>{weatherMain}</strong><br />
                {weatherDescription}
           </p>
           <p>min temp: {(temp_min - 273.15).toFixed(1)}</p>
           <p>max temp: {(temp_max - 273.15).toFixed(1)}</p>
           <p>location: {`${coord.lon}, ${coord.lat}`}</p>
       </article>
    )
}

export default City;