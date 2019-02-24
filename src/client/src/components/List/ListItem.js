import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { FixedSizeList as List } from 'react-window';
  
const ListItem = (props) => {
  const { children, className, index, onClick, style } = props;
  return (
    <li
      className={cx("list__item", {
        'list__item__even': index % 2 === 0,
        [className]: className
      })}
      style={style}
      onClick={onClick}
    >
      {children}
    </li>
  );
}

ListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default ListItem;