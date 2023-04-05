import { Component, h, Event, EventEmitter, Listen, Prop } from '@stencil/core';
import { SearchFilters } from '../../utils/search';

@Component({
  tag: 'component-gallery-filter-sidebar',
  styleUrl: 'component-gallery-filter-sidebar.css',
  shadow: true,
})
export class ComponentGalleryFilterSidebar {
    @Prop() filters: Record<string, Array<string>> = {};

    @Event() filtersUpdated: EventEmitter<SearchFilters>;
    
    private filtersEl:Record<string,HTMLCalciteTreeElement> = {};

    @Listen('calciteTreeSelect')
    onFilterChanged(_event) {
      const filters = {
        type: [],
        status: []
      };
      
      Object.keys(this.filters).forEach((filter) => {
        filters[filter] = Array.from(this.filtersEl[filter].children)
          .filter((node:HTMLCalciteTreeItemElement) => node.selected)
          .map((node:HTMLCalciteTreeItemElement) => node.innerText)

      })
      
      this.filtersUpdated.emit( filters );
    }
  

  
    render() {
      return (
        <div class="sidebar">
          {Object.keys(this.filters).map((filter) => {
            return [
              <h3>Filter by {filter}:</h3>,
              <calcite-tree ref={(el) => this.filtersEl[filter] = el} selection-mode="multiple">
                {this.filters[filter].sort().map((option) => {
                  return <calcite-tree-item>{option}</calcite-tree-item>
                })}
              </calcite-tree>
            ]
          })}
        </div>
      );
    }
  }
  