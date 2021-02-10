import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Grid from './components/grid';
import Menu from './components/menu';

function render() {
  ReactDOM.render(<Grid />, document.querySelector('#grid'));
  ReactDOM.render(<Menu />, document.getElementById('menu'));
}

render();