import React from 'react';

const SelectedValues = (props) => {
  const { selectedValues } = props;
  return (
    <div className="category-selector__selected-values">
      <div className="category-selector__selected-values__title">Selected Values</div>
      <ul className="category-selector__selected-values__list">
        { 
          selectedValues && selectedValues.map((selectedValue) => (
            <li
              className="category-selector__selected-values__list__value"
              key={`${selectedValue.category}-${selectedValue.value}`}
            >
              {selectedValue.value}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SelectedValues;