(this["webpackJsonpsmm-encyclopedia"]=this["webpackJsonpsmm-encyclopedia"]||[]).push([[19],{274:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var a=n(2),r=n(3),i=n(0),c=n(1),o=n(10),u=n(47),l=n(20),s=n(37),O=n(56),b=n(52),m=n(27),f=n(7),d=Object(o.lazy)((function(){return Promise.resolve().then(n.bind(null,49))})),g=Object(o.lazy)((function(){return Promise.resolve().then(n.bind(null,273))})),h=Object(c.a)("instance"),y=Object(c.a)("nameHeader"),j=Object(c.a)("gameHeader"),v=Object(c.a)("gameHeaderWithAllGames"),p=Object(c.a)("gameHeaderWithMainGames"),_=Object(c.a)("categoryHeader"),M=function(){function e(){Object(a.a)(this,e),Object.defineProperty(this,y,{writable:!0,value:void 0}),Object.defineProperty(this,j,{writable:!0,value:void 0}),Object.defineProperty(this,v,{writable:!0,value:void 0}),Object.defineProperty(this,p,{writable:!0,value:void 0}),Object.defineProperty(this,_,{writable:!0,value:void 0})}return Object(r.a)(e,[{key:"nameHeader",get:function(){var e,t;return null!==(t=(e=Object(i.a)(this,y))[y])&&void 0!==t?t:e[y]={key:"name",element:Object(f.jsx)(u.a,{translationKey:"Name"})}}},{key:"getNameContent",value:function(e){return Object(f.jsx)(g,{id:"name",name:e.reference,popoverOrientation:"left"})}},{key:"categoryHeader",get:function(){var e,t;return null!==(t=(e=Object(i.a)(this,_))[_])&&void 0!==t?t:e[_]={key:"category",element:Object(f.jsx)(b.a,{translationKey:"Category"})}}},{key:"getCategoryContent",value:function(e,t){var n=e.reference.categoryNameContainer;if(n===O.a.get)return s.a;var a=t(),r=n.english,i="category name (".concat(r,")");return"string"==typeof a?Object(f.jsx)(d,{source:a,fallbackName:"".concat(n.english," - image")},"".concat(i," image")):Object(f.jsx)(g,{id:"category-name-".concat(e.englishNameInHtml),name:n,popoverOrientation:"left"},"".concat(i," name"))}},{key:"gameHeader",get:function(){var e,t;return null!==(t=(e=Object(i.a)(this,j))[j])&&void 0!==t?t:e[j]={key:"game",element:Object(f.jsx)(b.a,{translationKey:"Game"})}}},{key:"getGameHeader",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{key:"game",element:Object(f.jsx)(b.a,{translationKey:"Game"}),subHeaders:t}}},{key:"gameHeaderWithAllGames",get:function(){var e,t;return null!==(t=(e=Object(i.a)(this,v))[v])&&void 0!==t?t:e[v]=this.getGameHeader({key:"isInSuperMarioMaker1",alt:m.a.SUPER_MARIO_MAKER_1.englishName,path:m.a.SUPER_MARIO_MAKER_1.imagePath},{key:"isInSuperMarioMakerFor3DS",alt:m.a.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS.englishName,path:m.a.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS.imagePath},{key:"isInSuperMarioMaker2",alt:m.a.SUPER_MARIO_MAKER_2.englishName,path:m.a.SUPER_MARIO_MAKER_2.imagePath})}},{key:"gameHeaderWithMainGames",get:function(){var e,t;return null!==(t=(e=Object(i.a)(this,p))[p])&&void 0!==t?t:e[p]=this.getGameHeader({key:"isInSuperMarioMaker1And3DS",alt:m.a.SUPER_MARIO_MAKER_1.englishName,path:m.a.SUPER_MARIO_MAKER_1.imagePath},{key:"isInSuperMarioMaker2",alt:m.a.SUPER_MARIO_MAKER_2.englishName,path:m.a.SUPER_MARIO_MAKER_2.imagePath})}},{key:"getGameContent",value:function(e){var t=e.reference,n=t.isInSuperMarioMaker1,a=t.isInSuperMarioMakerFor3DS,r=t.isInSuperMarioMaker2;return Object(f.jsxs)("div",{id:"".concat(e.englishNameInHtml,"-gameContentImages-container"),className:"gameContentImages-container",children:[n?m.a.SUPER_MARIO_MAKER_1.renderSingleComponent:s.a,a?m.a.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS.renderSingleComponent:s.a,r?m.a.SUPER_MARIO_MAKER_2.renderSingleComponent:s.a]},"".concat(e.englishName," (game content images)"))}},{key:"getThemeContent",value:function(e){var t=e.reference;return Object(f.jsxs)("div",{id:"".concat(e.englishNameInHtml,"-themeContentImages-container"),className:"themeContentImages-container",children:[t.isInCourseTheme?Object(f.jsx)(d,{source:"/".concat(l.a,"/theme/Course theme.tiff"),fallbackName:"Course theme"}):s.a,t.isInWorldTheme?Object(f.jsx)(d,{source:"/".concat(l.a,"/theme/World theme.tiff"),fallbackName:"World theme"}):s.a]},"".concat(e.englishName," (theme content images)"))}}],[{key:"get",get:function(){var e,t;return null!==(t=(e=Object(i.a)(this,h))[h])&&void 0!==t?t:e[h]=new this}}]),e}();Object.defineProperty(M,h,{writable:!0,value:void 0})},305:function(e,t,n){},334:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I}));var a,r=n(2),i=n(3),c=n(4),o=n(5),u=(n(305),n(280)),l=n(52),s=n(207),O=n(6),b=n(0),m=n(1),f=n(10),d=n(277),g=n(278),h=n(274),y=n(37),j=n(12),v=n(27),p=n(102),_=n(7),M=Object(f.lazy)((function(){return Promise.resolve().then(n.bind(null,198))})),k=Object(m.a)("appOptionWithContent"),E=Object(m.a)("appOptionWithTable");a=Symbol.iterator;var A=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(r.a)(this,n),e=t.call(this),Object.defineProperty(Object(O.a)(e),k,{writable:!0,value:void 0}),Object.defineProperty(Object(O.a)(e),E,{writable:!0,value:void 0}),e}return Object(i.a)(n,[{key:"__appOptionWithContent",get:function(){var e,t,a=this;return null!==(t=(e=Object(b.a)(this,k))[k])&&void 0!==t?t:e[k]=new d.a((function(){return a._createContentOption(n.CALLBACK_TO_GET_ENUMERATION())}))}},{key:"renderContent",get:function(){return this.__appOptionWithContent.renderContent}},{key:"__appOptionWithTable",get:function(){var e,t,n=this;return null!==(t=(e=Object(b.a)(this,E))[E])&&void 0!==t?t:e[E]=new g.a((function(){return n._createTableHeaderOption()}))}},{key:"renderTableHeader",get:function(){return this.__appOptionWithTable.renderTableHeader}},{key:"_static",get:function(){return n}}],[{key:"renderSMM1And3DSImage",value:function(e){var t=e.reference;return t.isInSuperMarioMaker1?Object(_.jsx)(M,{reference:e,name:t,game:v.a.SUPER_MARIO_MAKER_1}):y.a}},{key:"renderSMM2Image",value:function(e){var t=e.reference;return t.isInSuperMarioMaker2?Object(_.jsx)(M,{reference:e,name:t,game:v.a.SUPER_MARIO_MAKER_2}):y.a}},{key:"getValue",value:function(e){return j.a.getValueOn(this,e)}},{key:"values",get:function(){return j.a.getValuesOn(this)}},{key:a,value:function(){return this.values[Symbol.iterator]()}}]),n}(j.a);A.GAME=new(function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"_createContentOption",value:function(e){return[A.renderSMM1And3DSImage(e),A.renderSMM2Image(e)]}},{key:"_createTableHeaderOption",value:function(){return h.a.get.gameHeaderWithMainGames}}]),n}(A)),A.NAME=new(function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"_createContentOption",value:function(e){return h.a.get.getNameContent(e)}},{key:"_createTableHeaderOption",value:function(){return h.a.get.nameHeader}}]),n}(A)),A.CATEGORY=new(function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"_createContentOption",value:function(e){var t=e.reference;return h.a.get.getCategoryContent(e,(function(){return p.SoundEffectCategories.getValue(t.categoryEnglish).imagePath}))}},{key:"_createTableHeaderOption",value:function(){return h.a.get.categoryHeader}}]),n}(A)),A.PLAYER_BEHAVIOUR=new(function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"_createContentOption",value:function(e){var t=e.reference;return Object(_.jsxs)(_.Fragment,{children:["--",t.translationKey,"--"]})}},{key:"_createTableHeaderOption",value:function(){return{key:"player behaviour",element:Object(_.jsx)(_.Fragment,{children:"--Player behaviour--"})}}}]),n}(A)),A.CALLBACK_TO_GET_ENUMERATION=void 0;var R=n(272),I=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={typeDisplayed:R.a.TABLE},a}return Object(i.a)(n,[{key:"_createKey",value:function(){return"soundEffect"}},{key:"_createTitleContent",value:function(){return Object(_.jsx)(l.a,{translationKey:"Every sound effects"})}},{key:"_createAppOptionInterpreter",value:function(){return new(function(){function e(){Object(r.a)(this,e)}return Object(i.a)(e,[{key:"iterable",get:function(){return s.SoundEffects[Symbol.iterator]()}},{key:"createCardListContent",value:function(e){return Object(_.jsx)("div",{children:Object(_.jsxs)("div",{className:"soundEffect-images-container",children:[A.renderSMM1And3DSImage(e),A.renderSMM2Image(e)]})})}},{key:"callbackToGetEnumerable",set:function(e){A.CALLBACK_TO_GET_ENUMERATION=e}},{key:"tableOptions",get:function(){return[A.GAME,A.NAME,A.CATEGORY,A.PLAYER_BEHAVIOUR]}},{key:"tableProperties",get:function(){return{caption:Object(_.jsx)(l.a,{translationKey:"Every sound effects"})}}},{key:"createTableContent",value:function(e){return e.renderContent}},{key:"createTableHeader",value:function(e){return e.renderTableHeader}}]),e}())}}]),n}(u.a)}}]);
//# sourceMappingURL=19.99d8cace.chunk.js.map