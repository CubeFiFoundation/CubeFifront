(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[16],{611:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/cubefi.5cbad3d5.svg"},612:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/metamaskIcon.634561fd.svg"},613:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/walletconnectIcon.eb7b2cc8.svg"},614:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c,n=a(0),l=["title","titleId"];function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},r.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},l=Object.keys(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function i(e,t){var a=e.title,i=e.titleId,o=s(e,l);return n.createElement("svg",r({width:9,height:5,viewBox:"0 0 9 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},o),a?n.createElement("title",{id:i},a):null,c||(c=n.createElement("path",{d:"M8 1L4.5 4L1 1",stroke:"currentColor",strokeLinecap:"round"})))}var o=n.forwardRef(i);a.p},615:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c,n=a(0),l=["title","titleId"];function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},r.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},l=Object.keys(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function i(e,t){var a=e.title,i=e.titleId,o=s(e,l);return n.createElement("svg",r({width:8,height:12,viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},o),a?n.createElement("title",{id:i},a):null,c||(c=n.createElement("path",{d:"M1 1L6 6L1 11",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round"})))}var o=n.forwardRef(i);a.p},672:function(e,t,a){},832:function(e,t,a){"use strict";a.r(t);var c,n=a(8),l=a(4),r=a(5),s=a(9),i=a(10),o=a(1),d=a.n(o),h=a(0),j=a.n(h),u=a(112),b=a(32),m=a.n(b),g=a(848),O=a(839),p=a(835),f=a(29),x=a(202),v=a(13),w=a(54),k=a(611),N=a(612),C=a(613),D=a(614),y=a(615),M=(a(672),a(14)),W=f.a.path,S=Object(u.b)("pool")(c=Object(u.c)(c=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).showWalletDlg=Object(n.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.props.pool.walleted){e.next=2;break}return e.abrupt("return");case 2:c.setState({walletDlg:!0});case 3:case"end":return e.stop()}}),e)}))),c.closeWalletDlg=function(){c.setState({walletDlg:!1})},c.showAccountDlg=function(){c.setState({accountDlg:!0})},c.closeAccountDlg=function(){c.setState({accountDlg:!1})},c.openMenuDrawer=function(){c.setState({menuDrawer:!0})},c.closeMenuDrawer=function(){c.setState({menuDrawer:!1})},c.onMetaMaskClick=function(){c.closeWalletDlg(),c.props.pool.unlockMetaMaskWallet()},c.onWalletConnectClick=function(){c.closeWalletDlg(),c.props.pool.unlockWalletConnect()},c.onSwitchChainClick=function(){Object(w.e)()},c.onChangeClick=function(){c.closeAccountDlg(),Object(w.b)()?c.props.pool.unlockWalletConnect():c.props.pool.unlockMetaMaskWallet()},c.onDisconnectClick=function(){c.props.pool.disconnectWallet()},c.setLanguage=function(e){c.props.pool.setLanguage(e),window.location.reload()},c.msgRef=j.a.createRef(),c.state={menuDrawer:!1,walletDlg:!1,accountDlg:!1},c}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.pool.setMsgRef(this.msgRef)}},{key:"render",value:function(){var e=this,t=this.props.pool,a=Object(M.jsx)("div",{className:"header-lang",children:Object(M.jsxs)("div",{className:"header-lang-wrapper",children:[Object(M.jsxs)("div",{className:"header-lang-selector",children:[m.a.get(t.lang)," ",Object(M.jsx)(D.a,{})]}),Object(M.jsx)("div",{className:"header-lang-hidden-wrapper",children:Object(M.jsx)("div",{className:"header-lang-hidden",children:t.supportedLocales.map((function(a,c){return Object(M.jsx)("div",{className:"header-lang-selector".concat(a===t.lang?" active":""),onClick:function(){return e.setLanguage(a)},children:m.a.get(a)},"".concat(a).concat(c))}))})})]})}),c=Object(M.jsx)("div",{className:"header-wallet-btn",children:t.walleted?Object(M.jsx)(M.Fragment,{children:t.wrongNetwork?Object(M.jsx)(x.b,{error:!0,onClick:this.showAccountDlg,children:m.a.get("menu.wrongNetwork")}):Object(M.jsx)("div",{className:"pancake-border header-wallet-addr",onClick:this.showAccountDlg,children:Object(M.jsx)("div",{className:"header-wallet-addr-wrapper",onClick:this.showAccountDlg,children:Object(v.c)(t.address)})})}):Object(M.jsx)(x.b,{onClick:this.showWalletDlg,children:m.a.get("menu.connect")})}),n=Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("a",{className:"home"===t.urlHash?"active":"",href:"#".concat(W.home),children:Object(M.jsx)("div",{className:"menu-text",children:m.a.get("menu.home")})}),Object(M.jsx)("a",{className:"pool"===t.urlHash?"active":"",href:"#".concat(W.pool),children:Object(M.jsx)("div",{className:"menu-text",children:m.a.get("menu.pool")})}),Object(M.jsx)("a",{className:"swap"===t.urlHash?"active":"",href:"#".concat(W.swap),children:Object(M.jsx)("div",{className:"menu-text",children:m.a.get("menu.swap")})}),Object(M.jsx)("a",{className:"liquidity"===t.urlHash?"active":"",href:"#".concat(W.liquidity),children:Object(M.jsx)("div",{className:"menu-text",children:m.a.get("menu.liquidity")})}),Object(M.jsx)("a",{className:"bridge"===t.urlHash?"active":"",href:"#".concat(W.bridge),children:Object(M.jsx)("div",{className:"menu-text",children:m.a.get("menu.bridge")})}),Object(M.jsx)("a",{className:"iso"===t.urlHash?"active":"",href:"#".concat(W.iso),children:Object(M.jsx)("div",{className:"menu-text",children:m.a.get("menu.iso")})}),Object(M.jsx)("a",{className:"airdrop"===t.urlHash?"active":"",href:"#".concat(W.airdrop),children:Object(M.jsx)("div",{className:"menu-text",children:m.a.get("menu.airdrop")})}),Object(M.jsx)("a",{href:f.a.docs,target:"_cubefidoc",children:Object(M.jsx)("div",{className:"menu-text",children:m.a.get("menu.docs")})})]}),l=Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("div",{children:c}),Object(M.jsx)("div",{children:a})]});return Object(M.jsx)("div",{id:"header-primary",children:Object(M.jsxs)(x.f,{children:[Object(M.jsxs)("div",{className:"header-menu",children:[Object(M.jsx)("div",{className:"header-logo",children:Object(M.jsx)("img",{className:"header-img",src:k.default,alt:""})}),t.isPhone?Object(M.jsxs)("div",{className:"header-flex",children:[Object(M.jsx)("div",{}),Object(M.jsx)("div",{className:"header-menu-icon",children:Object(M.jsx)(g.a,{onClick:this.openMenuDrawer})})]}):Object(M.jsxs)("div",{className:"header-flex",children:[Object(M.jsx)("div",{className:"header-link",children:n}),Object(M.jsx)("div",{className:"header-link",children:l})]})]}),Object(M.jsx)(O.a,{closable:!1,getContainer:!1,placement:"right",onClose:this.closeMenuDrawer,visible:this.state.menuDrawer,children:Object(M.jsxs)("div",{className:"header-menu-drawer",children:[n,c,a]})}),Object(M.jsxs)(x.i,{title:m.a.get("menu.chooseWallet"),visible:this.state.walletDlg,footer:null,onCancel:this.closeWalletDlg,min:!0,children:[Object(M.jsx)("div",{className:"pancake-border header-wallet-button",onClick:this.onMetaMaskClick,children:Object(M.jsxs)("div",{className:"header-wallet-button-wrapper",children:[Object(M.jsxs)("div",{children:[Object(M.jsx)("img",{src:N.default,alt:""}),m.a.get("menu.metaMask")]}),Object(M.jsx)(y.a,{})]})}),Object(M.jsx)("div",{className:"pancake-border header-wallet-button",onClick:this.onWalletConnectClick,children:Object(M.jsxs)("div",{className:"header-wallet-button-wrapper",children:[Object(M.jsxs)("div",{children:[Object(M.jsx)("img",{src:C.default,alt:""}),m.a.get("menu.walletConnect")]}),Object(M.jsx)(y.a,{})]})}),Object(M.jsxs)("div",{className:"header-wallet-link",children:[Object(M.jsx)("div",{className:"header-wallet-link-learn",children:m.a.get("menu.learnTip",{chain:f.a.chain.name})}),Object(M.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:f.a.learnWallet,children:m.a.get("menu.learnWallet")})]})]}),Object(M.jsxs)(x.i,{title:m.a.get("menu.account"),visible:this.state.accountDlg,footer:null,onCancel:this.closeAccountDlg,min:!0,children:[Object(M.jsxs)("div",{className:"header-account-address-wrapper",children:[Object(M.jsx)("div",{className:"header-account-address",children:t.wrongNetwork?Object(M.jsx)("div",{children:m.a.get("menu.wrongNetwork")}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("div",{children:Object(v.c)(t.address,10,10)}),Object(M.jsx)(p.a.Paragraph,{copyable:{text:t.address}})]})}),Object(M.jsx)("div",{className:"pancake-min-button",onClick:this.onDisconnectClick,children:m.a.get("menu.disconnect")})]}),Object(M.jsx)("div",{className:"pancake-border header-wallet-button",onClick:this.onChangeClick,children:Object(M.jsxs)("div",{className:"header-wallet-button-wrapper",children:[Object(w.b)()?Object(M.jsxs)("div",{children:[Object(M.jsx)("img",{src:C.default,alt:""}),m.a.get("menu.walletConnect")]}):Object(M.jsxs)("div",{children:[Object(M.jsx)("img",{src:N.default,alt:""}),m.a.get("menu.metaMask")]}),Object(M.jsxs)("div",{children:[m.a.get("menu.change"),Object(M.jsx)(y.a,{})]})]})}),Object(M.jsxs)("div",{className:"header-wallet-link",children:[t.wrongNetwork?Object(M.jsx)("div",{className:"header-wallet-link-wrong",onClick:this.onSwitchChainClick,children:m.a.get("menu.switch",{chain:f.a.chain.name})}):Object(M.jsx)(M.Fragment,{}),Object(M.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(f.a.chain.scan,"/address/").concat(t.address),children:m.a.get("menu.view")})]})]}),Object(M.jsx)(x.h,{ref:this.msgRef})]})})}}]),a}(j.a.Component))||c)||c;t.default=S}}]);