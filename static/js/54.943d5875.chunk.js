"use strict";(self.webpackChunksmm_encyclopedia=self.webpackChunksmm_encyclopedia||[]).push([[54],{56422:(e,n,t)=>{t.r(n),t.d(n,{default:()=>F});var s=t(66274),r=t(99359),a=(t(64042),t(79421)),o=t(56787),c=t(38758),l=t(1523),i=t(60420),u=t(24819),d=t(80184);function m(e){let{reference:n}=e;const t=n.englishName;return(0,d.jsx)("div",{className:"soundEffect-sounds-smm1-container",children:n.sounds_standaloneSmm1.map((e=>(0,d.jsx)("div",{className:"soundEffect-sound-container soundEffect-sound-smm1-container col-12 col-lg-6 col-xl-4 col-xxl-3",children:(0,d.jsx)(u.Z,{file:e,title:"".concat(t," (").concat(e.key,")")})},"".concat(t," (sound effect sound - SMM1&3DS - ").concat(e.key,")"))))},"".concat(t," (sound effect sounds - SMM1&3DS)"))}function f(e){let{reference:n}=e;return 0===n.sounds_standaloneSmm1.length?null:(0,d.jsx)("div",{className:"soundEffect-sounds-container sound-effect-sounds-smm1-only-container",children:(0,d.jsx)(m,{reference:n})})}function g(e){let{reference:n}=e;const t=n.englishName;return(0,d.jsx)("div",{className:"soundEffect-sounds-smm2-container",children:n.sounds_smm2.map((e=>(0,d.jsx)("div",{className:"soundEffect-sound-container soundEffect-sound-smm2-container col-12 col-lg-6 col-xl-4 col-xxl-3",children:(0,d.jsx)(u.Z,{file:e,title:"".concat(t," (").concat(e.key,")")})},"".concat(t," (sound effect sound - SMM2 - ").concat(e.key,")"))))},"".concat(t," (sound effect sounds - SMM2)"))}function _(e){let{reference:n}=e;return 0===n.sounds_smm2.length?null:(0,d.jsx)("div",{className:"soundEffect-sounds-container sound-effect-sounds-smm2-only-container",children:(0,d.jsx)(g,{reference:n})})}var S=t(21272),M=t(45241),E=t(86480);function p(e){let{reference:n,game:t,name:s}=e;if(t===i.O.SUPER_MARIO_MAKER_1){const[e,r]=n.SMM1ImageFiles;if(null==r)return(0,d.jsx)(M.Z,{reference:n,file:e});const a=n.englishNameInHtml,o=null===s||void 0===s?void 0:s.english,c=null==o?"".concat(a,"-image"):"".concat(E.R.getInHtml(o),"-").concat(a,"-soundEffect").concat(null==t?"":"-".concat(t.acronym),"-image");return(0,d.jsx)(S.Z,{partialId:c,images:[{file:e,className:"soundEffect-image ".concat(a,"-image")},{file:r,className:"soundEffect-image ".concat(a,"-image")}],className:"soundEffect-animated-image ".concat(a,"-image")})}return(0,d.jsx)(M.Z,{reference:n})}function O(e){let{reference:n}=e;const t=0===n.sounds_exclusiveSmm1.length,s=0===n.sounds_smm2.length;return t&&s?null:t&&!s?(0,d.jsx)("div",{className:"soundEffect-sounds-container sound-effect-sounds-smm2-only-container",children:(0,d.jsx)(g,{reference:n})}):!t&&s?(0,d.jsx)("div",{className:"soundEffect-sounds-container sound-effect-sounds-smm1-only-container",children:(0,d.jsx)(m,{reference:n})}):(0,d.jsxs)("div",{className:"soundEffect-sounds-container",children:[(0,d.jsx)(m,{reference:n}),(0,d.jsx)("hr",{className:"my-1"}),(0,d.jsx)(g,{reference:n})]})}var N,h,x,R=t(47234),v=(0,r.Z)("associatedClass"),A=(0,r.Z)("additionalClasses");class C extends o.Enum{constructor(e){super(),Object.defineProperty(this,v,{writable:!0,value:void 0}),Object.defineProperty(this,A,{writable:!0,value:void 0}),(0,s.Z)(this,A)[A]=[(0,s.Z)(this,v)[v]=e]}get associatedClass(){return(0,s.Z)(this,v)[v]}get additionalClasses(){return(0,s.Z)(this,A)[A]}static renderSMM1And3DSImage(e){const n=e.reference;return n.isInSuperMarioMaker1?(0,d.jsx)(p,{reference:e,name:n,game:i.O.SUPER_MARIO_MAKER_1}):null}static renderSMM2Image(e){const n=e.reference;return n.isInSuperMarioMaker2?(0,d.jsx)(p,{reference:e,name:n,game:i.O.SUPER_MARIO_MAKER_2}):null}renderContent(e){return[this._createContentOption(e)]}renderTableHeader(){return this._createTableHeaderOption()}}N=C,C.SMM1_AND_SMM3DS_ICON=new class extends N{_createContentOption(e){return N.renderSMM1And3DSImage(e)}_createTableHeaderOption(){return c.R.get.smm1And3dsGameHeader}}("smm1AndSmm3ds-icon"),C.SMM2_ICON=new class extends N{_createContentOption(e){return N.renderSMM2Image(e)}_createTableHeaderOption(){return c.R.get.smm2GameHeader}}("smm2-icon"),C.NAME=new class extends N{_createContentOption(e){return c.R.get.getNameContent(e)}_createTableHeaderOption(){return c.R.get.nameHeader}}("name"),C.CATEGORY=new class extends N{_createContentOption(e){const{reference:n}=e;return c.R.get.getCategoryContent(e,(()=>R.h.CompanionEnum.get.getValueByName(n.categoryEnglish).imageFile))}_createTableHeaderOption(){return c.R.get.categoryHeader}}("category"),C.PLAYER_BEHAVIOUR=new class extends N{_createContentOption(e){return e.reference.playerSoundEffectTrigger.createNewComponent(e.englishName)}_createTableHeaderOption(){return{key:"player behaviour",element:(0,l.A)("Player behaviour")}}}("playerBehaviour"),C.SOUNDS=new class extends N{_createContentOption(e){return(0,d.jsx)(O,{reference:e})}_createTableHeaderOption(){return{key:"sounds",element:(0,d.jsx)(l.Z,{children:"Sounds"})}}}("sounds"),C.SOUNDS_IN_SMM1_AND_3DS_ONLY=new class extends N{_createContentOption(e){return(0,d.jsx)(f,{reference:e})}_createTableHeaderOption(){return{key:"sounds",element:(0,d.jsx)(l.Z,{children:"Sounds"})}}}("sounds"),C.SOUNDS_IN_SMM2_ONLY=new class extends N{_createContentOption(e){return(0,d.jsx)(_,{reference:e})}_createTableHeaderOption(){return{key:"sounds",element:(0,d.jsx)(l.Z,{children:"Sounds"})}}}("sounds"),C.CompanionEnum=(x=(0,r.Z)("instance"),h=class e extends o.CompanionEnum{constructor(){super(N)}static get get(){var n,t;return null!==(t=(n=(0,s.Z)(this,x))[x])&&void 0!==t?t:n[x]=new e}},Object.defineProperty(h,x,{writable:!0,value:void 0}),h);var j,y,I,b=t(57863),D=t(93031);class w extends o.Enum{constructor(){super()}get allColor(){return"success"}get smm1Or3dsColor(){return"success"}get smm2Color(){return"success"}getAllRouteName(e){return"everySoundEffect (".concat(e.urlValue," Game=all)")}getSmm1Or3dsRouteName(e){return"everySoundEffect (".concat(e.urlValue," Game=1)")}getSmm2RouteName(e){return"everySoundEffect (".concat(e.urlValue," Game=2)")}}j=w,w.ALL_GAMES=new class extends j{getAllRouteName(){return null}},w.SUPER_MARIO_MAKER_OR_SUPER_MARIO_MAKER_FOR_NINTENDO_3DS=new class extends j{get allColor(){return"warning"}get smm2Color(){return"warning"}getSmm1Or3dsRouteName(){return null}},w.SUPER_MARIO_MAKER_2=new class extends j{get allColor(){return"warning"}get smm1Or3dsColor(){return"warning"}getSmm2RouteName(){return null}},w.CompanionEnum=(I=(0,r.Z)("instance"),y=class e extends o.CompanionEnum{constructor(){super(j)}static get get(){var n,t;return null!==(t=(n=(0,s.Z)(this,I))[I])&&void 0!==t?t:n[I]=new e}},Object.defineProperty(y,I,{writable:!0,value:void 0}),y);var Z=t(2772),P=t(15446),L=t(82501),T=t(15882),H=t(63225),U=t(36572),K=t(24250),G=(0,r.Z)("games"),k=(0,r.Z)("gameStyles");class Y{constructor(e,n){Object.defineProperty(this,G,{writable:!0,value:void 0}),Object.defineProperty(this,k,{writable:!0,value:void 0}),this.tableHeadersColor="info",this.tableCaption=(0,U.aw)("sound effect.all"),(0,s.Z)(this,G)[G]=e,(0,s.Z)(this,k)[k]=n}get content(){return(0,K.zt)(H.G.CompanionEnum.get.values,(0,s.Z)(this,G)[G])}createListDimension(){return{default:1,small:3,medium:4,large:5,extraLarge:6}}createCardListDimension(){return this.createListDimension()}createCardListContent(e){return(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:"soundEffect-images-container",children:[C.renderSMM1And3DSImage(e),C.renderSMM2Image(e)]})})}get tableOptions(){const e=(0,s.Z)(this,G)[G],n=e.hasSMM1Or3DS,t=e.hasSMM2,r=[];return n&&r.push(C.SMM1_AND_SMM3DS_ICON),t&&r.push(C.SMM2_ICON),r.push(C.NAME,C.CATEGORY,C.PLAYER_BEHAVIOUR),e.hasAllGames?r.push(C.SOUNDS):(n&&r.push(C.SOUNDS_IN_SMM1_AND_3DS_ONLY),t&&r.push(C.SOUNDS_IN_SMM2_ONLY)),r}getAdditionalClass(e){return e.additionalClasses}createTableContent(e,n){return n.renderContent(e)}createTableHeader(e){return e.renderTableHeader()}}const B=[[L.P.SIMPLE_LIST,"everySoundEffect (list)"],[L.P.CARD_LIST,"everySoundEffect (card)"],[L.P.TABLE,"everySoundEffect (table)"]];function F(e){let{viewDisplay:n,games:t,gameStyles:s}=e;const r=(0,U.aw)("sound effect.all"),o=new Y(t,s);return n===L.P.SIMPLE_LIST?(0,d.jsx)(a.Z,{reactKey:"soundEffect",viewDisplayAndRouteName:B,viewDisplay:n,titleContent:r,asideContent:(0,d.jsx)(J,{viewDisplay:n,games:t}),children:(0,d.jsx)(P.Z,{reactKey:"soundEffect",interpreter:o})}):n===L.P.CARD_LIST?(0,d.jsx)(a.Z,{reactKey:"soundEffect",viewDisplayAndRouteName:B,viewDisplay:n,titleContent:r,asideContent:(0,d.jsx)(J,{viewDisplay:n,games:t}),children:(0,d.jsx)(Z.Z,{reactKey:"soundEffect",interpreter:o})}):(0,d.jsx)(a.Z,{reactKey:"soundEffect",viewDisplayAndRouteName:B,viewDisplay:n,titleContent:r,asideContent:(0,d.jsx)(J,{viewDisplay:n,games:t}),children:(0,d.jsx)(D.Z,{id:"soundEffect-table",interpreter:o})})}const V=i.O.Possibilities.get.ALL_GAMES,z=i.O.SUPER_MARIO_MAKER_1,X=i.O.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,q=i.O.SUPER_MARIO_MAKER_2;function J(e){let{viewDisplay:n,games:t}=e;const s=3===(0,K.wf)(V,t).length?w.ALL_GAMES:t.hasSMM2?w.SUPER_MARIO_MAKER_2:w.SUPER_MARIO_MAKER_OR_SUPER_MARIO_MAKER_FOR_NINTENDO_3DS;return(0,d.jsxs)("div",{id:"soundEffect-gamesButton-container",className:"gameAsideContent-container btn-group-vertical btn-group-sm",children:[(0,d.jsx)(b.Z,{partialId:"allGameLimit",routeName:s.getAllRouteName(n),color:s.allColor,children:(0,U.N2)("All")}),(0,d.jsxs)("div",{id:"soundEffect-gamesButton-singularGame-container",className:"btn-group btn-group-sm",children:[(0,d.jsxs)(b.Z,{partialId:"smm1Or3dsGame",routeName:s.getSmm1Or3dsRouteName(n),color:s.smm1Or3dsColor,children:[(0,d.jsx)(T.Z,{reference:z}),(0,d.jsx)(T.Z,{reference:X})]}),(0,d.jsx)(b.Z,{partialId:"smm2Game",routeName:s.getSmm2RouteName(n),color:s.smm2Color,children:(0,d.jsx)(T.Z,{reference:q})})]})]})}},57863:(e,n,t)=>{t.d(n,{Z:()=>o});var s=t(11087),r=t(79598),a=t(80184);function o(e){let{partialId:n,routeName:t,color:o,children:c}=e;const l="".concat(n,"-button"),i="btn btn-".concat(o," link-button");return null==t?(0,a.jsx)("button",{type:"button",id:l,className:i,disabled:!0,children:c}):(0,a.jsx)(s.rU,{type:"button",id:l,className:i,to:(0,r.X)(t),children:c})}},45241:(e,n,t)=>{t.d(n,{Z:()=>a});var s=t(21272),r=t(80184);function a(e){let{reference:n,file:t}=e;return(0,r.jsx)(s.Z,{file:null!==t&&void 0!==t?t:n.SMM2ImageFile,className:"soundEffect-image ".concat(n.englishNameInHtml,"-image")})}},64042:()=>{}}]);
//# sourceMappingURL=54.943d5875.chunk.js.map