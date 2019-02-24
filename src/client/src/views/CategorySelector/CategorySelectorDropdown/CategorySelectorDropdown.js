import React from 'react';
import Accordion from '../../../components/Accordion/Accordion';

const CategorySelectorDropDown = (props) => {
  const {
    categoriesData,
    onSelectCategoryValue,
    onSelectFullCategory
  } = props;
  const selectAll = category => e => {
    e.stopPropagation();
    console.log('All selected')
    onSelectFullCategory(category);
  };
  return (
    <Accordion.Container className="category-selector__categories">
      {
        categoriesData.map((category) => (
          <Accordion.Section>
            <Accordion.Title>
              <span>{category.name}</span>
              <span onClick={selectAll(category)} className="">
                Select All
              </span>
            </Accordion.Title>
            <Accordion.Content className="category-selector__category">
              <ul className="category-selector__categories__list">
                { 
                  category.values.map((value, index) => {
                    const key = `${category.name}-${index}`
                    return (
                      <li
                        key={key}
                        className="category-selector__categories__list__value"
                        onClick={() => onSelectCategoryValue(category.name, value)}
                      >
                        {value}
                      </li>
                    );
                  })
                }
              </ul>
            </Accordion.Content>
          </Accordion.Section>
        ))
      }
    </Accordion.Container>
  );
}

export default CategorySelectorDropDown;