import React from 'react'
import { Link } from 'react-router'
import { shallow, mount } from 'enzyme'
import Header from '../../src/components/Header'

describe('Header', () => {
  it('renders a header element', () => {
    const wrapper = mount(<Header />)
    expect(wrapper.type(), 'header')
  });
})
