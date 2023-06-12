import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      err: ""
    }
  }

  componentDidMount() {
    getUrls('GET')
      .then((response) => this.setState( {urls: response.urls} ))
      .catch((error) => this.setState({err: error}))
    }
   
  addNewUrl = (newUrl) => {
    this.setState(prevState => ({urls: [...prevState.urls, newUrl]}));
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addNewUrl={this.addNewUrl} />
        </header>
        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
