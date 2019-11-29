import React from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import { Route } from 'react-router-dom';
import {UISelector} from '../../components/UI/UISelector';

const Main = (props) => {

  const menuItems = () => {
    return props.menuItems.map((element, index) =>
      <Route path={`/${element}`} exact component={UISelector(element)} />
    );
  }

  return (
    <Auxiliar>
      {menuItems()}
    </Auxiliar>
  );
}

export default Main;
