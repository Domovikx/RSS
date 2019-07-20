import React, { Component } from 'react';
import './App.css';


const App = () => (<div><ProgrammingLanguageRating /></div>)
export default App;


class ProgrammingLanguageRating extends Component {
  state = {
    value: 'frontend',
    data: [],
    url: 'https://frontend-test-api.alex93.now.sh/api/languages?group=',
    urlRespons: 'https://frontend-test-api.alex93.now.sh/api/languages?group=frontend'
  };
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

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
      const answer = await api_url.json();
      await this.setState({ data: answer.data })
      await console.log('data :', this.state.data);
    }
    getRequest();
  }

  render() {
    return (
      <>
        <form className='form-group' onSubmit={this.handleSubmit}>
          <label htmlFor="exampleFormControlSelect1">
            <p>Programming Language Rating</p>
            <select className="form-control" id="exampleFormControlSelect1"
              value={this.state.value} onChange={this.handleChange}>
              <option value="backend">Back-end</option>
              <option value="frontend">Front-end</option>
              <option value="mobile">Mobile</option>
            </select>
          </label>
          <input className="btn btn-primary mb-2" type="submit" value="Выбрать" />
        </form>
        <LanguageRatingList data={this.state.data} />
      </>
    );
  }
}

class LanguageRatingList extends Component {
  render() {
    const { data } = this.props;
    return <div>
      {data && data.map((data, id) => <div key={id}>
        {data.logo && <img src={data.logo} alt="img" width='100px' />}
        <p>{data.name}</p>
        <p>{data.year}</p>
        {data.docs && <a href={data.docs}>Документация</a>}
      </div>)
      }
    </div>
  }
}