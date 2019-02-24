import React from 'react';
import PropTypes from 'prop-types';

class AccordionSectionTitle extends React.Component {
  titleClicked = () => {
    const { handleClick, onClick } = this.props;
    handleClick();
    if(onClick) onClick();
  }
  render() {
    const {
      children,
      isOpen,
    } = this.props;
    return (
      <div
        onClick={this.titleClicked}
        className="accordion__title"
      >
        {children}
      </div>
    )
  }
}

AccordionSectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  onClick: PropTypes.func,
}

export default AccordionSectionTitle;