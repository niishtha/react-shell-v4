import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Accordion from '../../../components/Accordion/Accordion';
import List from '../../../components/List/List';

class CategorySelectorDropDown extends React.Component {
  selectAll = (category) => (e) => {
    e.stopPropagation();
    const { onSelectFullCategory  } = this.props
    onSelectFullCategory(category);
  }

  render() {
    const {
      categoriesData,
      onSelectCategoryValue,
      onSelectFullCategory,
      isOutsideClicked,
    } = this.props;
    
    return (
      <Accordion.Container
        className="category-selector__categories"
        isOutsideClicked={isOutsideClicked}
      >
        {
          categoriesData.map((category) => (
            <Accordion.Section>
              <Accordion.Title>
                <span>{category.name}</span>
                <span onClick={this.selectAll(category)}>
                  Select All
                </span>
              </Accordion.Title>
              <Accordion.Content className="category-selector__category">
                <List.Container
                  className="category-selector__categories__list"
                  itemCount={category.values.length}
                >
                  {({ index, style }) => (
                    <List.Item
                      style={style}
                      onClick={() => onSelectCategoryValue(category.name, category.values[index])}
                      index={index}
                    >
                      {category.values[index]}
                    </List.Item>
                  )}
                </List.Container>
              </Accordion.Content>
            </Accordion.Section>
          ))
        }
      </Accordion.Container>
    );
  }
}

CategorySelectorDropDown.propTypes = {
  categoriesData: PropTypes.object.isRequired,
  onSelectCategoryValue: PropTypes.func.isRequired,
  onSelectFullCategory: PropTypes.func.isRequired,
}

export default CategorySelectorDropDown;