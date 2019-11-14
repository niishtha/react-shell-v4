import React from 'react';
// import ReactDOM from 'react-dom';
// import CategorySelector from '../CategorySelector/CategorySelector';
// import FinalSelectedList from '../FinalSelectedList/FinalSelectedList';
import AddressForm from '../AddressForm/AddressForm';
import Input from '../../components/Input/Input';
import fetchData from '../../utils/fetchUtil';
import './wrapper.css';

class Wrapper extends React.Component {
  state = {
    savedValues: [],
    isOutsideClicked: false,
  }

  handleDone = (values) => {
    this.setState({ savedValues: values });
  }

  toggleOutsideClick = () => this.setState((state) => ({
    isOutsideClicked: !state.isOutsideClicked,
  }));

  getPinData = (val) => fetchData(`https://api.postalpincode.in/pincode/${val}`);

  render() {
    const { savedValues, isOutsideClicked } = this.state;
    return (
      <React.Fragment>
        <div className="header">Header content</div>
        <div
          className="wrapper"
          onClick={() => {
            console.log("clicked outside")
          }}
        >
          <AddressForm getPinData={this.getPinData}></AddressForm>
          {/* <div className='inputWrap'>
            <span>Pincode:</span>
            <Input value="placeholder"/>
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Wrapper;