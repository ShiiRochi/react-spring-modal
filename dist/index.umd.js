!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react-dom"),require("react-use/lib/useLockBodyScroll"),require("wicg-inert"),require("react"),require("react-spring"),require("@chbphone55/classnames")):"function"==typeof define&&define.amd?define(["exports","react-dom","react-use/lib/useLockBodyScroll","wicg-inert","react","react-spring","@chbphone55/classnames"],t):t(e.reactSpringModal={},e.reactDom,e.useLockBodyScroll,0,e.react,e.reactSpring,e.classNames)}(this,function(e,t,n,r,o,a,l){n=n&&n.hasOwnProperty("default")?n.default:n,l=l&&l.hasOwnProperty("default")?l.default:l;var i=globalThis.document?document.querySelector("#modal-root"):null;function c(e){var n=e.children,r=o.useMemo(function(){return globalThis.document?document.createElement("div"):null},[]);return o.useEffect(function(){return i&&r&&i.appendChild(r),function(){i&&r&&i.removeChild(r)}},[r]),r?t.createPortal(n,r):null}var s=o.forwardRef(function(e,t){var n=e.className,r=e.onClick,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["className","onClick"]),c=o.useCallback(function(e){t.current===e.target&&r(e)},[r,t]);return react(a.animated.div,Object.assign({},{ref:t,onClick:c,className:l("ModalBackdrop",n)},i))}),u=globalThis.document?document.getElementById("root"):null;function d(e){var t=e.isOpen,r=e.onRequestClose,l=e.children;n(t);var i=o.useRef(null),d=o.useRef(null),f=a.useTransition(t,null,{"--opacity":0,from:{"--opacity":0},enter:{"--opacity":.5},leave:{"--opacity":0},onRest:function(){if(d.current&&t){var e=d.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');e.length&&e[0].focus()}}});return o.useEffect(function(){function e(e){"Escape"===e.key&&r()}return window.addEventListener("keyup",e),function(){window.removeEventListener("keyup",e)}},[r]),o.useEffect(function(){t?(globalThis.document&&(i.current=document.activeElement),u&&u.setAttribute("inert","")):(u&&u.removeAttribute("inert"),setTimeout(function(){i.current&&i.current.focus()},0))},[t]),react(c,null,f.map(function(e){return e.item?react(s,{key:e.key,className:"BottomModal__backdrop",style:e.props,onClick:r,"aria-modal":"true",role:"dialog",ref:d},l):null}))}e.ModalPortal=c,e.ModalBackdrop=s,e.BaseModal=d,e.CenterModal=function(e){var t=e.isOpen,n=e.onRequestClose,r=e.className,o=e.modalTransition;void 0===o&&(o=function(e,t){return void 0===t&&(t={}),a.useTransition(e,null,Object.assign({},{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}},t))}(t));var i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["isOpen","onRequestClose","className","modalTransition"]);return react(d,{isOpen:t,onRequestClose:n},o.map(function(e){return e.item?react(a.animated.div,Object.assign({},{key:e.key,style:e.props,className:l("CenterModal shadow-lg",r)},i)):null}))},e.BottomModal=function(e){var t=e.children,n=e.isOpen,r=e.onRequestClose,o=e.className,i=e.modalTransition;void 0===i&&(i=a.useTransition(n,null,{from:{transform:"translateY(100%) translateX(-50%)"},enter:{transform:"translateY(0%) translateX(-50%)"},leave:{transform:"translateY(100%) translateX(-50%)"}}));var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["children","isOpen","onRequestClose","className","modalTransition"]);return react(d,{isOpen:n,onRequestClose:r},i.map(function(e){return e.item?react(a.animated.div,Object.assign({},{className:l("BottomModal shadow-lg",o),key:e.key,style:e.props},c),t):null}))}});
//# sourceMappingURL=index.umd.js.map