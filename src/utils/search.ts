import Fuse from 'fuse.js'

const fuse = createSearchIndex();

export function getIndex() {
  return fuse;
}

export function createSearchIndex() {
  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    useExtendedSearch: true,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    // fieldNormWeight: 1,
    keys: [
      "title", 
      "status",
      "type"
    ]
  };

  return new Fuse([], options);
}

const filterOptions = {
  status: [],
  type: []
}

// Add to the index and build filters list
export function addRecord( record ) {
  getIndex().add( record );
  Object.keys(filterOptions).forEach((filter) => {
    if(filterOptions[filter].indexOf( record[filter] ) === -1) {
      filterOptions[filter].push(record[filter]);
    }
  })
  
}

export function getFilters() {
  return filterOptions;
}

export function search( query ) {
  // // Change the pattern
  // const pattern = ""

  const results = getIndex().search( query );
  console.log("search", {query, results})
  return results.map((result) => result.item);

}

export type SearchFilters = Record<string, Array<string>>;