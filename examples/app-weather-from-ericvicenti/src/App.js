import React, { Component } from 'react';
import './App.css';


const PLACES = [
  { name: 'Vitebsk', zip: '001001', url: 'url1' },
  { name: 'Moskva', zip: '002001', url: 'url2' },
  { name: 'Minsk', zip: '003001', url: 'url3' },
  { name: 'SPB', zip: '004001', url: 'url4' }
];

export default class App extends Component {

  state = {
    activePlace: 0
  }

  render() {
    // console.log('PLACES :', PLACES);

    const { activePlace } = this.state;

    return (
      <div className="App">
        {PLACES.map((obj, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
              console.log('activePlace', activePlace, obj.name);
              // console.log('index :', index);
              // console.log('obj', obj);
            }}
          >
            Город {obj.name}</button>
        ))}
        <WeatherDisplay
          key={activePlace}
          zip={PLACES[activePlace].zip}
          city={PLACES[activePlace].name}
        />
      </div>
    );
  }
}


class WeatherDisplay extends Component {
  render() {
    const { zip, city } = this.props;
    return (
      <h1>Чтото покажет на экране {city} {zip}</h1>
    );
  }
}