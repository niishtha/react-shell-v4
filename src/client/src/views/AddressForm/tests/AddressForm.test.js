import React from 'react'
import AddressForm from '../AddressForm'
import { mount } from 'enzyme'
// import { shallowToJson} from 'enzyme-to-json';

describe('AddressForm', () => {
  it('testing implementaton details', () => {
    const mockAPI = ()=>{return new Promise(resolve => {
        return [{"Message":"Number of pincode(s) found:6","Status":"Success","PostOffice":[{"Name":"Ganeshpura","Description":null,"BranchType":"Sub Post Office","DeliveryStatus":"Non-Delivery","Circle":"Delhi","District":"North West Delhi","Division":"Delhi North","Region":"Delhi","Block":"Delhi","State":"Delhi","Country":"India","Pincode":"110035"},{"Name":"Keshav Puram (North West Delhi)","Description":null,"BranchType":"Sub Post Office","DeliveryStatus":"Non-Delivery","Circle":"Delhi","District":"North West Delhi","Division":"Delhi North","Region":"Delhi","Block":"Delhi","State":"Delhi","Country":"India","Pincode":"110035"},{"Name":"Onkar Nagar","Description":null,"BranchType":"Sub Post Office","DeliveryStatus":"Delivery","Circle":"Delhi","District":"North West Delhi","Division":"Delhi North","Region":"Delhi","Block":"Delhi","State":"Delhi","Country":"India","Pincode":"110035"},{"Name":"Power House","Description":null,"BranchType":"Sub Post Office","DeliveryStatus":"Non-Delivery","Circle":"Delhi","District":"North West Delhi","Division":"Delhi North","Region":"Delhi","Block":"Delhi","State":"Delhi","Country":"India","Pincode":"110035"},{"Name":"Rampura","Description":null,"BranchType":"Branch Post Office","DeliveryStatus":"Non-Delivery","Circle":"Delhi","District":"North West Delhi","Division":"Delhi North","Region":"Delhi","Block":"Delhi","State":"Delhi","Country":"India","Pincode":"110035"},{"Name":"Sarai Rohilla","Description":null,"BranchType":"Sub Post Office","DeliveryStatus":"Non-Delivery","Circle":"Delhi","District":"North West Delhi","Division":"Delhi North","Region":"Delhi","Block":"Delhi","State":"Delhi","Country":"India","Pincode":"110035"}]}]
    });}
    const component = mount(
      <AddressForm getPinData={mockAPI} />
    )
    expect(component.state('value')).toBe('placeholder');
    component.find('input').simulate('change', {target: {value: '110025'}});
    expect(component.state('value')).toBe('110025');
  });
})