import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SideDrawer from './components/navigation/SideDrawer';
import Main from './components/layouts/Main';
import { withAuthentication } from './session/index';
import Auth from './containers/Auth';


const App = (props) => {

  // TO-DO 3a
  const menuItems = () => {
    console.log(props.currentUser);
    return ['Events', 'Quizzes', 'Questions', 'Users', 'Settings'];
  }

  const content = props.currentUser === undefined ? (
    <Auth/>
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
