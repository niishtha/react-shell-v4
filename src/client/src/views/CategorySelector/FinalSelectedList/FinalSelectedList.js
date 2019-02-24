import React from 'react';

const FinalSelectedList = (props) => {
  const { selectedValues } = props;
  return (
    <div>
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
  );
}

export default FinalSelectedList;