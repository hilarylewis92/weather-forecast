import React from 'react'
import { shallow, mount } from 'enzyme'
import Settings from '../../src/components/Settings'

describe('Settings', () => {
    it('renders a container with a className of settings-title', () => {
      let id = ''
      const wrapper = shallow(<Settings />)
      expect(wrapper.find('h2').hasClass('settings-title')).toBe(true)
    });

    it('has an input element', () =>
      {
        let id = ''
        const wrapper = shallow(<Settings />)
        expect(wrapper.find('input').length, 1)
      });

    it('has a button to submit city', () =>
      {
        let id = ''
        const wrapper = shallow(<Settings />)
        expect(wrapper.find('.settings-save-city').length, 1)
      });
});
