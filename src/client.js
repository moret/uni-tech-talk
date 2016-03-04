import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './app';

const mountNode = document.getElementById('react-root');

// Pretend it takes some time to actually load the file
setTimeout(() => {
  ReactDOM.render(<Hello>World</Hello>, mountNode);
}, 300);
