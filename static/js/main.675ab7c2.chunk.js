(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{22:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o.n(r),s=o(3),c=o.n(s),i=o(2),a=o(5),l=o(4);const d=Object(i.b)({key:"toDo",default:[],effects_UNSTABLE:[e=>{let{setSelf:t,onSet:o}=e;const r=sessionStorage.getItem("toDo");r&&t(JSON.parse(r)),o((e=>{sessionStorage.setItem("toDo",JSON.stringify(e))}))}]}),b=Object(i.b)({key:"categories",default:[],effects_UNSTABLE:[e=>{let{setSelf:t,onSet:o}=e;const r=sessionStorage.getItem("categories");r&&t(JSON.parse(r)),o((e=>{sessionStorage.setItem("categories",JSON.stringify(e))}))}]}),j=Object(i.b)({key:"category",default:"",effects_UNSTABLE:[e=>{let{setSelf:t,onSet:o}=e;const r=sessionStorage.getItem("category");r&&t(JSON.parse(r)),o((e=>{sessionStorage.setItem("category",JSON.stringify(e))}))}]}),u=Object(i.c)({key:"toDoSelector",get:e=>{let{get:t}=e;const o=t(d),r=t(j);return o.filter((e=>e.category===r))}});var h=o(1);var g=function(){const e=Object(i.e)(j),t=Object(i.f)(d),{register:o,handleSubmit:r,setValue:n}=Object(l.a)();return Object(h.jsxs)("form",{onSubmit:r((o=>{let{toDo:r}=o;""===e&&alert("\uce74\ud14c\uace0\ub9ac\ub97c \ub4f1\ub85d\ud574 \uc8fc\uc138\uc694."),t((t=>[{text:r,id:Date.now(),category:e},...t])),n("toDo","")})),children:[Object(h.jsx)("input",{...o("toDo",{required:"Please write a To Do"}),placeholder:"Write a to do"}),Object(h.jsx)("button",{children:"Add"})]})};var f=function(e){let{text:t,category:o,id:r}=e;const n=Object(i.f)(d),s=Object(i.e)(b),c=e=>{const{currentTarget:{name:o}}=e;n((e=>{const n=e.findIndex((e=>e.id===r)),s={text:t,id:r,category:o};return[...e.slice(0,n),s,...e.slice(n+1)]}))};return Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:t}),s.map((e=>o!==e&&Object(h.jsx)("button",{name:e,onClick:c,children:e},e))),Object(h.jsx)("button",{onClick:()=>{n((e=>{const t=e.findIndex((e=>e.id===r));return[...e.slice(0,t),...e.slice(t+1)]}))},children:"Delete"})]})};var O=function(){const[e,t]=Object(i.d)(b),o=Object(i.f)(j),{register:r,handleSubmit:n,setValue:s}=Object(l.a)();return Object(h.jsx)("form",{onSubmit:n((r=>{let{category:n}=r;0===e.length&&o(n),t((e=>e.includes(n)?e:[...e,n])),s("category","")})),children:Object(h.jsx)("input",{...r("category",{required:"Please write a Category"})})})};var m=function(){const e=Object(i.e)(u),t=Object(i.e)(b),[o,r]=Object(i.d)(j);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"To Dos"}),Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"CreateCategory"}),Object(h.jsx)(O,{}),t.length>0&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Categories"}),Object(h.jsx)("select",{onInput:e=>{r(e.currentTarget.value)},value:o,children:null===t||void 0===t?void 0:t.map((e=>Object(h.jsx)("option",{value:e,children:e},e)))}),Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"CreateToDo"}),Object(h.jsx)(g,{}),e&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"ToDos"}),null===e||void 0===e?void 0:e.map((e=>Object(h.jsx)(f,{...e},e.id)))]})]})]})};const x=a.b`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, menu, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    main, menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, main, menu, nav, section {
        display: block;
    }

    /* HTML5 hidden-attribute fix for newer browsers */
    *[hidden] {
        display: none;
    }

    body {
        line-height: 1;
    }

    menu, ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-weight: 300;
        font-family: 'Source Sans Pro', sans-serif;
        background-color: ${e=>e.theme.bgColor};
        color: ${e=>e.theme.textColor};
        line-height: 1.2;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;var p=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{}),Object(h.jsx)(m,{})]})};c.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(i.a,{children:Object(h.jsx)(a.a,{theme:{bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},children:Object(h.jsx)(p,{})})})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.675ab7c2.chunk.js.map