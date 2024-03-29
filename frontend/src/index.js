import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import MenuData from './MenuData/MenuData';
import ItemDetails from './ItemDetails/ItemDetails';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' element={<MenuData />} />
        <Route path='/details/:id' element={<ItemDetails />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
