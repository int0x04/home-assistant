"use strict";(self.webpackChunkhacs_frontend=self.webpackChunkhacs_frontend||[]).push([[6810],{26411:function(e,t,n){n.d(t,{x:function(){return i}});n(82386),n(36604);var i=function(e,t){return e&&e.config.components.includes(t)}},8879:function(e,t,n){n.d(t,{v:function(){return r}});var i=n(658),r=(n(82386),n(29193),n(36604),function(e,t,n,r){var a=e.split(".",3),o=(0,i.A)(a,3),s=o[0],d=o[1],c=o[2];return Number(s)>t||Number(s)===t&&(void 0===r?Number(d)>=n:Number(d)>n)||void 0!==r&&Number(s)===t&&Number(d)===n&&Number(c)>=r})},43284:function(e,t,n){var i=n(22858).A,r=n(33994).A;n.a(e,function(){var e=i(r().mark((function e(t,i){var a,o,s,d,c,l,u,h,p,v,f,m,k,y,g,b,x,A,_,w,M,Z,q,B,N,F,H,I;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=n(33994),o=n(22858),s=n(35806),d=n(71008),c=n(62193),l=n(2816),u=n(27927),h=n(64599),p=n(81027),n.n(p),v=n(13025),n.n(v),f=n(33231),n.n(f),m=n(50693),n.n(m),k=n(39790),n.n(k),y=n(253),n.n(y),g=n(2075),n.n(g),b=n(66360),x=n(29818),A=n(26411),_=n(50880),w=n(82739),M=n(36731),n(77477),Z=n(98969),n(27783),!(q=t([Z])).then){e.next=40;break}return e.next=36,q;case 36:e.t1=e.sent,e.t0=(0,e.t1)(),e.next=41;break;case 40:e.t0=q;case 41:Z=e.t0[0],I=function(e){return(0,b.qy)(B||(B=(0,h.A)(['<ha-list-item twoline graphic="icon"> <span>','</span> <span slot="secondary">',"</span> "," </ha-list-item>"])),e.name,e.slug,e.icon?(0,b.qy)(N||(N=(0,h.A)(['<img alt="" slot="graphic" .src="/api/hassio/addons/','/icon">'])),e.slug):"")},(0,u.A)([(0,x.EM)("ha-addon-picker")],(function(e,t){var n,i=function(t){function n(){var t;(0,d.A)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return t=(0,c.A)(this,n,[].concat(r)),e(t),t}return(0,l.A)(n,t),(0,s.A)(n)}(t);return{F:i,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,x.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,x.MZ)()],key:"value",value:function(){return""}},{kind:"field",decorators:[(0,x.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,x.wk)()],key:"_addons",value:void 0},{kind:"field",decorators:[(0,x.MZ)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,x.MZ)({type:Boolean})],key:"required",value:function(){return!1}},{kind:"field",decorators:[(0,x.P)("ha-combo-box")],key:"_comboBox",value:void 0},{kind:"field",decorators:[(0,x.wk)()],key:"_error",value:void 0},{kind:"method",key:"open",value:function(){var e;null===(e=this._comboBox)||void 0===e||e.open()}},{kind:"method",key:"focus",value:function(){var e;null===(e=this._comboBox)||void 0===e||e.focus()}},{kind:"method",key:"firstUpdated",value:function(){this._getAddons()}},{kind:"method",key:"render",value:function(){return this._error?(0,b.qy)(F||(F=(0,h.A)(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):this._addons?(0,b.qy)(H||(H=(0,h.A)([' <ha-combo-box .hass="','" .label="','" .value="','" .required="','" .disabled="','" .helper="','" .renderer="','" .items="','" item-value-path="slug" item-id-path="slug" item-label-path="name" @value-changed="','"></ha-combo-box> '])),this.hass,void 0===this.label&&this.hass?this.hass.localize("ui.components.addon-picker.addon"):this.label,this._value,this.required,this.disabled,this.helper,I,this._addons,this._addonChanged):b.s6}},{kind:"method",key:"_getAddons",value:(n=(0,o.A)((0,a.A)().mark((function e(){var t,n=this;return(0,a.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(0,A.x)(this.hass,"hassio")){e.next=8;break}return e.next=4,(0,M.b3)(this.hass);case 4:t=e.sent,this._addons=t.addons.filter((function(e){return e.version})).sort((function(e,t){return(0,w.x)(e.name,t.name,n.hass.locale.language)})),e.next=9;break;case 8:this._error=this.hass.localize("ui.components.addon-picker.error.no_supervisor");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),this._error=this.hass.localize("ui.components.addon-picker.error.fetch_addons");case 14:case"end":return e.stop()}}),e,this,[[0,11]])}))),function(){return n.apply(this,arguments)})},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_addonChanged",value:function(e){e.stopPropagation();var t=e.detail.value;t!==this._value&&this._setValue(t)}},{kind:"method",key:"_setValue",value:function(e){var t=this;this.value=e,setTimeout((function(){(0,_.r)(t,"value-changed",{value:e}),(0,_.r)(t,"change")}),0)}}]}}),b.WF),i(),e.next=50;break;case 47:e.prev=47,e.t2=e.catch(0),i(e.t2);case 50:case"end":return e.stop()}}),e,null,[[0,47]])})));return function(t,n){return e.apply(this,arguments)}}())},27783:function(e,t,n){var i,r,a,o=n(64599),s=n(35806),d=n(71008),c=n(62193),l=n(2816),u=n(27927),h=n(35890),p=(n(81027),n(30116)),v=n(43389),f=n(66360),m=n(29818);(0,u.A)([(0,m.EM)("ha-list-item")],(function(e,t){var n=function(t){function n(){var t;(0,d.A)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return t=(0,c.A)(this,n,[].concat(r)),e(t),t}return(0,l.A)(n,t),(0,s.A)(n)}(t);return{F:n,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,h.A)(n,"renderRipple",this,3)([])}},{kind:"get",static:!0,key:"styles",value:function(){return[v.R,(0,f.AH)(i||(i=(0,o.A)([":host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-inline-start:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px));padding-inline-end:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)!important}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)!important}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center;flex-shrink:0}:host([graphic=icon]:not([twoline])) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,20px)!important}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}"]))),"rtl"===document.dir?(0,f.AH)(r||(r=(0,o.A)(["span.material-icons:first-of-type,span.material-icons:last-of-type{direction:rtl!important;--direction:rtl}"]))):(0,f.AH)(a||(a=(0,o.A)([""])))]}}]}}),p.J)},59821:function(e,t,n){var i=n(22858).A,r=n(33994).A;n.a(e,function(){var e=i(r().mark((function e(i,a){var o,s,d,c,l,u,h,p,v,f,m,k,y,g;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n.r(t),n.d(t,{HaAddonSelector:function(){return g}}),o=n(64599),s=n(35806),d=n(71008),c=n(62193),l=n(2816),u=n(27927),h=n(81027),n.n(h),p=n(66360),v=n(29818),f=n(43284),!(m=i([f])).then){e.next=22;break}return e.next=18,m;case 18:e.t1=e.sent,e.t0=(0,e.t1)(),e.next=23;break;case 22:e.t0=m;case 23:f=e.t0[0],g=(0,u.A)([(0,v.EM)("ha-selector-addon")],(function(e,t){var n=function(t){function n(){var t;(0,d.A)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return t=(0,c.A)(this,n,[].concat(r)),e(t),t}return(0,l.A)(n,t),(0,s.A)(n)}(t);return{F:n,d:[{kind:"field",decorators:[(0,v.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,v.MZ)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,v.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,v.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,v.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,v.MZ)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,v.MZ)({type:Boolean})],key:"required",value:function(){return!0}},{kind:"method",key:"render",value:function(){return(0,p.qy)(k||(k=(0,o.A)(['<ha-addon-picker .hass="','" .value="','" .label="','" .helper="','" .disabled="','" .required="','" allow-custom-entity></ha-addon-picker>'])),this.hass,this.value,this.label,this.helper,this.disabled,this.required)}},{kind:"field",static:!0,key:"styles",value:function(){return(0,p.AH)(y||(y=(0,o.A)(["ha-addon-picker{width:100%}"])))}}]}}),p.WF),a(),e.next=31;break;case 28:e.prev=28,e.t2=e.catch(0),a(e.t2);case 31:case"end":return e.stop()}}),e,null,[[0,28]])})));return function(t,n){return e.apply(this,arguments)}}())},36731:function(e,t,n){n.d(t,{b3:function(){return s}});var i=n(33994),r=n(22858),a=(n(71499),n(44124),n(39790),n(253),n(94438),n(8879)),o=(n(91001),n(82386),n(95737),n(74268),n(24545),n(51855),n(82130),n(31743),n(22328),n(4959),n(62435),n(36604),n(99019),n(96858),function(e){return e.data}),s=(new Set([502,503,504]),function(){var e=(0,r.A)((0,i.A)().mark((function e(t){return(0,i.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,a.v)(t.config.version,2021,2,4)){e.next=2;break}return e.abrupt("return",t.callWS({type:"supervisor/api",endpoint:"/addons",method:"get"}));case 2:return e.t0=o,e.next=5,t.callApi("GET","hassio/addons");case 5:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},32350:function(e,t,n){var i=n(32174),r=n(23444),a=n(33616),o=n(36565),s=n(87149),d=Math.min,c=[].lastIndexOf,l=!!c&&1/[1].lastIndexOf(1,-0)<0,u=s("lastIndexOf"),h=l||!u;e.exports=h?function(e){if(l)return i(c,this,arguments)||0;var t=r(this),n=o(t);if(0===n)return-1;var s=n-1;for(arguments.length>1&&(s=d(s,a(arguments[1]))),s<0&&(s=n+s);s>=0;s--)if(s in t&&t[s]===e)return s||0;return-1}:c},15814:function(e,t,n){var i=n(41765),r=n(32350);i({target:"Array",proto:!0,forced:r!==[].lastIndexOf},{lastIndexOf:r})}}]);
//# sourceMappingURL=6810.NiL-OnsHsMw.js.map