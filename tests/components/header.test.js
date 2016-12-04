import React from 'react'
import { Link } from 'react-router'
import { shallow, mount } from 'enzyme'
import Header from '../../src/components/Header'

describe('Header', () => {
  it('renders a card', () => {
    const wrapper = mount(<Header />)
    expect(wrapper.type(), 'header')
  })

  it('should render the name of the app in an <h1> tag', () => {
    const wrapper = shallow(<Header />)
    const title = <Link to="/">Weather Dux</Link>
    expect(wrapper.contains(div)).toEqual(true)
  })
})
