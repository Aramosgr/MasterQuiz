import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SideDrawer from './components/Navigation/SideDrawer';
import Main from './layouts/Main';

const App = (props) => {

  //  TO-DO 3a
  const menuItems = () => {
    return ['Events', 'Quizzes', 'Questions', 'Users', 'Settings'];
  }


  return (
    <BrowserRouter>
      <div className="App">
        <SideDrawer />
        <Main menuItems={menuItems()} />
      </div>
    </BrowserRouter>
  );
}

export default App;
