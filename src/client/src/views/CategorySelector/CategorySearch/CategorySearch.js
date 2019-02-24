import React from 'react';
import PropTypes from 'prop-types';
import Worker from '../../../workers/convertCategoriesDataToTrie.worker';

class CategorySearch extends React.Component {
  state = {
    searchResults: [],
  }

  componentDidMount = () => {
    this.worker = new Worker();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.categoriesData) {
      const allCategoryValues = nextProps.categoriesData.reduce((acc, category) => 
          ([...acc, ...category.values]), []);
      this.worker.postMessage({ action: 'create-trie', values: allCategoryValues });
    }
  }

  handleSearch = (e) => {
    const { worker } = this.props;
    const searchStr = e.target.value;
    if (searchStr) {
      this.worker.postMessage({ 
        action: 'get-values',
        searchStr: e.target.value,
      });
    } else {
      this.setState({ searchResults : [] })
    }
    this.worker.onmessage = (event) => {
      const { searchResults } = event.data;
      this.setState({ searchResults });
    };
  }

  render() {
    const { searchResults } = this.state;
  
    return (
      <div className="search">
        <input
          type="text"
          className="search__bar"
          placeholder="Search for a category value"
          onKeyUp={this.handleSearch}
        />
        <ul className="search__results">
          {
            searchResults && searchResults.map((searchResult) => (
              <li className="search__results__item">{searchResult}</li>
            ))
          }
        </ul>
      </div>
    )
  }
  
}

CategorySearch.propTypes = {
  categoriesData: PropTypes.array.isRequired,
};

export default CategorySearch;