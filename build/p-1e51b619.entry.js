import{r as t,c as e,h as s}from"./p-ad9e43da.js";const i=".sidebar{width:200px;float:left;padding-right:1rem;box-sizing:border-box}h3{margin-top:0}select{display:block;margin-bottom:1rem;padding:0.5rem;font-size:1rem;width:100%}";const r=class{constructor(s){t(this,s);this.filtersUpdated=e(this,"filtersUpdated",7);this.filtersEl={};this.filters={}}onFilterChanged(t){const e={type:[],status:[]};Object.keys(this.filters).forEach((t=>{e[t]=Array.from(this.filtersEl[t].children).filter((t=>t.selected)).map((t=>t.innerText))}));this.filtersUpdated.emit(e)}render(){return s("div",{class:"sidebar"},Object.keys(this.filters).map((t=>[s("h3",null,"Filter by ",t,":"),s("calcite-tree",{ref:e=>this.filtersEl[t]=e,"selection-mode":"multiple"},this.filters[t].sort().map((t=>s("calcite-tree-item",null,t))))])))}};r.style=i;const a=".components-grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));grid-gap:1rem;padding-left:1rem}";const n=class{constructor(e){t(this,e);this.components=[]}render(){return s("div",{class:"components-grid"},this.components.map((t=>s("div",{class:"component"},s("calcite-card",null,s("span",{slot:"title"},s("a",{href:t.url,target:"_blank"},t.title)),s("span",{slot:"subtitle"},t.status),s("calcite-chip",{slot:"footer-start",scale:"s",value:t.type,appearance:"outline",kind:"brand",icon:""},t.type),s("calcite-button",{slot:"footer-end",target:"_blank",href:t.url},"Open"))))))}};n.style=a;const o=":host{display:block}input{display:block;margin-bottom:1rem;padding:0.5rem;font-size:1rem;width:100%}";const l=class{constructor(s){t(this,s);this.search=e(this,"search",7)}onInput(t){this.search.emit(t.target.value)}render(){return s("input",{type:"text",placeholder:"Search apps",onInput:t=>this.onInput(t)})}};l.style=o;export{r as component_gallery_filter_sidebar,n as component_gallery_grid,l as component_gallery_search_input};
//# sourceMappingURL=p-1e51b619.entry.js.map