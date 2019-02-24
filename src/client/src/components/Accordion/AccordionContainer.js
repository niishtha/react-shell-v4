import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import AccordionSection from './AccordionSection';

const getSelectedSection = (props) =>
  React.Children.map(props.children, (child, index) => (
    child && child.isOpen ? index : null
  )).find((index) => index !== null)

class AccordionContainer extends React.Component {
  state = {
    selectedSection: this.props.children ? getSelectedSection(this.props) : null
  }

  handleClick = (index) => () => {
    const { selectedSection } = this.state;
    this.setState({
      selectedSection: selectedSection !== index ? index : null
    })
  }

  render() {
    const { selectedSection } = this.state;
    const { children, className, isOutsideClicked } = this.props;
    return (
      <div className={cx('accordion', {[className]: className})}>
        {
          React.Children.map(children, (child, i) => (
            child && child.type === AccordionSection ? (
              React.cloneElement(child, {
                isOpen: !isOutsideClicked && selectedSection === i,
                handleClick: this.handleClick(i)
              })
            ) : null
          ))
        }
      </div>
    )
  }
}

AccordionContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.object,
  ]),
  className: PropTypes.string,
  isOutsideClicked: PropTypes.bool,
}

export default AccordionContainer;