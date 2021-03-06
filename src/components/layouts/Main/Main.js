import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import {Auxiliar} from '../../../hoc';
import {viewSelector} from '../../views/viewSelector';
import {MENU_ITEMS} from '../../../constants/routes';

const Main = (props) => {

  const menuItems = () => {
    return props.menuItems.map((element, index) => {
      const view = viewSelector(element);
      return <Route path={view.route} exact component={view.component} key={element}/>
    });
  }

  return (
    <Auxiliar>
      {menuItems()}
    </Auxiliar>
  );
}

Main.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.oneOf(MENU_ITEMS)),
}

export default Main;
