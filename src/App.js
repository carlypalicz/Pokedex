import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PokemonPage from "./components/PokemonPage";
import BerryPage from "./components/BerryPage";
import MachinePage from "./components/MachinePage";
import Pokemon from "./components/Pokemon";
import Berries from "./components/Berries";
import Machines from "./components/Machines";
import Error from "./components/Error";


export default function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <ul className="nav-container">
          <Link className="nav" to="/">Home</Link>
          <Link className="nav" to="/pokemon/page/0">Pokemon</Link>
          <Link className="nav" to="/berries/page/0">Berries</Link>
          <Link className="nav" to="/machines/page/0">Machines</Link>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/pokemon/page/:page" component = { Pokemon }/>
        <Route exact path="/berries/page/:page" component = {Berries }/>
        <Route exact path="/machines/page/:page" component = { Machines}/>
        <Route exact path="/pokemon/:index" component={ PokemonPage }/>
        <Route exact path="/berries/:index" component={ BerryPage }/>
        <Route exact path="/machines/:index" component={ MachinePage }/>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*" component={Error}/>
      </Switch>
    </div>
  </Router>
    
  );
}

function Home() {
  return (
    <div className="dashboard">
      <h1>Home</h1>
      <p>A site to learn about various Pokemon, Berries, and Machines from all of the games!</p>
      <div className="info">
        <h2>Pokemon</h2>
        <p>Pokémon are creatures of all shapes and sizes who live in the wild or can be trained to live alongside humans. Pokémon can say their names but otherwise generally cannot speak. There are currently more than 900 Pokemons in the Pokémon universe, and they are raised and commanded by their owners (called “Trainers”). Pokémon are able to grow, level up and gain experience and eventually evolve into stronger Pokémon. There are over a dozen different types of Pokémon, including as Fire type, Psychic type, and Dragon type. Every Pokémon type comes with advantages and disadvantages when battling against other Pokémon.</p>
        <h2>Berries</h2>
        <p>Berries are small, juicy, fleshy fruit in the Pokemon universe. There is a large variety of fruits, each with different flavors, names, and effects. Fruits started to appear in the Generation II games, and have since become critical held items during Pokemon battles, where their various effects include HP and status condition restoration, stat enhancement, and even damage negation.</p>
        <h2>Machines</h2>
        <p>In Pokemon, Machines are items that resemble discs. They are used to teach moves to Pokemon. There are two types of machines: TMs, or Technical Machines, and HMs, or Hidden Machines. HMs can be used just like TMs but can only be used a limited number of times and cannot be disposed. The moves taught by HMs are considered Hidden Moves. HMs have not been used since Generation VII, and in general, the machines vary throughout the games.</p>
        <p>Much of the above info was learned from <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page">Bulbapedia</a></p>
      </div>
    </div>
  )
}
