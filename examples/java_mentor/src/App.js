import React, { Component } from 'react';
import './App.css';

const App = () => (<div><ProgrammingLanguageRating /></div>)
export default App;


class ProgrammingLanguageRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'frontend',
      url: 'https://frontend-test-api.alex93.now.sh/api/languages?group=',
      urlRequest: 'https://frontend-test-api.alex93.now.sh/api/languages?group=frontend'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      urlRequest: this.state.url + event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    getRequest(this.state.urlRequest);
    console.log('urlRequest', this.state.urlRequest)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Programming Language Rating: {this.state.value}
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="backend">Back-end</option>
            <option value="frontend">Front-end</option>
            <option value="mobile">Mobile</option>
          </select>

        </label>
        <input type="submit" value="Выбрать" />
        {this.state.urlRequest}
      </form>
    );
  }
}

const getRequest = async (url) => {
  const api_url = await fetch(url);
  const data = await api_url.json();
  console.log('data', data);
  return data;
}