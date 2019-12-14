import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Auth from './firebase/Auth';

import './App.css';
import SideDrawer from './components/navigation/SideDrawer';
import Main from './components/layouts/Main';
import { withAuthentication } from './session/index';
import { AuthUserContext } from './session/index';


const App = (props) => {

  const user = useContext(AuthUserContext);

  const menuItems = () => user === null ? ['Login'] : ['Events', 'Quizzes', 'Questions', 'Users', 'Settings'];

  return (
    <BrowserRouter>
      <div className="App">
        <SideDrawer menuItems={menuItems()}/>
        <Main menuItems={menuItems()} />
      </div>
    </BrowserRouter>
  );
}

export default withAuthentication(App);
