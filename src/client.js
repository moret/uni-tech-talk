import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './app';
import API from './api';

const mountNode = document.getElementById('react-root');

function mount(user) {
  ReactDOM.render(<Hello>{user}</Hello>, mountNode);
  console.log('app started');
}

// Pretend it takes some time to actually load the file
setTimeout(() => {
  if (window.__store) {
    mount(window.__store.user);
  } else {
    API.User.me(mount);
  }
}, 300);
