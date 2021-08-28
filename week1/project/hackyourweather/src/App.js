import data from './city-weather.json';
import './app.css';
import City from './City';

const App = () => {
  return (
    <div className="container">
      <header className="title"><h1>Weather</h1></header>
      <main className="content">
        { data.map( (city) => <City city={ city } key={ city.id }/> ) }
      </main>
    </div>
  );
}

export default App;
