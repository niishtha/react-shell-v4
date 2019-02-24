import React from 'react';
import PropTypes from 'prop-types';
import api from '../../../api';
import CategorySearch from './CategorySearch/CategorySearch';
import './categorySelector.css';

class CategorySelector extends React.Component {
  state = {
    categoriesData: null,
    selectedValuesData: [],
    CategorySelectorDropdown: null,
    SelectedValues: null,
    SaveSelecteValues: false,
    FinalSelectedList: null
  }

  componentDidMount() {
    api.get('/categories-data')
      .then((data) => {
        this.setState({ categoriesData: data });
      });
  }

  handleClick = () => {
    Promise.all([
      import('./CategorySelectorDropdown/CategorySelectorDropdown' /* webpackChunkName: 'CategorySelectorDropdown' */),
      import('./SelectedValues/SelectedValues' /* webpackChunkName: 'SelectedValues' */),
    ]).then((modules) => {
      this.setState({
        CategorySelectorDropdown: modules[0].default,
        SelectedValues: modules[1].default
      });
    });
  }
   
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
      searchResults,
      CategorySelectorDropdown,
      SelectedValues,
      FinalSelectedList
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
            CategorySelectorDropdown ? (
              <CategorySelectorDropdown
                categoriesData={categoriesData}
                onSelectCategoryValue={this.onSelectCategoryValue}
                onSelectFullCategory={this.onSelectFullCategory}
                isOutsideClicked={isOutsideClicked}
              />
            ) : null
          }
          {
            SelectedValues ? (
              <SelectedValues selectedValues={selectedValuesData} />
            ) : null
          }
        </div>
        {
          CategorySelectorDropdown && SelectedValues && (
            <button className="done" onClick={this.handleDone}>DONE</button>
          )
        }
        <CategorySearch categoriesData={categoriesData} />
      </React.Fragment>
    )
  }
}

CategorySelector.propTypes = {

};

export default CategorySelector;