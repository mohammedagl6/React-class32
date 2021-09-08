import { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import { useParams, Link } from 'react-router-dom';

const  CityDetails = () => {
  const [city, setCity] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const { cityId } = useParams();


  const fetchData = async () => {
    try {
      const URL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY} `;
    
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data.list);
        setCity(data.city);
      }
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(() => {
    fetchData();
  }, [cityId]);

  return (
    <>
    <header className="title"><h1>5 days Forecast</h1></header>
    <div className="content">
        <h2>
            {city.name}, {city.country}
        </h2>
        <AreaChart
            width={750}
            height={500}
            data={weatherData}
            margin={{
            top: 10,
            right: 20,
            }}
        >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="dt_txt" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" name="temp" dataKey="main.temp" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        
        <h3>
            <Link to="/"> Go Back!</Link>
        </h3>
    </div>
    </>
  );
}

export default CityDetails;