import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const component = () => {
  let element = document.createElement('div');
  element.setAttribute('id', 'root');
  return element;
};
document.body.appendChild(component());
ReactDOM.render(<App />, document.getElementById('root'));