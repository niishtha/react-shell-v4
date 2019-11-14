import React from 'react';
import PropTypes from 'prop-types';
// import './AddressForm.css';
import Input from '../../components/Input/Input';
import AddressList from '../../components/AddressList/AddressList';
import validatePincode from '../../utils/validator';


class AddressForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'placeholder',
            addrList: [],
            selectedAddressIndex: null
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        let val = event.target.value
        this.setState({value: val});
        if(validatePincode(val)) {
            this.props.getPinData(val).then(res=>{
                this.setState({
                    addrList: res[0]['PostOffice']
                });
            });
        }
    }

    handleAddressSelect(index){
        return () => {
            console.log(index);
            this.setState({selectedAddressIndex: index});
        }
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    
    render() {
        let {addrList, selectedAddressIndex, value} = this.state
        return (
        <div>
            <label>
            Pincode:
            </label>
            <Input value={value} onChangeProp={this.handleChange}/>
            {addrList.length? <AddressList addrList={addrList} />: null}
        </div>
        );
    }
}
  

AddressForm.propTypes = {
  savedValues: PropTypes.array,
}

export default AddressForm;