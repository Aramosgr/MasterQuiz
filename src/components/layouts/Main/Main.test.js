import React from 'react';
import { Route } from 'react-router-dom';
import { configure , shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './index';
import { MENU_ITEMS } from '../../../constants/routes';

configure({adapter: new Adapter()});

describe('<Main />', () => {
    it('should display a <Route /> per element in props.menuItems', () => {
        const wrapper = shallow(<Main menuItems={MENU_ITEMS}/>);
        expect(wrapper.find(Route)).toHaveLength(MENU_ITEMS.length);
    });
});