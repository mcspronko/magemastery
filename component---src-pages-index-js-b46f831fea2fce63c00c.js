(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{218:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));n(42);var a=n(0),r=n.n(a),o=n(220),s=n.n(o),c=n(216),i=n(215);n(226),n(227);var l=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={email:"",showMessage:!1,messageClassName:""},t._handleChange=function(e){var n,a;console.log(((n={})[""+e.target.name]=e.target.value,n)),t.setState(((a={})[""+e.target.name]=e.target.value,a))},t._handleSubmit=function(e){e.preventDefault(),console.log("submit",t.state);var n=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t);s()(t.state.email,t.state).then((function(e){var t=e.msg,a=e.result;if(console.log("msg",a+": "+t),"success"!==a)throw t;n.setState({email:"",showMessage:!0,message:t,messageClassName:"text-center alert alert-success"})})).catch((function(e){console.log("err",e),n.setState({showMessage:!0,message:e,messageClassName:"text-center alert alert-warning"})}))},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement(c.a,null,r.a.createElement(i.a,{title:"Home"}),r.a.createElement("div",{className:"jumbotron jumbotron-fluid mb-5"},r.a.createElement("div",{className:"container text-center pt-5 pb-5"},r.a.createElement("h1",{className:"display-4 mb-4"},"Become an expert Magento 2 Developer!"),r.a.createElement("p",{className:"lead"},"Video tutorials about Magento 2 for PHP and JavaScript developers "))),r.a.createElement("div",{className:"container mb-5 pt-5 pb-5"},r.a.createElement("h2",{className:"text-center mb-4"},"From Basic to Advanced"),r.a.createElement("p",{className:"lead text-center"},"Learn to code with our step-by-step video tutorials that take you from a junior to a professional Magento Developer. Real World code examples will give you required skills for your next career move")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h2",{className:"text-center mb-5"},"Choose Your Path"),r.a.createElement("p",{className:"lead text-center"},"The easy-to-navigate and follow video tutorials will drive you from the very basics to an advanced level of skills and knowledge of Magento 2"),r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"Back End Developer"),r.a.createElement("p",null,"Gain a deep understanding of Magento 2 development concepts and experience in implementing and customizing Magento 2")),r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"Front End Developer"),r.a.createElement("p",null,"Upgrade your skills and knowledge of the Magento 2 JavaScript framework and its application and become a certified professional developer")))))),r.a.createElement("div",{className:"container text-center mt-5 mb-5 pt-5 pb-5"},r.a.createElement("h2",{className:"mb-4"},"Easy to Follow, Fast to Learn"),r.a.createElement("p",null,"Whether you want to become a frontend developer and build Magento 2 themes or a PHP backend developer, who brings integrations into e-commerce world")),r.a.createElement("div",{className:"jumbotron jumbotron-fluid mb-0"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",{className:"text-center"},"Subscribe to our mailing list"),r.a.createElement("p",{className:"lead"},"Sign up and don't miss our awesome Mage Mastery video tutorials"),r.a.createElement("div",{className:"mt-4"},this.state.showMessage&&r.a.createElement("div",{className:this.state.messageClassName,dangerouslySetInnerHTML:{__html:this.state.message}}),r.a.createElement("div",{className:"mx-auto form-container"},r.a.createElement("form",{onSubmit:this._handleSubmit},r.a.createElement("div",{className:"input-group mb-3 subscribe-input-group"},r.a.createElement("input",{type:"email",name:"email",onChange:this._handleChange,className:"form-control","aria-describedby":"button-addon2",placeholder:"Your email here...",value:this.state.email}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2",onClick:this._handleSubmit},"Subscribe"))))))))))},a}(r.a.Component)},220:function(e,t,n){"use strict";n(15),n(43),n(5),Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(221),o=(a=r)&&a.__esModule?a:{default:a},s=n(225);var c=function(e){return new Promise((function(t,n){return(0,o.default)(e,{param:"c",timeout:3500},(function(e,a){e&&n(e),a&&t(a)}))}))},i=function(e){var t="";for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=n.substring(0,6)?n:n.toUpperCase();t=t.concat("&"+a+"="+e[n])}return t};t.default=function(e,t,n){var a=(0,s.validate)(e),r=encodeURIComponent(e);if(!a)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var o="https://pronkoconsulting.us20.list-manage.com/subscribe/post?u=4ba2bbbbdcd1feb5ab1d8752c&amp;id=b078df426e";arguments.length<3&&"string"==typeof t?o=t:"string"==typeof n&&(o=n),o=o.replace(/\/post/g,"/post-json");var l="&EMAIL="+r+i(t),u=""+o+l;return c(u)}},221:function(e,t,n){n(15),n(16),n(42);var a=n(222)("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var s,c,i=t.prefix||"__jp",l=t.name||i+r++,u=t.param||"callback",m=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,p=document.getElementsByTagName("script")[0]||document.head;m&&(c=setTimeout((function(){f(),n&&n(new Error("Timeout"))}),m));function f(){s.parentNode&&s.parentNode.removeChild(s),window[l]=o,c&&clearTimeout(c)}return window[l]=function(e){a("jsonp got",e),f(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+u+"="+d(l)).replace("?&","?"),a('jsonp req "%s"',e),(s=document.createElement("script")).src=e,p.parentNode.insertBefore(s,p),function(){window[l]&&f()}};var r=0;function o(){}},222:function(e,t,n){(function(a){function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&void 0!==a&&"env"in a&&(e={}.DEBUG),e}n(15),n(112),n(81),(t=e.exports=n(223)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var a="color: "+this.color;e.splice(1,0,a,"color: inherit");var r=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(o=r))})),e.splice(o,0,a)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())}).call(this,n(149))},223:function(e,t,n){var a;function r(e){function n(){if(n.enabled){var e=n,r=+new Date,o=r-(a||r);e.diff=o,e.prev=a,e.curr=r,a=r;for(var s=new Array(arguments.length),c=0;c<s.length;c++)s[c]=arguments[c];s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var i=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,(function(n,a){if("%%"===n)return n;i++;var r=t.formatters[a];if("function"==typeof r){var o=s[i];n=r.call(e,o),s.splice(i,1),i--}return n})),t.formatArgs.call(e,s),(n.log||t.log||console.log.bind(console)).apply(e,s)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,a=0;for(n in e)a=(a<<5)-a+e.charCodeAt(n),a|=0;return t.colors[Math.abs(a)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}n(112),n(27),n(51),n(15),(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),a=n.length,r=0;r<a;r++)n[r]&&("-"===(e=n[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,a;for(n=0,a=t.skips.length;n<a;n++)if(t.skips[n].test(e))return!1;for(n=0,a=t.names.length;n<a;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(224),t.names=[],t.skips=[],t.formatters={}},224:function(e,t){var n=1e3,a=60*n,r=60*a,o=24*r,s=365.25*o;function c(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var i,l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var c=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*s;case"days":case"day":case"d":return c*o;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*a;case"seconds":case"second":case"secs":case"sec":case"s":return c*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===l&&!1===isNaN(e))return t.long?c(i=e,o,"day")||c(i,r,"hour")||c(i,a,"minute")||c(i,n,"second")||i+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=a)return Math.round(e/a)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},225:function(e,t,n){"use strict";n(82),n(27);var a=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!a.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-b46f831fea2fce63c00c.js.map