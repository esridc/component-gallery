import { Component, Prop, h } from '@stencil/core';
import '@esri/calcite-components'

@Component({
  tag: 'component-gallery-grid',
  styleUrl: 'component-gallery-grid.css',
  shadow: true,
})
export class ComponentGalleryGrid {

    @Prop() components: any[] = [];
  
    render() {
      return (
        <div class="components-grid">
          {this.components.map((component) => (
            <div class="component">
              {/* Display app information as a grid or table */}
              <calcite-card>
                <span slot="title">
                  <a href={component.url} target="_blank">{component.title}</a>
                </span>
                <span slot="subtitle">{component.status}</span>
                {/* <calcite-chip slot="footer-start" scale="s" value={component.status} appearance="outline" kind="brand" icon="">
                {component.status}
                </calcite-chip> */}
                <calcite-chip slot="footer-start" scale="s" value={component.type} appearance="outline" kind="brand" icon="">
                {component.type}
                </calcite-chip>
                <calcite-button slot="footer-end" target="_blank" href={component.url}>
                  Open
                </calcite-button>
            </calcite-card>
            </div>
          ))}
        </div>
      );
    }
  }
  