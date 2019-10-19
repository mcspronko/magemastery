(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{221:function(e,t,a){"use strict";a.r(t);a(42);var r=a(0),n=a.n(r),o=a(75),s=a(223),i=a.n(s),l=a(218),c=a(217),d=a(229),u=a(230),f=a.n(u),m=function(){var e=d.data;return n.a.createElement(f.a,{fluid:e.placeholderImage.childImageSharp.fluid})};a(233),a(234);a.d(t,"default",(function(){return p}));var p=function(e){var t,a;function r(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).state={email:"",showMessage:!1,messageClassName:""},t._handleChange=function(e){var a;t.setState(((a={})[""+e.target.name]=e.target.value,a))},t._handleSubmit=function(e){e.preventDefault(),console.log("submit",t.state);var a=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t);i()(t.state.email,t.state).then((function(e){var t=e.msg;if("success"!==e.result)throw t;a.setState({email:"",showMessage:!0,message:t,messageClassName:"text-center alert alert-success"})})).catch((function(e){a.setState({showMessage:!0,message:e,messageClassName:"text-center alert alert-warning"})}))},t}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return n.a.createElement(l.a,null,n.a.createElement(c.a,{title:"The ultimate learning resource for Magento 2 Developers"}),n.a.createElement("div",{className:"index-page"},n.a.createElement("div",{className:"main-banner jumbotron jumbotron-fluid mb-5 "},n.a.createElement("div",{className:"container text-center pt-5 pb-5"},n.a.createElement("h1",{className:"display-4 mb-4"},"Master Your Magento 2"),n.a.createElement("p",{className:"lead mb-5"},"Ultimate learning Magento 2 resource for PHP and JavaScript developers"),n.a.createElement(o.Link,{className:"btn btn-primary mt-5 pt-3 pb-3 pl-5 pr-5",to:"/courses",role:"button"},"Explore Courses"))),n.a.createElement("div",{className:"container mb-5 pt-5 pb-5"},n.a.createElement("h2",{className:"text-center mb-4"},"From Basic to Advanced"),n.a.createElement("p",{className:"lead text-center"},"Learn to code with our step-by-step video tutorials that take you from a junior to a professional Magento Developer. Real World code examples will give you the required skills for your next career move")),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"jumbotron choose-path"},n.a.createElement("h2",{className:"text-center mb-5"},"Choose Your Path"),n.a.createElement("p",{className:"lead text-center"},"The easy-to-navigate and follow video tutorials will drive you from the very basics to an advanced level of skills and knowledge of Magento 2"),n.a.createElement("div",{className:"container mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("h3",null,"Back End Developer"),n.a.createElement("p",null,"Gain a deep understanding of Magento 2 development concepts and experience in implementing and customizing Magento 2")),n.a.createElement("div",{className:"col"},n.a.createElement("h3",null,"Front End Developer"),n.a.createElement("p",null,"Upgrade your skills and knowledge of the Magento 2 JavaScript framework and its application and become a certified professional developer")))))),n.a.createElement("div",{className:"container text-center mt-5 mb-5 pt-5 pb-5"},n.a.createElement("h2",{className:"mb-4"},"Easy to Follow, Fast to Learn"),n.a.createElement("p",{className:"lead"},"Whether you want to become a frontend developer and build Magento 2 themes or a PHP backend developer, who brings integrations into e-commerce world")),n.a.createElement("div",{className:"container text-center mt-5 mb-5 pt-5 pb-5"},n.a.createElement("h2",{className:"mb-4"},"Meet Your Teacher"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col-lg-4"}),n.a.createElement("div",{className:"col-md-auto"},n.a.createElement("div",{className:"mx-auto",style:{maxWidth:"300px",marginBottom:"1.45rem"}},n.a.createElement(m,null)),n.a.createElement("h3",null,"Max Pronko"),n.a.createElement("div",{className:"about-teacher"},"Max is a developer and programming instructor passionate about making it easier to learn complex skills. He is a former Magento developer who has been involved into evolution of Magento platform before joining Mage Mastery in order to help developers progress along their professional paths.")),n.a.createElement("div",{className:"col col-lg-4"}))),n.a.createElement("div",{className:"jumbotron jumbotron-fluid mb-0"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"text-center"},n.a.createElement("h3",{className:"text-center"},"Subscribe to our mailing list"),n.a.createElement("p",{className:"lead"},"Sign up and don't miss our awesome Mage Mastery video tutorials"),n.a.createElement("div",{className:"mt-4"},this.state.showMessage&&n.a.createElement("div",{className:this.state.messageClassName,dangerouslySetInnerHTML:{__html:this.state.message}}),n.a.createElement("div",{className:"mx-auto form-container"},n.a.createElement("form",{onSubmit:this._handleSubmit},n.a.createElement("div",{className:"input-group mb-3 subscribe-input-group"},n.a.createElement("input",{type:"email",name:"email",onChange:this._handleChange,className:"form-control","aria-describedby":"button-addon2",placeholder:"Your email here...",value:this.state.email}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2",onClick:this._handleSubmit},"Subscribe")))))))))))},r}(n.a.Component)},223:function(e,t,a){"use strict";a(15),a(44),a(5),Object.defineProperty(t,"__esModule",{value:!0});var r,n=a(224),o=(r=n)&&r.__esModule?r:{default:r},s=a(228);var i=function(e){return new Promise((function(t,a){return(0,o.default)(e,{param:"c",timeout:3500},(function(e,r){e&&a(e),r&&t(r)}))}))},l=function(e){var t="";for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=a.substring(0,6)?a:a.toUpperCase();t=t.concat("&"+r+"="+e[a])}return t};t.default=function(e,t,a){var r=(0,s.validate)(e),n=encodeURIComponent(e);if(!r)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var o="https://pronkoconsulting.us20.list-manage.com/subscribe/post?u=4ba2bbbbdcd1feb5ab1d8752c&amp;id=b078df426e";arguments.length<3&&"string"==typeof t?o=t:"string"==typeof a&&(o=a),o=o.replace(/\/post/g,"/post-json");var c="&EMAIL="+n+l(t),d=""+o+c;return i(d)}},224:function(e,t,a){a(15),a(16),a(42);var r=a(225)("jsonp");e.exports=function(e,t,a){"function"==typeof t&&(a=t,t={});t||(t={});var s,i,l=t.prefix||"__jp",c=t.name||l+n++,d=t.param||"callback",u=null!=t.timeout?t.timeout:6e4,f=encodeURIComponent,m=document.getElementsByTagName("script")[0]||document.head;u&&(i=setTimeout((function(){p(),a&&a(new Error("Timeout"))}),u));function p(){s.parentNode&&s.parentNode.removeChild(s),window[c]=o,i&&clearTimeout(i)}return window[c]=function(e){r("jsonp got",e),p(),a&&a(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+d+"="+f(c)).replace("?&","?"),r('jsonp req "%s"',e),(s=document.createElement("script")).src=e,m.parentNode.insertBefore(s,m),function(){window[c]&&p()}};var n=0;function o(){}},225:function(e,t,a){(function(r){function n(){var e;try{e=t.storage.debug}catch(a){}return!e&&void 0!==r&&"env"in r&&(e={}.DEBUG),e}a(15),a(112),a(82),(t=e.exports=a(226)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var a=this.useColors;if(e[0]=(a?"%c":"")+this.namespace+(a?" %c":" ")+e[0]+(a?"%c ":" ")+"+"+t.humanize(this.diff),!a)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var n=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(n++,"%c"===e&&(o=n))})),e.splice(o,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(a){}},t.load=n,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(n())}).call(this,a(153))},226:function(e,t,a){var r;function n(e){function a(){if(a.enabled){var e=a,n=+new Date,o=n-(r||n);e.diff=o,e.prev=r,e.curr=n,r=n;for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var l=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,(function(a,r){if("%%"===a)return a;l++;var n=t.formatters[r];if("function"==typeof n){var o=s[l];a=n.call(e,o),s.splice(l,1),l--}return a})),t.formatArgs.call(e,s),(a.log||t.log||console.log.bind(console)).apply(e,s)}}return a.namespace=e,a.enabled=t.enabled(e),a.useColors=t.useColors(),a.color=function(e){var a,r=0;for(a in e)r=(r<<5)-r+e.charCodeAt(a),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(a),a}a(112),a(27),a(51),a(15),(t=e.exports=n.debug=n.default=n).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var a=("string"==typeof e?e:"").split(/[\s,]+/),r=a.length,n=0;n<r;n++)a[n]&&("-"===(e=a[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var a,r;for(a=0,r=t.skips.length;a<r;a++)if(t.skips[a].test(e))return!1;for(a=0,r=t.names.length;a<r;a++)if(t.names[a].test(e))return!0;return!1},t.humanize=a(227),t.names=[],t.skips=[],t.formatters={}},227:function(e,t){var a=1e3,r=60*a,n=60*r,o=24*n,s=365.25*o;function i(e,t,a){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+a:Math.ceil(e/t)+" "+a+"s"}e.exports=function(e,t){t=t||{};var l,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return i*s;case"days":case"day":case"d":return i*o;case"hours":case"hour":case"hrs":case"hr":case"h":return i*n;case"minutes":case"minute":case"mins":case"min":case"m":return i*r;case"seconds":case"second":case"secs":case"sec":case"s":return i*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===c&&!1===isNaN(e))return t.long?i(l=e,o,"day")||i(l,n,"hour")||i(l,r,"minute")||i(l,a,"second")||l+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=n)return Math.round(e/n)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=a)return Math.round(e/a)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},228:function(e,t,a){"use strict";a(85),a(27);var r=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!r.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},229:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,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","aspectRatio":1,"src":"/static/7f8e719580a46f08378feb6ba795f9e9/fdbb0/max-pronko.png","srcSet":"/static/7f8e719580a46f08378feb6ba795f9e9/e22c9/max-pronko.png 75w,\\n/static/7f8e719580a46f08378feb6ba795f9e9/d3809/max-pronko.png 150w,\\n/static/7f8e719580a46f08378feb6ba795f9e9/fdbb0/max-pronko.png 300w,\\n/static/7f8e719580a46f08378feb6ba795f9e9/b5207/max-pronko.png 450w,\\n/static/7f8e719580a46f08378feb6ba795f9e9/59139/max-pronko.png 600w,\\n/static/7f8e719580a46f08378feb6ba795f9e9/af144/max-pronko.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},230:function(e,t,a){"use strict";a(13),a(11),a(5),a(52),a(152),a(231);var r=a(22);t.__esModule=!0,t.default=void 0;var n,o=r(a(83)),s=r(a(84)),i=r(a(150)),l=r(a(151)),c=r(a(0)),d=r(a(1)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,o=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:o}),c.default.createElement("source",{media:n,srcSet:a,sizes:o}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,o=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(o?'sizes="'+o+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},M=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",i=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+c+s+i+a+r+t+o+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,o=c.default.createElement(L,(0,l.default)({src:t},n));return a.length>1?c.default.createElement("picture",null,r(a),o):o},L=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,o=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=(0,i.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},m,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))}));L.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var A=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)(a)),a.handleRef=a.handleRef.bind((0,o.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,o=void 0===n?{}:n,s=e.imgStyle,i=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,w=e.itemProp,N=e.loading,x=e.draggable,A=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,l.default)({opacity:A?1:0,transition:j?"opacity "+b+"ms":"none"},i),I="boolean"==typeof h?"lightgray":h,R={transitionDelay:b+"ms"},z=(0,l.default)({opacity:this.state.imgLoaded?0:1},j&&R,{},i,{},f),T={title:t,alt:this.state.isVisible?"":a,style:z,className:m};if(p){var O=p,V=O[0];return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),I&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&R)}),V.base64&&c.default.createElement(C,{src:V.base64,spreadProps:T,imageVariants:O,generateSources:S}),V.tracedSVG&&c.default.createElement(C,{src:V.tracedSVG,spreadProps:T,imageVariants:O,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,y(O),c.default.createElement(L,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:N,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:M((0,l.default)({alt:a,title:t,loading:N},V,{imageVariants:O}))}}))}if(g){var H=g,P=H[0],G=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},o);return"inherit"===o.display&&delete G.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},I&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:I,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},j&&R)}),P.base64&&c.default.createElement(C,{src:P.base64,spreadProps:T,imageVariants:H,generateSources:S}),P.tracedSVG&&c.default.createElement(C,{src:P.tracedSVG,spreadProps:T,imageVariants:H,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,y(H),c.default.createElement(L,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:N,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:M((0,l.default)({alt:a,title:t,loading:N},P,{imageVariants:H}))}}))}return null},t}(c.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),k=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});A.propTypes={resolutions:j,sizes:k,fixed:d.default.oneOfType([j,d.default.arrayOf(j)]),fluid:d.default.oneOfType([k,d.default.arrayOf(k)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var I=A;t.default=I},231:function(e,t,a){"use strict";a(232)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},232:function(e,t,a){var r=a(2),n=a(10),o=a(43),s=/"/g,i=function(e,t,a,r){var n=String(o(e)),i="<"+t;return""!==a&&(i+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),i+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(i),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-index-js-c64ccca79696717ba5bf.js.map