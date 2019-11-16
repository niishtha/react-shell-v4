import React from 'react'
import Input from '../Input'
import { shallow } from 'enzyme'

describe('Input component', () => {
  it('renders input', () => {
    const value = 'hellotest'
    const newValue = 'newvalue'
    const evt = { target: { value: newValue } }
    const onChange = jest.fn();
    const component = shallow(
      <Input value={value} onChangeProp={onChange}/>
    )
    expect(component.exists('input')).toBe(true);
    component.find('input').simulate('change', evt);
    expect(onChange).toBeCalledTimes(1)
    expect(onChange).toBeCalledWith(evt)

  })
})