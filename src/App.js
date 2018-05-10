import React, { Component } from 'react';
import './App.css';
import Search from './components/search-component/search'
import Result from './components/result-component/result'

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <Result />
      </div>
    );
  }
}

export default App;
