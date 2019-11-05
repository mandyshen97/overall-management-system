import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import cssVars from 'css-vars-ponyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import * as serviceWorker from './serviceWorker';

cssVars();

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
