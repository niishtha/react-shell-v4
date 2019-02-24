import React from 'react';
import PropTypes from 'prop-types';
import List from '../../components/List/List';
import './FinalSelectedList.css';

const FinalSelectedList = (props) => {
  const { savedValues } = props;
  return (
    <div className="final-selected-list">
      <div className="final-selected-list__header">
        Selected final list
      </div>
      <List.Container itemCount={savedValues.length}>
        {({ index, style}) => (
          <List.Item
            style={style}
            index={index}
          >
            {savedValues[index].value}
          </List.Item>
        )}
      </List.Container>
    </div>
  );
};

FinalSelectedList.propTypes = {
  savedValues: PropTypes.array,
}

export default FinalSelectedList;