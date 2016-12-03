import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../../src/components/Header';
import { Link } from 'react-router';

describe('Header', () => {
    it('renders a card', () => {
      const wrapper = mount(<Header />);
      expect(wrapper.type(), 'header');
    });


  it('should render the name of the app in an <h1> tag', () => {
    const wrapper = shallow(<Header />);
    const title = <Link to="/">Weather Dux</Link>

    expect(wrapper.contains(div)).toEqual(true);
  });
});
