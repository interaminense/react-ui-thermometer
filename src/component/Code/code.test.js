import React from 'react';
import Code from './Code';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });
describe('Code Component tests', () => {

    it('should render the component', () => {
        const wrapper = shallow(
            <Code
                tagName="name"
                prop={[
                    { name: 'theme', val: 'light' },
                    { name: 'value', val: 80 }]}
            />);
        expect(wrapper).toMatchSnapshot();
    });
});