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
    threshold: 0.3,
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

export function buildSearchInput(query = '', filters = {}): Object {
    // Builds a query like:
    // $and: [
    //   { 
    //     $or: [
    //       { status: 'production' },
    //       { status: 'developing' } 
    //     ]
    //   }, 
    //   {
    //     $or: [
    //       { type: 'Discussions' }, 
    //       { type: 'Search' } 
    //     ]
    //   }
    // ]
    const and = Object.keys(filters)
      .filter((filterKey) => filters[filterKey].length > 0)
      .map((filterKey) => {
        const or = filters[filterKey].map((value) => {
          return { [`${filterKey}`]: value }
        })
        return or.length > 0 ? { $or: or } : null
      }) as Array<any>; // TS missing this is building an array

    
    if(query.length > 0) {
      and.push({ title: query })
    }

    console.debug('buildSearchInput', {
      query: query,
      filters: filters,
      and: and
    })
    return {$and: and};
}
export function search( query, filters ) {
  const searchInput = buildSearchInput(query, filters)

  const results = getIndex().search( searchInput );
  return results.map((result) => result.item);

}

export type SearchFilters = Record<string, Array<string>>;