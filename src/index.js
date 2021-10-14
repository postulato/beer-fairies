import React from 'react';
import ReactDOM from 'react-dom';
import {app} from './firebase';

console.log(app);

ReactDOM.render(
  <React.StrictMode>
    <h1>Beer fairies</h1>
  </React.StrictMode>,
  document.getElementById('root')
);
