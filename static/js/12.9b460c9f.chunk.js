(this["webpackJsonpsmm-encyclopedia"]=this["webpackJsonpsmm-encyclopedia"]||[]).push([[12,3],{279:function(e,t,n){},282:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return V}));var a,i=n(2),u=n(3),c=n(6),r=n(4),o=n(5),l=n(0),s=n(1),b=(n(279),n(10)),O=n(12),j=Object(s.a)("englishName");a=Symbol.iterator;var d,f=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(i.a)(this,n),a=t.call(this),Object.defineProperty(Object(c.a)(a),j,{writable:!0,value:void 0}),Object(l.a)(Object(c.a)(a),j)[j]=e,a}return Object(u.a)(n,[{key:"englishName",get:function(){return Object(l.a)(this,j)[j]}},{key:"englishNameInHtml",get:function(){return this.englishName}},{key:"onCreate",value:function(e){}},{key:"onPlay",value:function(e){return null}},{key:"_static",get:function(){return n}}],[{key:"default",get:function(){return O.a.getNonNullDefaultOn(this)},set:function(e){this.setDefault(e)}},{key:"setDefault",value:function(e){return O.a.setNonNullDefaultOn(this,e)}},{key:"_getValueByString",value:function(e){var t;return null!==(t=this.values.find((function(t){return t.englishName===e})))&&void 0!==t?t:null}},{key:"getValue",value:function(e){return O.a.getValueOn(this,e)}},{key:"values",get:function(){return O.a.getValuesOn(this)}},{key:a,value:function(){return this.values[Symbol.iterator]()}}]),n}(O.a);f.YES=new(function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"onCreate",value:function(e){e(!0)}},{key:"onPlay",value:function(e){return e(!0),!0}}]),n}(f))("yes"),f.NO=new(function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"onCreate",value:function(e){e(!1)}},{key:"onPlay",value:function(e){return e(!1),!1}}]),n}(f))("no"),f.ON_PLAY=new(function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"onPlay",value:function(e){return e(),null}}]),n}(f))("on play"),f.ON_CREATE=new(function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"onCreate",value:function(e){e()}}]),n}(f))("on create"),f._DEFAULT=f.ON_PLAY;var v=Object(s.a)("englishName");d=Symbol.iterator;var h=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(i.a)(this,n),a=t.call(this),Object.defineProperty(Object(c.a)(a),v,{writable:!0,value:void 0}),Object(l.a)(Object(c.a)(a),v)[v]=e,a}return Object(u.a)(n,[{key:"englishName",get:function(){return Object(l.a)(this,v)[v]}},{key:"englishNameInHtml",get:function(){return this.englishName}},{key:"_static",get:function(){return n}}],[{key:"_getValueByString",value:function(e){var t;return null!==(t=this.values.find((function(t){return t.englishName===e})))&&void 0!==t?t:null}},{key:"getValue",value:function(e){return O.a.getValueOn(this,e)}},{key:"values",get:function(){return O.a.getValuesOn(this)}},{key:d,value:function(){return this.values[Symbol.iterator]()}}]),n}(O.a);h.STANDBY=new(function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"getElements",value:function(e){return[(0,e.playElement)()]}}]),n}(h))("standby"),h.PAUSED=new(function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"getElements",value:function(e){var t=e.playElement,n=e.stopElement;return[t(),n()]}}]),n}(h))("paused"),h.PLAYING=new(function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"getElements",value:function(e){var t=e.pauseElement,n=e.stopElement;return[t(),n()]}}]),n}(h))("playing"),h.EXCEPTION=new(function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"getElements",value:function(e){return[(0,e.exceptionElement)()]}}]),n}(h))("exception");var y=Object(s.a)("playElement"),p=Object(s.a)("pauseElement"),m=Object(s.a)("stopElement"),E=Object(s.a)("exceptionElement"),g=function(){function e(t,n,a,u){Object(i.a)(this,e),Object.defineProperty(this,y,{writable:!0,value:void 0}),Object.defineProperty(this,p,{writable:!0,value:void 0}),Object.defineProperty(this,m,{writable:!0,value:void 0}),Object.defineProperty(this,E,{writable:!0,value:void 0}),Object(l.a)(this,y)[y]=t,Object(l.a)(this,p)[p]=n,Object(l.a)(this,m)[m]=a,Object(l.a)(this,E)[E]=u}return Object(u.a)(e,[{key:"playElement",get:function(){return Object(l.a)(this,y)[y]}},{key:"pauseElement",get:function(){return Object(l.a)(this,p)[p]}},{key:"stopElement",get:function(){return Object(l.a)(this,m)[m]}},{key:"exceptionElement",get:function(){return Object(l.a)(this,E)[E]}}]),e}(),S=n(7),k=Object(s.a)("PLAY_CLASSES"),_=Object(s.a)("PAUSE_CLASSES"),N=Object(s.a)("STOP_CLASSES"),P=Object(s.a)("EXCEPTION_CLASSES"),A=Object(s.a)("IS_EVERY_AUDIO_LOOPS_AFTER_COMPLETED"),w=Object(s.a)("EVERY_AUDIO_ELEMENTS"),C=Object(s.a)("audio"),x=Object(s.a)("isSourceFoundCallback"),T=Object(s.a)("play"),D=Object(s.a)("pause"),L=Object(s.a)("stop"),V=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(i.a)(this,n),a=t.call(this,e),Object.defineProperty(Object(c.a)(a),L,{value:Y}),Object.defineProperty(Object(c.a)(a),D,{value:I}),Object.defineProperty(Object(c.a)(a),T,{value:F}),Object.defineProperty(Object(c.a)(a),C,{writable:!0,value:void 0}),Object.defineProperty(Object(c.a)(a),x,{writable:!0,value:void 0}),a.state={state:h.STANDBY,isSourceRetrieved:!1},Object(l.a)(Object(c.a)(a),x)[x]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.__isSoundFound;return e?a.setState({isSourceRetrieved:!0}):a.setState({isSourceRetrieved:!0,state:h.EXCEPTION})},a}return Object(u.a)(n,[{key:"_audio",get:function(){var e=this;if(null==Object(l.a)(this,C)[C]){var t,a=this._source;n._everyAudioElements.has(a)?t=n._everyAudioElements.get(a):n._everyAudioElements.set(a,t=new Audio(a)),Object(l.a)(this,C)[C]=t,t.onended=function(){return e.setState({state:h.STANDBY})},t.loop=n.isEveryAudioLoopsAfterCompleted}return Object(l.a)(this,C)[C]}},{key:"_source",get:function(){return this.props.source}},{key:"isSoundFound",get:function(){var e;return null!==(e=this.props.isSoundFound)&&void 0!==e?e:f.default}},{key:"__isSoundFound",get:function(){return Number.isFinite(this._audio.duration)}},{key:"_title",get:function(){return this.props.title}},{key:"componentDidMount",value:function(){this.state.isSourceRetrieved||this.isSoundFound.onCreate(Object(l.a)(this,x)[x])}},{key:"componentWillUnmount",value:function(){var e=Object(l.a)(this,C)[C];null!=e&&(e.onended=null)}},{key:"render",value:function(){var e=this;return Object(S.jsx)("div",{className:"audio-state-container container",children:this.state.state.getElements(new g((function(){return Object(S.jsx)("div",{className:Object(l.a)(n,k)[k],onClick:function(){return Object(l.a)(e,T)[T]()}},"".concat(e._title," - play"))}),(function(){return Object(S.jsx)("div",{className:Object(l.a)(n,_)[_],onClick:function(){return Object(l.a)(e,D)[D]()}},"".concat(e._title," - pause"))}),(function(){return Object(S.jsx)("div",{className:Object(l.a)(n,N)[N],onClick:function(){return Object(l.a)(e,L)[L]()}},"".concat(e._title," - stop"))}),(function(){return Object(S.jsx)("div",{className:Object(l.a)(n,P)[P]},"".concat(e._title," - exception"))})))},this._title)}}],[{key:"_everyAudioElements",get:function(){return Object(l.a)(this,w)[w]}},{key:"isEveryAudioLoopsAfterCompleted",get:function(){return Object(l.a)(this,A)[A]},set:function(e){Object(l.a)(this,A)[A]=e,this._everyAudioElements.forEach((function(t){return t.loop=e}))}}]),n}(b.Component);function F(){var e=this;this._audio.play().then((function(){var t;(null!==(t=e.isSoundFound.onPlay(Object(l.a)(e,x)[x]))&&void 0!==t?t:e.__isSoundFound)||Object(l.a)(e,L)[L](h.EXCEPTION)})).catch((function(){return e.setState({state:h.EXCEPTION})})),this.setState({state:h.PLAYING})}function I(){this._audio.pause(),this.setState({state:h.PAUSED})}function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h.STANDBY,t=this._audio;t.pause(),t.currentTime=0,this.setState({state:e})}Object.defineProperty(V,k,{writable:!0,value:"btn btn-lg bi-play-btn-fill audio-state audio-state-play"}),Object.defineProperty(V,_,{writable:!0,value:"btn btn-lg bi-pause-btn-fill audio-state audio-state-pause"}),Object.defineProperty(V,N,{writable:!0,value:"btn btn-lg bi-stop-btn-fill audio-state audio-state-stop"}),Object.defineProperty(V,P,{writable:!0,value:"bi-shield-fill-exclamation audio-state audio-state-exception"}),Object.defineProperty(V,A,{writable:!0,value:!1}),Object.defineProperty(V,w,{writable:!0,value:new Map})},308:function(e,t,n){},324:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));n(308);var a=n(37),i=n(282),u=n(7);function c(e){var t=e.editorVoiceSound,n=t.fileName,c=t.europeanFileName,r=e.name;return null==n?a.a:null==c?Object(u.jsx)("div",{className:"single-editorVoiceSound-container",children:Object(u.jsx)(i.default,{source:n,title:r})},"Editor voice sound container (single - ".concat(r,")")):Object(u.jsxs)("div",{className:"double-editorVoiceSound-container container",children:[Object(u.jsx)("div",{className:"single-editorVoiceSound-container",children:Object(u.jsx)(i.default,{source:n,title:r})},"Editor voice sound container (single #1 - ".concat(r)),Object(u.jsx)("div",{className:"single-editorVoiceSound-container",children:Object(u.jsx)(i.default,{source:c,title:r})},"Editor voice sound container (single #2 - ".concat(r,")"))]},"Editor voice sound container (double - ".concat(r,")"))}}}]);
//# sourceMappingURL=12.9b460c9f.chunk.js.map