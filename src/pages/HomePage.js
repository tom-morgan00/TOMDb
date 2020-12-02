import React, { Component } from 'react';
import HeroImage from '../components/HeroImage/HeroImage';
import Results from '../components/Results/Results';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <HeroImage
          title="Welcome to TOMDb"
          text="Search for your favourite movies and TV shows"
          image="images/background.jpg"
        />
        <Results />
      </div>
    );
  }
}
