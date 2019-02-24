import React from 'react';
import PropTypes from 'prop-types';
import List from '../../../components/List/List';
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
        {
          searchResults.length ? (
            <List.Container itemCount={searchResults.length}>
              {({ index, style}) => (
                <List.Item index={index} style={style}>
                  { searchResults[index]}
                </List.Item>
              )}
            </List.Container>
          ) : null
        }
        
      </div>
    )
  }
  
}

CategorySearch.propTypes = {
  categoriesData: PropTypes.array.isRequired,
};

export default CategorySearch;