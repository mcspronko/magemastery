(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+vFG":function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("pVnL")),s=n(a("8OQS")),o=n(a("q1tI")),c=a("Wbzz"),l=n(a("KHAo")),i=function(e){var t=e.to,a=e.asModal,n=e.state,i=(0,s.default)(e,["to","asModal","state"]);return o.default.createElement(l.default.Consumer,null,(function(e){e.modal;var s=e.closeTo;return o.default.createElement(c.Link,(0,r.default)({to:t,state:(0,r.default)({},n,{modal:a,noScroll:t===s})},i))}))};t.default=i},"8ujH":function(e,t,a){a("pIFo"),a("V+eJ"),a("f3/d");var n=a("GTTd")("jsonp");e.exports=function(e,t,a){"function"==typeof t&&(a=t,t={});t||(t={});var o,c,l=t.prefix||"__jp",i=t.name||l+r++,m=t.param||"callback",u=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;u&&(c=setTimeout((function(){p(),a&&a(new Error("Timeout"))}),u));function p(){o.parentNode&&o.parentNode.removeChild(o),window[i]=s,c&&clearTimeout(c)}return window[i]=function(e){n("jsonp got",e),p(),a&&a(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+m+"="+d(i)).replace("?&","?"),n('jsonp req "%s"',e),(o=document.createElement("script")).src=e,f.parentNode.insertBefore(o,f),function(){window[i]&&p()}};var r=0;function s(){}},EDnX:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),s=a("Bl7J"),o=a("vrFN"),c=(a("IBFW"),a("Htbf")),l=a("v8IA"),i=function(e){var t=e.prevLink,a=e.nextLink,n=e.prevLinkHome,s=e.currentPath;return r.a.createElement("div",{className:"navbar lesson-nav"},r.a.createElement("div",{className:"col left"},""!==t?r.a.createElement(l.Link,{to:t,className:"btn btn-block text-right btn-left",role:"button","aria-pressed":"true"},r.a.createElement("div",{className:"button-label"},r.a.createElement("span",{className:"material-icons arrow-icon arrow-left"},"keyboard_arrow_left"),r.a.createElement("span",{className:"label-text"},"Previous Lesson"))):r.a.createElement(l.Link,{to:n,className:"btn btn-block text-right btn-left",role:"button","aria-pressed":"true"},r.a.createElement("div",{className:"button-label"},r.a.createElement("span",{className:"material-icons arrow-icon arrow-left"},"keyboard_arrow_left"),r.a.createElement("span",{className:"label-text"},"Back to Course")))),r.a.createElement("div",{className:"col right"},""!==a?r.a.createElement(l.Link,{to:a,className:"btn btn-block btn-right text-left",role:"button","aria-pressed":"true"},r.a.createElement("div",{className:"button-label"},r.a.createElement("span",{className:"label-text"},"Next Lesson"),r.a.createElement("span",{className:"material-icons arrow-icon arrow-right"},"keyboard_arrow_right"))):r.a.createElement(l.Link,{to:"/subscribe",className:"btn btn-block btn-right text-left",role:"button","aria-pressed":"true",asModal:!0,state:{closeTo:s,noScroll:!0}},r.a.createElement("div",{className:"button-label"},r.a.createElement("span",{className:"label-text"},"Next Lesson"),r.a.createElement("span",{className:"material-icons arrow-icon arrow-right"},"keyboard_arrow_right")))))},m=a("IP2g"),u=a("8tEE"),d=a("wHSu"),f=function(e){var t=e.lessons,a=e.currentLesson;return r.a.createElement("div",{className:"lessons-container__list"},r.a.createElement("ul",null,t.edges.map((function(e){var t,n,s,o=e.node.frontmatter.time,c=Math.floor(o/60),i=o-60*c,f=(t=c,n="0",s=2,(new Array(s+1).join(n)+t).slice(-s)+"m "+(i>0?i+"s":"")),p=e.node.frontmatter.path!==a.frontmatter.path,v="video"===e.node.frontmatter.timeline_icon?r.a.createElement(m.a,{icon:u.c,className:"fa-l icon-youtube color-hot-pink fa"}):r.a.createElement(m.a,{icon:d.a,className:"fa-l icon-file color-hot-pink fa"});return r.a.createElement("li",{key:e.node.id,className:"lesson-item p-1"},p?r.a.createElement("div",{className:"row lesson-name"},r.a.createElement("div",{className:"col-md-2"}," ",v),r.a.createElement("div",{className:"col-md-10"},r.a.createElement(l.Link,{to:e.node.frontmatter.path},e.node.frontmatter.title),r.a.createElement("div",{className:"timing"},f))):r.a.createElement("div",{className:"row lesson-name"},r.a.createElement("div",{className:"col-md-2"}," ",v),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("div",{className:""}," ",e.node.frontmatter.title),r.a.createElement("div",{className:"timing"},f))))}))))};function p(e){var t=e.data,a=t.LessonQuery,n=t.LessonsQuery,l=t.CourseQuery,m=t.NextLessonQuery,u=t.PrevLessonQuery,d=a.frontmatter.title+" | "+l.frontmatter.title;return r.a.createElement(s.a,{cssCLass:"lesson"},r.a.createElement(o.a,{title:d}),r.a.createElement("div",{className:"courses-header pb-5 pt-5"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"mb-0"},l.frontmatter.title))),r.a.createElement("div",{className:"container-fluid mb-5 mt-0"},r.a.createElement("div",{className:"content-container pb-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 main"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}})),r.a.createElement("div",{className:"col-md-4 right-part"},r.a.createElement("div",{className:"mt-2 p-2 lessons-container"},r.a.createElement("h4",null,"Lessons"),r.a.createElement(f,{lessons:n,currentLesson:a})),r.a.createElement("div",{className:"sidebar mt-4"},r.a.createElement("div",{className:"sidebar-content p-3 mt-4"},r.a.createElement("div",{className:"row ml-1 lesson-resources"},r.a.createElement("span",{className:"material-icons mr-2 pt-1"},"cloud_download"),r.a.createElement("h4",null,"Lesson Resources")),""!==a.frontmatter.lesson_link?r.a.createElement("ul",{className:"pt-1"},r.a.createElement("li",null,r.a.createElement("a",{href:a.frontmatter.lesson_link,className:"download-code",target:"_blank",rel:"noopener noreferrer"},a.frontmatter.lesson_label))):"There are no resources for this lesson."),r.a.createElement("div",{className:"p-4 mt-3 newsletter-container"},r.a.createElement(c.a,null))))))),r.a.createElement(i,{prevLink:u?u.frontmatter.path:"",nextLink:m?m.frontmatter.path:"",prevLinkHome:l.frontmatter.path,currentPath:a.frontmatter.path}))}a.d(t,"default",(function(){return p})),a.d(t,"pageQuery",(function(){return v}));var v="2274527172"},G04T:function(e,t,a){"use strict";a("pIFo"),a("VRzm"),a("Btvt"),Object.defineProperty(t,"__esModule",{value:!0});var n,r=a("8ujH"),s=(n=r)&&n.__esModule?n:{default:n},o=a("H/qo");var c=function(e){return new Promise((function(t,a){return(0,s.default)(e,{param:"c",timeout:3500},(function(e,n){e&&a(e),n&&t(n)}))}))},l=function(e){var t="";for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=a.substring(0,6)?a:a.toUpperCase();t=t.concat("&"+n+"="+e[a])}return t};t.default=function(e,t,a){var n=(0,o.validate)(e),r=encodeURIComponent(e);if(!n)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var s="https://pronkoconsulting.us20.list-manage.com/subscribe/post?u=4ba2bbbbdcd1feb5ab1d8752c&amp;id=b078df426e";arguments.length<3&&"string"==typeof t?s=t:"string"==typeof a&&(s=a),s=s.replace(/\/post/g,"/post-json");var i="&EMAIL="+r+l(t),m=""+s+i;return c(m)}},GTTd:function(e,t,a){(function(n){function r(){var e;try{e=t.storage.debug}catch(a){}return!e&&void 0!==n&&"env"in n&&(e={}.DEBUG),e}a("pIFo"),a("Oyvg"),a("SRfc"),(t=e.exports=a("bRoh")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var a=this.useColors;if(e[0]=(a?"%c":"")+this.namespace+(a?" %c":" ")+e[0]+(a?"%c ":" ")+"+"+t.humanize(this.diff),!a)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var r=0,s=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(s=r))})),e.splice(s,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(a){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())}).call(this,a("8oxB"))},"H/qo":function(e,t,a){"use strict";a("dZ+Y"),a("KKXr");var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!n.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},Htbf:function(e,t,a){"use strict";a("f3/d");var n=a("q1tI"),r=a.n(n),s=a("G04T"),o=a.n(s);var c=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={email:"",showMessage:!1,messageClassName:""},t._handleChange=function(e){var a;t.setState(((a={})[""+e.target.name]=e.target.value,a))},t._handleSubmit=function(e){e.preventDefault();var a=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t);o()(t.state.email,t.state).then((function(e){var t=e.msg;if("success"!==e.result)throw t;a.setState({email:"",showMessage:!0,message:t,messageClassName:"subscription text-center alert alert-success"})})).catch((function(e){a.setState({showMessage:!0,message:e,messageClassName:"subscription text-center alert alert-warning"})}))},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",{className:"text-center"},"Subscribe to our mailing list"),r.a.createElement("p",{className:"lead"},"Sign up and don't miss our awesome Mage Mastery lessons and updates"),r.a.createElement("div",{className:"mt-4"},this.state.showMessage&&r.a.createElement("div",{className:this.state.messageClassName,dangerouslySetInnerHTML:{__html:this.state.message}}),r.a.createElement("div",{className:"mx-auto form-container"},r.a.createElement("form",{onSubmit:this._handleSubmit},r.a.createElement("div",{className:"input-group mb-3 subscribe-input-group"},r.a.createElement("input",{type:"email",name:"email",onChange:this._handleChange,className:"form-control","aria-describedby":"subscribe",placeholder:"Your email here...",value:this.state.email}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",id:"subscribe",onClick:this._handleSubmit},"Subscribe"))))))))},n}(r.a.Component);t.a=c},QXP7:function(e,t){var a=1e3,n=60*a,r=60*n,s=24*r,o=365.25*s;function c(e,t,a){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+a:Math.ceil(e/t)+" "+a+"s"}e.exports=function(e,t){t=t||{};var l,i=typeof e;if("string"===i&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var c=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*o;case"days":case"day":case"d":return c*s;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===i&&!1===isNaN(e))return t.long?c(l=e,s,"day")||c(l,r,"hour")||c(l,n,"minute")||c(l,a,"second")||l+" ms":function(e){if(e>=s)return Math.round(e/s)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=a)return Math.round(e/a)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},bRoh:function(e,t,a){var n;function r(e){function a(){if(a.enabled){var e=a,r=+new Date,s=r-(n||r);e.diff=s,e.prev=n,e.curr=r,n=r;for(var o=new Array(arguments.length),c=0;c<o.length;c++)o[c]=arguments[c];o[0]=t.coerce(o[0]),"string"!=typeof o[0]&&o.unshift("%O");var l=0;o[0]=o[0].replace(/%([a-zA-Z%])/g,(function(a,n){if("%%"===a)return a;l++;var r=t.formatters[n];if("function"==typeof r){var s=o[l];a=r.call(e,s),o.splice(l,1),l--}return a})),t.formatArgs.call(e,o),(a.log||t.log||console.log.bind(console)).apply(e,o)}}return a.namespace=e,a.enabled=t.enabled(e),a.useColors=t.useColors(),a.color=function(e){var a,n=0;for(a in e)n=(n<<5)-n+e.charCodeAt(a),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"==typeof t.init&&t.init(a),a}a("Oyvg"),a("KKXr"),a("2Spj"),a("pIFo"),(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var a=("string"==typeof e?e:"").split(/[\s,]+/),n=a.length,r=0;r<n;r++)a[r]&&("-"===(e=a[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var a,n;for(a=0,n=t.skips.length;a<n;a++)if(t.skips[a].test(e))return!1;for(a=0,n=t.names.length;a<n;a++)if(t.names[a].test(e))return!0;return!1},t.humanize=a("QXP7"),t.names=[],t.skips=[],t.formatters={}},v8IA:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0;var r=n(a("KHAo"));t.ModalRoutingContext=r.default;var s=n(a("+vFG"));t.Link=s.default},wHSu:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={prefix:"fas",iconName:"file-alt",icon:[384,512,[],"f15c","M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"]}}}]);
//# sourceMappingURL=component---src-templates-lesson-js-d890eb46a4176605d918.js.map