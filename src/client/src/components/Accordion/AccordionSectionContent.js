import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const AccordionSectionContent = (props) => {
  const {
    children,
    className,
    isOpen,
  } = props;
  return (
    <div
      className={cx('accordion__content', {
        hide: !isOpen,
        [className]: className,
      })}
    >
      {children}
    </div>
  )
}

AccordionSectionContent.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  onClick: PropTypes.func,
}

export default AccordionSectionContent;