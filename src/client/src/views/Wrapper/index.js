import React from 'react';
// import ReactDOM from 'react-dom';
// import CategorySelector from '../CategorySelector/CategorySelector';
// import FinalSelectedList from '../FinalSelectedList/FinalSelectedList';
import AddressForm from '../AddressForm/AddressForm';
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

  render() {
    const { savedValues, isOutsideClicked } = this.state;
    return (
      <div
        className="wrapper"
        onClick={() => {
          console.log("clicked outside")
        }}
      >
        hello
        <AddressForm></AddressForm>
      </div>
    );
  }
}

export default Wrapper;