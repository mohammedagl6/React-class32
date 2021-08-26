import React from 'react';
import HobbyList from './exercise1/HobbyList';
import Guarantee from './exercise2/Guarantee';
import freeDelivery from './assets/f-delivery.png';
import chat from './assets/chat.png';
import coin from './assets/coin.png';
import Counter from './exercise3/Counter';
import './app.css';


const App = () => {
  return (
    <>
    <section className="exercise1">
      <HobbyList />
    </section>
    <section className="exercise2">
      <Guarantee 
        img = { freeDelivery }
        title = "Free Shipping"
        description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
      />
      <Guarantee 
        img = { coin }
        title = "100% Money Back"
        description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
      />
      <Guarantee 
        img = { chat }
        title = "Online Support 24/7"
        description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
      />
    </section>
    <section className="exercise3">
      <Counter />
    </section>
    </>
  )
}

export default App;
