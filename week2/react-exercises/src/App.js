import React from 'react';
import Friend from './exercise1/Friend';
import DogGallery from './exercise2/DogGallery';
import RandomJoke from './exercise3/RandomJoke';
import './app.css';




const App = () => {
  return (
    <>
    <section className="exercise1">
      <Friend />
    </section>
    <section className="exercise2">
      <DogGallery />
    </section>
    <section className="exercise3">
      <RandomJoke />
    </section>
    </>
  )
}

export default App;
