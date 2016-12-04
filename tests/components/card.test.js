import React from 'react'
import { shallow, mount } from 'enzyme'
import Card from '../../src/components/Card'

describe('Card', () => {
    it('renders a card', () => {
      const wrapper = mount(<Card />)
      expect(wrapper.type(), 'div')
    })
})
