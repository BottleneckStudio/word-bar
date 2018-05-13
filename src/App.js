import React, {Component} from 'react';
import './App.css';
import Search from './components/search'
import Result from './components/result'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: null
    }
  }
  render() {
    return (
      <Router>
        <div>
            <Route exact path="/" component={Search}/>
            <Route exact path="/word/:word" component={Result}/>
        </div>
      </Router>
    );
  }
}

export default App;

          // <Search onSearch={this.onSearch}/>
          // <Result
          //   show={this.state.result
          //   ? true
          //   : false}
          //   result={this.state.result}/>