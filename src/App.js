import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Auth from './firebase/Auth';

import './App.css';
import SideDrawer from './components/navigation/SideDrawer';
import Main from './components/layouts/Main';
import { withAuthentication } from './session/index';
import { AuthUserContext } from './session/index';
import { MENU_ITEMS } from './constants/routes';


const App = (props) => {

  const user = useContext(AuthUserContext);

  const content = user === null ? (
    <div className="App">
      <Auth />
      <Main menuItems={MENU_ITEMS} />
    </div>
  ) : (
      <div className="App">
        <SideDrawer />
        <Main menuItems={MENU_ITEMS} />
      </div>
    );

  return (
    <BrowserRouter>
      {content}
    </BrowserRouter>
  );
}

export default withAuthentication(App);
