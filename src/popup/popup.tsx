import React from 'react' ;
import ReactDOM from 'react-dom/client';

const test = <p>Hello WOrld</p>

const container = document.createElement('div');
document.body.appendChild(container);
const root = ReactDOM.createRoot(document.querySelectorAll('div')[0]);
root.render(test);