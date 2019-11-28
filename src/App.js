import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SideDrawer from './components/Navigation/SideDrawer';
import Main from './layouts/Main';

const App = (props) => {

  return (    
    <BrowserRouter>      
      <div className="App">
        <SideDrawer/>
        <Main/>
      </div>
    </BrowserRouter>
  );
}

export default App;
