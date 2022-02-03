import React, { Component, useState }  from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



//Pages
import BookList from './pages/BookList';
import BookPage from './pages/BookPage';
import BookAddEditPage from "./pages/BookAddEditPage";

const App = () => {

  return (

      <Router>
        <Routes>
			<Route exact path="/"             	element={<BookList/>} />
			<Route exact path="/viewBook/:id" 	element={<BookPage/>} />
			<Route exact path="/add"          	element={<BookAddEditPage/>} />
			<Route exact path="/edit/:id"		element={<BookAddEditPage/>} />
        </Routes>
      </Router>
  );
}

export default App;
