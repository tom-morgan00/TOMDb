import React from 'react';
import HomePage from './pages/HomePage';
import MovieDetails from './pages/MovieDetails';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';

export default function App() {
  // console.log(this.props);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movie/:id" exact component={MovieDetails} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
