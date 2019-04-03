!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.VueSimpleSuggest=e()}(this,function(){"use strict";var t={selectionUp:[38],selectionDown:[40],select:[13],hideList:[27],autocomplete:[32,13]},e={input:String,select:Object};function i(t,e){if(t.length<=0)return!1;var i=function(t){return t.some(function(t){return t===e.keyCode})};return Array.isArray(t[0])?t.some(function(t){return i(t)}):i(t)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function n(t,e){try{var i=t()}catch(t){return e()}return i&&i.then?i.then(e,e):e()}function o(t,e){try{var i=t()}catch(t){return e(t)}return i&&i.then?i.then(void 0,e):i}function r(t,e,i){return i?e?e(t):t:(t=Promise.resolve(t),e?t.then(e):t)}var u=function(){try{if(isNaN.apply(null,{}))return function(t){return function(){try{return Promise.resolve(t.apply(this,arguments))}catch(t){return Promise.reject(t)}}}}catch(t){}return function(t){return function(){try{return Promise.resolve(t.apply(this,Array.prototype.slice.call(arguments)))}catch(t){return Promise.reject(t)}}}}();function l(t,e){var i=t();return i&&i.then?i.then(e):e(i)}function c(){}var h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vue-simple-suggest",class:[t.styles.vueSimpleSuggest,{designed:!t.destyled,focus:t.isInFocus}],on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"tab",9,e.key,"Tab"))return null;t.isTabbed=!0}}},[i("div",{ref:"inputSlot",staticClass:"input-wrapper",class:t.styles.inputWrapper,attrs:{role:"combobox","aria-haspopup":"listbox","aria-owns":t.listId,"aria-expanded":t.listShown&&!t.removeList?"true":"false"}},[t._t("default",[i("input",t._b({staticClass:"default-input",class:t.styles.defaultInput,domProps:{value:t.text||""}},"input",t.$attrs,!1))])],2),t._v(" "),i("transition",{attrs:{name:"vue-simple-suggest"}},[t.listShown&&!t.removeList?i("ul",{staticClass:"suggestions",class:t.styles.suggestions,attrs:{id:t.listId,role:"listbox","aria-labelledby":t.listId},on:{mouseenter:function(e){t.hoverList(!0)},mouseleave:function(e){t.hoverList(!1)}}},[this.$scopedSlots["misc-item-above"]?i("li",[t._t("misc-item-above",null,{suggestions:t.suggestions,query:t.text})],2):t._e(),t._v(" "),t._l(t.suggestions,function(e,s){return i("li",{key:t.getId(e,s),staticClass:"suggest-item",class:[t.styles.suggestItem,{selected:t.isSelected(e),hover:t.isHovered(e)}],attrs:{role:"option","aria-selected":t.isHovered(e)||t.isSelected(e)?"true":"false",id:t.getId(e,s)},on:{mouseenter:function(i){t.hover(e,i.target)},mouseleave:function(e){t.hover(void 0)},click:function(i){t.suggestionClick(e,i)}}},[t._t("suggestion-item",[i("span",[t._v(t._s(t.displayProperty(e)))])],{autocomplete:function(){return t.setText(t.displayProperty(e))},suggestion:e,query:t.text})],2)}),t._v(" "),this.$scopedSlots["misc-item-below"]?i("li",[t._t("misc-item-below",null,{suggestions:t.suggestions,query:t.text})],2):t._e()],2):t._e()])],1)},staticRenderFns:[],name:"vue-simple-suggest",model:{prop:"value",event:"input"},props:{styles:{type:Object,default:function(){return{}}},controls:{type:Object,default:function(){return t}},minLength:{type:Number,default:1},maxSuggestions:{type:Number,default:10},displayAttribute:{type:String,default:"title"},valueAttribute:{type:String,default:"id"},list:{type:[Function,Array],default:function(){return[]}},removeList:{type:Boolean,default:!1},destyled:{type:Boolean,default:!1},preventSubmit:{type:Boolean,default:!0},filterByQuery:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e){return!e||~this.displayProperty(t).toLowerCase().indexOf(e.toLowerCase())}},debounce:{type:Number,default:0},nullableSelect:{type:Boolean,default:!1},value:{},mode:{type:String,default:"input",validator:function(t){return!!~Object.keys(e).indexOf(t.toLowerCase())}}},watch:{mode:{handler:function(t,e){var i=this;this.constructor.options.model.event=t,this.$parent&&this.$parent.$forceUpdate(),this.$nextTick(function(){"input"===t?i.$emit("input",i.text):i.$emit("select",i.selected)})},immediate:!0},value:{handler:function(t){"string"==typeof t?this.text=t:t&&(this.text=this.displayProperty(t))},immediate:!0}},data:function(){return{selected:null,hovered:null,suggestions:[],listShown:!1,inputElement:null,canSend:!0,timeoutInstance:null,text:this.value,isPlainSuggestion:!1,isClicking:!1,isOverList:!1,isInFocus:!1,isFalseFocus:!1,isTabbed:!1,controlScheme:{},listId:this._uid+"-suggestions"}},computed:{listIsRequest:function(){return"function"==typeof this.list},inputIsComponent:function(){return this.$slots.default&&this.$slots.default.length>0&&!!this.$slots.default[0].componentInstance},input:function(){return this.inputIsComponent?this.$slots.default[0].componentInstance:this.inputElement},on:function(){return this.inputIsComponent?"$on":"addEventListener"},off:function(){return this.inputIsComponent?"$off":"removeEventListener"},hoveredIndex:function(){var t=this;return this.suggestions.findIndex(function(e){return t.hovered&&t.valueProperty(t.hovered)==t.valueProperty(e)})},textLength:function(){return this.text&&this.text.length||this.inputElement.value.length||0},isSelectedUpToDate:function(){return!!this.selected&&this.displayProperty(this.selected)===this.text}},created:function(){this.controlScheme=Object.assign({},t,this.controls)},mounted:function(){this.inputElement=this.$refs.inputSlot.querySelector("input"),this.setInputAriaAttributes(),this.prepareEventHandlers(!0)},beforeDestroy:function(){this.prepareEventHandlers(!1)},methods:{isEqual:function(t,e){return e&&this.valueProperty(t)==this.valueProperty(e)},isSelected:function(t){return this.isEqual(t,this.selected)},isHovered:function(t){return this.isEqual(t,this.hovered)},onSubmit:function(t){this.preventSubmit&&"Enter"===t.key&&(t.stopPropagation(),t.preventDefault())},setInputAriaAttributes:function(){this.inputElement.setAttribute("aria-activedescendant",""),this.inputElement.setAttribute("aria-autocomplete","list"),this.inputElement.setAttribute("aria-controls",this.listId)},prepareEventHandlers:function(t){var e=this,i=this[t?"on":"off"],s={click:this.showSuggestions,keydown:function(t){return e.moveSelection(t),e.onAutocomplete(t)},keyup:this.onListKeyUp},n=Object.assign({blur:this.onBlur,focus:this.onFocus,input:this.onInput},s);for(var o in n)this.input[i](o,n[o]);var r=t?"addEventListener":"removeEventListener";for(var u in s)this.inputElement[r](u,s[u]);if(!0===this.preventSubmit){var l=this.$el.closest("form");l&&l[r]("keydown",this.onSubmit)}},isScopedSlotEmpty:function(t){if(t){var e=t(this);return!(Array.isArray(e)||e&&(e.tag||e.context||e.text||e.children))}return!0},miscSlotsAreEmpty:function(){var t=this,e=["misc-item-above","misc-item-below"].map(function(e){return t.$scopedSlots[e]});if(e.every(function(t){return!!t}))return e.every(this.isScopedSlotEmpty.bind(this));var i=e.find(function(t){return!!t});return this.isScopedSlotEmpty.call(this,i)},getPropertyByAttribute:function(t,e){return this.isPlainSuggestion?t:void 0!==(void 0===t?"undefined":s(t))?function(t,e){return e.split(".").reduce(function(t,e){return t===Object(t)?t[e]:t},t)}(t,e):t},displayProperty:function(t){if(this.isPlainSuggestion)return t;var e=this.getPropertyByAttribute(t,this.displayAttribute);return void 0===e&&(e=JSON.stringify(t),process&&~process.env.NODE_ENV.indexOf("dev")&&console.warn("[vue-simple-suggest]: Please, provide `display-attribute` as a key or a dotted path for a property from your object.")),String(e)},valueProperty:function(t){if(this.isPlainSuggestion)return t;var e=this.getPropertyByAttribute(t,this.valueAttribute);return void 0===e&&console.error("[vue-simple-suggest]: Please, check if you passed 'value-attribute' (default is 'id') and 'display-attribute' (default is 'title') props correctly.\n        Your list objects should always contain a unique identifier."),e},autocompleteText:function(t){this.setText(t)},setText:function(t){var e=this;this.$nextTick(function(){e.$emit("input",t),e.inputElement.value=t,e.text=t})},select:function(t){(this.selected!==t||this.nullableSelect&&!t)&&(this.selected=t,this.$emit("select",t),t&&this.setText(this.displayProperty(t))),this.hover(null)},hover:function(t,e){var i=t?this.getId(t,this.hoveredIndex):"";this.inputElement.setAttribute("aria-activedescendant",i),t&&t!==this.hovered&&this.$emit("hover",t,e),this.hovered=t},hoverList:function(t){this.isOverList=t},hideList:function(){this.listShown&&(this.listShown=!1,this.hover(null),this.$emit("hide-list"))},showList:function(){this.listShown||this.textLength>=this.minLength&&(this.suggestions.length>0||!this.miscSlotsAreEmpty())&&(this.listShown=!0,this.$emit("show-list"))},showSuggestions:u(function(){var t=this;return l(function(){if(0===t.suggestions.length&&t.minLength===t.textLength)return function(t,e){if(!e)return Promise.resolve(t).then(c)}(t.research())},function(){t.showList()})}),moveSelection:function(t){if(this.listShown&&this.suggestions.length&&i([this.controlScheme.selectionUp,this.controlScheme.selectionDown],t)){t.preventDefault(),this.showSuggestions();var e=i(this.controlScheme.selectionDown,t),s=2*e-1,n=e?0:this.suggestions.length-1,o=e?this.hoveredIndex<this.suggestions.length-1:this.hoveredIndex>0,r=null;r=this.hovered?o?this.suggestions[this.hoveredIndex+s]:this.suggestions[n]:this.selected||this.suggestions[n],this.hover(r)}},onListKeyUp:function(t){var e=this.controlScheme.select;i([e,this.controlScheme.hideList],t)&&(t.preventDefault(),this.listShown?(i(e,t)&&this.select(this.hovered),this.hideList()):i(e,t)&&this.research())},onAutocomplete:function(t){i(this.controlScheme.autocomplete,t)&&(t.ctrlKey||t.shiftKey)&&this.suggestions.length>0&&this.suggestions[0]&&this.listShown&&(t.preventDefault(),this.hover(this.suggestions[0]),this.setText(this.displayProperty(this.suggestions[0])))},suggestionClick:function(t,e){var i=this;this.$emit("suggestion-click",t,e),this.select(t),this.isClicking=this.isOverList=!1,this.$nextTick(function(){i.hideList()})},onBlur:function(t){var e=this;this.isInFocus?(this.isClicking=this.isOverList&&!this.isTabbed,this.isClicking?t&&t.isTrusted&&!this.isTabbed&&(this.isFalseFocus=!0,this.$nextTick(function(){e.inputElement.focus()})):(this.isInFocus=!1,this.hideList(),this.$emit("blur",t))):(this.inputElement.blur(),console.error("This should never happen!\n          If you encountered this error, please make sure that your input component emits 'focus' events properly.\n          For more info see https://github.com/KazanExpress/vue-simple-suggest#custom-input.\n\n          If your 'vue-simple-suggest' setup does not include a custom input component - please,\n          report to https://github.com/KazanExpress/vue-simple-suggest/issues/new")),this.isTabbed=!1},onFocus:function(t){this.isInFocus=!0,t&&!this.isFalseFocus&&this.$emit("focus",t),this.isFalseFocus=!1,this.isClicking||this.showSuggestions()},onInput:function(t){var e=t.target?t.target.value:t;this.text!==e&&(this.text=e,this.$emit("input",this.text),this.hovered&&this.hover(null),this.debounce?(clearTimeout(this.timeoutInstance),this.timeoutInstance=setTimeout(this.research,this.debounce)):this.research())},research:u(function(){var t=this;return n(function(){return o(function(){return function(t){var e=t();if(e&&e.then)return e.then(c)}(function(){if(t.canSend){t.canSend=!1;var e=t.$set;return r(t.getSuggestions(t.text),function(i){e.call(t,t,"suggestions",i)})}})},function(e){throw t.clearSuggestions(),e})},function(){return t.canSend=!0,0===t.suggestions.length&&t.miscSlotsAreEmpty()?t.hideList():t.showList(),t.suggestions})}),getSuggestions:u(function(t){var e=this;if((t=t||"").length<e.minLength)return e.listShown?(e.hideList(),[]):e.suggestions;e.selected=null,e.listIsRequest&&(e.$emit("request-start",t),(e.suggestions.length>0||!e.miscSlotsAreEmpty())&&e.showList());var i=[];return n(function(){return o(function(){return l(function(){if(e.listIsRequest)return r(e.list(t),function(t){i=t||[]});i=e.list},function(){Array.isArray(i)||(i=[i]),e.isPlainSuggestion="object"!==s(i[0])||Array.isArray(i[0]),e.filterByQuery&&(i=i.filter(function(i){return e.filter(i,t)})),e.listIsRequest&&e.$emit("request-done",i)})},function(t){if(!e.listIsRequest)throw t;e.$emit("request-failed",t)})},function(){return e.maxSuggestions&&i.splice(e.maxSuggestions),i})}),clearSuggestions:function(){this.suggestions.splice(0)},getId:function(t,e){return this.listId+"-suggestion-"+(this.isPlainSuggestion?e:this.valueProperty(t)||e)}}};return(Vue||window&&window.Vue)&&(Vue||window.Vue).component("vue-simple-suggest",h),h});
