import React from 'react';
import { configure , shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ImageAvatar from '../ImageAvatar';
import Profile from './index';

configure({adapter: new Adapter()});

describe('<Profile />', () => {
    it('should display an <ImageAvatar/>', () =>{
        const wrapper = shallow(<Profile />);
        expect(wrapper.find(ImageAvatar)).toHaveLength(1);
    })
});