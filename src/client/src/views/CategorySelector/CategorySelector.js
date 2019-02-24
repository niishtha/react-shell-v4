import React from 'react';
import PropTypes from 'prop-types';
import api from '../../../api';
import CategorySearch from './CategorySearch/CategorySearch';
import DynamicImport from '../../components/DynamicImport/DynamicImport';
import './categorySelector.css';

class CategorySelector extends React.Component {
  state = {
    categoriesData: null,
    selectedValuesData: [],
    renderCategorySelectorSection: false,
  }

  componentDidMount() {
    api.get('/categories-data')
      .then((data) => {
        this.setState({ categoriesData: data });
      });
  }

  handleClick = () => this.setState((state) => ({
    renderCategorySelectorSection: !state.renderCategorySelectorSection
  }));
   
  onSelectCategoryValue = (category, value) => {
    this.setState((state) => ({
      selectedValuesData: [...state.selectedValuesData, { category, value }],
    }));
  }

  onSelectFullCategory = (category) => {
    const { selectedValuesData } = this.state;
    const filteredCategoryValues = selectedValuesData.filter((selectedValue) => (
      selectedValue.category !== category.name
    ));
    const formattedCategoryData = category.values.map(
      (value)=> ({category: category.name, value})
    );
    this.setState((state)=>({
      selectedValuesData: [...filteredCategoryValues, ...formattedCategoryData],
    }));
  }

  handleDone = () => {
    const { selectedValuesData } = this.state;
    this.props.handleDone(selectedValuesData);
    this.setState({
      selectedValuesData: []
    });
  }

  render() {
    const {
      categoriesData,
      selectedValuesData,
      renderCategorySelectorSection
    } = this.state;
    const {
      isOutsideClicked,
      toggleOutsideClick,
    } = this.props;
    return (
      <React.Fragment>
        <button
          className="trigger"
          onClick={this.handleClick}
        >
          Get Catgeories
        </button>
        <div
          className="category-selector"
          onClick={(e) => {
            e.stopPropagation();
            if(isOutsideClicked) toggleOutsideClick();
          }}
        >
          {
            renderCategorySelectorSection ? (
              <React.Fragment>
                <DynamicImport load={() => import('./CategorySelectorDropdown/CategorySelectorDropdown'  /* webpackChunkName: 'CategorySelectorDropdown' */)}>
                  {(Component) => Component === null
                    ? null
                    : (
                        <Component
                          categoriesData={categoriesData}
                          onSelectCategoryValue={this.onSelectCategoryValue}
                          onSelectFullCategory={this.onSelectFullCategory}
                          isOutsideClicked={isOutsideClicked}
                        />
                      )
                  }
                </DynamicImport>
                <DynamicImport load={() => import('./SelectedValues/SelectedValues' /* webpackChunkName: 'SelectedValues' */)}>
                  {(Component) => Component === null
                    ? null
                    : (
                        <Component
                          selectedValues={selectedValuesData}
                        />
                      )
                  }
                </DynamicImport>
              </React.Fragment>
            ): null
          }
        </div>
        {
          renderCategorySelectorSection ? (
            <button className="done" onClick={this.handleDone}>DONE</button>
          ) : null
        }
        <CategorySearch categoriesData={categoriesData} />
      </React.Fragment>
    )
  }
}

CategorySelector.propTypes = {

};

export default CategorySelector;