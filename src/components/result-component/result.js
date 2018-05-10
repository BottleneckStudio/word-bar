import React, { Component } from 'react';
import './result.css';

class Result extends Component {
  render() {
    return (
        <div className="result-overlay active fade-in-up">
        <div className="container">
            <div className="row">
                <div className="searched">
                    <p className="searched__text">here is what I know about the word</p>
                    <h1 className="searched__word">"Word Bar"</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="result">
                        <div className="result__title">
                            <h1>The Definitions</h1>
                        </div>
                        <div className="result__content content--scroll">
                            <div className="content__def">
                                <div className="def__type">
                                    <h4>Noun</h4>
                                </div>
                                <div className="def__example">
                                    <p>your occupation or line of work</p>
                                </div>
                            </div>
                            <div className="content__def">
                                <div className="def__type">
                                    <h4>Noun</h4>
                                </div>
                                <div className="def__example">
                                    <p>a secret scheme to do something (especially something underhand or illegal)</p>
                                </div>
                            </div>
                            <div className="content__def">
                                <div className="def__type">
                                    <h4>Adjective</h4>
                                </div>
                                <div className="def__example">
                                    <p>willing to face danger</p>
                                </div>
                            </div>
                            <div className="content__def">
                                <div className="def__type">
                                    <h4>verb</h4>
                                </div>
                                <div className="def__example">
                                    <p>place to bet on</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="result">
                        <div className="result__title">
                            <h1>It's pronounced</h1>
                        </div>
                        <div className="result__content">
                            <h1 className="emp">“ɡeɪm”</h1>
                        </div>
                        <div className="result__title">
                            <h1>It sounds like this</h1>
                        </div>
                        <div className="result__content">
                            
                        </div>
                        <div className="result__title">
                            <h1>it translates to</h1>
                        </div>
                        <div className="result__content">
                            <h1 className="emp">ゲーム</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <div className="result">
                        <div className="result__title">
                            <h1>It's Synonymous to</h1>
                        </div>
                        <div className="result__content content--scroll">
                            <p className="content__syn">
                                <a href="#"> hello </a>
                                <a href="#"> Jam </a>
                                <a href="#"> Adjective </a>
                                <a href="#"> Verb </a>
                                <a href="#"> SUPPPPER </a>
                                <a href="#"> hello </a>
                                <a href="#"> hello </a>
                                <a href="#"> hello </a>
                                <a href="#"> hello </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h3 className="returnto"> 
            <a href="#">← ask me another word</a> 
        </h3>
    </div>
    );
  }
}

export default Result;
