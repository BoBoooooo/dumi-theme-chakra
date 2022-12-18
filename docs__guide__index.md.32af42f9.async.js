"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[825],{49855:function(D,u,_){_.r(u);var l=_(59650),a=_(75688),i=_(88832),h=_(28840),t=_(75033),s=_(71656),r=_(39466),o=_(49337),x=_(69974),v=_(13478),d=_(18855),e=_(29088);function b(){var j=(0,v.eL)(),n=j.texts;return(0,e.jsx)(v.dY,{children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"what",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#what",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"What?"]}),(0,e.jsxs)("p",{children:[n[0].value,(0,e.jsx)("a",{href:"https://github.com/umijs/dumi",children:(0,e.jsx)("strong",{children:n[1].value})}),n[2].value,(0,e.jsx)("a",{href:"https://github.com/chakra-ui/chakra-ui",children:(0,e.jsx)("strong",{children:n[3].value})})]}),(0,e.jsxs)("h2",{id:"features",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#features",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Features"]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[n[4].value,(0,e.jsx)("strong",{children:n[5].value}),n[6].value]}),(0,e.jsxs)("li",{children:[n[7].value,(0,e.jsx)("strong",{children:n[8].value}),n[9].value]}),(0,e.jsxs)("li",{children:[n[10].value,(0,e.jsx)("strong",{children:n[11].value}),n[12].value]}),(0,e.jsxs)("li",{children:[n[13].value,(0,e.jsx)("strong",{children:n[14].value}),n[15].value]}),(0,e.jsxs)("li",{children:[n[16].value,(0,e.jsx)("strong",{children:n[17].value}),n[18].value]}),(0,e.jsxs)("li",{children:[n[19].value,(0,e.jsx)("strong",{children:n[20].value}),n[21].value]})]}),(0,e.jsxs)("h2",{id:"issues",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#issues",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Issues"]}),(0,e.jsxs)("p",{children:[n[22].value,(0,e.jsx)("a",{href:"https://github.com/innocces/dumi-theme-chakra/issues",children:(0,e.jsx)("strong",{children:n[23].value})}),n[24].value,(0,e.jsx)("a",{href:"https://discord.gg/N82HK72uJk",children:(0,e.jsx)("strong",{children:n[25].value})})]})]})})})}u.default=b},39466:function(D,u,_){var l=_(18855),a=_(29088),i=function(s){var r=s.image,o=s.children,x=s.description,v=s.submit,d=s.title,e=s.link;return _jsxs(Card,{direction:{base:"column",sm:"row"},overflow:"hidden",variant:"outline",shadow:"md",children:[!!(r!=null&&r.length)&&_jsx(Image,{objectFit:"cover",maxW:{base:"100%",sm:"200px"},src:r,alt:"ad image"}),_jsxs(Stack,{children:[_jsxs(CardBody,{children:[!!d&&_jsx(Heading,{size:"md",children:d}),_jsx(Text,{py:"2",children:o!=null?o:x})]}),(!!v||!!e)&&_jsx(CardFooter,{children:_jsx(Button,{as:"a",href:e,target:"_blank",referrerPolicy:"no-referrer",variant:"solid",colorScheme:"brand",rightIcon:_jsx(ExternalLinkIcon,{}),children:v})})]})]})},h=null},49337:function(D,u,_){var l=_(18170),a=_.n(l),i=_(18348),h=_.n(i),t=_(18855),s=_(29088),r=null,o=function(d){var e=d.title,b=d.content,j=d.children,n=_objectWithoutProperties(d,r);return _jsxs(ChakraAlert,_objectSpread(_objectSpread({},n),{},{children:[_jsx(AlertIcon,{}),_jsx(AlertTitle,{children:e}),_jsx(AlertDescription,{children:j!=null?j:b})]}))},x=null},69974:function(D,u,_){var l=_(94313),a=_.n(l),i=_(18855),h=_(24773),t=_(74422),s=_(34534),r=_(17920),o=_(42628),x=_(13478),v=_(14795),d=_(99088),e=_(29088),b=["blackAlpha","whiteAlpha","brand"],j=function(K){var P=a()(K.color,2),C=P[0],g=P[1];return(0,e.jsx)(t.Eq,{children:Object.entries(g).map(function(I){var O=a()(I,2),k=O[0],A=O[1],E="".concat(C,".").concat(k);return(0,e.jsx)(t.Uc,{w:"30%",children:(0,e.jsx)(t.M5,{w:"full",h:9,borderRadius:"base",bg:E,shadow:"sm",color:"whiteAlpha.800",fontSize:"sm",transitionProperty:"all",children:A})},k)})})},n=function(K){var P=K.children,C=(0,s.qY)(),g=C.isOpen,I=C.onOpen,O=C.onClose,k=(0,i.useRef)(null),A=(0,v.Z)(),E=A.brand,R=A.changeBrand,U=A.config,y=(0,i.useState)(),W=a()(y,2),T=W[0],S=W[1],p=(0,i.useMemo)(function(){return Object.entries(U.colors).filter(function(f){var m=a()(f,2),M=m[0],c=m[1];return(0,d.Kn)(c)&&!b.includes(M)})},[U]),L=(0,i.useMemo)(function(){return p.filter(function(f){var m=a()(f,2),M=m[0],c=m[1];return typeof E=="string"?M===E:(0,d.Kn)(E)?Object.keys(c).every(function(B){return E[B]===c[B]}):M==="purple"})[0]},[p,E]),z=(0,i.useCallback)(function(){if(T){var f=p.find(function(m){return m[0]===T})[1];R(f)}O()},[T,R,p]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.zx,{ref:k,position:"fixed",top:"50%",translateY:"-50%",colorScheme:"brand",right:0,zIndex:200,fontSize:"xl",onClick:I,disabled:g,children:P!=null?P:(0,e.jsx)(h.ew,{})}),(0,e.jsxs)(o.dy,{isOpen:g,onClose:O,finalFocusRef:k,children:[(0,e.jsx)(o.P1,{}),(0,e.jsxs)(o.sc,{children:[(0,e.jsx)(o.cC,{}),(0,e.jsx)(o.OX,{children:(0,e.jsx)(t.X6,{as:"h4",fontSize:"xl",children:(0,e.jsx)(x._H,{id:"theme.header"})})}),(0,e.jsxs)(o.Ng,{children:[(0,e.jsxs)(t.Kq,{children:[(0,e.jsxs)(t.xv,{fontSize:"md",children:["brand: ",L[0]]}),(0,e.jsx)(j,{color:L})]}),p.map(function(f,m){var M=a()(f,1),c=M[0];return(0,e.jsxs)(t.Kq,{mt:4,children:[(0,e.jsxs)(t.Ug,{justifyContent:"space-between",children:[(0,e.jsx)(t.xv,{fontSize:"md",children:c}),(0,e.jsx)(r.zx,{colorScheme:c,onClick:function(){return S(c)},leftIcon:T===c?(0,e.jsx)(h.nQ,{}):void 0,children:(0,e.jsx)(x._H,{id:"theme.choose"})})]}),(0,e.jsx)(j,{color:p[m],hideChooseButton:!0})]},c)})]}),(0,e.jsx)(o.ze,{children:(0,e.jsxs)(r.hE,{spacing:3,children:[(0,e.jsx)(r.zx,{variant:"outline",onClick:O,children:(0,e.jsx)(x._H,{id:"theme.cancel"})}),(0,e.jsx)(r.zx,{colorScheme:"brand",onClick:z,children:(0,e.jsx)(x._H,{id:"theme.confirm"})})]})})]})]})]})};u.Z=n},99088:function(D,u,_){_.d(u,{Kn:function(){return a},ad:function(){return i},o8:function(){return h},wd:function(){return t},xb:function(){return s}});var l;function a(r){return Object.prototype.toString.call(r)==="[object Object]"}var i=/(mac|iphone|ipod|ipad)/i.test(typeof navigator!="undefined"?(l=navigator)===null||l===void 0?void 0:l.platform:"");function h(r){return Object.prototype.toString.call(r)==="[object Undefined]"}function t(r){return/^(\w+:)\/\/|^(mailto|tel):/.test(r)}function s(r){return!(Array.isArray(r)?r.length:a(r)?Object.entries(r).length:r)}},14795:function(D,u,_){_.d(u,{Z:function(){return t},f:function(){return h}});var l=_(18855),a=_(42537),i=(0,l.createContext)({brand:a.rS.colors.purple,changeBrand:function(){}});i.displayName="DUMITHEMECHAKRA";var h=i.Provider;function t(){return(0,l.useContext)(i)}}}]);