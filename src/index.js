import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/grid.css';
import './css/animation.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
