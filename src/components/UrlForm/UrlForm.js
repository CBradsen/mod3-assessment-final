import React, { Component } from 'react';
import { getUrls } from '../../apiCalls'

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      long_url: '',
      title: '' 
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { long_url, title } = this.state;

     getUrls('POST', { long_url, title })
      .then(data => {
        console.log('Post worked', data);
        this.props.addNewUrl(data)
        this.clearInputs();
      })
      .catch(error => {
        console.error('Error', error);
      })
    
  }

  clearInputs = () => {
    this.setState({title: '', long_url: ''});
  }

  render() {
    return (
      <form className="inputForm">
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='long_url'
          value={this.state.long_url}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
