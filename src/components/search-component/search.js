import React, { Component } from 'react';
import './search.css';
import Logo from '../../resources/svg/bar-logo.svg'

class App extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="search-group">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="title typewriter">
                        <h1 className="title__text typing">"Word Bar"</h1>
                    </div>
                    <div className="search">
                        <input className="search__input" type="" name="" placeholder="Give him any word" />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
