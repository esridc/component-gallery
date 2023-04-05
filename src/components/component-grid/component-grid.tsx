import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'component-grid',
  styleUrl: 'component-grid.css',
  shadow: true,
})
export class ComponentGrid {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
