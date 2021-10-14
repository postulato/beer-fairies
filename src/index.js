import React from 'react';
import ReactDOM from 'react-dom';
// import {app} from './firebase';
import { MainHeader } from './components';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <MainHeader />
  </React.StrictMode>,
  document.getElementById('root')
);
