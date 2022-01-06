import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Search } from './pages/search/search';
import { Featured } from './pages/featured';
import { NotFound } from './pages/not-found';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Featured/>}/>
          <Route exact path='/search' element={<Search/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
  );
}

export default App;
