"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[4646],{657977:function(le,f,e){e.r(f);var p=e(805574),l=e.n(p),R=e(65630),_=e(373656),A=e(634577),L=e(185209),U=e(98651),I=e(819561),E=e(905303),B=e(218537),K=e(605042),W=e(704650),Z=e(606641),a=e(667294),J=e(302559),t=e(785893),N=a.lazy(function(){return Promise.all([e.e(3459),e.e(2494)]).then(e.bind(e,192494))});function F(d){return Object.prototype.toString.call(d)==="[object Object]"}var b={cn:{title:"\u4E3B\u9898\u7F16\u8F91\u5668",save:"\u4FDD\u5B58",edit:"\u7F16\u8F91",export:"\u5BFC\u51FA",editModelTitle:"\u7F16\u8F91\u4E3B\u9898\u914D\u7F6E",editJsonContentTypeError:"\u4E3B\u9898 JSON \u683C\u5F0F\u9519\u8BEF",editSuccessfully:"\u7F16\u8F91\u6210\u529F",saveSuccessfully:"\u4FDD\u5B58\u6210\u529F",initialEditor:"\u6B63\u5728\u521D\u59CB\u5316\u7F16\u8F91\u5668..."},en:{title:"Theme Editor",save:"Save",edit:"Edit",export:"Export",editModelTitle:"edit Theme Config",editJsonContentTypeError:"The theme of the JSON format is incorrect",editSuccessfully:"Edited successfully",saveSuccessfully:"Saved successfully",initialEditor:"Initializing Editor..."}},$=(0,R.kc)(function(d){var u=d.css;return{header:u({display:"flex",height:56,alignItems:"center",padding:"0 24px",justifyContent:"space-between",borderBottom:"1px solid #F0F0F0"})}}),C="ant-design-v5-theme-editor-theme",H=function(){var u=_.ZP.useMessage(),g=l()(u,2),O=g[0],z=g[1],k=(0,J.Z)(b),M=l()(k,2),n=M[0],G=M[1],V=a.useState({}),T=l()(V,2),h=T[0],v=T[1],Q=(0,a.useState)(!1),j=l()(Q,2),X=j[0],P=j[1],Y=(0,a.useState)(!0),x=l()(Y,2),y=x[0],w=x[1],q=(0,a.useState)({text:"{}",json:void 0}),D=l()(q,2),r=D[0],m=D[1];(0,a.useEffect)(function(){var i=localStorage.getItem(C);if(i){var s=JSON.parse(i),o={json:s,text:void 0};m(o),v(s)}},[]);var ee=$(),te=ee.styles,ne=function(){localStorage.setItem(C,JSON.stringify(h)),O.success(n.saveSuccessfully)},se=function(){P(!0)},S=(0,a.useCallback)(function(){P(!1)},[r]),ae=function(s,o,c){m(s),w(!c.contentErrors)},ie=(0,a.useCallback)(function(){var i=!y;if(i){_.ZP.error(n.editJsonContentTypeError);return}var s=r.text?JSON.parse(r.text):r.json;if(!F(s)){_.ZP.error(n.editJsonContentTypeError);return}v(s),S(),O.success(n.editSuccessfully)},[r,y]),oe=function(){var s=new File([JSON.stringify(h,null,2)],"Ant Design Theme.json",{type:"text/json; charset=utf-8;"}),o=document.createElement("a"),c=URL.createObjectURL(s);o.href=c,o.download=s.name,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(c)};return(0,t.jsxs)("div",{children:[(0,t.jsxs)(Z.ql,{children:[(0,t.jsx)("title",{children:"".concat(n.title," - Ant Design")}),(0,t.jsx)("meta",{property:"og:title",content:"".concat(n.title," - Ant Design")})]}),z,(0,t.jsxs)(A.ZP,{theme:{inherit:!1},children:[(0,t.jsxs)("div",{className:te.header,children:[(0,t.jsx)(L.Z.Title,{level:5,style:{margin:0},children:n.title}),(0,t.jsxs)("div",{children:[(0,t.jsx)(U.Z,{open:X,title:n.editModelTitle,width:600,okText:n.save,onOk:ie,onCancel:S,children:(0,t.jsx)(a.Suspense,{fallback:(0,t.jsx)("div",{style:{textAlign:"center",width:"100%",padding:"24px 0"},children:(0,t.jsx)(I.Z,{tip:n.initialEditor})}),children:(0,t.jsx)(N,{content:r,onChange:ae,mainMenuBar:!1})})}),(0,t.jsx)(E.ZP,{onClick:oe,style:{marginRight:8},children:n.export}),(0,t.jsx)(E.ZP,{onClick:se,style:{marginRight:8},children:n.edit}),(0,t.jsx)(E.ZP,{type:"primary",onClick:ne,children:n.save})]})]}),(0,t.jsx)(B.Z,{theme:{name:"Custom Theme",key:"test",config:h},style:{height:"calc(100vh - 64px - 56px)"},onThemeChange:function(s){v(s.config),m({json:s.config,text:void 0})},locale:G==="cn"?K.Z:W.Z})]})]})};f.default=H}}]);
