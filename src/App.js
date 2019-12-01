import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SideDrawer from './components/Navigation/SideDrawer';
import Main from './layouts/Main';
import Auth from './containers/Auth';

const App = (props) => {

  const [ displayLogin, setDisplayLogin ] = useState(false);

  // TO-DO 3a
  const menuItems = () => {
    return ['Events', 'Quizzes', 'Questions', 'Users', 'Settings'];
  }

  let content = displayLogin ? <Auth /> : (
    <div className="App">
      <SideDrawer />
      <Main menuItems={menuItems()} />
    </div>
  );

  return (
    <BrowserRouter>
      {content}
    </BrowserRouter>
  );
}

export default App;
