var VueSimpleSuggest=function(){"use strict";var t={selectionUp:[38],selectionDown:[40],select:[13],hideList:[27],showList:[40],autocomplete:[32,13]},e={input:String,select:Object};function r(t,e){return s(t,e.keyCode)}function s(t,e){if(t.length<=0)return!1;function i(t){return t.some(function(t){return t===e})}return Array.isArray(t[0])?t.some(function(t){return i(t)}):i(t)}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};function o(){}function l(t,e){var i=t();return i&&i.then?i.then(e):e(i)}function h(t,e,i){return i?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function c(t,e){try{var i=t()}catch(t){return e(t)}return i&&i.then?i.then(void 0,e):i}function a(t,e){try{var i=t()}catch(t){return e()}return i&&i.then?i.then(e,e):e()}var i={render:function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"vue-simple-suggest",class:[i.styles.vueSimpleSuggest,{designed:!i.destyled,focus:i.isInFocus}],on:{keydown:function(t){if(!t.type.indexOf("key")&&i._k(t.keyCode,"tab",9,t.key,"Tab"))return null;i.isTabbed=!0}}},[s("div",{ref:"inputSlot",staticClass:"input-wrapper",class:i.styles.inputWrapper,attrs:{role:"combobox","aria-haspopup":"listbox","aria-owns":i.listId,"aria-expanded":i.listShown&&!i.removeList?"true":"false"}},[i._t("default",[s("input",i._b({staticClass:"default-input",class:i.styles.defaultInput,domProps:{value:i.text||""}},"input",i.$attrs,!1))])],2),i._v(" "),s("transition",{attrs:{name:"vue-simple-suggest"}},[i.listShown&&!i.removeList?s("ul",{staticClass:"suggestions",class:i.styles.suggestions,attrs:{id:i.listId,role:"listbox","aria-labelledby":i.listId},on:{mouseenter:function(t){return i.hoverList(!0)},mouseleave:function(t){return i.hoverList(!1)}}},[this.$scopedSlots["misc-item-above"]?s("li",[i._t("misc-item-above",null,{suggestions:i.suggestions,query:i.text})],2):i._e(),i._v(" "),i._l(i.suggestions,function(e,t){return s("li",{key:i.getId(e,t),staticClass:"suggest-item",class:[i.styles.suggestItem,{selected:i.isSelected(e),hover:i.isHovered(e)}],attrs:{role:"option","aria-selected":i.isHovered(e)||i.isSelected(e)?"true":"false",id:i.getId(e,t)},on:{mouseenter:function(t){return i.hover(e,t.target)},mouseleave:function(t){return i.hover(void 0)},click:function(t){return i.suggestionClick(e,t)}}},[i._t("suggestion-item",[s("span",[i._v(i._s(i.displayProperty(e)))])],{autocomplete:function(){return i.autocompleteText(e)},suggestion:e,query:i.text})],2)}),i._v(" "),this.$scopedSlots["misc-item-below"]?s("li",[i._t("misc-item-below",null,{suggestions:i.suggestions,query:i.text})],2):i._e()],2):i._e()])],1)},staticRenderFns:[],name:"vue-simple-suggest",inheritAttrs:!1,model:{prop:"value",event:"input"},props:{styles:{type:Object,default:function(){return{}}},controls:{type:Object,default:function(){return t}},minLength:{type:Number,default:1},maxSuggestions:{type:Number,default:10},displayAttribute:{type:String,default:"title"},valueAttribute:{type:String,default:"id"},list:{type:[Function,Array],default:function(){return[]}},removeList:{type:Boolean,default:!1},destyled:{type:Boolean,default:!1},filterByQuery:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e){return!e||~this.displayProperty(t).toLowerCase().indexOf(e.toLowerCase())}},debounce:{type:Number,default:0},nullableSelect:{type:Boolean,default:!1},value:{},mode:{type:String,default:"input",validator:function(t){return!!~Object.keys(e).indexOf(t.toLowerCase())}}},watch:{mode:{handler:function(t,e){var i=this;this.constructor.options.model.event=t,this.$parent&&this.$parent.$forceUpdate(),this.$nextTick(function(){"input"===t?i.$emit("input",i.text):i.$emit("select",i.selected)})},immediate:!0},value:{handler:function(t){"string"!=typeof t&&(t=this.displayProperty(t)),this.updateTextOutside(t)},immediate:!0}},data:function(){return{selected:null,hovered:null,suggestions:[],listShown:!1,inputElement:null,canSend:!0,timeoutInstance:null,text:this.value,isPlainSuggestion:!1,isClicking:!1,isOverList:!1,isInFocus:!1,isFalseFocus:!1,isTabbed:!1,controlScheme:{},listId:this._uid+"-suggestions"}},computed:{listIsRequest:function(){return"function"==typeof this.list},inputIsComponent:function(){return this.$slots.default&&0<this.$slots.default.length&&!!this.$slots.default[0].componentInstance},input:function(){return this.inputIsComponent?this.$slots.default[0].componentInstance:this.inputElement},on:function(){return this.inputIsComponent?"$on":"addEventListener"},off:function(){return this.inputIsComponent?"$off":"removeEventListener"},hoveredIndex:function(){var e=this;return this.suggestions.findIndex(function(t){return e.hovered&&e.valueProperty(e.hovered)==e.valueProperty(t)})},textLength:function(){return this.text&&this.text.length||this.inputElement.value.length||0},isSelectedUpToDate:function(){return!!this.selected&&this.displayProperty(this.selected)===this.text}},created:function(){this.controlScheme=u({},t,this.controls)},mounted:function(){this.inputElement=this.$refs.inputSlot.querySelector("input"),this.setInputAriaAttributes(),this.prepareEventHandlers(!0)},beforeDestroy:function(){this.prepareEventHandlers(!1)},methods:{isEqual:function(t,e){return e&&this.valueProperty(t)==this.valueProperty(e)},isSelected:function(t){return this.isEqual(t,this.selected)},isHovered:function(t){return this.isEqual(t,this.hovered)},setInputAriaAttributes:function(){this.inputElement.setAttribute("aria-activedescendant",""),this.inputElement.setAttribute("aria-autocomplete","list"),this.inputElement.setAttribute("aria-controls",this.listId)},prepareEventHandlers:function(t){var e=this[t?"on":"off"],i={click:this.showSuggestions,keydown:this.onKeyDown,keyup:this.onListKeyUp},s=u({blur:this.onBlur,focus:this.onFocus,input:this.onInput},i);for(var n in s)this.input[e](n,s[n]);var o=t?"addEventListener":"removeEventListener";for(var r in i)this.inputElement[o](r,i[r])},isScopedSlotEmpty:function(t){if(t){var e=t(this);return!(Array.isArray(e)||e&&(e.tag||e.context||e.text||e.children))}return!0},miscSlotsAreEmpty:function(){var e=this,t=["misc-item-above","misc-item-below"].map(function(t){return e.$scopedSlots[t]});if(t.every(function(t){return!!t}))return t.every(this.isScopedSlotEmpty.bind(this));var i=t.find(function(t){return!!t});return this.isScopedSlotEmpty.call(this,i)},getPropertyByAttribute:function(t,e){return this.isPlainSuggestion?t:void 0!==(void 0===t?"undefined":n(t))?function(t,e){return e.split(".").reduce(function(t,e){return t===Object(t)?t[e]:t},t)}(t,e):t},displayProperty:function(t){if(this.isPlainSuggestion)return t;var e=this.getPropertyByAttribute(t,this.displayAttribute);return void 0===e&&(e=JSON.stringify(t),process&&~process.env.NODE_ENV.indexOf("dev")&&console.warn("[vue-simple-suggest]: Please, provide `display-attribute` as a key or a dotted path for a property from your object.")),String(e||"")},valueProperty:function(t){if(this.isPlainSuggestion)return t;var e=this.getPropertyByAttribute(t,this.valueAttribute);return void 0===e&&console.error("[vue-simple-suggest]: Please, check if you passed 'value-attribute' (default is 'id') and 'display-attribute' (default is 'title') props correctly.\n        Your list objects should always contain a unique identifier."),e},autocompleteText:function(t){this.setText(this.displayProperty(t))},setText:function(t){var e=this;this.$nextTick(function(){e.inputElement.value=t,e.text=t,e.$emit("input",t)})},select:function(t){(this.selected!==t||this.nullableSelect&&!t)&&(this.selected=t,this.$emit("select",t),t&&this.autocompleteText(t)),this.hover(null)},hover:function(t,e){var i=t?this.getId(t,this.hoveredIndex):"";this.inputElement.setAttribute("aria-activedescendant",i),t&&t!==this.hovered&&this.$emit("hover",t,e),this.hovered=t},hoverList:function(t){this.isOverList=t},hideList:function(){this.listShown&&(this.listShown=!1,this.hover(null),this.$emit("hide-list"))},showList:function(){this.listShown||this.textLength>=this.minLength&&(0<this.suggestions.length||!this.miscSlotsAreEmpty())&&(this.listShown=!0,this.$emit("show-list"))},showSuggestions:function(){try{var t=this;return l(function(){if(0===t.suggestions.length&&t.minLength<=t.textLength)return t.showList(),function(t,e){if(!e)return t&&t.then?t.then(o):Promise.resolve()}(t.research())},function(){t.showList()})}catch(t){return Promise.reject(t)}},onShowList:function(t){r(this.controlScheme.showList,t)&&this.showSuggestions()},moveSelection:function(t){if(this.listShown&&this.suggestions.length&&r([this.controlScheme.selectionUp,this.controlScheme.selectionDown],t)){t.preventDefault();var e=r(this.controlScheme.selectionDown,t),i=2*e-1,s=e?0:this.suggestions.length-1,n=e?this.hoveredIndex<this.suggestions.length-1:0<this.hoveredIndex,o=null;o=this.hovered?n?this.suggestions[this.hoveredIndex+i]:this.suggestions[s]:this.selected||this.suggestions[s],this.hover(o)}},onKeyDown:function(t){var e=this.controlScheme.select,i=this.controlScheme.hideList;"Enter"===t.key&&this.listShown&&s([e,i],13)&&t.preventDefault(),"Tab"===t.key&&this.hovered&&this.select(this.hovered),this.onShowList(t),this.moveSelection(t),this.onAutocomplete(t)},onListKeyUp:function(t){var e=this.controlScheme.select,i=this.controlScheme.hideList;this.listShown&&r([e,i],t)&&(t.preventDefault(),r(e,t)&&this.select(this.hovered),this.hideList())},onAutocomplete:function(t){r(this.controlScheme.autocomplete,t)&&(t.ctrlKey||t.shiftKey)&&0<this.suggestions.length&&this.suggestions[0]&&this.listShown&&(t.preventDefault(),this.hover(this.suggestions[0]),this.autocompleteText(this.suggestions[0]))},suggestionClick:function(t,e){this.$emit("suggestion-click",t,e),this.select(t),this.hideList(),this.isClicking=this.isOverList=!1},onBlur:function(t){var e=this;this.isInFocus?(this.isClicking=this.isOverList&&!this.isTabbed,this.isClicking?t&&t.isTrusted&&!this.isTabbed&&(this.isFalseFocus=!0,setTimeout(function(){e.inputElement.focus()},0)):(this.isInFocus=!1,this.hideList(),this.$emit("blur",t))):(this.inputElement.blur(),console.error("This should never happen!\n          If you encountered this error, please make sure that your input component emits 'focus' events properly.\n          For more info see https://github.com/KazanExpress/vue-simple-suggest#custom-input.\n\n          If your 'vue-simple-suggest' setup does not include a custom input component - please,\n          report to https://github.com/KazanExpress/vue-simple-suggest/issues/new")),this.isTabbed=!1},onFocus:function(t){this.isInFocus=!0,t&&!this.isFalseFocus&&this.$emit("focus",t),this.isClicking||this.isFalseFocus||this.showSuggestions(),this.isFalseFocus=!1},onInput:function(t){var e=t.target?t.target.value:t;this.updateTextOutside(e),this.$emit("input",e)},updateTextOutside:function(t){this.text!==t&&(this.text=t,this.hovered&&this.hover(null),this.text.length<this.minLength?this.hideList():this.debounce?(clearTimeout(this.timeoutInstance),this.timeoutInstance=setTimeout(this.research,this.debounce)):this.research())},research:function(){try{var i=this;return a(function(){return c(function(){return function(t){var e=t();if(e&&e.then)return e.then(o)}(function(){if(i.canSend){i.canSend=!1;var e=i.text;return h(i.getSuggestions(i.text),function(t){e===i.text&&i.$set(i,"suggestions",t)})}})},function(t){throw i.clearSuggestions(),t})},function(){return i.canSend=!0,0===i.suggestions.length&&i.miscSlotsAreEmpty()?i.hideList():i.isInFocus&&i.showList(),i.suggestions})}catch(t){return Promise.reject(t)}},getSuggestions:function(e){try{var i=this;if((e=e||"").length<i.minLength)return[];i.selected=null,i.listIsRequest&&i.$emit("request-start",e);var s=[];return a(function(){return c(function(){return l(function(){if(i.listIsRequest)return h(i.list(e),function(t){s=t||[]});s=i.list},function(){Array.isArray(s)||(s=[s]),i.isPlainSuggestion="object"!==n(s[0])||Array.isArray(s[0]),i.filterByQuery&&(s=s.filter(function(t){return i.filter(t,e)})),i.listIsRequest&&i.$emit("request-done",s)})},function(t){if(!i.listIsRequest)throw t;i.$emit("request-failed",t)})},function(){return i.maxSuggestions&&s.splice(i.maxSuggestions),s})}catch(t){return Promise.reject(t)}},clearSuggestions:function(){this.suggestions.splice(0)},getId:function(t,e){return this.listId+"-suggestion-"+(this.isPlainSuggestion?e:this.valueProperty(t)||e)}}};return(Vue||window&&window.Vue)&&(Vue||window.Vue).component("vue-simple-suggest",i),i}();
