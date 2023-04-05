import { Component, h, Event, EventEmitter, Prop } from "@stencil/core";

@Component({
  tag: "component-gallery-search-input",
  styleUrl: "component-gallery-search-input.css",
  shadow: true,
})
export class ComponentGallerySearchInput {
  /**
   * Query string to show in input.
   * Search function happens outside this component
   */
  @Prop({ mutable: true, reflect: true}) query:string = '';

  @Event() search: EventEmitter<string>;

  onInput(event) {
    this.query = event.target.value;
    this.search.emit( this.query );
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search components by title"
        onInput={(event) => this.onInput(event)}
      />
    );
  }
}
