import{j as e,L as m}from"./index-DhgXS3EK.js";import{a as s}from"./About.module-NAxQr9Wl.js";import{m as r}from"./App.module-Bx1Vi9m0.js";import{e as c}from"./employeesData-StfWlL4Y.js";import{F as d,A as i}from"./index-zRlaRrkp.js";function y(){return e.jsx("div",{className:s.aboutEmployees,children:e.jsxs("div",{className:`${s.aboutEmployeesContainer} ${s.aboutItemContainer}`,children:[e.jsxs("div",{className:r.navigation,children:[e.jsx(m,{to:"/",className:r.navigationLink,children:"Главная"}),e.jsx(d,{className:r.navigationIcon,icon:i}),e.jsx(m,{to:"/about",className:r.navigationLink,children:"Сведения об организации"}),e.jsx(d,{className:r.navigationIcon,icon:i}),e.jsx(m,{to:"/about/employees",className:`${r.navigationLink} ${r.current}`,children:"Руководство и педагогический состав"})]}),e.jsx("h2",{className:`${s.aboutEmployeesTitle} ${s.aboutItemTitle}`,children:"Руководство и педагогический состав"}),e.jsx("h3",{className:s.aboutEmployeesSubtitle,children:"Администрация"}),e.jsx("div",{className:`${s.aboutEmployeesCards} ${s.aboutEmployeesCardsAdmins}`,children:c.filter(a=>a.employeeCategory==="admin").map(a=>e.jsx(m,{to:`${a.name}`,className:s.aboutEmployeesCard,children:e.jsxs("div",{className:s.aboutEmployeesCardBody,children:[e.jsx("div",{className:s.aboutEmployeesCardIcon,children:e.jsx("img",{loading:"lazy",src:a.image})}),e.jsxs("div",{className:s.aboutEmployeesCardUserInfo,children:[e.jsx("p",{className:s.aboutEmployeesCardUserName,children:a.name}),e.jsx("p",{className:s.aboutEmployeesCardUserJob,children:a.job.join(", ")})]}),e.jsx("div",{className:s.aboutEmployeesCardUserContacts,children:a.contacts.map((l,o)=>e.jsx("p",{children:l},o))}),e.jsx("div",{className:s.aboutEmployeesCardUserSchedule,children:a.schedule.map((l,o)=>e.jsx("p",{children:l},o))})]})},a.name))}),e.jsx("h3",{className:s.aboutEmployeesSubtitle,children:"Специалисты"}),e.jsx("div",{className:`${s.aboutEmployeesCards} ${s.aboutEmployeesCardsSpecialists}`,children:c.filter(a=>a.employeeCategory==="specialist").map(a=>e.jsx(m,{to:`${a.name}`,className:s.aboutEmployeesCard,children:e.jsxs("div",{className:s.aboutEmployeesCardBody,children:[e.jsx("div",{className:s.aboutEmployeesCardIcon,children:e.jsx("img",{loading:"lazy",src:a.image})}),e.jsxs("div",{className:s.aboutEmployeesCardUserInfo,children:[e.jsx("p",{className:s.aboutEmployeesCardUserName,children:a.name}),e.jsx("p",{className:s.aboutEmployeesCardUserJob,children:a.job.join(", ")})]}),e.jsx("div",{className:s.aboutEmployeesCardUserContacts,children:a.contacts.map((l,o)=>e.jsx("p",{children:l},o))}),e.jsx("div",{className:s.aboutEmployeesCardUserSchedule,children:a.schedule.map((l,o)=>e.jsx("p",{children:l},o))})]})},a.name))}),e.jsx("h3",{className:s.aboutEmployeesSubtitle,children:"Методисты, прочий педагогический персонал"}),e.jsx("div",{className:`${s.aboutEmployeesCards} ${s.aboutEmployeesCardsMethodists}`,children:c.filter(a=>a.employeeCategory==="methodist").map(a=>e.jsx(m,{to:`${a.name}`,className:s.aboutEmployeesCard,children:e.jsxs("div",{className:s.aboutEmployeesCardBody,children:[e.jsx("div",{className:s.aboutEmployeesCardIcon,children:e.jsx("img",{loading:"lazy",src:a.image})}),e.jsxs("div",{className:s.aboutEmployeesCardUserInfo,children:[e.jsx("p",{className:s.aboutEmployeesCardUserName,children:a.name}),e.jsx("p",{className:s.aboutEmployeesCardUserJob,children:a.job.join(", ")})]}),e.jsx("div",{className:s.aboutEmployeesCardUserContacts,children:a.contacts.map((l,o)=>e.jsx("p",{children:l},o))}),e.jsx("div",{className:s.aboutEmployeesCardUserSchedule,children:a.schedule.map((l,o)=>e.jsx("p",{children:l},o))})]})},a.name))}),e.jsx("h3",{className:s.aboutEmployeesSubtitle,children:"Педагоги дополнительного образования"}),e.jsx("div",{className:`${s.aboutEmployeesCards} ${s.aboutEmployeesCardsTeachers}`,children:c.filter(a=>a.employeeCategory==="teacher").map(a=>e.jsx(m,{to:`${a.name}`,className:s.aboutEmployeesCard,children:e.jsxs("div",{className:s.aboutEmployeesCardBody,children:[e.jsx("div",{className:s.aboutEmployeesCardIcon,children:e.jsx("img",{loading:"lazy",src:a.image})}),e.jsxs("div",{className:s.aboutEmployeesCardUserInfo,children:[e.jsx("p",{className:s.aboutEmployeesCardUserName,children:a.name}),e.jsx("p",{className:s.aboutEmployeesCardUserJob,children:a.job.join(", ")})]}),e.jsx("div",{className:s.aboutEmployeesCardUserContacts,children:a.contacts.map((l,o)=>e.jsx("p",{children:l},o))}),e.jsx("div",{className:s.aboutEmployeesCardUserSchedule,children:a.schedule.map((l,o)=>e.jsx("p",{children:l},o))})]})},a.name))})]})})}export{y as default};