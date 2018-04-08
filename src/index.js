import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithHOC from './AppWithHOC';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<AppWithHOC message="Hello World!!!" />, document.getElementById('root'));
registerServiceWorker();
