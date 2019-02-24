import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Accordion from '../../../components/Accordion/Accordion';
import List from '../../../components/List/List';

class CategorySelectorDropDown extends React.Component {
  selectAll = (category) => (e) => {
    e.stopPropagation();
    onSelectFullCategory(category);
  }
  render() {
    const {
      categoriesData,
      onSelectCategoryValue,
      onSelectFullCategory,
    } = this.props;
    return (
      <Accordion.Container className="category-selector__categories">
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
                <List
                  className="category-selector__categories__list"
                  itemCount={category.values.length}
                >
                  {({ index, style }) => (
                    <li
                      className={cx("list__item", {'list__item__even': index % 2 === 0})}
                      style={style}
                      onClick={() => this.selectAll(category.name, category.values[index])}
                    >
                      {category.values[index]}
                    </li>
                  )}
                </List>
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