import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Grid from './components/grid';

function render() {
  //ReactDOM.render(<h2>Hello from React!</h2>, document.body);
  ReactDOM.render(<Grid />, document.querySelector('#grid'));
}

render();