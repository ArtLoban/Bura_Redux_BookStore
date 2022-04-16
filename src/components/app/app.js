import React from 'react';
import './app.css';
import {withBookstoreService} from '../hoc';

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());
  return (
    <div>
      <h1>App</h1>
      <p>See logs with store data!</p>
    </div>
  )
};

export default withBookstoreService()(App);