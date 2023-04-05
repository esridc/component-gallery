import { Component, h, Prop, State, Watch } from '@stencil/core';
import axios from 'axios';
import { createSearchIndex, search, addRecord, SearchFilters, getFilters } from '../../utils/search';

@Component({
  tag: 'component-gallery',
  styleUrl: 'component-gallery.css',
  shadow: true,
})
export class ComponentGallery {
  /** 
   * Set the type & status filters on the gallery.
   * Each filter type is `and` (both), while the array are `or` (any of)
   * Example: filters={ type: ['Discussions', 'Telemetry], status: ['Production']}
   */
  @Prop({ mutable: true, reflect: true}) filters: Record<string, Array<string>> = {};
  /**
   * Set the query string to search the title
   */
  @Prop({ mutable: true, reflect: true}) query: string = '';

  @State() components: any[] = [];
  @State() filteredComponents: any[] = [];
  @State() filterOptions: Record<string, Array<string>> = {};

  searchIndex = createSearchIndex();

  async componentWillLoad() {
    try {
      
      this.components = await this.loadConfig();
      this.filteredComponents = this.components;
      this.filterOptions = getFilters();

      // Do a search in case query/filter props were set
      // This will keep all components if no properties were set.
      this.handleSearch();

    } catch (error) {
      console.error('<component-gallery>: Error fetching configuration!', error);
    }
  }

  /**
   * Load the data/components.json configuration file
   */
  private async loadConfig() {
    const response = await axios.get('./data/components.json');
    const components = this.sortComponents(response.data.components);
    components.forEach((component) => addRecord( component ));
    return components;
  }
  /**
   * Sort components by lowercase title
   * @param components array of components to srt
   */
  private sortComponents(components: Array<any>) {
    return components.sort((a, b) => {
      return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
    });
  }

  /**
   * Small function to check if filters are empty or not
   * @param filters 
   */
  private checkFiltersExist(filters) {
    return Object.keys(filters)
      .filter((filterKey) => filters[filterKey].length > 0)
      .length > 0;
  }
  handleSearch() {
    if(this.query?.length <= 0 && !this.checkFiltersExist(this.filters) ) {
      this.filteredComponents = this.components;
    } else {
      this.filteredComponents = search( this.query, this.filters );
    }
  }

  @Watch('query')
  handleQuery(query: string) {
    this.query = query;
    this.handleSearch()
  }

  @Watch('filters')
  handleFilterUpdated( filters:SearchFilters = {} ) {
    this.filters = filters;
    this.handleSearch();    
  }

  render() {
    return (
      <div class="gallery-container">
        <component-gallery-search-input
          query={this.query}
          onSearch={(event) => this.handleQuery(event.detail)}
        ></component-gallery-search-input>
        <component-gallery-filter-sidebar
          filters={this.filterOptions}
          onFiltersUpdated={(event) => this.handleFilterUpdated(event.detail)}
        ></component-gallery-filter-sidebar>
        <component-gallery-grid components={this.filteredComponents}></component-gallery-grid>
      </div>
    );
  }
}
