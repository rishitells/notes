import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from 'styled-components/macro'

const WebFont = require('webfontloader');
WebFont.load({
    google: {
        families: ['Avenir']
    }
});

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Avenir', serif;
  }
`
ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle/>
        <App initialNotes={[{id: 1, title: 'My first note!', text: 'This is my first note!'}]}/>
    </React.StrictMode>,
    document.getElementById('root')
);
