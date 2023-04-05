import{r as t,c as e,h as i,H as n,g as o}from"./p-ad9e43da.js";import{h as a,n as c,y as s,a as r,s as l,b as d,t as h,x as m}from"./p-b35bd07c.js";import{c as u,d as f}from"./p-57ca654b.js";import{u as p}from"./p-7b97aed3.js";import{o as b}from"./p-5bda7814.js";import{C as v}from"./p-5f83161a.js";import"./p-30b0f762.js";import"./p-e6be3162.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */function k(t){return t?.matches("calcite-tree-item")}function g(t,e){const i=e==="down"?"nextElementSibling":"previousElementSibling";let n=t;let o=null;while(k(n)){if(!n.disabled){o=n;break}n=n[i]}return o}const x="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:block}:host(:focus){outline:2px solid transparent;outline-offset:2px}";const y=class{constructor(i){t(this,i);this.calciteTreeSelect=e(this,"calciteTreeSelect",6);this.lines=false;this.child=undefined;this.scale="m";this.selectionMode="single";this.selectedItems=[]}componentWillRender(){var t;const e=(t=this.el.parentElement)===null||t===void 0?void 0:t.closest("calcite-tree");this.lines=e?e.lines:this.lines;this.scale=e?e.scale:this.scale;this.selectionMode=e?e.selectionMode:this.selectionMode;this.child=!!e}render(){return i(n,{"aria-multiselectable":this.child?undefined:(this.selectionMode==="multiple"||this.selectionMode==="multichildren").toString(),role:!this.child?"tree":undefined,tabIndex:this.getRootTabIndex()},i("slot",null))}onFocus(){if(!this.child){const t=this.el.querySelector("calcite-tree-item[selected]:not([disabled])")||this.el.querySelector("calcite-tree-item:not([disabled])");a(t)}}onFocusIn(t){const e=t.relatedTarget===this.el||!this.el.contains(t.relatedTarget);if(e){this.el.removeAttribute("tabindex")}}onFocusOut(t){const e=!this.el.contains(t.relatedTarget);if(e){this.el.tabIndex=this.getRootTabIndex()}}onClick(t){const e=t.target;const i=c(e.querySelectorAll("calcite-tree-item"));if(this.child){return}if(!this.child){t.preventDefault();t.stopPropagation()}if(this.selectionMode==="ancestors"&&!this.child){this.updateAncestorTree(t);return}const n=this.selectionMode==="none";const o=this.selectionMode!==null&&(!e.hasChildren||e.hasChildren&&(this.selectionMode==="children"||this.selectionMode==="multichildren"));const a=!n&&t.detail.modifyCurrentSelection&&(this.selectionMode==="multiple"||this.selectionMode==="multichildren");const s=this.selectionMode==="multichildren"||this.selectionMode==="children";const r=!a&&((this.selectionMode==="single"||this.selectionMode==="multiple")&&i.length<=0||this.selectionMode==="children"||this.selectionMode==="multichildren");const l=this.selectionMode==="children"||this.selectionMode==="multichildren";if(!this.child){const d=[];if(o){d.push(e)}if(s){i.forEach((t=>{d.push(t)}))}if(r){const t=c(this.el.querySelectorAll("calcite-tree-item[selected]"));t.forEach((t=>{if(!d.includes(t)){t.selected=false}}))}if(l&&!t.detail.forceToggle){e.expanded=true}if(a){window.getSelection().removeAllRanges()}if(a&&e.selected||s&&t.detail.forceToggle){d.forEach((t=>{if(!t.disabled){t.selected=false}}))}else if(!n){d.forEach((t=>{if(!t.disabled){t.selected=true}}))}}this.selectedItems=n?[e]:c(this.el.querySelectorAll("calcite-tree-item")).filter((t=>t.selected));this.calciteTreeSelect.emit();t.stopPropagation()}keyDownHandler(t){var e;const i=this.el.closest("calcite-tree:not([child])");const n=t.target;if(!(i===this.el&&n.tagName==="CALCITE-TREE-ITEM"&&this.el.contains(n))){return}if(t.key==="ArrowDown"){const e=g(n.nextElementSibling,"down");if(e){e.focus();t.preventDefault()}return}if(t.key==="ArrowUp"){const e=g(n.previousElementSibling,"up");if(e){e.focus();t.preventDefault()}}if(t.key==="ArrowLeft"&&!n.disabled){if(n.hasChildren&&n.expanded){n.expanded=false;t.preventDefault();return}const e=n.parentElement.closest("calcite-tree-item");if(e&&(!n.hasChildren||n.expanded===false)){e.focus();t.preventDefault();return}return}if(t.key==="ArrowRight"&&!n.disabled){if(n.hasChildren){if(n.expanded&&s(this.el).activeElement===n){(e=g(n.querySelector("calcite-tree-item"),"down"))===null||e===void 0?void 0:e.focus();t.preventDefault()}else{n.expanded=true;t.preventDefault()}}return}}updateAncestorTree(t){const e=t.target;if(e.disabled){return}const i=[];let n=e.parentElement.closest("calcite-tree-item");while(n){i.push(n);n=n.parentElement.closest("calcite-tree-item")}const o=Array.from(e.querySelectorAll("calcite-tree-item:not([disabled])"));const a=o.filter((t=>!t.hasChildren));const s=o.filter((t=>t.hasChildren));const r=e.hasChildren?!(e.selected||e.indeterminate):!e.selected;a.forEach((t=>{t.selected=r;t.indeterminate=false}));function l(t,e){const i=t.filter((t=>t.selected));const n=t.filter((t=>!t.selected));e.selected=i.length===t.length;e.indeterminate=i.length>0&&n.length>0}s.forEach((t=>{const e=Array.from(t.querySelectorAll(":scope > calcite-tree > calcite-tree-item"));l(e,t)}));if(e.hasChildren){l(o,e)}else{e.selected=r;e.indeterminate=false}i.forEach((t=>{const e=c(t.querySelectorAll("calcite-tree-item"));const i=e.filter((t=>t.selected));if(i.length===0){t.selected=false;t.indeterminate=false;return}const n=i.length<e.length;t.indeterminate=n;t.selected=!n}));this.selectedItems=c(this.el.querySelectorAll("calcite-tree-item")).filter((t=>t.selected));this.calciteTreeSelect.emit()}getRootTabIndex(){return!this.child?0:-1}get el(){return o(this)}};y.style=x;
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const w={actionsEnd:"actions-end",checkboxLabel:"checkbox-label",checkbox:"checkbox",chevron:"chevron",nodeContainer:"node-container",childrenContainer:"children-container",bulletPointIcon:"bullet-point",checkmarkIcon:"checkmark",itemExpanded:"item--expanded",iconStart:"icon-start",nodeAndActionsContainer:"node-actions-container"};const z={actionsEnd:"actions-end",children:"children"};const _={bulletPoint:"bullet-point",checkmark:"check",chevronRight:"chevron-right",blank:"blank"};const C='@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block;max-inline-size:100%;cursor:pointer;color:var(--calcite-ui-text-3)}[hidden]{display:none}.node-actions-container{display:flex;justify-content:space-between}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .node-actions-container{min-block-size:1.5rem}:host([scale=s]) .node-actions-container .node-container .checkbox,:host([scale=s]) .node-actions-container .node-container .chevron,:host([scale=s]) .node-actions-container .node-container .checkmark,:host([scale=s]) .node-actions-container .node-container .bullet-point{margin-inline:0.25rem}:host([scale=s]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .node-actions-container{min-block-size:2rem}:host([scale=m]) .node-actions-container .node-container .checkbox,:host([scale=m]) .node-actions-container .node-container .chevron,:host([scale=m]) .node-actions-container .node-container .checkmark,:host([scale=m]) .node-actions-container .node-container .bullet-point{margin-inline:0.5rem}:host([scale=m]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .node-actions-container{min-block-size:2.75rem}:host([scale=l]) .node-actions-container .node-container .checkbox,:host([scale=l]) .node-actions-container .node-container .chevron,:host([scale=l]) .node-actions-container .node-container .checkmark,:host([scale=l]) .node-actions-container .node-container .bullet-point{margin-inline:0.75rem}:host([scale=l]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([lines]) .children-container:after{position:absolute;inset-block-start:0px;z-index:1;inline-size:1px;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;block-size:96%;content:"";background-color:var(--calcite-ui-border-2)}:host(:not([lines])) .node-container:after{display:none}::slotted(*){min-inline-size:0px;max-inline-size:100%;overflow-wrap:break-word;color:inherit;text-decoration:none !important}::slotted(*):hover{text-decoration:none !important}::slotted(a){inline-size:100%;text-decoration-line:none}:host{outline-color:transparent}:host:focus,:host:active{outline:2px solid transparent;outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host(:focus:not([disabled])){outline:2px solid transparent;outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.actions-end{display:flex;flex-direction:row;align-items:center;align-self:stretch}.checkbox{line-height:0}.checkbox-label{pointer-events:none;display:flex;align-items:center}.checkbox:focus{outline:2px solid transparent;outline-offset:2px}.children-container{position:relative;block-size:0px;overflow:hidden;margin-inline-start:1.25rem;transform:scaleY(0);opacity:0;transition:var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out;transform-origin:top}.item--expanded>.children-container{overflow:visible;opacity:1;block-size:auto}.node-container{position:relative;display:flex;min-inline-size:0px;align-items:center}.node-container .checkmark,.node-container .bullet-point{opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;color:var(--calcite-ui-border-1)}.node-container:hover .checkmark,.node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark,:host([selected]) .node-container:hover .bullet-point,:host(:focus:not([disabled])) .node-container .checkmark,:host(:focus:not([disabled])) .node-container .bullet-point{opacity:1}:host([selected]) .node-container,:host([selected]) .node-container:hover{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selected]) .node-container .bullet-point,:host([selected]) .node-container .checkmark,:host([selected]) .node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark{opacity:1;color:var(--calcite-ui-brand)}:host([selection-mode=none]:not([has-children])):host([scale=s]) .node-container{padding-inline-start:0.5rem}:host([selection-mode=none]:not([has-children])):host([scale=m]) .node-container{padding-inline-start:1rem}:host([selection-mode=none]:not([has-children])):host([scale=l]) .node-container{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=s]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.25rem}:host(:not([has-children])):host([scale=m]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=l]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.75rem}:host([has-children]) .node-container[data-selection-mode=ancestors] .checkbox{margin-inline-start:0}:host([has-children]) .node-container .bullet-point,:host([has-children]) .node-container .checkmark{display:none}:host([has-children][expanded]:not([selected]):not([selection-mode=none])) .node-container ::slotted(*){font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([has-children][selected]) .node-container[data-selection-mode=children],:host([has-children][selected]) .node-container[data-selection-mode=multichildren]{color:var(--calcite-ui-brand)}.chevron{position:relative;align-self:center;color:var(--calcite-ui-text-3);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;flex:0 0 auto;transform:rotate(0deg)}.calcite--rtl .chevron{transform:rotate(180deg)}.item--expanded .node-container>.chevron{transform:rotate(90deg)}:host([selected]) .checkmark,:host([selected]) .bullet-point{color:var(--calcite-ui-brand)}';const D=class{constructor(i){t(this,i);this.calciteInternalTreeItemSelect=e(this,"calciteInternalTreeItemSelect",6);this.openTransitionProp="opacity";this.transitionProp="expanded";this.iconClickHandler=t=>{t.stopPropagation();this.expanded=!this.expanded};this.childrenClickHandler=t=>t.stopPropagation();this.updateParentIsExpanded=(t,e)=>{const i=r(t,z.children,{all:true,selector:"calcite-tree-item"});i.forEach((t=>t.parentExpanded=e))};this.updateAncestorTree=()=>{var t;if(this.selected&&this.selectionMode==="ancestors"){const e=[];let i=this.parentTreeItem;while(i){e.push(i);i=(t=i.parentElement)===null||t===void 0?void 0:t.closest("calcite-tree-item")}e.forEach((t=>t.indeterminate=true));return}};this.actionsEndSlotChangeHandler=t=>{this.hasEndActions=l(t)};this.disabled=false;this.expanded=false;this.iconFlipRtl=undefined;this.iconStart=undefined;this.selected=false;this.parentExpanded=false;this.depth=-1;this.hasChildren=null;this.lines=undefined;this.scale=undefined;this.indeterminate=undefined;this.selectionMode=undefined;this.updateAfterInitialRender=false;this.hasEndActions=false}expandedHandler(t){this.updateParentIsExpanded(this.el,t);b(this,true)}getselectionMode(){this.isSelectionMultiLike=this.selectionMode==="multiple"||this.selectionMode==="multichildren"}onBeforeOpen(){this.transitionEl.style.transform="scaleY(1)"}onOpen(){this.transitionEl.style.transform="none"}onBeforeClose(){}onClose(){this.transitionEl.style.transform="scaleY(0)"}connectedCallback(){var t;this.parentTreeItem=(t=this.el.parentElement)===null||t===void 0?void 0:t.closest("calcite-tree-item");if(this.parentTreeItem){const{expanded:t}=this.parentTreeItem;this.updateParentIsExpanded(this.parentTreeItem,t)}u(this)}disconnectedCallback(){f(this)}componentWillRender(){var t;this.hasChildren=!!this.el.querySelector("calcite-tree");this.depth=0;let e=this.el.closest("calcite-tree");if(!e){return}this.selectionMode=e.selectionMode;this.scale=e.scale||"m";this.lines=e.lines;let i;while(e){i=(t=e.parentElement)===null||t===void 0?void 0:t.closest("calcite-tree");if(i===e){break}else{e=i;this.depth=this.depth+1}}}componentWillLoad(){if(this.expanded){b(this,true)}requestAnimationFrame((()=>this.updateAfterInitialRender=true))}componentDidLoad(){this.updateAncestorTree()}componentDidRender(){p(this,(()=>this.parentExpanded||this.depth===1))}render(){const t=d(this.el)==="rtl";const e=this.selectionMode==="single"||this.selectionMode==="children";const o=this.selectionMode==="multiple"||this.selectionMode==="multichildren";const a=this.selectionMode==="none"&&!this.hasChildren;const c=this.hasChildren?i("calcite-icon",{class:{[w.chevron]:true,[v.rtl]:t},"data-test-id":"icon",icon:_.chevronRight,onClick:this.iconClickHandler,scale:this.scale==="l"?"m":"s"}):null;const s=i("slot",{key:"default-slot"});const r=this.selectionMode==="ancestors"?i("label",{class:w.checkboxLabel,key:"checkbox-label"},i("calcite-checkbox",{checked:this.selected,class:w.checkbox,"data-test-id":"checkbox",indeterminate:this.hasChildren&&this.indeterminate,scale:this.scale,tabIndex:-1}),s):null;const l=e?_.bulletPoint:o?_.checkmark:a?_.blank:null;const m=l?i("calcite-icon",{class:{[w.bulletPointIcon]:l===_.bulletPoint,[w.checkmarkIcon]:l===_.checkmark,[v.rtl]:t},icon:l,scale:this.scale==="l"?"m":"s"}):null;const u=!(this.parentExpanded||this.depth===1);const f=this.updateAfterInitialRender&&this.expanded;const{hasEndActions:p}=this;const b=i("slot",{key:"actionsEndSlot",name:z.actionsEnd,onSlotchange:this.actionsEndSlotChangeHandler});const k=i("calcite-icon",{class:w.iconStart,flipRtl:this.iconFlipRtl==="start"||this.iconFlipRtl==="both",icon:this.iconStart,scale:this.scale==="l"?"m":"s"});return i(n,{"aria-expanded":this.hasChildren?h(f):undefined,"aria-hidden":h(u),"aria-selected":this.selected?"true":o?"false":undefined,"calcite-hydrated-hidden":u,role:"treeitem"},i("div",{class:{[w.itemExpanded]:f}},i("div",{class:w.nodeAndActionsContainer},i("div",{class:{[w.nodeContainer]:true,[v.rtl]:t},"data-selection-mode":this.selectionMode,ref:t=>this.defaultSlotWrapper=t},c,m,this.iconStart?k:null,r?r:s),i("div",{class:w.actionsEnd,hidden:!p},b)),i("div",{class:{[w.childrenContainer]:true,[v.rtl]:t},"data-test-id":"calcite-tree-children",onClick:this.childrenClickHandler,role:this.hasChildren?"group":undefined,ref:t=>this.setTransitionEl(t)},i("slot",{name:z.children}))))}setTransitionEl(t){this.transitionEl=t}onClick(t){const[e]=m(this.el,"a");if(e&&t.composedPath()[0].tagName.toLowerCase()!=="a"){const t=e.target===""?"_self":e.target;window.open(e.href,t)}this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:this.selectionMode==="ancestors"||this.isSelectionMultiLike,forceToggle:false})}keyDownHandler(t){let e;switch(t.key){case" ":if(this.selectionMode==="none"){return}this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:this.isSelectionMultiLike,forceToggle:false});t.preventDefault();break;case"Enter":if(this.selectionMode==="none"){return}const i=c(this.el.children).find((t=>t.matches("a")));if(i){i.click();this.selected=true}else{this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:this.isSelectionMultiLike,forceToggle:false})}t.preventDefault();break;case"Home":e=this.el.closest("calcite-tree:not([child])");const n=e.querySelector("calcite-tree-item");n===null||n===void 0?void 0:n.focus();break;case"End":e=this.el.closest("calcite-tree:not([child])");let o=e.children[e.children.length-1];let a=c(o.children).find((t=>t.matches("calcite-tree")));while(a){o=a.children[e.children.length-1];a=c(o.children).find((t=>t.matches("calcite-tree")))}o===null||o===void 0?void 0:o.focus();break}}get el(){return o(this)}static get watchers(){return{expanded:["expandedHandler"],selectionMode:["getselectionMode"]}}};D.style=C;export{y as calcite_tree,D as calcite_tree_item};
//# sourceMappingURL=p-c53bf2d9.entry.js.map