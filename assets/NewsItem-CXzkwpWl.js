import{r as d,j as s,L as c}from"./index-DhgXS3EK.js";import{c as e}from"./News.module-Cq59gIfS.js";function o({image:r,title:a,text:l,date:t}){const n=d.useRef(null);return d.useEffect(()=>{l.map(m=>{n.current.insertAdjacentHTML("beforeend",`<p>${m}</p>`)})},[]),s.jsx(s.Fragment,{children:s.jsxs("div",{className:e.newsCard,children:[s.jsx(c,{to:`/news/${a}`,className:e.newsCardImage,children:s.jsx("img",{loading:"lazy",className:e.newsCardImg,src:r.src,alt:r.alt})}),s.jsxs("div",{className:e.newsCardBody,children:[s.jsx("h3",{className:e.newsCardTitle,children:a}),s.jsx("div",{ref:n,className:e.newsCardText}),s.jsx(c,{to:`/news/${a}`,className:e.newsCardReadMore,children:"ПОКАЗАТЬ БОЛЬШЕ"}),s.jsx("hr",{style:{maxWidth:"100%",margin:"0"}}),s.jsx("div",{className:e.newsCardDate,children:t})]})]})})}export{o as default};