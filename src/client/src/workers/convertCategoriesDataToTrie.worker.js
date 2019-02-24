import trie from 'trie-prefix-tree';
let trieForAllCategoryValues;

self.addEventListener('message',  event => {
  const {
    action,
    values,
    searchStr,
  } = event.data;
  if(action === 'create-trie') {
    trieForAllCategoryValues= trie(values);
  } else if( action === 'get-values') {
    const searchResults = trieForAllCategoryValues.getPrefix(searchStr);
    self.postMessage({  searchResults });
  }
})