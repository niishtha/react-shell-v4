import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import List from '../../../components/List/List';

const SelectedValues = (props) => {
  const { selectedValues } = props;
  return (
    <div className="category-selector__selected-values">
      <div className="category-selector__selected-values__title">Selected Values</div>
      <List.Container 
        className="category-selector__selected-values__list"
        itemCount={selectedValues.length}
      >
        {({ index, style }) => (
          <List.Item
            index={index}
            style={style}
          >
            {selectedValues[index].value}
          </List.Item>
        )}
      </List.Container>
    </div>
  )
}

SelectedValues.propTypes = {
  selectedValues: PropTypes.array.isRequired,
}

export default SelectedValues;