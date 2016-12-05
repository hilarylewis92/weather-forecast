import React from 'react'
import { shallow, mount } from 'enzyme'
import Settings from '../../src/components/Settings'

describe('Settings', () => {
  it('renders a container with a className of settings-title', () => {
    const id = ''
    const wrapper = shallow(<Settings />)
    expect(wrapper.find('h2').hasClass('settings-title')).toBe(true)
  });

  it('has an input element', () => {
    const id = ''
    const wrapper = shallow(<Settings />)
    expect(wrapper.find('input').length, 1)
  })

  it('has a button to submit city', () => {
    const id = ''
    const wrapper = shallow(<Settings />)
    expect(wrapper.find('.settings-save-city').length, 1)
  })
})
