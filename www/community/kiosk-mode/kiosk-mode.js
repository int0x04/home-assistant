!function(){"use strict";var t,i=function(){return i=Object.assign||function(t){for(var i,o=1,e=arguments.length;o<e;o++)for(var n in i=arguments[o])Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);return t},i.apply(this,arguments)};function o(t,i,o,e){return new(o||(o=Promise))((function(n,_){function a(t){try{O(e.next(t))}catch(t){_(t)}}function E(t){try{O(e.throw(t))}catch(t){_(t)}}function O(t){var i;t.done?n(t.value):(i=t.value,i instanceof o?i:new o((function(t){t(i)}))).then(a,E)}O((e=e.apply(t,i||[])).next())}))}function e(t,i){var o,e,n,_,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return _={next:E(0),throw:E(1),return:E(2)},"function"==typeof Symbol&&(_[Symbol.iterator]=function(){return this}),_;function E(E){return function(O){return function(E){if(o)throw new TypeError("Generator is already executing.");for(;_&&(_=0,E[0]&&(a=0)),a;)try{if(o=1,e&&(n=2&E[0]?e.return:E[0]?e.throw||((n=e.return)&&n.call(e),0):e.next)&&!(n=n.call(e,E[1])).done)return n;switch(e=0,n&&(E=[2&E[0],n.value]),E[0]){case 0:case 1:n=E;break;case 4:return a.label++,{value:E[1],done:!1};case 5:a.label++,e=E[1],E=[0];continue;case 7:E=a.ops.pop(),a.trys.pop();continue;default:if(!(n=a.trys,(n=n.length>0&&n[n.length-1])||6!==E[0]&&2!==E[0])){a=0;continue}if(3===E[0]&&(!n||E[1]>n[0]&&E[1]<n[3])){a.label=E[1];break}if(6===E[0]&&a.label<n[1]){a.label=n[1],n=E;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(E);break}n[2]&&a.ops.pop(),a.trys.pop();continue}E=i.call(t,a)}catch(t){E=[6,t],e=0}finally{o=n=0}if(5&E[0])throw E[1];return{value:E[0]?E[1]:void 0,done:!0}}([E,O])}}}"function"==typeof SuppressedError&&SuppressedError;var n,_,a="kiosk-mode",E="kiosk_mode",O="[ Non critial warning ]",r=":shadowRoot";!function(t){t.HEADER="kmHeader",t.SIDEBAR="kmSidebar",t.OVERFLOW="kmOverflow",t.MENU_BUTTON="kmMenuButton",t.ACCOUNT="kmAccount",t.NOTIFICATIONS="kmNotifications",t.SEARCH="kmSearch",t.ASSISTANT="kmAssistant",t.REFRESH="kmRefresh",t.UNUSED_ENTITIES="kmUnusedEntities",t.RELOAD_RESOURCES="kmReloadResources",t.EDIT_DASHBOARD="kmEditDashboard",t.DIALOG_HEADER_ACTION_ITEMS="kmDialogHeaderActionItems",t.DIALOG_HEADER_HISTORY="kmDialogHeaderHistory",t.DIALOG_HEADER_SETTINGS="kmDialogHeaderSettings",t.DIALOG_HEADER_OVERFLOW="kmDialogHeaderOverflow",t.DIALOG_HISTORY="kmDialogHistory",t.DIALOG_LOGBOOK="kmDialogLogbook",t.DIALOG_ATTRIBUTES="kmDialogAttributes",t.DIALOG_MEDIA_ACTIONS="kmDialogMediaActions",t.DIALOG_UPDATE_ACTIONS="kmDialogUpdateActions",t.DIALOG_CLIMATE_ACTIONS="kmDialogClimateActions",t.DIALOG_TIMER_ACTIONS="kmDialogTimerActions",t.DIALOG_HISTORY_SHOW_MORE="kmDialogHistoryShowMore",t.DIALOG_LOGBOOK_SHOW_MORE="kmDialogLogbookShowMore",t.OVERFLOW_MOUSE="kmOverflowMouse",t.MOUSE="kmMouse"}(n||(n={})),function(t){t.KIOSK="kiosk",t.CACHE="cache",t.CLEAR_CACHE="clear_km_cache",t.DISABLE_KIOSK_MODE="disable_km",t.HIDE_SIDEBAR="hide_sidebar",t.HIDE_HEADER="hide_header",t.HIDE_OVERFLOW="hide_overflow",t.HIDE_MENU_BUTTON="hide_menubutton",t.HIDE_ACCOUNT="hide_account",t.HIDE_NOTIFICATIONS="hide_notifications",t.HIDE_SEARCH="hide_search",t.HIDE_ASSISTANT="hide_assistant",t.HIDE_REFRESH="hide_refresh",t.HIDE_UNUSED_ENTITIES="hide_unused_entities",t.HIDE_RELOAD_RESOURCES="hide_reload_resources",t.HIDE_EDIT_DASHBOARD="hide_edit_dashboard",t.HIDE_DIALOG_HEADER_ACTION_ITEMS="hide_dialog_header_action_items",t.HIDE_DIALOG_HEADER_HISTORY="hide_dialog_header_history",t.HIDE_DIALOG_HEADER_SETTINGS="hide_dialog_header_settings",t.HIDE_DIALOG_HEADER_OVERFLOW="hide_dialog_header_overflow",t.HIDE_DIALOG_HISTORY="hide_dialog_history",t.HIDE_DIALOG_LOGBOOK="hide_dialog_logbook",t.HIDE_DIALOG_ATTRIBUTES="hide_dialog_attributes",t.HIDE_DIALOG_MEDIA_ACTIONS="hide_dialog_media_actions",t.HIDE_DIALOG_UPDATE_ACTIONS="hide_dialog_update_actions",t.HIDE_DIALOG_CLIMATE_ACTIONS="hide_dialog_climate_actions",t.HIDE_DIALOG_TIMER_ACTIONS="hide_dialog_timer_actions",t.HIDE_DIALOG_HISTORY_SHOW_MORE="hide_dialog_history_show_more",t.HIDE_DIALOG_LOGBOOK_SHOW_MORE="hide_dialog_logbook_show_more",t.BLOCK_OVERFLOW="block_overflow",t.BLOCK_MOUSE="block_mouse",t.IGNORE_ENTITY_SETTINGS="ignore_entity_settings",t.IGNORE_MOBILE_SETTINGS="ignore_mobile_settings",t.IGNORE_DISABLE_KM="ignore_disable_km"}(_||(_={}));var I,s="ui",A="".concat(s,".common"),c="".concat(s,".panel"),D="".concat(c,".lovelace"),h="".concat(D,".menu"),T="".concat(s,".dialogs.more_info_control");!function(t){t.SEARCH="SEARCH",t.ASSIST="ASSIST",t.REFRESH="REFRESH",t.UNUSED_ENTITIES="UNUSED_ENTITIES",t.RELOAD_RESOURCES="RELOAD_RESOURCES",t.EDIT_DASHBOARD="EDIT_DASHBOARD",t.DIALOG_DISMISS="DIALOG_DISMISS",t.DIALOG_HISTORY="DIALOG_HISTORY",t.DIALOG_SETTINGS="DIALOG_SETTINGS"}(I||(I={}));var d,u=Object.freeze(((t={})[I.SEARCH]="".concat(h,".search"),t[I.ASSIST]="".concat(h,".assist"),t[I.REFRESH]="".concat(A,".refresh"),t[I.UNUSED_ENTITIES]="".concat(D,".unused_entities.title"),t[I.RELOAD_RESOURCES]="".concat(h,".reload_resources"),t[I.EDIT_DASHBOARD]="".concat(h,".configure_ui"),t[I.DIALOG_HISTORY]="".concat(T,".history"),t[I.DIALOG_SETTINGS]="".concat(T,".settings"),t[I.DIALOG_DISMISS]="".concat(T,".dismiss"),t));!function(t){t.HOME_ASSISTANT="home-assistant",t.HOME_ASSISTANT_MAIN="home-assistant-main",t.HA_PANEL_LOVELACE="ha-panel-lovelace",t.PARTIAL_PANEL_RESOLVER="partial-panel-resolver",t.HUI_ROOT="hui-root",t.HUI_VIEW="hui-view",t.MENU_ITEM="ha-icon-button",t.MENU_ITEM_ICON="mwc-icon-button",t.BUTTON_MENU="ha-button-menu",t.OVERLAY_MENU_ITEM="mwc-list-item",t.HA_SIDEBAR="ha-sidebar",t.HA_DRAWER="ha-drawer",t.TOOLBAR=".toolbar",t.ACTION_ITEMS=".action-items",t.HA_MORE_INFO_DIALOG="ha-more-info-dialog",t.HA_DIALOG="ha-dialog",t.HA_DIALOG_HEADER="ha-dialog-header",t.HA_DIALOG_CONTENT=".content",t.HA_DIALOG_MORE_INFO="ha-more-info-info",t.HA_DIALOG_HISTORY="ha-more-info-history",t.HA_DIALOG_LOGBOOK="ha-more-info-logbook",t.HA_DIALOG_MORE_INFO_CONTENT="more-info-content",t.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK="ha-more-info-history-and-logbook",t.HA_DIALOG_DEFAULT="more-info-default",t.HA_DIALOG_TIMER="more-info-timer",t.HA_DIALOG_VACUUM="more-info-vacuum",t.HA_DIALOG_MEDIA_PLAYER="more-info-media_player",t.HA_DIALOG_LIGHT="more-info-light",t.HA_DIALOG_UPDATE="more-info-update",t.HA_DIALOG_CLIMATE="more-info-climate",t.HA_DIALOG_CLIMATE_CONTROL_SELECT="ha-more-info-control-select-container",t.HA_DIALOG_CLIMATE_TEMPERATURE="ha-more-info-climate-temperature",t.HA_DIALOG_CLIMATE_TEMPERATURE_BUTTONS=".buttons",t.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER="ha-control-circular-slider",t.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION="#interaction",t.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION_SLIDER='path[role="slider"]',t.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION_TARGET=".target",t.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION_TARGET_BORDER=".target-border",t.HA_DIALOG_ATTRIBUTES="ha-attributes"}(d||(d={}));var S,l="true",R="state_changed",L="hass-toggle-menu",H=function(t){return Array.isArray(t)?t:[t]},N=function(t){return t instanceof ShadowRoot?t.host.localName:t.localName},G=function(t){var i=N(t);return t.querySelector("#".concat(E,"_").concat(i))},f=function(t,i){var o=N(i),e=G(i);e||((e=document.createElement("style")).setAttribute("id","".concat(E,"_").concat(o)),i.appendChild(e)),e.innerHTML=t},C=function(t){H(t).forEach((function(t){var i=N(t);G(t)&&t.querySelector("#".concat(E,"_").concat(i)).remove()}))},M=function(t){return H(t).some((function(t){return window.location.search.includes(t)}))},g=function(t,i){H(t).forEach((function(t){return window.localStorage.setItem(t,i)}))},U=function(t){return H(t).some((function(t){return window.localStorage.getItem(t)===l}))},v=function(t){return Object.entries(t).map((function(t){var i=t[0],o=t[1];return"".concat(i,":").concat(o)})).join(";")+";"},m=function(t){return Object.entries(t).map((function(t){var i=t[0],o=t[1];return"".concat(i,"{").concat(v(o),"}")})).join("")},p=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return t.map((function(t){return"".concat(t,"{display: none !important;}")})).join("")},w=function(t){var i=0,o=Object.values(u);return new Promise((function(e,n){var _=function(){var a,E=null===(a=null==t?void 0:t.hass)||void 0===a?void 0:a.resources,O=!1;if(E){var r=t.hass.language;o.find((function(t){return!E[r][t]}))||(O=!0)}O?e(E):++i<500?setTimeout(_,50):n()};_()}))},b=function(t,i,o){return new Promise((function(e,n){var _=0,E=function(){var O=t();O&&i(O)?e(O):++_<500?setTimeout(E,50):n(new Error("".concat(a,": Cannot select ").concat(o," after ").concat(500," attempts. Giving up!")))};E()}))},B=function(t,i){t.forEach((function(t){if(t&&t.dataset&&!t.dataset.selector){var o=t.shadowRoot.querySelector(d.MENU_ITEM_ICON);t.dataset.selector=i[o.title]}}))},y={HEADER:m({"#view":{"min-height":"100vh !important","--header-height":"0px"},".header":{display:"none"}}),ACCOUNT:p(".profile"),NOTIFICATIONS:p(".notifications-container"),DIVIDER:p(".divider"),PEPER_LISTBOX:function(t,i){var o=132;return t&&i?o=0:t?o-=50:i&&(o-=48),m({"paper-listbox":{height:"calc(100% - var(--header-height) - ".concat(o,"px - env(safe-area-inset-bottom)) !important")}})},MENU_BUTTON:p(".menu ha-icon-button"),MENU_BUTTON_BURGER:p("ha-menu-button"),MOUSE:m({"body::after":{bottom:"0",content:'""',cursor:"none",display:"block",left:"0",position:"fixed",right:"0",top:"0","z-index":"999999"}}),SIDEBAR:m({":host":{"--mdc-drawer-width":"0 !important"},"partial-panel-resolver":{"--mdc-top-app-bar-width":"100% !important"},"ha-drawer > ha-sidebar":{display:"none"},".header":{width:"100% !important"}}),ASIDE:p(".mdc-drawer"),OVERFLOW_MENU:p("".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS," > ").concat(d.BUTTON_MENU)),BLOCK_OVERFLOW:m((S={},S["".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS," > ").concat(d.BUTTON_MENU)]={"pointer-events":"none !important"},S)),SEARCH:p("".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS,' > ha-icon-button[data-selector="').concat(I.SEARCH,'"]'),"".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS," > ").concat(d.BUTTON_MENU," > ").concat(d.OVERLAY_MENU_ITEM,'[data-selector="').concat(I.SEARCH,'"]')),ASSISTANT:p("".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS,' > ha-icon-button[data-selector="').concat(I.ASSIST,'"]'),"".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS," > ").concat(d.BUTTON_MENU," > ").concat(d.OVERLAY_MENU_ITEM,'[data-selector="').concat(I.ASSIST,'"]')),REFRESH:p("".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS," > ").concat(d.BUTTON_MENU," > ").concat(d.OVERLAY_MENU_ITEM,'[data-selector="').concat(I.REFRESH,'"]')),UNUSED_ENTITIES:p("".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS," > ").concat(d.BUTTON_MENU," > ").concat(d.OVERLAY_MENU_ITEM,'[data-selector="').concat(I.UNUSED_ENTITIES,'"]')),RELOAD_RESOURCES:p("".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS," > ").concat(d.BUTTON_MENU," > ").concat(d.OVERLAY_MENU_ITEM,'[data-selector="').concat(I.RELOAD_RESOURCES,'"]')),EDIT_DASHBOARD:p("".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS," > ").concat(d.BUTTON_MENU," > ").concat(d.OVERLAY_MENU_ITEM,'[data-selector="').concat(I.EDIT_DASHBOARD,'"]')),DIALOG_HEADER_HISTORY:p("".concat(d.HA_DIALOG_HEADER," > ").concat(d.MENU_ITEM,'[data-selector="').concat(I.DIALOG_HISTORY,'"]')),DIALOG_HEADER_SETTINGS:p("".concat(d.HA_DIALOG_HEADER," > ").concat(d.MENU_ITEM,'[data-selector="').concat(I.DIALOG_SETTINGS,'"]')),DIALOG_HEADER_OVERFLOW:p("".concat(d.HA_DIALOG_HEADER," > ").concat(d.BUTTON_MENU)),DIALOG_HISTORY:p(d.HA_DIALOG_HISTORY),DIALOG_LOGBOOK:p(d.HA_DIALOG_LOGBOOK),DIALOG_ATTRIBUTES:p(d.HA_DIALOG_ATTRIBUTES),DIALOG_MEDIA_ACTIONS:p(".controls"),DIALOG_TIMER_ACTIONS:p(".actions"),DIALOG_UPDATE_ACTIONS:p(".actions","hr:has(+ .actions)"),DIALOG_CLIMATE_ACTIONS:p(d.HA_DIALOG_CLIMATE),DIALOG_CLIMATE_CONTROL_SELECT:p(d.HA_DIALOG_CLIMATE_CONTROL_SELECT),DIALOG_CLIMATE_TEMPERATURE_BUTTONS:p(d.HA_DIALOG_CLIMATE_TEMPERATURE_BUTTONS),DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION:p(d.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION,d.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION_SLIDER,d.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION_TARGET_BORDER,d.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION_TARGET),DIALOG_SHOW_MORE:p(".header a")},k=function(){function t(){this.lines=[{content:"%c≡ kiosk-mode",color:"white",background:"#03a9f4"},{content:"%cversion ".concat("4.1.0")}]}return t.prototype.log=function(){var t=[],o=[],e=this.lines.length-1,n={"border-color":"#424242","border-style":"solid",display:"inline-block","font-family":"monospace","font-size":"12px"};this.lines.forEach((function(_,a){t.push(_.content.padEnd(27)),t.push("%c⋮"),a!==e&&t.push("%c\n");var E="0 0 0 1px",O="0 1px 0 1px";0===e?(E="1px 0 1px 1px",O="1px 1px 1px 0"):0===a?(E="1px 0 0 1px",O="1px 1px 0 0"):a===e&&(E="0 0 1px 1px",O="0 1px 1px 0"),o.push(v(i(i({},n),{background:_.background||"white",color:_.color||"#424242",padding:0===a?"1px 0px 1px 5px":"1px 0px 1px 10px","border-width":E}))),o.push(v(i(i({},n),{background:_.background||"white",color:_.color||"white",padding:0===a?"1px 5px":"1px 5px 1px 0px","border-width":O}))),a!==e&&o.push("")})),console.info.apply(console,function(t,i,o){if(o||2===arguments.length)for(var e,n=0,_=i.length;n<_;n++)!e&&n in i||(e||(e=Array.prototype.slice.call(i,0,n)),e[n]=i[n]);return t.concat(e||Array.prototype.slice.call(i))}([t.join("")],o,!1))},t}(),F=function(){function t(){var t=this;window.kioskModeEntities={},M(_.CLEAR_CACHE)&&g([n.HEADER,n.SIDEBAR,n.OVERFLOW,n.MENU_BUTTON,n.ACCOUNT,n.NOTIFICATIONS,n.SEARCH,n.ASSISTANT,n.REFRESH,n.UNUSED_ENTITIES,n.RELOAD_RESOURCES,n.EDIT_DASHBOARD,n.DIALOG_HEADER_ACTION_ITEMS,n.DIALOG_HEADER_HISTORY,n.DIALOG_HEADER_SETTINGS,n.DIALOG_HEADER_OVERFLOW,n.DIALOG_HISTORY,n.DIALOG_LOGBOOK,n.DIALOG_ATTRIBUTES,n.DIALOG_MEDIA_ACTIONS,n.DIALOG_UPDATE_ACTIONS,n.DIALOG_CLIMATE_ACTIONS,n.DIALOG_TIMER_ACTIONS,n.DIALOG_HISTORY_SHOW_MORE,n.DIALOG_LOGBOOK_SHOW_MORE,n.OVERFLOW_MOUSE,n.MOUSE],"false");o(t,void 0,void 0,(function(){var t,i,o,n,_,a,E=this;return e(this,(function(e){switch(e.label){case 0:return t=this,[4,b((function(){return document.querySelector(d.HOME_ASSISTANT)}),(function(t){return!(!t||!t.shadowRoot)}),d.HOME_ASSISTANT)];case 1:return t.ha=e.sent(),i=this,[4,b((function(){var t;return null===(t=E.ha.shadowRoot.querySelector(d.HOME_ASSISTANT_MAIN))||void 0===t?void 0:t.shadowRoot}),(function(t){return!!t}),"".concat(d.HOME_ASSISTANT_MAIN).concat(r))];case 2:return i.main=e.sent(),o=this,[4,b((function(){var t,i;return null===(i=null===(t=E.ha)||void 0===t?void 0:t.hass)||void 0===i?void 0:i.user}),(function(t){return!!t}),"".concat(d.HOME_ASSISTANT," > hass > user"))];case 3:return o.user=e.sent(),this.version=function(t){var i=t?t.match(/^(\d+)\.(\d+)\.(\w+)(?:\.(\w+))?$/):null;return i?[+i[1],+i[2],i[3]]:null}(null===(a=null===(_=this.ha.hass)||void 0===_?void 0:_.config)||void 0===a?void 0:a.version),[4,b((function(){return E.main.querySelector(d.PARTIAL_PANEL_RESOLVER)}),(function(t){return!!t}),"".concat(d.HOME_ASSISTANT_MAIN," > ").concat(d.PARTIAL_PANEL_RESOLVER))];case 4:return n=e.sent(),this.panelResolverObserver=new MutationObserver(this.watchDashboards),this.dialogsMutationObserver=new MutationObserver(this.watchMoreInfoDialogs),this.dialogContentMutationObserver=new MutationObserver(this.watchMoreInfoDialogsContent),this.panelResolverObserver.observe(n,{childList:!0}),this.dialogsMutationObserver.observe(this.ha.shadowRoot,{childList:!0}),this.run(),this.entityWatch(),[2]}}))})),this.resizeWindowBinded=this.resizeWindow.bind(this)}return t.prototype.run=function(t){var i=this;if(void 0===t&&(t=this.main.querySelector(d.HA_PANEL_LOVELACE)),t)return this.lovelace=t,b((function(){var i;return null===(i=null==t?void 0:t.lovelace)||void 0===i?void 0:i.config}),(function(t){return!!t}),"Lovelace config").then((function(t){return i.processConfig(t.kiosk_mode||{})}))},t.prototype.runDialogs=function(t){var i,n;return void 0===t&&(t=null===(n=null===(i=this.ha)||void 0===i?void 0:i.shadowRoot)||void 0===n?void 0:n.querySelector(d.HA_MORE_INFO_DIALOG)),o(this,void 0,void 0,(function(){var i,o,n,_=this;return e(this,(function(e){switch(e.label){case 0:return t?[4,b((function(){return null==t?void 0:t.shadowRoot}),(function(t){return!!t}),"".concat(d.HA_MORE_INFO_DIALOG,":").concat(r))]:[2];case 1:return i=e.sent(),[4,b((function(){return i.querySelector(d.HA_DIALOG)}),(function(t){return!!t}),"".concat(d.HA_MORE_INFO_DIALOG,":").concat(r," > ").concat(d.HA_DIALOG))];case 2:return o=e.sent(),[4,b((function(){return o.querySelector(d.HA_DIALOG_CONTENT)}),(function(t){return!!t}),"".concat(d.HA_DIALOG," > ").concat(d.HA_DIALOG_CONTENT))];case 3:return n=e.sent(),b((function(){return n.querySelector("".concat(d.HA_DIALOG_MORE_INFO,", ").concat(d.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK))}),(function(t){return!!t}),"".concat(d.HA_DIALOG," > ").concat(d.HA_DIALOG_CONTENT," > child")).then((function(t){_.dialogContentMutationObserver.disconnect(),_.dialogContentMutationObserver.observe(n,{childList:!0}),_.runDialogsChildren(t)})).catch((function(){})),this.insertDialogStyles(o),[2]}}))}))},t.prototype.runDialogsChildren=function(t){return o(this,void 0,void 0,(function(){var i;return e(this,(function(o){switch(o.label){case 0:return!t||t.localName!==d.HA_DIALOG_MORE_INFO&&t.localName!==d.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK?[2]:[4,b((function(){return t.shadowRoot}),(function(t){return!!t}),"".concat(d.HA_DIALOG," > ").concat(d.HA_DIALOG_CONTENT," > ").concat(t.localName,":").concat(r))];case 1:return i=o.sent(),this.insertDialogChildStyles(i),[2]}}))}))},t.prototype.processConfig=function(t){return o(this,void 0,void 0,(function(){var i,E,I,s,A,c,D,h,T,S,l,R=this;return e(this,(function(L){switch(L.label){case 0:return i=this.ha.hass.panelUrl,window.kioskModeEntities[i]||(window.kioskModeEntities[i]=[]),this.hideHeader=!1,this.hideSidebar=!1,this.hideOverflow=!1,this.hideMenuButton=!1,this.hideAccount=!1,this.hideNotifications=!1,this.hideSearch=!1,this.hideAssistant=!1,this.hideRefresh=!1,this.hideUnusedEntities=!1,this.hideReloadResources=!1,this.hideEditDashboard=!1,this.hideDialogHeaderActionItems=!1,this.hideDialogHeaderHistory=!1,this.hideDialogHeaderSettings=!1,this.hideDialogHeaderOverflow=!1,this.hideDialogHistory=!1,this.hideDialogLogbook=!1,this.hideDialogAttributes=!1,this.hideDialogMediaActions=!1,this.hideDialogUpdateActions=!1,this.hideDialogClimateActions=!1,this.hideDialogTimerActions=!1,this.hideDialogHistoryShowMore=!1,this.hideDialogLogbookShowMore=!1,this.blockOverflow=!1,this.blockMouse=!1,this.ignoreEntity=!1,this.ignoreMobile=!1,this.ignoreDisableKm=!1,E=this,[4,b((function(){var t,i,o;return null===(o=null===(i=null===(t=R.lovelace)||void 0===t?void 0:t.shadowRoot)||void 0===i?void 0:i.querySelector(d.HUI_ROOT))||void 0===o?void 0:o.shadowRoot}),(function(t){return!!t}),"".concat(d.HUI_ROOT).concat(r))];case 1:return E.huiRoot=L.sent(),I=this,[4,b((function(){return R.main.querySelector(d.HA_DRAWER)}),(function(t){return!!t}),d.HA_DRAWER)];case 2:return I.drawerLayout=L.sent(),s=this,[4,b((function(){return R.huiRoot.querySelector(d.TOOLBAR)}),(function(t){return!!t}),d.TOOLBAR)];case 3:return s.appToolbar=L.sent(),A=this,[4,b((function(){var t;return null===(t=R.drawerLayout.querySelector(d.HA_SIDEBAR))||void 0===t?void 0:t.shadowRoot}),(function(t){return!!t}),"".concat(d.HA_SIDEBAR).concat(r))];case 4:return A.sideBarRoot=L.sent(),(N=this.ha,o(void 0,void 0,void 0,(function(){var t,i,o,n,_;return e(this,(function(e){switch(e.label){case 0:return[4,w(N)];case 1:return t=e.sent(),i=N.hass.language,o=t[i],n=Object.entries(u),_=n.map((function(t){var i=t[0],e=t[1];return[o[e],i]})),[2,Object.fromEntries(_)]}}))}))).then((function(t){R.menuTranslations=t,R.updateMenuItemsLabels()})).catch((function(){console.warn("".concat(a,": ").concat(O," Cannot get resources translations"))})),c=U([n.HEADER,n.SIDEBAR,n.OVERFLOW,n.MENU_BUTTON,n.ACCOUNT,n.NOTIFICATIONS,n.SEARCH,n.ASSISTANT,n.REFRESH,n.UNUSED_ENTITIES,n.RELOAD_RESOURCES,n.EDIT_DASHBOARD,n.DIALOG_HEADER_ACTION_ITEMS,n.DIALOG_HEADER_HISTORY,n.DIALOG_HEADER_SETTINGS,n.DIALOG_HEADER_OVERFLOW,n.DIALOG_HISTORY,n.DIALOG_LOGBOOK,n.DIALOG_ATTRIBUTES,n.DIALOG_MEDIA_ACTIONS,n.DIALOG_UPDATE_ACTIONS,n.DIALOG_CLIMATE_ACTIONS,n.DIALOG_TIMER_ACTIONS,n.DIALOG_HISTORY_SHOW_MORE,n.DIALOG_LOGBOOK_SHOW_MORE,n.OVERFLOW_MOUSE,n.MOUSE]),D=M([_.KIOSK,_.HIDE_HEADER,_.HIDE_SIDEBAR,_.HIDE_OVERFLOW,_.HIDE_MENU_BUTTON,_.HIDE_ACCOUNT,_.HIDE_NOTIFICATIONS,_.HIDE_SEARCH,_.HIDE_ASSISTANT,_.HIDE_REFRESH,_.HIDE_RELOAD_RESOURCES,_.HIDE_UNUSED_ENTITIES,_.HIDE_EDIT_DASHBOARD,_.HIDE_DIALOG_HEADER_ACTION_ITEMS,_.HIDE_DIALOG_HEADER_HISTORY,_.HIDE_DIALOG_HEADER_SETTINGS,_.HIDE_DIALOG_HEADER_OVERFLOW,_.HIDE_DIALOG_HISTORY,_.HIDE_DIALOG_LOGBOOK,_.HIDE_DIALOG_ATTRIBUTES,_.HIDE_DIALOG_MEDIA_ACTIONS,_.HIDE_DIALOG_UPDATE_ACTIONS,_.HIDE_DIALOG_CLIMATE_ACTIONS,_.HIDE_DIALOG_TIMER_ACTIONS,_.HIDE_DIALOG_HISTORY_SHOW_MORE,_.HIDE_DIALOG_LOGBOOK_SHOW_MORE,_.BLOCK_OVERFLOW,_.BLOCK_MOUSE]),c||D?(this.hideHeader=U(n.HEADER)||M([_.KIOSK,_.HIDE_HEADER]),this.hideSidebar=U(n.SIDEBAR)||M([_.KIOSK,_.HIDE_SIDEBAR]),this.hideOverflow=U(n.OVERFLOW)||M(_.HIDE_OVERFLOW),this.hideMenuButton=U(n.MENU_BUTTON)||M(_.HIDE_MENU_BUTTON),this.hideAccount=U(n.ACCOUNT)||M(_.HIDE_ACCOUNT),this.hideNotifications=U(n.NOTIFICATIONS)||M(_.HIDE_NOTIFICATIONS),this.hideSearch=U(n.SEARCH)||M(_.HIDE_SEARCH),this.hideAssistant=U(n.ASSISTANT)||M(_.HIDE_ASSISTANT),this.hideRefresh=U(n.REFRESH)||M(_.HIDE_REFRESH),this.hideUnusedEntities=U(n.UNUSED_ENTITIES)||M(_.HIDE_UNUSED_ENTITIES),this.hideReloadResources=U(n.RELOAD_RESOURCES)||M(_.HIDE_RELOAD_RESOURCES),this.hideEditDashboard=U(n.EDIT_DASHBOARD)||M(_.HIDE_EDIT_DASHBOARD),this.hideDialogHeaderActionItems=U(n.DIALOG_HEADER_ACTION_ITEMS)||M(_.HIDE_DIALOG_HEADER_ACTION_ITEMS),this.hideDialogHeaderHistory=U(n.DIALOG_HEADER_HISTORY)||M(_.HIDE_DIALOG_HEADER_HISTORY),this.hideDialogHeaderSettings=U(n.DIALOG_HEADER_SETTINGS)||M(_.HIDE_DIALOG_HEADER_SETTINGS),this.hideDialogHeaderOverflow=U(n.DIALOG_HEADER_OVERFLOW)||M(_.HIDE_DIALOG_HEADER_OVERFLOW),this.hideDialogHistory=U(n.DIALOG_HISTORY)||M(_.HIDE_DIALOG_HISTORY),this.hideDialogLogbook=U(n.DIALOG_LOGBOOK)||M(_.HIDE_DIALOG_LOGBOOK),this.hideDialogAttributes=U(n.DIALOG_ATTRIBUTES)||M(_.HIDE_DIALOG_ATTRIBUTES),this.hideDialogMediaActions=U(n.DIALOG_MEDIA_ACTIONS)||M(_.HIDE_DIALOG_MEDIA_ACTIONS),this.hideDialogUpdateActions=U(n.DIALOG_UPDATE_ACTIONS)||M(_.HIDE_DIALOG_UPDATE_ACTIONS),this.hideDialogClimateActions=U(n.DIALOG_CLIMATE_ACTIONS)||M(_.HIDE_DIALOG_CLIMATE_ACTIONS),this.hideDialogTimerActions=U(n.DIALOG_TIMER_ACTIONS)||M(_.HIDE_DIALOG_TIMER_ACTIONS),this.hideDialogHistoryShowMore=U(n.DIALOG_HISTORY_SHOW_MORE)||M(_.HIDE_DIALOG_HISTORY_SHOW_MORE),this.hideDialogLogbookShowMore=U(n.DIALOG_LOGBOOK_SHOW_MORE)||M(_.HIDE_DIALOG_LOGBOOK_SHOW_MORE),this.blockOverflow=U(n.OVERFLOW_MOUSE)||M(_.BLOCK_OVERFLOW),this.blockMouse=U(n.MOUSE)||M(_.BLOCK_MOUSE)):this.setOptions(t,!1),(h=this.user.is_admin?t.admin_settings:t.non_admin_settings)&&this.setOptions(h,!0),t.user_settings&&H(t.user_settings).forEach((function(t){H(t.users).some((function(t){return t.toLowerCase()===R.user.name.toLowerCase()}))&&R.setOptions(t,!0)})),(T=this.ignoreMobile?null:t.mobile_settings)&&(S=T.custom_width?T.custom_width:812,window.innerWidth<=S&&this.setOptions(T,!0)),(l=this.ignoreEntity?null:t.entity_settings)&&l.forEach((function(t){var o=Object.keys(t.entity)[0];window.kioskModeEntities[i].includes(o)||window.kioskModeEntities[i].push(o),R.ha.hass.states[o].state==t.entity[o]&&R.setOptions(t,!1)})),M(_.DISABLE_KIOSK_MODE)&&!this.ignoreDisableKm?[2]:(this.insertStyles(),[2])}var N}))}))},t.prototype.insertStyles=function(){var t,i,o,e;if(null===(i=null===(t=this.main)||void 0===t?void 0:t.host)||void 0===i||i.removeEventListener(L,this.blockToggleMenuGesture,!0),this.hideSidebar&&(null===(e=null===(o=this.main)||void 0===o?void 0:o.host)||void 0===e||e.addEventListener(L,this.blockToggleMenuGesture,!0)),this.hideHeader?(f(y.HEADER,this.huiRoot),M(_.CACHE)&&g(n.HEADER,l)):C(this.huiRoot),this.hideSidebar?(f(y.SIDEBAR,this.drawerLayout),f(y.ASIDE,this.drawerLayout.shadowRoot),M(_.CACHE)&&g(n.SIDEBAR,l)):(C(this.drawerLayout),C(this.drawerLayout.shadowRoot)),this.hideAccount||this.hideNotifications||this.hideMenuButton){var a=[this.hideAccount?y.ACCOUNT:"",this.hideNotifications?y.NOTIFICATIONS:"",this.hideAccount&&this.hideNotifications?y.DIVIDER:"",this.hideAccount||this.hideNotifications?y.PEPER_LISTBOX(this.hideAccount,this.hideNotifications):"",this.hideMenuButton?y.MENU_BUTTON:""];f(a.join(""),this.sideBarRoot),this.hideAccount&&M(_.CACHE)&&g(n.ACCOUNT,l)}else C(this.sideBarRoot);if(this.hideSearch||this.hideAssistant||this.hideRefresh||this.hideUnusedEntities||this.hideReloadResources||this.hideEditDashboard||this.hideMenuButton||this.hideOverflow||this.blockOverflow||this.hideSidebar){a=[this.hideSearch?y.SEARCH:"",this.hideAssistant?y.ASSISTANT:"",this.hideRefresh?y.REFRESH:"",this.hideUnusedEntities?y.UNUSED_ENTITIES:"",this.hideReloadResources?y.RELOAD_RESOURCES:"",this.hideEditDashboard?y.EDIT_DASHBOARD:"",this.hideOverflow?y.OVERFLOW_MENU:"",this.blockOverflow?y.BLOCK_OVERFLOW:"",this.hideMenuButton||this.hideSidebar?y.MENU_BUTTON_BURGER:""];f(a.join(""),this.appToolbar),M(_.CACHE)&&(this.hideSearch&&g(n.SEARCH,l),this.hideAssistant&&g(n.ASSISTANT,l),this.hideRefresh&&g(n.REFRESH,l),this.hideUnusedEntities&&g(n.UNUSED_ENTITIES,l),this.hideReloadResources&&g(n.RELOAD_RESOURCES,l),this.hideEditDashboard&&g(n.EDIT_DASHBOARD,l),this.hideOverflow&&g(n.OVERFLOW,l),this.blockOverflow&&g(n.OVERFLOW_MOUSE,l),this.hideMenuButton&&g(n.MENU_BUTTON,l))}else C(this.appToolbar);this.blockMouse?(f(y.MOUSE,document.body),M(_.CACHE)&&g(n.MOUSE,l)):C(document.body),window.removeEventListener("resize",this.resizeWindowBinded),window.addEventListener("resize",this.resizeWindowBinded),window.dispatchEvent(new Event("resize"))},t.prototype.insertDialogStyles=function(t){return o(this,void 0,void 0,(function(){var i,o=this;return e(this,(function(e){return b((function(){return t.querySelectorAll("".concat(d.HA_DIALOG_HEADER," > ").concat(d.MENU_ITEM))}),(function(t){return!!t}),":scope > ".concat(d.HA_DIALOG_HEADER," > ").concat(d.MENU_ITEM)).then((function(t){B(t,o.menuTranslations)})).catch((function(t){console.warn("".concat(a,": ").concat(O," ").concat(t))})),this.hideDialogHeaderActionItems||this.hideDialogHeaderHistory||this.hideDialogHeaderSettings||this.hideDialogHeaderOverflow?(i=[this.hideDialogHeaderActionItems||this.hideDialogHeaderHistory?y.DIALOG_HEADER_HISTORY:"",this.hideDialogHeaderActionItems||this.hideDialogHeaderSettings?y.DIALOG_HEADER_SETTINGS:"",this.hideDialogHeaderActionItems||this.hideDialogHeaderOverflow?y.DIALOG_HEADER_OVERFLOW:""],f(i.join(""),t),M(_.CACHE)&&(this.hideDialogHeaderActionItems&&g(n.DIALOG_HEADER_ACTION_ITEMS,l),this.hideDialogHeaderHistory&&g(n.DIALOG_HEADER_HISTORY,l),this.hideDialogHeaderSettings&&g(n.DIALOG_HEADER_SETTINGS,l),this.hideDialogHeaderOverflow&&g(n.DIALOG_HEADER_OVERFLOW,l))):C(t),[2]}))}))},t.prototype.insertDialogChildStyles=function(t){return o(this,void 0,void 0,(function(){var i,o,a=this;return e(this,(function(e){return i=Boolean(this.version&&(this.version[0]<2023||2023===this.version[0]&&this.version[1]<9)),this.hideDialogHistory||this.hideDialogLogbook||this.hideDialogClimateActions?(o=[this.hideDialogHistory?y.DIALOG_HISTORY:"",this.hideDialogLogbook?y.DIALOG_LOGBOOK:"",this.hideDialogClimateActions&&i?y.DIALOG_CLIMATE_ACTIONS:""],f(o.join(""),t),M(_.CACHE)&&(this.hideDialogHistory&&g(n.DIALOG_HISTORY,l),this.hideDialogLogbook&&g(n.DIALOG_LOGBOOK,l),this.hideDialogClimateActions&&g(n.DIALOG_CLIMATE_ACTIONS,l))):C(t),i||b((function(){var i;return null===(i=t.querySelector(d.HA_DIALOG_CLIMATE))||void 0===i?void 0:i.shadowRoot}),(function(t){return!!t}),"").then((function(t){a.hideDialogClimateActions?f(y.DIALOG_CLIMATE_CONTROL_SELECT,t):C(t),b((function(){var i;return null===(i=t.querySelector(d.HA_DIALOG_CLIMATE_TEMPERATURE))||void 0===i?void 0:i.shadowRoot}),(function(t){return!!t}),"").then((function(t){a.hideDialogClimateActions?f(y.DIALOG_CLIMATE_TEMPERATURE_BUTTONS,t):C(t),b((function(){var i;return null===(i=t.querySelector(d.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER))||void 0===i?void 0:i.shadowRoot}),(function(t){return!!t}),"").then((function(t){a.hideDialogClimateActions?f(y.DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION,t):C(t)})).catch((function(t){}))})).catch((function(t){}))})).catch((function(t){})),b((function(){var i;return null===(i=t.querySelector(d.HA_DIALOG_HISTORY))||void 0===i?void 0:i.shadowRoot}),(function(t){return!!t}),"").then((function(t){a.hideDialogHistoryShowMore?(f(y.DIALOG_SHOW_MORE,t),M(_.CACHE)&&g(n.DIALOG_HISTORY_SHOW_MORE,l)):C(t)})).catch((function(t){})),b((function(){var i;return null===(i=t.querySelector(d.HA_DIALOG_LOGBOOK))||void 0===i?void 0:i.shadowRoot}),(function(t){return!!t}),"").then((function(t){a.hideDialogLogbookShowMore?(f(y.DIALOG_SHOW_MORE,t),M(_.CACHE)&&g(n.DIALOG_LOGBOOK_SHOW_MORE,l)):C(t)})).catch((function(){})),b((function(){var i;return null===(i=t.querySelector(["".concat(d.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(d.HA_DIALOG_DEFAULT),"".concat(d.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(d.HA_DIALOG_VACUUM),"".concat(d.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(d.HA_DIALOG_TIMER),"".concat(d.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(d.HA_DIALOG_LIGHT),"".concat(d.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(d.HA_DIALOG_MEDIA_PLAYER)].join(",")))||void 0===i?void 0:i.shadowRoot}),(function(t){return!!t}),"").then((function(t){if(a.hideDialogAttributes||a.hideDialogTimerActions||a.hideDialogMediaActions){var i=[a.hideDialogAttributes?y.DIALOG_ATTRIBUTES:"",a.hideDialogTimerActions?y.DIALOG_TIMER_ACTIONS:"",a.hideDialogMediaActions?y.DIALOG_MEDIA_ACTIONS:""];f(i.join(""),t),M(_.CACHE)&&(a.hideDialogAttributes&&g(n.DIALOG_ATTRIBUTES,l),a.hideDialogTimerActions&&g(n.DIALOG_TIMER_ACTIONS,l),a.hideDialogMediaActions&&g(n.DIALOG_MEDIA_ACTIONS,l))}else C(t)})).catch((function(){})),b((function(){var i;return null===(i=t.querySelector("".concat(d.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(d.HA_DIALOG_UPDATE)))||void 0===i?void 0:i.shadowRoot}),(function(t){return!!t}),"").then((function(t){a.hideDialogUpdateActions?(f(y.DIALOG_UPDATE_ACTIONS,t),M(_.CACHE)&&g(n.DIALOG_UPDATE_ACTIONS,l)):C(t)})).catch((function(){})),[2]}))}))},t.prototype.resizeWindow=function(){var t=this;window.clearTimeout(this.resizeDelay),this.resizeDelay=window.setTimeout((function(){t.updateMenuItemsLabels()}),250)},t.prototype.watchDashboards=function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){t.localName===d.HA_PANEL_LOVELACE&&window.KioskMode.run(t)}))}))},t.prototype.watchMoreInfoDialogs=function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){t.localName===d.HA_MORE_INFO_DIALOG&&window.KioskMode.runDialogs(t).catch((function(t){return console.warn("".concat(O," ").concat(null==t?void 0:t.message))}))}))}))},t.prototype.watchMoreInfoDialogsContent=function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){t.localName!==d.HA_DIALOG_MORE_INFO&&t.localName!==d.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK||window.KioskMode.runDialogsChildren(t).catch((function(t){return console.warn("".concat(O," ").concat(null==t?void 0:t.message))}))}))}))},t.prototype.updateMenuItemsLabels=function(){var t=this;this.menuTranslations&&(b((function(){return t.appToolbar.querySelectorAll("".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS," > ").concat(d.MENU_ITEM))}),(function(t){return!!t}),":scope > ".concat(d.ACTION_ITEMS," > ").concat(d.MENU_ITEM)).then((function(i){B(i,t.menuTranslations)})).catch((function(t){console.warn("".concat(a,": ").concat(O," ").concat(t))})),this.user.is_admin&&b((function(){return t.appToolbar.querySelectorAll(d.OVERLAY_MENU_ITEM)}),(function(t){return!(!t||!t.length)}),"".concat(d.TOOLBAR," > ").concat(d.OVERLAY_MENU_ITEM)).then((function(i){i.forEach((function(i){if(i&&i.dataset&&!i.dataset.selector){var o=i.textContent.trim();i.dataset.selector=t.menuTranslations[o]}}))})).catch((function(t){console.warn("".concat(a,": ").concat(O," ").concat(t))})))},t.prototype.entityWatch=function(){return o(this,void 0,void 0,(function(){var t=this;return e(this,(function(i){switch(i.label){case 0:return[4,window.hassConnection];case 1:return i.sent().conn.subscribeMessage((function(i){return t.entityWatchCallback(i)}),{type:"subscribe_events",event_type:R}),[2]}}))}))},t.prototype.entityWatchCallback=function(t){return o(this,void 0,void 0,(function(){var i;return e(this,(function(o){switch(o.label){case 0:return!(i=window.kioskModeEntities[this.ha.hass.panelUrl]||[]).length||t.event_type!==R||!i.includes(t.data.entity_id)||t.data.old_state&&t.data.new_state.state===t.data.old_state.state?[3,2]:[4,this.run()];case 1:o.sent(),this.runDialogs().catch((function(){})),o.label=2;case 2:return[2]}}))}))},t.prototype.blockToggleMenuGesture=function(t){t.preventDefault(),t.stopImmediatePropagation()},t.prototype.setOptions=function(t,i){_.HIDE_HEADER in t&&(this.hideHeader=t[_.HIDE_HEADER]),_.HIDE_SIDEBAR in t&&(this.hideSidebar=t[_.HIDE_SIDEBAR]),_.HIDE_OVERFLOW in t&&(this.hideOverflow=t[_.HIDE_OVERFLOW]),_.HIDE_MENU_BUTTON in t&&(this.hideMenuButton=t[_.HIDE_MENU_BUTTON]),_.HIDE_ACCOUNT in t&&(this.hideAccount=t[_.HIDE_ACCOUNT]),_.HIDE_NOTIFICATIONS in t&&(this.hideNotifications=t[_.HIDE_NOTIFICATIONS]),_.HIDE_SEARCH in t&&(this.hideSearch=t[_.HIDE_SEARCH]),_.HIDE_ASSISTANT in t&&(this.hideAssistant=t[_.HIDE_ASSISTANT]),_.HIDE_REFRESH in t&&(this.hideRefresh=t[_.HIDE_REFRESH]),_.HIDE_UNUSED_ENTITIES in t&&(this.hideUnusedEntities=t[_.HIDE_UNUSED_ENTITIES]),_.HIDE_RELOAD_RESOURCES in t&&(this.hideReloadResources=t[_.HIDE_RELOAD_RESOURCES]),_.HIDE_EDIT_DASHBOARD in t&&(this.hideEditDashboard=t[_.HIDE_EDIT_DASHBOARD]),_.HIDE_DIALOG_HEADER_ACTION_ITEMS in t&&(this.hideDialogHeaderActionItems=t[_.HIDE_DIALOG_HEADER_ACTION_ITEMS]),_.HIDE_DIALOG_HEADER_HISTORY in t&&(this.hideDialogHeaderHistory=t[_.HIDE_DIALOG_HEADER_HISTORY]),_.HIDE_DIALOG_HEADER_SETTINGS in t&&(this.hideDialogHeaderSettings=t[_.HIDE_DIALOG_HEADER_SETTINGS]),_.HIDE_DIALOG_HEADER_OVERFLOW in t&&(this.hideDialogHeaderOverflow=t[_.HIDE_DIALOG_HEADER_OVERFLOW]),_.HIDE_DIALOG_HISTORY in t&&(this.hideDialogHistory=t[_.HIDE_DIALOG_HISTORY]),_.HIDE_DIALOG_LOGBOOK in t&&(this.hideDialogLogbook=t[_.HIDE_DIALOG_LOGBOOK]),_.HIDE_DIALOG_ATTRIBUTES in t&&(this.hideDialogAttributes=t[_.HIDE_DIALOG_ATTRIBUTES]),_.HIDE_DIALOG_MEDIA_ACTIONS in t&&(this.hideDialogMediaActions=t[_.HIDE_DIALOG_MEDIA_ACTIONS]),_.HIDE_DIALOG_UPDATE_ACTIONS in t&&(this.hideDialogUpdateActions=t[_.HIDE_DIALOG_UPDATE_ACTIONS]),_.HIDE_DIALOG_CLIMATE_ACTIONS in t&&(this.hideDialogClimateActions=t[_.HIDE_DIALOG_CLIMATE_ACTIONS]),_.HIDE_DIALOG_TIMER_ACTIONS in t&&(this.hideDialogTimerActions=t[_.HIDE_DIALOG_TIMER_ACTIONS]),_.HIDE_DIALOG_HISTORY_SHOW_MORE in t&&(this.hideDialogHistoryShowMore=t[_.HIDE_DIALOG_HISTORY_SHOW_MORE]),_.HIDE_DIALOG_LOGBOOK_SHOW_MORE in t&&(this.hideDialogLogbookShowMore=t[_.HIDE_DIALOG_LOGBOOK_SHOW_MORE]),_.BLOCK_OVERFLOW in t&&(this.blockOverflow=t[_.BLOCK_OVERFLOW]),_.BLOCK_MOUSE in t&&(this.blockMouse=t[_.BLOCK_MOUSE]),_.KIOSK in t&&(this.hideHeader=this.hideSidebar=t[_.KIOSK]),i&&(_.IGNORE_ENTITY_SETTINGS in t&&(this.ignoreEntity=t[_.IGNORE_ENTITY_SETTINGS]),_.IGNORE_MOBILE_SETTINGS in t&&(this.ignoreMobile=t[_.IGNORE_MOBILE_SETTINGS]),_.IGNORE_DISABLE_KM in t&&(this.ignoreDisableKm=t[_.IGNORE_DISABLE_KM]))},t}();(new k).log(),Promise.resolve(customElements.whenDefined(d.HUI_VIEW)).then((function(){window.KioskMode=new F}))}();