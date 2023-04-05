/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { SearchFilters } from "./utils/search";
export namespace Components {
    interface ComponentGallery {
        /**
          * Set the type & status filters on the gallery. Each filter type is `and` (both), while the array are `or` (any of) Example: filters={ type: ['Discussions', 'Telemetry], status: ['Production']}
         */
        "filters": Record<string, Array<string>>;
        /**
          * Set the query string to search the title
         */
        "query": string;
    }
    interface ComponentGalleryFilterSidebar {
        "filters": Record<string, Array<string>>;
    }
    interface ComponentGalleryGrid {
        "components": any[];
    }
    interface ComponentGallerySearchInput {
        /**
          * Query string to show in input. Search function happens outside this component
         */
        "query": string;
    }
    interface ComponentGrid {
    }
}
export interface ComponentGalleryFilterSidebarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLComponentGalleryFilterSidebarElement;
}
export interface ComponentGallerySearchInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLComponentGallerySearchInputElement;
}
declare global {
    interface HTMLComponentGalleryElement extends Components.ComponentGallery, HTMLStencilElement {
    }
    var HTMLComponentGalleryElement: {
        prototype: HTMLComponentGalleryElement;
        new (): HTMLComponentGalleryElement;
    };
    interface HTMLComponentGalleryFilterSidebarElement extends Components.ComponentGalleryFilterSidebar, HTMLStencilElement {
    }
    var HTMLComponentGalleryFilterSidebarElement: {
        prototype: HTMLComponentGalleryFilterSidebarElement;
        new (): HTMLComponentGalleryFilterSidebarElement;
    };
    interface HTMLComponentGalleryGridElement extends Components.ComponentGalleryGrid, HTMLStencilElement {
    }
    var HTMLComponentGalleryGridElement: {
        prototype: HTMLComponentGalleryGridElement;
        new (): HTMLComponentGalleryGridElement;
    };
    interface HTMLComponentGallerySearchInputElement extends Components.ComponentGallerySearchInput, HTMLStencilElement {
    }
    var HTMLComponentGallerySearchInputElement: {
        prototype: HTMLComponentGallerySearchInputElement;
        new (): HTMLComponentGallerySearchInputElement;
    };
    interface HTMLComponentGridElement extends Components.ComponentGrid, HTMLStencilElement {
    }
    var HTMLComponentGridElement: {
        prototype: HTMLComponentGridElement;
        new (): HTMLComponentGridElement;
    };
    interface HTMLElementTagNameMap {
        "component-gallery": HTMLComponentGalleryElement;
        "component-gallery-filter-sidebar": HTMLComponentGalleryFilterSidebarElement;
        "component-gallery-grid": HTMLComponentGalleryGridElement;
        "component-gallery-search-input": HTMLComponentGallerySearchInputElement;
        "component-grid": HTMLComponentGridElement;
    }
}
declare namespace LocalJSX {
    interface ComponentGallery {
        /**
          * Set the type & status filters on the gallery. Each filter type is `and` (both), while the array are `or` (any of) Example: filters={ type: ['Discussions', 'Telemetry], status: ['Production']}
         */
        "filters"?: Record<string, Array<string>>;
        /**
          * Set the query string to search the title
         */
        "query"?: string;
    }
    interface ComponentGalleryFilterSidebar {
        "filters"?: Record<string, Array<string>>;
        "onFiltersUpdated"?: (event: ComponentGalleryFilterSidebarCustomEvent<SearchFilters>) => void;
    }
    interface ComponentGalleryGrid {
        "components"?: any[];
    }
    interface ComponentGallerySearchInput {
        "onSearch"?: (event: ComponentGallerySearchInputCustomEvent<string>) => void;
        /**
          * Query string to show in input. Search function happens outside this component
         */
        "query"?: string;
    }
    interface ComponentGrid {
    }
    interface IntrinsicElements {
        "component-gallery": ComponentGallery;
        "component-gallery-filter-sidebar": ComponentGalleryFilterSidebar;
        "component-gallery-grid": ComponentGalleryGrid;
        "component-gallery-search-input": ComponentGallerySearchInput;
        "component-grid": ComponentGrid;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "component-gallery": LocalJSX.ComponentGallery & JSXBase.HTMLAttributes<HTMLComponentGalleryElement>;
            "component-gallery-filter-sidebar": LocalJSX.ComponentGalleryFilterSidebar & JSXBase.HTMLAttributes<HTMLComponentGalleryFilterSidebarElement>;
            "component-gallery-grid": LocalJSX.ComponentGalleryGrid & JSXBase.HTMLAttributes<HTMLComponentGalleryGridElement>;
            "component-gallery-search-input": LocalJSX.ComponentGallerySearchInput & JSXBase.HTMLAttributes<HTMLComponentGallerySearchInputElement>;
            "component-grid": LocalJSX.ComponentGrid & JSXBase.HTMLAttributes<HTMLComponentGridElement>;
        }
    }
}
