import React from 'react';
import { configure , shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ToolbarLogo from './index';
import logo from "../../../assets/images/MasterQuizLogo2.png";

configure({adapter: new Adapter()});

describe('<ToolbarLogo />', () => {
    it('should display an <img/>', () =>{
        const wrapper = shallow(<ToolbarLogo />);
        expect(wrapper.find("img").prop("src")).toEqual(logo);
    })
});