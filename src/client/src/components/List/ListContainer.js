import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { FixedSizeList as List } from 'react-window';
  
const ListContainer = (props) => {
  const { className, itemCount } = props;
  return (
    <List
      height={150}
      itemCount={itemCount}
      itemSize={58}
      width={410}
    >
      {props.children}
    </List>
  );
}

ListContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.object,
  ]),
  className: PropTypes.string,
};

export default ListContainer;