(this["webpackJsonpsmm-encyclopedia"]=this["webpackJsonpsmm-encyclopedia"]||[]).push([[0,23],{272:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a,c=n(2),i=n(3),r=n(6),o=n(4),s=n(5),l=n(0),u=n(1),b=n(12),p=n(17),j=n(7),O=Object(u.a)("type"),d=Object(u.a)("htmlType");a=Symbol.iterator;var h=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e,a){var i;return Object(c.a)(this,n),i=t.call(this),Object.defineProperty(Object(r.a)(i),O,{writable:!0,value:void 0}),Object.defineProperty(Object(r.a)(i),d,{writable:!0,value:void 0}),Object(l.a)(Object(r.a)(i),O)[O]=e,Object(l.a)(Object(r.a)(i),d)[d]=a,i}return Object(i.a)(n,[{key:"type",get:function(){return Object(l.a)(this,O)[O]}},{key:"htmlType",get:function(){return Object(l.a)(this,d)[d]}},{key:"createButton",value:function(e,t,n){var a=this;return this===e?Object(j.jsx)("button",{className:"btn btn-success bi-".concat(this.htmlType," btn-viewDisplay"),disabled:!0},"".concat(t," (").concat(this.name,")")):Object(j.jsx)("button",{className:"btn btn-dark bi-".concat(this.htmlType," btn-viewDisplay"),onClick:function(){return n(a)}},"".concat(t," (").concat(this.name,")"))}},{key:"_static",get:function(){return n}}],[{key:"getValue",value:function(e){return b.a.getValueOn(this,e)}},{key:"values",get:function(){return b.a.getValuesOn(this)}},{key:a,value:function(){return this.values[Symbol.iterator]()}}]),n}(b.a);h.TABLE=new(function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"createComponent",value:function(e){return Object(p.a)("createTable"in e,"The application does not handle a table creation."),e.createTable()}}]),n}(h))("table","table"),h.SIMPLE_LIST=new(function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"createComponent",value:function(e){return Object(p.a)("createList"in e,'The application does not handle a "simple list" creation.'),e.createList()}}]),n}(h))("simple-list","list"),h.CARD_LIST=new(function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"createComponent",value:function(e){return Object(p.a)("createCardList"in e,'The application does not handle a "card list" creation.'),e.createCardList()}}]),n}(h))("card-list","card-list")},273:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return H}));var a=n(18),c=n(42),i=(n(276),n(10)),r=n(21),o=n(14),s=n(2),l=n(3),u=n(6),b=n(4),p=n(5),j=n(0),O=n(1),d=n(47),h=n(24),v=n(82),f=n(37),y=n(58),m=n(74),g=n(89),E=Object(O.a)("addEventListener"),D=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.DEFAULT_OPTIONS,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return Object(s.a)(this,n),a=t.call(this,n,e,c),Object.defineProperty(Object(u.a)(a),E,{value:I}),a.on(i),a}return Object(l.a)(n,[{key:"_createInstance",value:function(e){return y.b.getOrCreateInstance(this.element,e)}},{key:"_on",value:function(e){return null!=e.inserted&&this.onInserted(e.inserted),this}},{key:"onShow",value:function(e){return Object(j.a)(this,E)[E](n.SHOW_EVENT,e)}},{key:"onShown",value:function(e){return Object(j.a)(this,E)[E](n.SHOWN_EVENT,e)}},{key:"onHide",value:function(e){return Object(j.a)(this,E)[E](n.HIDE_EVENT,e)}},{key:"onHidden",value:function(e){return Object(j.a)(this,E)[E](n.HIDDEN_EVENT,e)}},{key:"onInserted",value:function(e){return Object(j.a)(this,E)[E](n.INSERTED_EVENT,e)}}],[{key:"getInstance",value:function(e){return m.a._getInstance(n,e)}}]),n}(g.a);function I(e,t){var n=this;return null!=t&&this.element.addEventListener(e,(function(e){return t(n,e)})),this}function k(e){var t=e.children,n=void 0===t?f.a:t,a=e.option,c=e.on,r=e.elementId;return Object(i.useEffect)((function(){return[r].flat().forEach((function(e){return new D(e,a,c)}))})),n}D.DEFAULT_OPTIONS={},D.SHOW_EVENT=y.b.Event.SHOW,D.SHOWN_EVENT=y.b.Event.SHOWN,D.HIDE_EVENT=y.b.Event.HIDE,D.HIDDEN_EVENT=y.b.Event.HIDDEN,D.INSERTED_EVENT=y.b.Event.INSERTED;var N=n(7),T=["children","elementId"];function _(e){var t=e.children,n=e.elementId,a=Object(c.a)(e,T);return Object(N.jsx)(k,Object(o.a)(Object(o.a)({elementId:n},a),{},{children:Object(N.jsx)(v.default,{id:n,content:t,"data-bs-toggle":"popover"},n)}))}var P=Object(O.a)("currentLanguageTextContent"),x=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),a=t.call(this,e),Object.defineProperty(Object(u.a)(a),P,{writable:!0,value:void 0}),Object(j.a)(Object(u.a)(a),P)[P]=h.a.currentLanguage.get(a.otherProperties.name),a.state={element:Object(N.jsx)(v.default,{content:Object(j.a)(Object(u.a)(a),P)[P]},"".concat(a.id," - temporary"))},a}return Object(l.a)(n,[{key:"id",get:function(){return this.props.id}},{key:"listId",get:function(){return this.props.listId}},{key:"setDoesDisplayPopover",get:function(){return this.props.setDoesDisplayPopover}},{key:"otherProperties",get:function(){return this.props.otherProperties}},{key:"name",get:function(){return this.otherProperties.name}},{key:"popoverOrientation",get:function(){return this.otherProperties.popoverOrientation}},{key:"componentDidMount",value:function(){var e=this,t=this.id,n=this.setDoesDisplayPopover;this.setState({element:Object(N.jsx)(d.a,{children:function(a){return Object(N.jsx)(_,Object(o.a)(Object(o.a)({elementId:t,option:w(e.listId,e.popoverOrientation,a("In other languages"))},e.otherProperties),{},{on:{show:function(){return n(!0)},hide:function(){return n(!1)}},children:Object(j.a)(e,P)[P]}),"".concat(t," - span popover"))}})})}},{key:"render",value:function(){return this.state.element}}]),n}(i.Component);function w(e,t,n){var a={title:n,content:document.getElementById(e),html:!0,trigger:"hover focus"};return null!=t&&(a.placement=t),a}var S=n(23),L=n(113);function V(e){var t=e.id,n=e.listId,c=e.name,i=e.doesDisplayPopover,r=c.originalLanguages.filter((function(e){return!e.isCurrentLanguage}));return Object(N.jsx)("ul",{id:n,className:"language-list ".concat(i?"":"visually-hidden"),children:Object(S.a)(c.toNameMap().entries()).filter((function(e){var t=Object(a.a)(e,1)[0];return r.includes(t)})).map((function(e){var n=Object(a.a)(e,2),c=n[0],i=n[1],r="".concat(h.a.currentLanguage.englishName," - ").concat(c.englishName);return Object(N.jsx)(L.a,{children:function(e){return Object(N.jsx)("li",{style:{"--language":"'".concat(e(c.englishName)," ").concat(c.unionTrait," '")},children:Object(N.jsx)(v.default,{content:i})},"".concat(t," - list element (").concat(r,")"))}},"".concat(t," - language translation component (").concat(r,")"))}))},"".concat(t," - list"))}var C=["id"];function H(e){var t=e.id,n=Object(c.a)(e,C),o=Object(i.useState)(!1),s=Object(a.a)(o,2),l=s[0],u=s[1],b=n.name,p=b.english,j="".concat(t,"-").concat(r.a.getInHtml(p)),O="".concat(j,"-list");return Object(N.jsxs)("div",{id:"".concat(j,"-container"),className:"name-container",children:[Object(N.jsx)(x,{id:j,listId:O,setDoesDisplayPopover:u,otherProperties:n}),Object(N.jsx)(V,{name:b,id:j,listId:O,doesDisplayPopover:l})]},"".concat(p," - container (").concat(t,")"))}},276:function(e,t,n){},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var a=n(50),c=n(2),i=n(3),r=n(4),o=n(5),s=n(0),l=n(1),u=n(6),b=(n(287),n(112)),p=n(17),j=n(7),O=Object(l.a)("possibleViewDisplay"),d=Object(l.a)("key"),h=Object(l.a)("appInterpreter"),v=Object(l.a)("createViewDisplayGroup"),f=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return e=t.call.apply(t,[this].concat(i)),Object.defineProperty(Object(u.a)(e),v,{value:y}),Object.defineProperty(Object(u.a)(e),O,{writable:!0,value:void 0}),Object.defineProperty(Object(u.a)(e),d,{writable:!0,value:void 0}),Object.defineProperty(Object(u.a)(e),h,{writable:!0,value:void 0}),e}return Object(i.a)(n,[{key:"typeDisplayed",get:function(){return Object(p.a)(null!=this.state,"The state has not been initialised in the constructor."),Object(p.a)(null!=this.state.typeDisplayed,'The state "type displayed" has not been initialised in the constructor.'),this.state.typeDisplayed},set:function(e){this.setState({typeDisplayed:e})}},{key:"__possibleViewDisplay",get:function(){var e,t;return null!==(t=(e=Object(s.a)(this,O))[O])&&void 0!==t?t:e[O]=this._createPossibleViewDisplay()}},{key:"_key",get:function(){var e,t;return null!==(t=(e=Object(s.a)(this,d))[d])&&void 0!==t?t:e[d]=this._createKey()}},{key:"_appOptionInterpreter",get:function(){var e,t;return null!==(t=(e=Object(s.a)(this,h))[h])&&void 0!==t?t:e[h]=this._createAppOptionInterpreter()}},{key:"_createDescription",value:function(){return Object(j.jsx)(j.Fragment,{children:"--description--"})}},{key:"_mainContent",value:function(){var e=this.typeDisplayed,t=this._key;return Object(j.jsx)("div",{id:"subMain-container",children:Object(j.jsxs)("div",{id:"".concat(t,"-container"),className:"".concat(e.htmlType,"-container"),children:[Object(j.jsx)("h1",{id:"".concat(t,"-title"),className:"app-title",children:this._createTitleContent()},"".concat(t," (title)")),Object(j.jsx)("aside",{id:"viewChanger-container",children:Object(s.a)(this,v)[v](e,t)},"".concat(t," (view changer)")),Object(j.jsx)("p",{children:this._createDescription()},"".concat(t," (description)")),Object(j.jsx)("div",{className:"app-content",children:e.createComponent(this)},"".concat(t," (").concat(e.type,")"))]})},"".concat(t," (sub main container)"))}}]),n}(b.a);function y(e,t){var n=this;return Object(j.jsx)("div",{id:"btn-viewDisplay-container",className:"btn-group",children:this.__possibleViewDisplay.map((function(a){return a.createButton(e,t,(function(e){return n.typeDisplayed=e}))}))},"".concat(t," (button group)"))}var m=n(273),g=n(272),E=Object(l.a)("APP_OPTION_INTERPRETER"),D=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"_createPossibleViewDisplay",value:function(){return Object(s.a)(n,E)[E]}},{key:"createList",value:function(){var e,t=this._appOptionInterpreter,n=this._key,c=[],i=Object(a.a)(t.iterable);try{for(i.s();!(e=i.n()).done;){var r=e.value,o=r.englishName,s=r.reference.nameContainer,l="".concat(n,"-").concat(r.englishNameInHtml,"-container");c.push(Object(j.jsx)("div",{id:l,className:"".concat(n,"-container listElement-container col-12 col-sm-4 col-md-3 col-lg-2"),children:Object(j.jsx)("span",{className:"simpleListElement-container rounded-pill",children:Object(j.jsx)(m.default,{id:"name",name:s,popoverOrientation:"left"},"".concat(o," - text container"))},"".concat(o," - main list text-container"))},"".concat(o," - main list container")))}}catch(u){i.e(u)}finally{i.f()}return Object(j.jsx)(j.Fragment,{children:c})}}]),n}(f);Object.defineProperty(D,E,{writable:!0,value:[g.a.SIMPLE_LIST]})},287:function(e,t,n){}}]);
//# sourceMappingURL=0.5ef2195e.chunk.js.map