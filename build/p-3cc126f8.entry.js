import{r as t,c as a,h as i,g as n}from"./p-ad9e43da.js";import{c as e}from"./p-e6be3162.js";const c="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:block}";const r=class{constructor(i){t(this,i);this.calciteInternalOptionChange=a(this,"calciteInternalOptionChange",6);this.mutationObserver=e("mutation",(()=>{this.ensureTextContentDependentProps();this.calciteInternalOptionChange.emit()}));this.disabled=false;this.label=undefined;this.selected=undefined;this.value=undefined}handlePropChange(t,a,i){if(i==="label"||i==="value"){this.ensureTextContentDependentProps()}this.calciteInternalOptionChange.emit()}ensureTextContentDependentProps(){const{el:{textContent:t}}=this;if(!this.label||this.label===this.internallySetLabel){this.label=t;this.internallySetLabel=t}if(!this.value||this.value===this.internallySetValue){this.value=t;this.internallySetValue=t}}connectedCallback(){var t;this.ensureTextContentDependentProps();(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(this.el,{attributeFilter:["label","value"],characterData:true,childList:true,subtree:true})}disconnectedCallback(){var t;(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect()}render(){return i("slot",null,this.label)}get el(){return n(this)}static get watchers(){return{disabled:["handlePropChange"],label:["handlePropChange"],selected:["handlePropChange"],value:["handlePropChange"]}}};r.style=c;export{r as calcite_option};
//# sourceMappingURL=p-3cc126f8.entry.js.map