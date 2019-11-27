import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import {Events, Quizzes, Questions, Users, Settings} from './components/UI';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideDrawer/>
        <Events/>
        <Quizzes/>
        <Questions/>
        <Users/>
        <Settings/>
      </div>
    </BrowserRouter>
  );
}

export default App;
