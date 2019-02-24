import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import AccordionSectionTitle from './AccordionSectionTitle';
import AccordionSectionContent from './AccordionSectionContent';

const AccordionSection = (props) => {
  const {
    isOpen,
    children,
    handleClick,
    className,
  } = props;
  return (
    <div className={cx("accordion__section", {[className]: className})}>
      {
        React.Children.map(children, (child, i) => (
          child && 
            ( child.type === AccordionSectionTitle
              || child.type === AccordionSectionContent ) ? (
                React.cloneElement(child, {
                  isOpen,
                  handleClick,
                })
              ) : null
        ))
      }
    </div>
  )
}

AccordionSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.object,
  ]),
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default AccordionSection;