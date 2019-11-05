import React from 'react';
import PropTypes from 'prop-types';
import './AddressForm.css';
import fetchData from '../../utils/fetchUtil';


    class AddressForm extends React.Component {
        constructor(props) {
          super(props);
          this.state = {value: ''};
      
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleChange(event) {
          this.setState({value: event.target.value});
          fetchData(`https://api.postalpincode.in/pincode/${event.target.value}`).then(res=>{
              console.log(res);
          })
        }
      
        handleSubmit(event) {
          alert('A name was submitted: ' + this.state.value);
          event.preventDefault();
        }
      
        render() {
          return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          );
        }
      }
  

AddressForm.propTypes = {
  savedValues: PropTypes.array,
}

export default AddressForm;