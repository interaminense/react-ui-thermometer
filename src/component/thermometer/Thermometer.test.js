import React from 'react';
import Thermometer from './Thermometer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });
describe('Thermometer Component tests', () => {
    it('should render the component', () => {
        const wrapper = shallow(
            <Thermometer
                theme={'light'}
                value={80}
                max={100}
                format={'$'}
                steps={3}
                size={'small'}
                height={180}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});