import React from 'react';
import ReactDOM from 'react-dom';
import CategorySelector from '../CategorySelector/CategorySelector';
import './wrapper.css';

class Wrapper extends React.Component {
  state = {
    savedValues: [],
  }

  handleDone = (values) => {
    this.setState({ savedValues: values });
  }

  render() {
    const { savedValues } = this.state;
    console.log(savedValues);
    return (
      <div className="wrapper">
        <CategorySelector handleDone={this.handleDone} />
      </div>
    );
  }
}

export default Wrapper;