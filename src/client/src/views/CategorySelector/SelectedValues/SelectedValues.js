import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import List from '../../../components/List/List';

const SelectedValues = (props) => {
  const { selectedValues } = props;
  return (
    <div className="category-selector__selected-values">
      <div className="category-selector__selected-values__title">Selected Values</div>
      <List 
        className="category-selector__selected-values__list"
        itemCount={selectedValues.length}
      >
        {({ index, style }) => (
          <li
            className={cx("list__item", {
              'list__item__even': index % 2 === 0
            })}
            style={style}
          >
            {selectedValues[index].value}
          </li>
        )}
      </List>
    </div>
  )
}

SelectedValues.propTypes = {
  selectedValues: PropTypes.array.isRequired,
}

export default SelectedValues;