import React from 'react';
import ReactDOM from 'react-dom';
import CategorySelector from '../CategorySelector/CategorySelector';
import FinalSelectedList from '../FinalSelectedList/FinalSelectedList';
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
  }))

  render() {
    const { savedValues, isOutsideClicked } = this.state;
    return (
      <div
        className="wrapper"
        onClick={() => {
          if(!isOutsideClicked) this.toggleOutsideClick();
        }}
      >
        <CategorySelector
          handleDone={this.handleDone}
          isOutsideClicked={isOutsideClicked}
          toggleOutsideClick={this.toggleOutsideClick}
        />
        <FinalSelectedList savedValues={savedValues}/>
      </div>
    );
  }
}

export default Wrapper;