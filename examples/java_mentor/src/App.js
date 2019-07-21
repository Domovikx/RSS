import React, { Component } from 'react';

const App = () => (<div className='container'><ProgrammingLanguageRating /></div>)
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
        <h1 className='row justify-content-md-center'>Programming Language Rating</h1>
        <form className='form-group row justify-content-md-center' onSubmit={this.handleSubmit}>
          <div class="form-inline mb-2">
            <select class="custom-select" id="inputGroupSelect02"
              value={this.state.value} onChange={this.handleChange}>
              <option value="backend">Back-end</option>
              <option value="frontend">Front-end</option>
              <option value="mobile">Mobile</option>
            </select>
            <div class="input-group-append">
              <input class="input-group-text" for="inputGroupSelect02" type="submit" value="Выбрать" />
            </div>
          </div>
        </form>
        <LanguageRatingList data={this.state.data} />
      </>
    );
  }
}

class LanguageRatingList extends Component {
  render() {
    const { data } = this.props;
    return <div class="card-columns">
      {data && data.map((data, id) =>
        <div key={id} class="card">
          {data.logo && <img src={data.logo} alt="img" class="card-img-bottom" />}
          <div className='card-body'>
            <h2>{data.name}</h2>
            <p>{data.year}</p>
            {data.docs && <a href={data.docs} target='_blank' class="btn btn-info">Документация</a>}
          </div>
        </div>)
      }
    </div>
  }
}