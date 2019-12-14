import React from 'react';
import { configure , shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ImageAvatar from './index';
import Avatar from '@material-ui/core/Avatar';

configure({adapter: new Adapter()});

describe('<ImageAvatar />', () => {
    it('should display an <Avatar/>', () =>{
        const wrapper = shallow(<ImageAvatar />);
        expect(wrapper.find(Avatar)).toHaveLength(1);
    })
});