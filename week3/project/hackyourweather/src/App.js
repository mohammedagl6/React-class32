
import './app.css';
import City from './City';
import SearchForm from './SearchForm';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CityDetails from './CityDetails'

const App = () => {

  const [cityList, setCityList] = useState([])
  const[showNotValid, setShowNotValid] = useState(false);
  return (
    <div className="container">
      <Router>
      <Switch>
      <Route path="/" exact>
      <header className="title"><h1>Weather</h1></header>
      <main className="content">
        <SearchForm setCityList={setCityList} setShowNotValid={setShowNotValid} />
        {showNotValid && <p>Please enter a valid city name!</p> }
        {cityList.map(city => <City city={city} setCityList={setCityList} key={city.id}/>)}
      </main>
      </Route>
      <Route path="/:cityId">
        <CityDetails />
      </Route>
      </Switch>
      </Router>
    </div>
  );

}

export default App;
