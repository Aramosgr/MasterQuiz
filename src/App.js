import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SideDrawer from './components/navigation/SideDrawer';
import Main from './components/layouts/Main';
import { withAuthentication } from './session/index';
import Auth from './firebase/Auth';
import { AuthUserContext } from './session/index';


const App = (props) => {

  // TO-DO 3a
  const menuItems = () => ['Events', 'Quizzes', 'Questions', 'Users', 'Settings'];

  const user = useContext(AuthUserContext);

  const content = user === null ? (
    <div className="App">
      <Auth />
      <Main menuItems={menuItems()} />
    </div>
  ) : (
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

export default withAuthentication(App);
