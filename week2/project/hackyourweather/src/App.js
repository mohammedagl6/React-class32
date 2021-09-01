
import './app.css';
import City from './City';
import SearchForm from './SearchForm';
import { useState } from 'react';



const App = () => {

  const [city, setCity] = useState({})
  return (
    <div className="container">
      <header className="title"><h1>Weather</h1></header>
      <main className="content">
        <SearchForm setCity={setCity} />
        {city?.cod && (city.cod === 200 ? <City city={ city } /> : <p>Please enter a valid city name!</p>) }
      </main>
    </div>
  );

}

export default App;
