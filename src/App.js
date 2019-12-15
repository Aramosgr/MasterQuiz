import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import SideDrawer from './components/navigation/SideDrawer';
import Main from './components/layouts/Main';
import { withAuthentication } from './session/index';
import { AuthUserContext } from './session/index';
import {MENU_ITEMS} from  './constants/routes';


const App = (props) => {

  const user = useContext(AuthUserContext);

  const drawerItems = () => user === null ? ['Login'] : MENU_ITEMS;

  const menuItems = () => ['Home', ...drawerItems()];

  return (    
    <BrowserRouter>
      <div className="App">
        <SideDrawer menuItems={drawerItems()} isAuthenticated={user !== null}/>
        <Main menuItems={menuItems()} />
      </div>
    </BrowserRouter>
  );
}

export default withAuthentication(App);
