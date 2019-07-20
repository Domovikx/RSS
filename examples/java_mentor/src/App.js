import React, { Component } from 'react';
import './App.css';


const App = () => (<div><ProgrammingLanguageRating /></div>)
export default App;


class ProgrammingLanguageRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'frontend',
      languageRating: [],
      url: 'https://frontend-test-api.alex93.now.sh/api/languages?group=',
      urlRespons: 'https://frontend-test-api.alex93.now.sh/api/languages?group=frontend'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      urlRespons: this.state.url + event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    const getRequest = async () => {
      const api_url = await fetch(this.state.urlRespons);
      const languageRating = await api_url.json();
      await this.setState({ languageRating })
    }
    getRequest();
  }

  render() {
    const { languageRating } = this.state;
    console.log('languageRating', languageRating)
    return (
      <>
        <form className='form-group' onSubmit={this.handleSubmit}>
          <label for="exampleFormControlSelect1">
            <p>Programming Language Rating</p>
            <select class="form-control" id="exampleFormControlSelect1"
              value={this.state.value} onChange={this.handleChange}>
              <option value="backend">Back-end</option>
              <option value="frontend">Front-end</option>
              <option value="mobile">Mobile</option>
            </select>
          </label>
          <input type="submit" value="Выбрать" />
        </form>
        <div>
          {languageRating.data &&
            <div>
              {
                languageRating.data.map((data, id) =>
                  <div key={id}>
                    {data.logo &&
                      <img src={data.logo} alt="альтернативный текст" width='100px' />}
                    <p>{data.name}</p>
                    <p>{data.year}</p>
                    {data.docs &&
                      <a href={data.docs}>Документация</a>}
                  </div>)
              }
            </div>
          }
        </div>
      </>
    );
  }
}