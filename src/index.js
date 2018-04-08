import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import AppWithHOC from './AppWithHOC';
import AppWithRenderProp from './AppWithRenderProp';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<AppWithRenderProp message="Hello World!!!" />, document.getElementById('root'));
registerServiceWorker();
