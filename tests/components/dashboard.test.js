import React from 'react';
import { shallow, mount } from 'enzyme';
import Dashboard from '../../src/components/Dashboard';

describe('Dashboard', () => {

    it('renders a dashboard with a className of city-card-container', () => {
      const wrapper = shallow(<Dashboard />);
      expect(wrapper.find('div').hasClass('city-card-container')).toBe(true);
    });
});
