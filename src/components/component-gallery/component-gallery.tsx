import { Component, h, State } from '@stencil/core';
import axios from 'axios';
import { createSearchIndex, search, addRecord, SearchFilters, getFilters } from '../../utils/search';

@Component({
  tag: 'component-gallery',
  styleUrl: 'component-gallery.css',
  shadow: true,
})
export class ComponentGallery {
  @State() components: any[] = [];
  @State() filteredComponents: any[] = [];
  @State() searchQuery: string = '';
  @State() filterOptions: Record<string, Array<string>> = {};

  searchIndex = createSearchIndex();

  async componentWillLoad() {
    try {
      const response = await axios.get('./data/components.json');
      this.components = response.data.components;
      this.filteredComponents = this.components;
      console.log("components", this.components)
      this.components.forEach((component) => addRecord( component ));
      this.filterOptions = getFilters();

    } catch (error) {
      console.error('Error fetching apps:', error);
    }
  }

  handleSearch(query: string) {
    if(query.length === 0) {
      return this.filteredComponents = this.components;
    }
    this.searchQuery = query;
    this.filteredComponents = search( this.searchQuery );
  }

  // @Listen('filtersUpdated')
  handleFilterUpdated( filters:SearchFilters ) {
    console.log('handleFilterByTypes', filters)

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
      .filter((filterKey) => filters[filterKey].length >0)
      .map((filterKey) => {
        console.log("filters", [filterKey, filters[filterKey]])
        const or = filters[filterKey].map((value) => {
          return { [`${filterKey}`]: value }
        })
        return or.length > 0 ? { $or: or } : null
      })
    
    if(and.length > 0 ) {
      this.filteredComponents = search( { $and: and } );
    } else {
      this.filteredComponents = this.components;
    }
    
    // this.appTypeFilter = type;
    // this.filteredComponents = filterApps(this.apps, this.searchIndex, this.searchQuery, this.appTypeFilter, this.appStatusFilter);
  }

  render() {
    return (
      <div class="gallery-container">
        <component-gallery-search-input onSearch={(event) => this.handleSearch(event.detail)}></component-gallery-search-input>
        <component-gallery-filter-sidebar
          filters={this.filterOptions}
          onFiltersUpdated={(event) => this.handleFilterUpdated(event.detail)}
        ></component-gallery-filter-sidebar>
        <component-gallery-grid components={this.filteredComponents}></component-gallery-grid>
      </div>
    );
  }
}
