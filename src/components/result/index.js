import React, {Component} from 'react';
import './result.css';
import {URL} from '../../services'
import Definitions from '../definitions'
import {Link} from 'react-router-dom'

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: null
        }
        console.log(props);
    }

    componentDidMount() {
        this.onSearch(this.props.match.params.word);
    }

    onSearch = (word) => {
        const link = URL + word
        console.log(link)
        fetch(link).then(res =>
            res.json()
        ).then(obj => {
            //TODO: check if response object is okay.
            console.log(obj)
            this.setState({word: obj})
        }).catch(err => {
            console.log(err)
        });
    }

    goBack = () => {
        this.props.history.goBack();
    }

    synonyms = (synonyms) => {
        const list = synonyms.map(synonym => <a href={`/word/${escape(synonym)}`}>
            {synonym}
         </a>)
        return (
            <p className="content__syn">
            {list}
            </p>
        ) 
    };

    render() {
        let word = this.state.word;
        return (
            <div
                className={`result-overlay fade-in-up ${word != null
                ? 'active'
                : ''}`}>
                {word != null && <div className="container">
                    <div className="row">
                        <div className="searched">
                            <p className="searched__text">here is what I know about the word</p>
                            <h1 className="searched__word">{word.text}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <Definitions definitions={word.definition} />
                        <div className="col-sm-6 col-md-4">
                            <div className="result">
                                <div className="result__title">
                                    <h1>It's pronounced</h1>
                                </div>
                                <div className="result__content">
                                    <h1 className="emp">{word.pronunciation[0].IPA}</h1>
                                </div>
                                <div className="result__title">
                                    <h1>It sounds like this</h1>
                                </div>
                                <div className="result__content"></div>
                                <div className="result__title">
                                    <h1>it translates to</h1>
                                </div>
                                <div className="result__content">
                                    <h1 className="emp">{word.translation}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="result">
                                <div className="result__title">
                                    <h1>It's Synonymous to</h1>
                                </div>
                                <div className="result__content content--scroll">
                                    {this.synonyms(word.synonyms)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
}
                <h3 className="returnto">
                    <Link to="">← ask me another word</Link>
                </h3>
            </div>
        );
    }
}

export default Result;
