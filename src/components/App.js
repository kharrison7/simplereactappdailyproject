import React, { Component } from 'react';
import moment from 'moment';
// import logo from '../logo.svg';
import EarthquakeInfo from './EarthquakeInfo.js';
import EarthquakeList from './EarthquakeList.js';
import EarthquakeListLive from './LiveQuakes.js';


import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="title">
      <div className="my-header">
      "Live Earthquakes!"
      </div>
      <div className="earthquake-title">
     "This is a list of earthquakes that happened over the past hour."
     </div>
        <EarthquakeListLive />
        <br />
        <hr />
            <div className="title">
            <div className="my-header">
            "Example Earthquakes!"
            </div>
            </div>
            <EarthquakeInfo />
            <EarthquakeList />
          </div>
      </div>
    );
  }
}

export default App;
