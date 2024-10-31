import{r as h}from"./index.b2a7ed32.js";var p={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=h,w=Symbol.for("react.element"),u=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,f=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function v(c,i,a){var r,e={},l=null,d=null;a!==void 0&&(l=""+a),i.key!==void 0&&(l=""+i.key),i.ref!==void 0&&(d=i.ref);for(r in i)j.call(i,r)&&!y.hasOwnProperty(r)&&(e[r]=i[r]);if(c&&c.defaultProps)for(r in i=c.defaultProps,i)e[r]===void 0&&(e[r]=i[r]);return{$$typeof:w,type:c,key:l,ref:d,props:e,_owner:f.current}}n.Fragment=u;n.jsx=v;n.jsxs=v;p.exports=n;var t=p.exports;const o=({image:c,video:i,title:a,description:r,technologies:e,url:l,urlGit:d})=>{const s=h.useRef(null),x=()=>{s.current&&s.current.play()},m=()=>{s.current&&(s.current.pause(),s.current.currentTime=0)};return t.jsxs("div",{className:"group/card bg-primary-5 ring-primary-6 hover:ring-primary-7 hover:bg-primary-3 ring-2 rounded-lg shadow transition-all duration-300 flex flex-col justify-between overflow-hidden",onMouseEnter:x,onMouseLeave:m,children:[t.jsxs("div",{className:"relative w-full",children:[t.jsxs("div",{className:"relative w-full overflow-hidden",children:[t.jsx("video",{ref:s,loop:!0,muted:!0,className:"z-[1] absolute top-0 left-0 w-full h-full object-cover","data-src":i,children:t.jsx("source",{"data-src":i,type:"video/mp4"})}),t.jsxs("picture",{className:"z-[2] relative rounded-t-lg w-full transition-all duration-300 group-hover/card:scale-125 opacity-100 group-hover/card:opacity-0",children:[t.jsx("source",{srcSet:c+".webp",type:"image/webp"}),t.jsx("source",{srcSet:c+".png",type:"image/png"}),t.jsx("img",{className:"z-[2] relative rounded-t-lg w-full transition-all duration-300 group-hover/card:scale-125 opacity-100 group-hover/card:opacity-0",src:c+".webp",alt:a+" - "+r,width:"1",height:"1"})]})]}),t.jsxs("div",{className:"px-5 pt-5 pb-2",children:[t.jsx("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-white",children:a}),t.jsx("p",{className:"mb-3 font-normal text-white opacity-50 group-hover/card:opacity-80 transition-all duration-300",children:r})]})]}),t.jsxs("div",{className:"flex flex-row justify-between items-center",children:[t.jsxs("div",{className:"flex gap-2 px-5 py-3",children:[e.includes("html")?t.jsx("div",{className:"fill-white opacity-50 group-hover/card:opacity-80 transition-all duration-300","data-tooltip-target":"tooltip-html",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:t.jsxs("g",{fill:"none",children:[t.jsxs("g",{fill:"white",clipPath:"url(#a)",children:[t.jsx("path",{d:"M5.08 0h1.082v1.069h.99V0h1.082v3.236H7.152V2.153h-.99v1.083H5.081V0Zm4.576 1.073h-.952V0h2.987v1.073h-.953v2.163H9.656V1.073ZM12.165 0h1.128l.694 1.137L14.68 0h1.128v3.236h-1.077V1.632l-.744 1.151h-.019l-.745-1.15v1.603h-1.058V0Zm4.181 0h1.083v2.167h1.52v1.07h-2.603V0Z"}),t.jsx("path",{fillRule:"evenodd",d:"M5.046 22.072 3 4.717h18L18.953 22.07 11.99 24l-6.944-1.928Zm4.137-9.5-.194-2.18h8.145l.19-2.128H6.664l.574 6.437h7.377l-.247 2.76-2.374.642h-.002l-2.37-.64-.152-1.697H7.332l.298 3.342 4.36 1.21 4.367-1.21.532-5.964.052-.571H9.183Z",clipRule:"evenodd"})]}),t.jsx("defs",{children:t.jsx("clipPath",{id:"a",children:t.jsx("path",{fill:"white",d:"M0 0h24v24H0z"})})})]})})}):"",e.includes("css")?t.jsx("div",{className:"fill-white opacity-50 group-hover/card:opacity-80 transition-all duration-300","data-tooltip-target":"tooltip-css",children:t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[t.jsx("path",{fill:"white",d:"M7.502 0h2.578v1.078h-1.5v1.078h1.5v1.078H7.502V0Zm3.093 0h2.579v.938h-1.5v.187h1.5v2.156h-2.579v-.984h1.5v-.188h-1.5V0Zm3.095 0h2.577v.938h-1.5v.187h1.5v2.156H13.69v-.984h1.5v-.188h-1.5V0Z"}),t.jsx("path",{fill:"white",fillRule:"evenodd",d:"m11.991 24-6.944-1.928L3 4.717h18L18.954 22.07 11.991 24ZM7.047 12.573l.191 2.128h7.377l-.247 2.76-2.374.642h-.002l-2.37-.64-.152-1.697H7.333l.298 3.342 4.36 1.21 4.367-1.21.532-5.964.052-.571.384-4.309H6.664l.194 2.129h8.136l-.194 2.18H7.047Z",clipRule:"evenodd"})]})}):"",e.includes("javascript")?t.jsx("div",{className:"fill-white opacity-50 group-hover/card:opacity-80 transition-all duration-300","data-tooltip-target":"tooltip-javascript",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 32 32",children:t.jsx("path",{d:"M0 0h32v32H0zm29.38 24.37c-.234-1.464-1.188-2.688-4.005-3.833-.979-.458-2.073-.781-2.396-1.521-.12-.438-.141-.677-.063-.938.203-.865 1.219-1.12 2.021-.88.521.161 1 .557 1.302 1.198 1.38-.901 1.38-.901 2.339-1.5-.359-.557-.536-.802-.781-1.036-.839-.943-1.958-1.422-3.776-1.38l-.943.12c-.901.219-1.76.698-2.281 1.339-1.516 1.719-1.078 4.719.76 5.964 1.818 1.359 4.479 1.656 4.823 2.938.318 1.563-1.161 2.063-2.625 1.88-1.078-.24-1.677-.781-2.339-1.781l-2.438 1.401c.276.641.599.917 1.078 1.479 2.318 2.339 8.12 2.219 9.161-1.339.036-.12.318-.943.099-2.198zm-11.979-9.662h-2.995c0 2.583-.016 5.151-.016 7.74 0 1.641.083 3.151-.182 3.615-.443.917-1.573.802-2.089.641-.526-.26-.797-.62-1.104-1.141-.089-.141-.151-.26-.172-.26l-2.432 1.5c.406.839 1 1.563 1.766 2.021 1.141.682 2.672.901 4.276.542 1.042-.302 1.943-.922 2.411-1.88.682-1.24.536-2.76.531-4.464.016-2.74 0-5.479 0-8.24z"})})}):"",e.includes("sass")?t.jsx("div",{className:"fill-white opacity-50 group-hover/card:opacity-80 transition-all duration-300","data-tooltip-target":"tooltip-sass",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2m-2 13.33c.16.54.14 1.04 0 1.5 0 .05-.04.1-.06.17-.02 0-.04.07-.07.12-.11.24-.27.47-.46.67-.58.64-1.41.88-1.74.68-.38-.22-.17-1.12.49-1.83.72-.76 1.76-1.26 1.76-1.26l.08-.05m8.27-9.05c-.45-1.78-3.4-2.36-6.18-1.37-1.66.59-3.46 1.51-4.75 2.72-1.53 1.44-1.78 2.69-1.68 3.21.34 1.84 2.88 3.05 3.92 3.94v.01c-.3.15-2.54 1.28-3.08 2.44-.54 1.22.1 2.1.5 2.22 1.34.36 2.69-.29 3.41-1.38.7-1.04.65-2.39.34-3.07.42-.1.91-.15 1.53-.08 1.76.21 2.1 1.3 2.03 1.76-.06.46-.43.71-.55.79-.12.07-.16.1-.15.16.01.08.07.08.17.06.15-.03.93-.37.96-1.22.04-1.08-.99-2.28-2.81-2.25-.75.02-1.22.09-1.56.22l-.08-.09c-1.13-1.2-3.21-2.05-3.12-3.67.03-.59.23-2.13 4-4.01 3.08-1.54 5.55-1.12 5.98-.17.61 1.33-1.32 3.82-4.52 4.18-1.22.14-1.87-.34-2.03-.51-.17-.17-.19-.2-.25-.17-.11.07-.04.23 0 .33.09.25.49.67 1.15.91.59.19 2.03.3 3.76-.37 1.94-.75 3.46-2.84 3.01-4.59Z"})})}):"",e.includes("react")?t.jsx("div",{className:"fill-white opacity-50 group-hover/card:opacity-80 transition-all duration-300","data-tooltip-target":"tooltip-react",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85c-1.03 0-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03c.6 0 1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68c0 1.69-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68c0-1.69 1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26c0-.73-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26c0 .73 1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9Z"})})}):"",e.includes("nextjs")?t.jsx("div",{className:"fill-white opacity-50 group-hover/card:opacity-80 transition-all duration-300","data-tooltip-target":"tooltip-nextjs",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5h.5Zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15v-1ZM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5h-1ZM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0v1Zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1V0ZM5 12V4.5H4V12h1Zm-.905-7.207l6.5 9l.81-.586l-6.5-9l-.81.586ZM10 4v6h1V4h-1Z"})})}):"",e.includes("astro")?t.jsx("div",{className:"fill-white opacity-50 group-hover/card:opacity-80 transition-all duration-300","data-tooltip-target":"tooltip-astro",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M16.074 16.86c-.72.616-2.157 1.035-3.812 1.035c-2.032 0-3.735-.632-4.187-1.483c-.161.488-.198 1.046-.198 1.402c0 0-.106 1.75 1.111 2.968c0-.632.513-1.145 1.145-1.145c1.083 0 1.082.945 1.081 1.712v.069c0 1.164.711 2.161 1.723 2.582a2.347 2.347 0 0 1-.236-1.029c0-1.11.652-1.523 1.41-2.003c.602-.383 1.272-.807 1.733-1.66a3.129 3.129 0 0 0 .378-1.494a3.14 3.14 0 0 0-.148-.954zM15.551.6c.196.244.296.572.496 1.229l4.368 14.347a18.18 18.18 0 0 0-5.222-1.768L12.35 4.8a.37.37 0 0 0-.71.002l-2.81 9.603a18.175 18.175 0 0 0-5.245 1.771L7.974 1.827c.2-.656.3-.984.497-1.227a1.613 1.613 0 0 1 .654-.484C9.415 0 9.757 0 10.443 0h3.135c.686 0 1.03 0 1.32.117A1.614 1.614 0 0 1 15.55.6z"})})}):"",e.includes("typescript")?t.jsx("div",{className:"fill-white opacity-50 group-hover/card:opacity-80 transition-all duration-300","data-tooltip-target":"tooltip-typescript",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:t.jsxs("g",{children:[t.jsx("g",{clipPath:"url(#akarIconsTypescriptFill0)",children:t.jsx("path",{d:"M23.429 0H.57A.571.571 0 0 0 0 .571V23.43a.57.57 0 0 0 .571.571H23.43a.571.571 0 0 0 .571-.571V.57a.571.571 0 0 0-.572-.57Zm-9.143 12.826h-2.857v8.888H9.143v-8.888H6.286v-1.969h8v1.969Zm.64 8.38v-2.375s1.298.978 2.855.978s1.497-1.018 1.497-1.158c0-1.477-4.412-1.477-4.412-4.751c0-4.452 6.429-2.695 6.429-2.695l-.08 2.116s-1.078-.719-2.296-.719c-1.218 0-1.657.58-1.657 1.198c0 1.597 4.452 1.438 4.452 4.652c0 4.95-6.788 2.755-6.788 2.755Z"})}),t.jsx("defs",{children:t.jsx("clipPath",{id:"akarIconsTypescriptFill0",children:t.jsx("path",{fill:"#fff",d:"M0 0h24v24H0z"})})})]})})}):"",e.includes("php")?t.jsx("div",{className:"fill-white opacity-50 group-hover/card:opacity-80 transition-all duration-300","data-tooltip-target":"tooltip-php",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M170.322 349.808c-2.4-15.66-9-28.38-25.02-34.531c-6.27-2.4-11.7-6.78-17.88-9.54c-7.02-3.15-14.16-6.15-21.57-8.1c-5.61-1.5-10.83 1.02-14.16 5.94c-3.15 4.62-.87 8.97 1.77 12.84c2.97 4.35 6.27 8.49 9.6 12.57c5.52 6.78 11.37 13.29 16.74 20.161c5.13 6.57 9.51 13.86 8.76 22.56c-1.65 19.08-10.29 34.891-24.21 47.76c-1.53 1.38-4.23 2.37-6.21 2.19c-8.88-.96-16.95-4.32-23.46-10.53c-7.47-7.11-6.33-15.48 2.61-20.67c2.13-1.23 4.35-2.37 6.3-3.87c5.46-4.11 7.29-11.13 4.32-17.22c-1.41-2.94-3-6.12-5.34-8.25c-11.43-10.41-22.651-21.151-34.891-30.63C18.01 307.447 2.771 276.968.43 240.067c-2.64-40.981 6.87-79.231 28.5-114.242c8.19-13.29 17.73-25.951 32.37-32.52c9.96-4.47 20.88-6.99 31.531-9.78c29.311-7.71 58.89-13.5 89.401-8.34c26.28 4.41 45.511 17.94 54.331 43.77c5.79 16.89 7.17 34.35 5.37 52.231c-3.54 35.131-29.49 66.541-63.331 75.841c-14.67 4.02-22.68 1.77-31.5-10.44c-6.33-8.79-11.58-18.36-17.25-27.631c-.84-1.38-1.44-2.97-2.16-4.44c-.69-1.47-1.44-2.88-2.16-4.35c2.13 15.24 5.67 29.911 13.98 42.99c4.5 7.11 10.5 12.36 19.29 13.14c32.34 2.91 59.641-7.71 79.021-33.721c21.69-29.101 26.461-62.581 20.19-97.831c-1.23-6.96-3.3-13.77-4.77-20.7c-.99-4.47.78-7.77 5.19-9.33c2.04-.69 4.14-1.26 6.18-1.68c26.461-5.7 53.221-7.59 80.191-4.86c30.601 3.06 59.551 11.46 85.441 28.471c40.531 26.67 65.641 64.621 79.291 110.522c1.98 6.66 2.28 13.95 2.46 20.971c.12 4.68-2.88 5.91-6.45 2.97c-3.93-3.21-7.53-6.87-10.92-10.65c-3.15-3.57-5.67-7.65-8.73-11.4c-2.37-2.94-4.44-2.49-5.58 1.17c-.72 2.22-1.35 4.41-1.98 6.63c-7.08 25.26-18.24 48.3-36.33 67.711c-2.52 2.73-4.77 6.78-5.07 10.38c-.78 9.96-1.35 20.13-.39 30.06c1.98 21.331 5.07 42.57 7.47 63.871c1.35 12.03-2.52 19.11-13.83 23.281c-7.95 2.91-16.47 5.04-24.87 5.64c-13.38.93-26.88.27-40.32.27c-.36-15 .93-29.731-13.17-37.771c2.73-11.13 5.88-21.69 7.77-32.49c1.56-8.97.24-17.79-6.06-25.14c-5.91-6.93-13.32-8.82-20.101-4.86c-20.43 11.91-41.671 11.97-63.301 4.17c-9.93-3.6-16.86-1.56-22.351 7.5c-5.91 9.75-8.4 20.7-7.74 31.771c.84 13.95 3.27 27.75 5.13 41.64c1.02 7.77.15 9.78-7.56 11.76c-17.13 4.35-34.56 4.83-52.081 3.42c-.93-.09-1.86-.48-2.46-.63c-.87-14.55.66-29.671-16.68-37.411c7.68-16.29 6.63-33.18 3.99-50.07l-.06-.15zm-103.561-57.09c2.55-2.4 4.59-6.15 5.31-9.6c1.8-8.64-4.68-20.22-12.18-23.43c-3.99-1.74-7.47-1.11-10.29 2.07c-6.87 7.77-13.65 15.63-20.401 23.521c-1.14 1.35-2.16 2.94-2.97 4.53c-2.7 5.19-1.11 8.97 4.65 10.38c3.48.87 7.08 1.05 10.65 1.56c9.3-.9 18.3-2.46 25.23-9v-.03zm.78-86.371c-.03-6.18-5.19-11.34-11.28-11.37c-6.27-.03-11.67 5.58-11.46 11.76c.27 6.21 5.43 11.19 11.61 11.07c6.24-.09 11.22-5.19 11.16-11.43l-.03-.03z"})})}):"",e.includes("tailwind")?t.jsx("div",{className:"fill-white opacity-50 group-hover/card:opacity-80 transition-all duration-300","data-tooltip-target":"tooltip-tailwind",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12Z"})})}):"",e.includes("bootstrap")?t.jsx("div",{className:"fill-white opacity-50 group-hover/card:opacity-80 transition-all duration-300","data-tooltip-target":"tooltip-bootstrap",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M5.423 3.038c-1.284 0-2.233 1.124-2.19 2.342c.04 1.171-.013 2.687-.395 3.924c-.383 1.24-1.03 2.026-2.088 2.127v1.138c1.058.101 1.705.887 2.088 2.127c.382 1.236.435 2.753.394 3.923c-.042 1.219.907 2.343 2.192 2.343h13.154c1.284 0 2.234-1.124 2.192-2.343c-.041-1.17.012-2.687.393-3.923c.384-1.24 1.03-2.026 2.087-2.127v-1.138c-1.058-.101-1.703-.887-2.087-2.127c-.381-1.236-.434-2.753-.393-3.924c.042-1.218-.908-2.342-2.192-2.342H5.423Zm10.581 11.033c0 1.678-1.251 2.696-3.328 2.696H9.14a.381.381 0 0 1-.382-.381V7.614a.381.381 0 0 1 .382-.381h3.515c1.732 0 2.869.938 2.869 2.379c0 1.01-.765 1.916-1.739 2.074v.053c1.326.145 2.22 1.064 2.22 2.332Zm-3.714-5.63h-2.016v2.848h1.698c1.313 0 2.036-.528 2.036-1.473c0-.885-.622-1.374-1.718-1.374Zm-2.016 3.978v3.139h2.09c1.367 0 2.09-.549 2.09-1.58c0-1.03-.743-1.559-2.178-1.559h-2.002Z"})})}):"",e.includes("hotjar")?t.jsx("div",{className:"fill-white opacity-50 group-hover/card:opacity-80 transition-all duration-300","data-tooltip-target":"tooltip-hotjar",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M27.931 10.094c-4.669-8.281-18.362-10.094-18.362-10.094s6.319 6.9-1.756 12.356c-5.106 3.444-7.125 7.919-4.938 12.806 1.675 3.744 5.219 5.269 9.038 5.837-1.825-3.444-0.413-7.65-0.256-8.1 3.569 5.4 10.313 0 6.925-5.869 4.438 0.962 5.1 8.663 1.694 13.469 5.031-1.581 8.381-5.556 9.3-9.1 0.969-3.706 0.231-7.994-1.644-11.306z"})})}):"",e.includes("contentful")?t.jsx("div",{className:"fill-white opacity-50 group-hover/card:opacity-80 transition-all duration-300","data-tooltip-target":"tooltip-contentful",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"-16.5 0 289 289",version:"1.1",preserveAspectRatio:"xMidYMid",children:t.jsxs("g",{children:[t.jsx("path",{d:"M87.333315,200.77659 C72.0274763,186.371095 63.0240418,166.563539 63.0240418,144.054953 C63.0240418,121.546366 72.0274763,101.73881 86.4329716,87.333315 C99.0377799,74.7285067 99.0377799,54.9209507 86.4329716,42.3161423 C73.8281632,29.711334 54.0206072,29.711334 41.4157989,42.3161423 C16.2061822,68.4261025 0,104.439841 0,144.054953 C0,183.670065 16.2061822,219.683803 42.3161423,245.793763 C54.9209507,258.398571 74.7285067,258.398571 87.333315,245.793763 C99.0377799,233.188955 99.0377799,213.381399 87.333315,200.77659 Z"}),t.jsx("path",{d:"M87.333315,87.333315 C101.73881,72.0274763 121.546366,63.0240418 144.054953,63.0240418 C166.563539,63.0240418 186.371095,72.0274763 200.77659,86.4329716 C213.381399,99.0377799 233.188955,99.0377799 245.793763,86.4329716 C258.398571,73.8281632 258.398571,54.0206072 245.793763,41.4157989 C219.683803,16.2061822 183.670065,0 144.054953,0 C104.439841,0 68.4261025,16.2061822 42.3161423,42.3161423 C29.711334,54.9209507 29.711334,74.7285067 42.3161423,87.333315 C54.9209507,99.0377799 74.7285067,99.0377799 87.333315,87.333315 Z"}),t.jsx("path",{d:"M200.77659,200.77659 C186.371095,216.082429 166.563539,225.085863 144.054953,225.085863 C121.546366,225.085863 101.73881,216.082429 87.333315,201.676934 C74.7285067,189.072125 54.9209507,189.072125 42.3161423,201.676934 C29.711334,214.281742 29.711334,234.089298 42.3161423,246.694106 C68.4261025,271.903723 104.439841,288.109905 144.054953,288.109905 C183.670065,288.109905 219.683803,271.903723 245.793763,245.793763 C258.398571,233.188955 258.398571,213.381399 245.793763,200.77659 C233.188955,189.072125 213.381399,189.072125 200.77659,200.77659 Z"}),t.jsx("ellipse",{fill:"",cx:"64.8247287",cy:"64.8247287",rx:"31.5120209",ry:"31.5120209"}),t.jsx("ellipse",{fill:"",cx:"64.8247287",cy:"223.285177",rx:"31.5120209",ry:"31.5120209"})]})})}):""]}),t.jsxs("div",{className:"flex flex-row gap-2 px-5 py-3",children:[t.jsx("a",{href:l==="#contact"?"https://github.com/patrickwebsdev":d,target:l==="#contact"?"":"_blank","aria-label":"Ir al perfil de github",className:"flex self-start gap-2 font-semibold p-1 text-white bg-primary-3 hover:bg-primary-2 transition-all duration-300 items-center border-primary-2 border-2 rounded-full",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fill:"#FFFFFF",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"})})}),t.jsx("a",{href:l,"aria-label":"Ir al proyecto "+a,target:l==="#contact"?"":"_blank",className:"flex self-start gap-2 font-semibold p-1 text-white bg-primary-3 hover:bg-primary-2 transition-all duration-300 items-center border-primary-2 border-2 rounded-full",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:t.jsx("path",{fillRule:"evenodd",fill:"currentCOlor",clipRule:"evenodd",d:"M7.46451 7.05023C7.46451 6.49795 7.91222 6.05023 8.46451 6.05023H16.9496C16.9497 6.05023 16.9498 6.05023 16.95 6.05023H16.9645C17.5168 6.05023 17.9645 6.49795 17.9645 7.05023V15.5502C17.9645 16.1025 17.5168 16.5502 16.9645 16.5502C16.4122 16.5502 15.9645 16.1025 15.9645 15.5502V9.44973L7.7574 17.6568C7.36688 18.0474 6.73371 18.0474 6.34319 17.6568C5.95266 17.2663 5.95266 16.6331 6.34319 16.2426L14.5356 8.05023H8.46451C7.91222 8.05023 7.46451 7.60252 7.46451 7.05023Z"})})})]})]})]})},b=["html","css","javascript","sass","react","nextjs","astro","typescript","php","tailwind","bootstrap","hotjar","contentful"],M=()=>t.jsxs(t.Fragment,{children:[t.jsxs("section",{className:"container h-full mx-auto gap-4 lg:min-h-screen flex flex-col md:px-12 px-5 relative z-20 pb-10 md:pb-40 pt-10 md:pt-24",id:"projects",children:[t.jsx("h4",{className:"mb-4 font-black text-transparent text-3xl lg:text-5xl bg-clip-text bg-gradient-to-r from-primary-1 to-primary-2 w-fit",children:"MIS PROYECTOS"}),t.jsxs("div",{className:"grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10 lg:gap-5",children:[t.jsx(o,{video:"/projects/project.mp4",image:"/projects/project",title:"Tu sitio web",description:"Contáctame y obtén tu propio sitio web",technologies:[],url:"#contact"}),t.jsx(o,{video:"/projects/miwa.mp4",image:"/projects/miwa",title:"MIWA",description:"Poda y servicios forestales",technologies:["nextjs","tailwind","typescript","contentful"],url:"https://miwa.com.ar/",urlGit:"https://github.com/patrickwebsdev/miwa/"}),t.jsx(o,{video:"/projects/edsu.mp4",image:"/projects/edsu",title:"EDSU",description:"Venta de madera mayorista y productos de madera minorista",technologies:["react","nextjs","tailwind","typescript"],url:"https://edsu.net/",urlGit:"https://github.com/patrickwebsdev/edsu/"}),t.jsx(o,{video:"/projects/ride-4-clon.mp4",image:"/projects/ride-4-clon",title:"Ride 4 Clon",description:"Clon de la página del juego Ride 4 de motocicletas",technologies:["html","css","javascript","sass"],url:"https://patrickwebsdev.github.io/ride-4-clon/",urlGit:"https://github.com/patrickwebsdev/ride-4-clon/"}),t.jsx(o,{video:"/projects/box-shadow-generator.mp4",image:"/projects/box-shadow-generator",title:"Box shadow generator",description:"Generador de sombras con interfaz personalizable (fondo del sitio, fondo de contenedor y color de sombra)",technologies:["html","css","javascript","sass"],url:"https://patrickwebsdev.github.io/shadow-generator/",urlGit:"https://github.com/patrickwebsdev/shadow-generator/"}),t.jsx(o,{video:"/projects/biginfluence-template.mp4",image:"/projects/biginfluence-template",title:"BigInfluence Template",description:"Plantilla para servicios de influencers",technologies:["html","css","javascript","sass"],url:"https://patrickwebsdev.github.io/biginfluence/",urlGit:"https://github.com/patrickwebsdev/biginfluence/"})]}),t.jsx("div",{className:"w-full justify-center items-center absolute bottom-12 left-0 hidden lg:flex",children:t.jsx("a",{href:"#aboutme","aria-label":"Ir a seccion sobre mí",className:"animate-bounce py-1 px-1 text-white bg-primary-3 hover:bg-primary-2 transition-all duration-300 items-center border-primary-2 border-2 rounded-full",children:t.jsx("svg",{width:"48",height:"48",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fill:"#ffffff",d:"m12 19.164l6.207-6.207l-1.414-1.414L12 16.336l-4.793-4.793l-1.414 1.414L12 19.164Zm0-5.65l6.207-6.207l-1.414-1.414L12 10.686L7.207 5.893L5.793 7.307L12 13.514Z"})})})})]}),b.map(c=>t.jsxs("div",{id:`tooltip-${c}`,role:"tooltip",className:"absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-primary-2 rounded-lg shadow-sm opacity-0 tooltip uppercase",children:[c,t.jsx("div",{className:"tooltip-arrow","data-popper-arrow":!0})]},c))]});export{M as default};
