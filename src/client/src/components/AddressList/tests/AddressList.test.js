import React from 'react'
import AddressList from '../AddressList'
import { mount } from 'enzyme'
// import { shallowToJson} from 'enzyme-to-json';

describe('AddressList', () => {
  it('testing implementaton details', () => {
	const component = mount(
	  <AddressList addrList={[{"Name":"Ganeshpura","Description":null,"BranchType":"Sub Post Office","DeliveryStatus":"Non-Delivery","Circle":"Delhi","District":"North West Delhi","Division":"Delhi North","Region":"Delhi","Block":"Delhi","State":"Delhi","Country":"India","Pincode":"110035"},{"Name":"Keshav Puram (North West Delhi)","Description":null,"BranchType":"Sub Post Office","DeliveryStatus":"Non-Delivery","Circle":"Delhi","District":"North West Delhi","Division":"Delhi North","Region":"Delhi","Block":"Delhi","State":"Delhi","Country":"India","Pincode":"110035"},{"Name":"Onkar Nagar","Description":null,"BranchType":"Sub Post Office","DeliveryStatus":"Delivery","Circle":"Delhi","District":"North West Delhi","Division":"Delhi North","Region":"Delhi","Block":"Delhi","State":"Delhi","Country":"India","Pincode":"110035"},{"Name":"Power House","Description":null,"BranchType":"Sub Post Office","DeliveryStatus":"Non-Delivery","Circle":"Delhi","District":"North West Delhi","Division":"Delhi North","Region":"Delhi","Block":"Delhi","State":"Delhi","Country":"India","Pincode":"110035"},{"Name":"Rampura","Description":null,"BranchType":"Branch Post Office","DeliveryStatus":"Non-Delivery","Circle":"Delhi","District":"North West Delhi","Division":"Delhi North","Region":"Delhi","Block":"Delhi","State":"Delhi","Country":"India","Pincode":"110035"},{"Name":"Sarai Rohilla","Description":null,"BranchType":"Sub Post Office","DeliveryStatus":"Non-Delivery","Circle":"Delhi","District":"North West Delhi","Division":"Delhi North","Region":"Delhi","Block":"Delhi","State":"Delhi","Country":"India","Pincode":"110035"}]} />
	);
	expect(component.find('.placeList').length).toBe(6);
	component.instance().handleAddressSelect(2)
	component.update();
	expect(component.state('selectedAddressIndex')).toBe(2);
  });

//   it('testing user flow', ()=>{
// 	const component = mount(
// 		<AddressList addrList={[{"Name":"Ganeshpura","Description":null,"BranchType":"Sub Post Office","DeliveryStatus":"Non-Delivery","Circle":"Delhi","District":"North West Delhi","Division":"Delhi North","Region":"Delhi","Block":"Delhi","State":"Delhi","Country":"India","Pincode":"110035"},{"Name":"Keshav Puram (North West Delhi)","Description":null,"BranchType":"Sub Post Office","DeliveryStatus":"Non-Delivery","Circle":"Delhi","District":"North West Delhi","Division":"Delhi North","Region":"Delhi","Block":"Delhi","State":"Delhi","Country":"India","Pincode":"110035"},{"Name":"Onkar Nagar","Description":null,"BranchType":"Sub Post Office","DeliveryStatus":"Delivery","Circle":"Delhi","District":"North West Delhi","Division":"Delhi North","Region":"Delhi","Block":"Delhi","State":"Delhi","Country":"India","Pincode":"110035"},{"Name":"Power House","Description":null,"BranchType":"Sub Post Office","DeliveryStatus":"Non-Delivery","Circle":"Delhi","District":"North West Delhi","Division":"Delhi North","Region":"Delhi","Block":"Delhi","State":"Delhi","Country":"India","Pincode":"110035"},{"Name":"Rampura","Description":null,"BranchType":"Branch Post Office","DeliveryStatus":"Non-Delivery","Circle":"Delhi","District":"North West Delhi","Division":"Delhi North","Region":"Delhi","Block":"Delhi","State":"Delhi","Country":"India","Pincode":"110035"},{"Name":"Sarai Rohilla","Description":null,"BranchType":"Sub Post Office","DeliveryStatus":"Non-Delivery","Circle":"Delhi","District":"North West Delhi","Division":"Delhi North","Region":"Delhi","Block":"Delhi","State":"Delhi","Country":"India","Pincode":"110035"}]} />
// 	);
// 	expect(component.find('.placeList').length).toBe(6);
// 	component.find('.placeList').at(2).simulate('click');
// 	component.update();
// 	expect(component.find('.addressView').length).toBe(1);
//   });
})