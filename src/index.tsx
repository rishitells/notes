import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const WebFont = require('webfontloader');
WebFont.load({
    google: {
        families: ['Avenir']
    }
});

ReactDOM.render(
    <React.StrictMode>
        <App initialNotes={[{id: 1, title: 'My first note!', text: 'This is my first note!'}]}/>
    </React.StrictMode>,
    document.getElementById('root')
);
