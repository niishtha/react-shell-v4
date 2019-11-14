import React from 'react'
import Input from '../Input'
import { shallow } from 'enzyme'

describe('Input component', () => {
  it('renders input', () => {
    const component = shallow(
      <Input />
    )
    expect(component.exists('input')).toBe(true);
  })
})