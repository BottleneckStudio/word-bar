import React, {Component} from 'react';
import './search.css';
import Logo from '../../resources/svg/bar-logo.svg'

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
        }
    }

    handleChange = (event) => {
        this.setState({input: event.target.value})
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // this.onSearch(this.state.input)
            console.log("Enter button pressed")
            window.location = "/word/" + this.state.input
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="search-group">
                        <div className="logo">
                            <img src={Logo} alt=""/>
                        </div>
                        <div className="title typewriter">
                            <h1 className="title__text">"Word Bar"</h1>
                        </div>
                        <div className="search">
                            <input
                                className="search__input"
                                onKeyPress={this.handleKeyPress}
                                value={this.state.input}
                                onChange={this.handleChange}
                                placeholder="Give him any word"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
