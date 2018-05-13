import React from 'react';


export const Definitions = (props) => {
    const definitions = props.definitions.map(definition => 
            <div className="content__def">
                <div className="def__type">
                    <h4>{definition.partOfSpeech}</h4>
                </div>
                <div className="def__example">
                    <p>{definition.definition}</p>
                </div>
            </div>
    )
    return(
        <div className="col-sm-6 col-md-4">
            <div className="result">
                <div className="result__title">
                    <h1>The Definitions</h1>
                </div>
                <div className="result__content content--scroll">
                    {definitions}
                </div>
            </div>
        </div>
    )
}

export default Definitions;
// <div className="content__def">
//     <div className="def__type">
//         <h4>Noun</h4>
//     </div>
//     <div className="def__example">
//         <p>your occupation or line of work</p>
//     </div>
// </div>
// <div className="content__def">
//     <div className="def__type">
//         <h4>Noun</h4>
//     </div>
//     <div className="def__example">
//         <p>a secret scheme to do something (especially something underhand or illegal)</p>
//     </div>
// </div>
// <div className="content__def">
//     <div className="def__type">
//         <h4>Adjective</h4>
//     </div>
//     <div className="def__example">
//         <p>willing to face danger</p>
//     </div>
// </div>
// <div className="content__def">
//     <div className="def__type">
//         <h4>verb</h4>
//     </div>
//     <div className="def__example">
//         <p>place to bet on</p>
//     </div>
// </div>