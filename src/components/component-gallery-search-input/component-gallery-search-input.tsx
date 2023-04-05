import { Component, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "component-gallery-search-input",
  styleUrl: "component-gallery-search-input.css",
  shadow: true,
})
export class ComponentGallerySearchInput {
  @Event() search: EventEmitter<string>;

  onInput(event) {
    this.search.emit(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search apps"
        onInput={(event) => this.onInput(event)}
      />
    );
  }
}
