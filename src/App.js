import React, { Component, useState }  from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



//Pages
import BookList from './pages/BookList';

const App = () => {

  return (

      <Router>
        <Routes>
          <Route exact path="/" element={<BookList/>} />
        </Routes>
      </Router>
  
    /* <div className="App">
        
      <NavBar />
      
      <h2>
          App element 
      </h2>

      <div className="btn btn-primary">
        Books
      </div>


    </div>
    */
  );
}

export default App;
