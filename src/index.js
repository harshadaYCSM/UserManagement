import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import UserContainer from './usercontainer/index'



ReactDOM.render(
  <UserContainer />,
  document.getElementById('root')
)

serviceWorker.unregister();
