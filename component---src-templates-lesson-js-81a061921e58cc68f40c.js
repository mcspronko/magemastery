(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+vFG":function(e,a,t){"use strict";var n=t("TqRt");a.__esModule=!0,a.default=void 0;var r=n(t("pVnL")),l=n(t("8OQS")),s=n(t("q1tI")),c=t("Wbzz"),o=n(t("KHAo")),m=function(e){var a=e.to,t=e.asModal,n=e.state,m=(0,l.default)(e,["to","asModal","state"]);return s.default.createElement(o.default.Consumer,null,(function(e){e.modal;var l=e.closeTo;return s.default.createElement(c.Link,(0,r.default)({to:a,state:(0,r.default)({},n,{modal:t,noScroll:a===l})},m))}))};a.default=m},EDnX:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u})),t.d(a,"pageQuery",(function(){return f}));var n=t("q1tI"),r=t.n(n),l=t("Bl7J"),s=t("vrFN"),c=(t("IBFW"),t("Htbf")),o=t("v8IA"),m=t("IP2g"),i=t("8tEE"),d=t("wHSu");function u(e){var a=e.data,t=a.LessonQuery,n=a.LessonsQuery,u=t.frontmatter.title+" | "+t.frontmatter.course_title;return r.a.createElement(l.a,{cssCLass:"lesson"},r.a.createElement(s.a,{title:u}),r.a.createElement("div",{className:"courses-header pb-5 pt-5"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"mb-0"},t.frontmatter.course_title))),r.a.createElement("div",{className:"container-fluid mb-5 mt-0"},r.a.createElement("div",{className:"content-container pb-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 main"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})),r.a.createElement("div",{className:"col-md-4 right-part"},r.a.createElement("div",{className:"mt-2 p-2 lessons-container"},r.a.createElement("h4",null,"Lessons"),r.a.createElement("div",{className:"lessons-container__list"},r.a.createElement("ul",null,n.edges.map((function(e){var a,n,l,s=e.node.frontmatter.time,c=Math.floor(s/60),u=s-60*c,f=(a=c,n="0",l=2,(new Array(l+1).join(n)+a).slice(-l)+"m "+(u>0?u+"s":"")),v=e.node.frontmatter.path!==t.frontmatter.path,E="video"===e.node.frontmatter.timeline_icon?r.a.createElement(m.a,{icon:i.c,className:"fa-l icon-youtube color-hot-pink fa"}):r.a.createElement(m.a,{icon:d.a,className:"fa-l icon-file color-hot-pink fa"});return r.a.createElement("li",{key:e.node.id,className:"lesson-item p-1"},v?r.a.createElement("div",{className:"row lesson-name"},r.a.createElement("div",{className:"col-md-2"}," ",E),r.a.createElement("div",{className:"col-md-10"},r.a.createElement(o.Link,{to:e.node.frontmatter.path},e.node.frontmatter.title),r.a.createElement("div",{className:"timing"},f))):r.a.createElement("div",{className:"row lesson-name"},r.a.createElement("div",{className:"col-md-2"}," ",E),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("div",{className:""}," ",e.node.frontmatter.title),r.a.createElement("div",{className:"timing"},f))))}))))),r.a.createElement("div",{className:"sidebar mt-4"},r.a.createElement("div",{className:"sidebar-content p-3 mt-4"},r.a.createElement("div",{className:"row ml-1 lesson-resources"},r.a.createElement("span",{className:"material-icons mr-2 pt-1"},"cloud_download"),r.a.createElement("h4",null,"Lesson Resources")),""!==t.frontmatter.lesson_link?r.a.createElement("ul",{className:"pt-1"},r.a.createElement("li",null,r.a.createElement("a",{href:t.frontmatter.lesson_link,className:"download-code",target:"_blank",rel:"noopener noreferrer"},t.frontmatter.lesson_label))):"There are no resources for this lesson."),r.a.createElement("div",{className:"p-4 mt-3 newsletter-container"},r.a.createElement(c.a,null))))))),r.a.createElement("div",{className:"navbar lesson-nav"},r.a.createElement("div",{className:"col left"},t.frontmatter.order_number>1?r.a.createElement(o.Link,{to:t.frontmatter.prev,className:"btn btn-block text-right btn-left",role:"button","aria-pressed":"true"},r.a.createElement("div",{className:"button-label"},r.a.createElement("span",{className:"material-icons arrow-icon arrow-left"},"keyboard_arrow_left"),r.a.createElement("span",{className:"label-text"},"Previous Lesson"))):r.a.createElement(o.Link,{to:t.frontmatter.prev,className:"btn btn-block text-right btn-left",role:"button","aria-pressed":"true"},r.a.createElement("div",{className:"button-label"},r.a.createElement("span",{className:"material-icons arrow-icon arrow-left"},"keyboard_arrow_left"),r.a.createElement("span",{className:"label-text"},"Back to Course")))),r.a.createElement("div",{className:"col right"},""!==t.frontmatter.next?r.a.createElement(o.Link,{to:t.frontmatter.next,className:"btn btn-block btn-right text-left",role:"button","aria-pressed":"true"},r.a.createElement("div",{className:"button-label"},r.a.createElement("span",{className:"label-text"},"Next Lesson"),r.a.createElement("span",{className:"material-icons arrow-icon arrow-right"},"keyboard_arrow_right"))):r.a.createElement(o.Link,{to:"/subscribe",className:"btn btn-block btn-right text-left",role:"button","aria-pressed":"true",asModal:!0,state:{closeTo:t.frontmatter.path,noScroll:!0}},r.a.createElement("div",{className:"button-label"},r.a.createElement("span",{className:"label-text"},"Next Lesson"),r.a.createElement("span",{className:"material-icons arrow-icon arrow-right"},"keyboard_arrow_right"))))))}var f="173239307"},v8IA:function(e,a,t){"use strict";var n=t("TqRt");a.__esModule=!0;var r=n(t("KHAo"));a.ModalRoutingContext=r.default;var l=n(t("+vFG"));a.Link=l.default},wHSu:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n={prefix:"fas",iconName:"file-alt",icon:[384,512,[],"f15c","M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"]}}}]);
//# sourceMappingURL=component---src-templates-lesson-js-81a061921e58cc68f40c.js.map