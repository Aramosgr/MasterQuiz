import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SideDrawer from './components/navigation/SideDrawer';
import Main from './components/layouts/Main';
import Auth from './containers/Auth';
import {FirebaseContext} from './firebase';


const App = (props) => {

  const [ displayLogin, setDisplayLogin ] = useState(false);

  // TO-DO 3a
  const menuItems = () => {
    return ['Events', 'Quizzes', 'Questions', 'Users', 'Settings'];
  }

  let content = displayLogin ? <Auth /> : (
    <div className="App">
      <SideDrawer />
      <FirebaseContext.Consumer>
        {(context) => {
          console.log(context.auth);
          return <Main menuItems={menuItems()}/>
        }
        }
      </FirebaseContext.Consumer>      
    </div>
  );

  return (
    <BrowserRouter>
      {content}
    </BrowserRouter>
  );
}

export default App;
