import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './app';
import API from './api';

const mountNode = document.getElementById('react-root');

// Pretend it takes some time to actually load the file
setTimeout(() => {
  API.User.me(user => {
    ReactDOM.render(<Hello>{user}</Hello>, mountNode);
    console.log('app started');
  });
}, 300);
