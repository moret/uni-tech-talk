import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './app';

const mountNode = document.getElementById('react-root');

// Pretend it takes some time to actually load the file
setTimeout(() => {
  const apiRequest = new XMLHttpRequest();
  apiRequest.onload = () => {
    ReactDOM.render(<Hello>{apiRequest.responseText}</Hello>, mountNode);
    console.log('app started');
  }
  apiRequest.open('get', '/api', true);
  apiRequest.send();
}, 300);
