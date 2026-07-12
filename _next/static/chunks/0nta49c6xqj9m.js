(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,84429,e=>{"use strict";var t=e.i(12678),i=e.i(61801);e.s(["default",0,function({props:e,name:a,defaultTheme:r,themeId:o}){let d=(0,i.default)(r);return o&&(d=d[o]||d),function(e){let{theme:i,name:a,props:r}=e;return i&&i.components&&i.components[a]&&i.components[a].defaultProps?(0,t.default)(i.components[a].defaultProps,r):r}({theme:d,name:a,props:e})}],84429)},1434,e=>{"use strict";let t=(0,e.i(16506).default)();e.s(["default",0,t])},52057,e=>{"use strict";e.i(47167);var t=e.i(71645),i=e.i(7670),a=e.i(19727),r=e.i(19130),o=e.i(85661),d=e.i(84429),n=e.i(1434),p=e.i(17494),s=e.i(43476);let l=(0,p.default)(),x=(0,n.default)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[`maxWidth${(0,o.default)(String(i.maxWidth))}`],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),m=e=>(0,d.default)({props:e,name:"MuiContainer",defaultTheme:l});var h=e.i(42196),c=e.i(12178),u=e.i(94425);let f=function(e={}){let{createStyledComponent:d=x,useThemeProps:n=m,componentName:p="MuiContainer"}=e,l=d(({theme:e,ownerState:t})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,i)=>{let a=e.breakpoints.values[i];return 0!==a&&(t[e.breakpoints.up(i)]={maxWidth:`${a}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>({..."xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}}));return t.forwardRef(function(e,t){let d=n(e),{className:x,component:m="div",disableGutters:h=!1,fixed:c=!1,maxWidth:u="lg",classes:f,...g}=d,b={...d,component:m,disableGutters:h,fixed:c,maxWidth:u},y=((e,t)=>{let{classes:i,fixed:d,disableGutters:n,maxWidth:p}=e,s={root:["root",p&&`maxWidth${(0,o.default)(String(p))}`,d&&"fixed",n&&"disableGutters"]};return(0,r.default)(s,e=>(0,a.default)(t,e),i)})(b,p);return(0,s.jsx)(l,{as:m,ownerState:b,className:(0,i.default)(y.root,x),ref:t,...g})})}({createStyledComponent:(0,c.default)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[`maxWidth${(0,h.default)(String(i.maxWidth))}`],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,u.useDefaultProps)({props:e,name:"MuiContainer"})});e.s(["default",0,f],52057)},614,e=>{"use strict";e.i(47167);var t=e.i(71645),i=e.i(7670),a=e.i(76423),r=e.i(19727),o=e.i(19130),d=e.i(1434),n=e.i(84429),p=e.i(39416),s=e.i(17494),l=e.i(43982),x=e.i(10900),m=e.i(43476);let h=(0,s.default)(),c=(0,d.default)("div",{name:"MuiStack",slot:"Root"});function u(e){return(0,n.default)({props:e,name:"MuiStack",defaultTheme:h})}let f=({ownerState:e,theme:t})=>{let i={display:"flex",flexDirection:"column",...(0,l.handleBreakpoints)({theme:t},(0,l.resolveBreakpointValues)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e}))};if(e.spacing){let r=(0,x.createUnarySpacing)(t),o=Object.keys(t.breakpoints.values).reduce((t,i)=>(("object"==typeof e.spacing&&null!=e.spacing[i]||"object"==typeof e.direction&&null!=e.direction[i])&&(t[i]=!0),t),{}),d=(0,l.resolveBreakpointValues)({values:e.direction,base:o}),n=(0,l.resolveBreakpointValues)({values:e.spacing,base:o});"object"==typeof d&&Object.keys(d).forEach((e,t,i)=>{if(!d[e]){let a=t>0?d[i[t-1]]:"column";d[e]=a}}),i=(0,a.default)(i,(0,l.handleBreakpoints)({theme:t},n,(t,i)=>e.useFlexGap?{gap:(0,x.getValue)(r,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[i?d[i]:e.direction]}`]:(0,x.getValue)(r,t)}}))}return(0,l.mergeBreakpointsInOrder)(t.breakpoints,i)};var g=e.i(12178),b=e.i(94425);let y=function(e={}){let{createStyledComponent:a=c,useThemeProps:d=u,componentName:n="MuiStack"}=e,s=a(f);return t.forwardRef(function(e,a){let l,x=d(e),{component:h="div",direction:c="column",spacing:u=0,divider:f,children:g,className:b,useFlexGap:y=!1,...w}=(0,p.extendSxProp)(x),C=(0,o.default)({root:["root"]},e=>(0,r.default)(n,e),{});return(0,m.jsx)(s,{as:h,ownerState:{direction:c,spacing:u,useFlexGap:y},ref:a,className:(0,i.default)(C.root,b),...w,children:f?(l=t.Children.toArray(g).filter(Boolean)).reduce((e,i,a)=>(e.push(i),a<l.length-1&&e.push(t.cloneElement(f,{key:`separator-${a}`})),e),[]):g})})}({createStyledComponent:(0,g.default)("div",{name:"MuiStack",slot:"Root"}),useThemeProps:e=>(0,b.useDefaultProps)({props:e,name:"MuiStack"})});e.s(["default",0,y],614)},7716,e=>{"use strict";var t=e.i(43476),i=e.i(68238),a=e.i(97555),r=e.i(63745),o=e.i(18566),d=e.i(69221),n=e.i(13607),p=e.i(13235),s=e.i(66796),l=e.i(97053);(0,l.default)(d.Badge).withConfig({displayName:"homemadeCard.styles__BrandBadge",componentId:"sc-5aaec27e-0"})`
  .MuiBadge-badge {
    top: -4px;
    right: 60px;
    padding: 4px;
    border-radius: 8px;
    min-width: auto;
    height: auto;
    background-color: transparent;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 768px) {
      top: -1px;
      right: 40px;
      padding: 2px;
      border-radius: 6px;
    }

    /* Constrain image to badge dimensions */
    // img {
    //   display: block !important;
    //   border-radius: 4px !important;
    //   width: auto !important;
    //   height: auto !important;
    //   max-width: 100% !important;
    //   max-height: 100% !important;
    // object-fit: contain !important;
    // }
  }
`,(0,l.default)(s.Typography).withConfig({displayName:"homemadeCard.styles__CardHeaderTitle",componentId:"sc-5aaec27e-1"})`
  font-size: 14px !important;
  font-weight: 800 !important;
  color: ${e=>e.theme.palette.secondary.dark} !important;
  @media (max-width: 1023px) {
    font-size: 14px !important;
  }
  @media (max-width: 768px) {
    font-size: 11px !important;
    font-weight: 700 !important;
  }
`;let x=(0,l.default)(p.CardMedia).withConfig({displayName:"homemadeCard.styles__ProductCardImg",componentId:"sc-5aaec27e-2"})`
  width: 100%;
  height: 112px;
  display: block;
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-bottom: 1px solid ${e=>e.theme.palette.divider};
  @media (max-width: 1023px) {
    height: 96px;
  }
  @media (max-width: 768px) {
    height: 102px;
  }
  @media (max-width: 480px) {
    height: 96px;
  }
  @media (max-width: 380px) {
    height: 88px;
  }
`;(0,l.default)(s.Typography).withConfig({displayName:"homemadeCard.styles__SubHeader",componentId:"sc-5aaec27e-3"})`
  font-size: 12px !important;
  font-weight: 800 !important;
  color: ${e=>e.theme.palette.info.main} !important;

  @media (max-width: 1023px) {
    font-size: 12px !important;
  }
  @media (max-width: 768px) {
    font-size: 10px !important;
    font-weight: 700 !important;
  }
`;let m=(0,l.default)(n.Card).withConfig({displayName:"homemadeCard.styles__StyledCard",componentId:"sc-5aaec27e-4"})`
  /* width: 100%; */
  width: 184px;
  min-height: 218px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 14px;
  background-color: ${e=>e.theme.palette.background.paper};

  border: 1px solid ${e=>e.theme.palette.divider};
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${e=>e.theme.palette.primary.light};
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.1);
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.palette.primary.main};
    outline-offset: 2px;
  }
  @media (max-width: 1248px) {
    width: 180px;
  }
  @media (max-width: 1024px) {
    width: 140px;
    min-height: 188px;
  }
  @media (max-width: 768px) {
    width: 170px; /* Optimal for 2-item layout with good spacing */
    min-height: 206px;
  }
  @media (max-width: 480px) {
    width: 160px; /* Maintains readability on smaller screens */
    min-height: 198px;
  }
  @media (max-width: 380px) {
    width: 150px;
    min-height: 188px;
  }
  .MuiCardHeader-root {
    padding: 6px 8px 2px;
  }
  .MuiCardHeader-content {
    padding: 0;
  }
  .MuiCardContent-root {
    padding: 6px 8px 8px;
  }
  .MuiCardContent-root:last-child {
    padding: 6px 8px 8px;
    @media (max-width: 768px) {
      padding: 6px 8px 8px;
    }
  }
`;var h=e.i(48241),c=e.i(86689),u=e.i(51627),f=e.i(59631);e.s(["default",0,({productData:e,brands:d})=>{let n=(0,o.useRouter)(),p=d.filter(t=>t.id===e.brand)[0],s=(0,c.getOfferChipProps)(e);return(0,t.jsxs)(m,{onClick:()=>{n.push(`/product/${e.id}`)},sx:{cursor:"pointer"},children:[e.image&&(0,t.jsxs)(x,{image:e.image,title:e.name,sx:{position:"relative"},children:[(0,t.jsx)(a.Chip,{icon:(0,t.jsx)(f.default,{fontSize:"small",color:"secondary"}),label:"Homemade",color:"primary",size:"small",sx:{position:"absolute",top:4,left:4,fontWeight:600,fontSize:"12px",borderColor:"secondary"}}),s&&(0,t.jsx)(a.Chip,{label:s.label,color:s.color,size:"small",sx:{position:"absolute",top:36,left:4,fontWeight:600,fontSize:"12px",border:"1px solid",borderColor:"inherit"}})]}),p&&(0,t.jsx)(u.default,{productData:e,brand:p}),(0,t.jsx)(i.CardContent,{sx:{padding:"6px 8px 8px"},children:(0,t.jsxs)(r.Stack,{direction:"row",spacing:1,justifyContent:"space-between",alignItems:"center",children:[(0,t.jsx)(h.WeightLabel,{variant:"body1",align:"left",children:e.weight}),(0,t.jsx)(h.PriceLabel,{variant:"body1",color:"primary",children:e.sale_price?`$ ${e.sale_price.toFixed(2)}`:`$ ${e.retail_price.toFixed(2)}`})]})})]})}],7716)},10984,e=>{"use strict";var t=e.i(43476),i=e.i(68238),a=e.i(97555),r=e.i(18566),o=e.i(13607),d=e.i(13235),n=e.i(97053);let p=(0,n.default)(o.Card).withConfig({displayName:"festiveCard.styles__StyledCard",componentId:"sc-466a2b4f-0"})`
  width: 184px;
  min-height: 218px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 14px;
  background-color: ${e=>e.theme.palette.background.paper} !important;
  border-color: ${e=>e.theme.palette.divider} !important;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${e=>e.theme.palette.primary.light} !important;
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.1);
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.palette.primary.main};
    outline-offset: 2px;
  }

  @media (max-width: 1248px) {
    width: 180px;
  }
  @media (max-width: 1024px) {
    width: 150px;
    min-height: 200px;
  }
  @media (max-width: 768px) {
    width: 170px;
    min-height: 206px;
  }
  @media (max-width: 480px) {
    width: 160px;
    min-height: 198px;
  }
  @media (max-width: 380px) {
    width: 150px;
    min-height: 188px;
  }
  .MuiCardHeader-root {
    padding: 1px;
    padding-top: 5px;
  }
  .MuiCardHeader-content {
    padding: 1px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .MuiCardContent-root {
    padding-bottom: 5px;
    // padding: 5px;
  }
  .MuiCardContent-root:last-child {
    padding: 5px;
    padding-left: 5px;
    padding-right: 5px;
    @media (max-width: 768px) {
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 10px;
    }
  }
`,s=(0,n.default)(o.Card).withConfig({displayName:"festiveCard.styles__StyledWiderCard",componentId:"sc-466a2b4f-1"})`
  width: 230px;
  min-height: 228px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 14px;
  background-color: ${e=>e.theme.palette.background.paper} !important;
  border-color: ${e=>e.theme.palette.divider} !important;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${e=>e.theme.palette.primary.light} !important;
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.1);
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.palette.primary.main};
    outline-offset: 2px;
  }

  @media (max-width: 1248px) {
    width: 210px;
  }
  @media (max-width: 1024px) {
    width: 190px;
    min-height: 214px;
  }
  @media (max-width: 768px) {
    width: 200px;
    min-height: 214px;
  }
  @media (max-width: 420px) {
    max-width: 180px;
    min-height: 204px;
  }
  @media (max-width: 380px) {
    max-width: 170px;
    min-height: 194px;
  }
  @media (max-width: 348px) {
    max-width: 125px;
    min-height: 180px;
  }
  .MuiCardHeader-root {
    padding: 1px;
    padding-top: 5px;
  }
  .MuiCardHeader-content {
    padding: 1px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .MuiCardContent-root {
    padding-bottom: 5px;
    // padding: 5px;
  }
  .MuiCardContent-root:last-child {
    padding: 5px;
    padding-left: 5px;
    padding-right: 5px;
    @media (max-width: 768px) {
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 10px;
    }
  }
  img {
    object-fit: contain !important;
  }
`,l=(0,n.default)(d.CardMedia).withConfig({displayName:"festiveCard.styles__FestiveCardImg",componentId:"sc-466a2b4f-2"})`
  width: 100%;
  height: 112px;
  display: block;
  object-fit: contain;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-bottom: 1px solid ${e=>e.theme.palette.divider};
  @media (max-width: 1023px) {
    height: 96px;
  }
  @media (max-width: 768px) {
    height: 102px;
  }
  @media (max-width: 480px) {
    height: 96px;
  }
  @media (max-width: 380px) {
    height: 88px;
  }
`,x=(0,n.default)(d.CardMedia).withConfig({displayName:"festiveCard.styles__FaralCardImg",componentId:"sc-466a2b4f-3"})`
  width: 100%;
  height: 120px;
  display: block;
  object-fit: contain;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-bottom: 1px solid ${e=>e.theme.palette.divider};
  @media (max-width: 1023px) {
    height: 104px;
  }
  @media (max-width: 768px) {
    height: 110px;
  }
  @media (max-width: 480px) {
    height: 104px;
  }
  @media (max-width: 380px) {
    height: 96px;
  }
`;var m=e.i(51627),h=e.i(18172),c=e.i(86689);e.s(["default",0,({productData:e,brands:o,type:d})=>{let n=(0,r.useRouter)(),u="DI"===d.id||"TL"===d.id,f="TL"===d.id,g=o.filter(t=>t.id===e.brand)[0],b=(0,c.getOfferChipProps)(e);return(0,t.jsxs)(f?s:p,{onClick:()=>{n.push(`/product/${e.id}`)},sx:{cursor:"pointer"},variant:"outlined",children:[e.image&&u&&(0,t.jsx)(x,{image:e.image,title:e.name,sx:{position:"relative"},children:b&&(0,t.jsx)(a.Chip,{label:b.label,color:b.color,size:"small",sx:{position:"absolute",top:4,left:4,fontWeight:600,fontSize:"12px",border:"1px solid",borderColor:"inherit"}})}),e.image&&!u&&(0,t.jsx)(l,{image:e.image,title:e.name,sx:{height:220,objectFit:"contain",backgroundColor:"#fff",p:2,position:"relative"},children:b&&(0,t.jsx)(a.Chip,{label:b.label,color:b.color,size:"small",sx:{position:"absolute",top:4,left:4,fontWeight:600,fontSize:"12px",border:"1px solid",borderColor:"inherit"}})}),g&&(0,t.jsx)(m.default,{productData:e,brand:g}),(0,t.jsx)(i.CardContent,{sx:{marginTop:"auto"},children:(0,t.jsx)(h.default,{productData:e})})]})}],10984)},26705,e=>{"use strict";var t=e.i(43476),i=e.i(71645),a=e.i(18566),r=e.i(76552),o=e.i(52057),o=o,d=e.i(13995),n=e.i(63745),p=e.i(66796),s=e.i(22016);let l=new Set(["NGM","DGM"]);function x(e){return l.has(e.product_type)||l.has(Array.isArray(e.product_type)?e.product_type[0]:"")}let m={ganesh:x,ganpati:x,murti:x,ganesha:x};var h=e.i(15703),c=e.i(7716),u=e.i(10984),f=e.i(65776);let g=[{label:"Homemade",href:"/collection/homemade"},{label:"Branded Products",href:"/collection/products"},{label:"Festive Collection",href:"/collection/festive"},{label:"Ganesha Festival",href:"/collection/ganesh"}];function b(){let e=(0,f.isInSeason)(f.LANTERN_START.month,f.LANTERN_START.day,f.LANTERN_END.month,f.LANTERN_END.day)?[...g,{label:"Diwali Lanterns",href:"/collection/lanterns"}]:g;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.Typography,{variant:"subtitle1",sx:{mb:1.5,fontWeight:600},align:"center",children:"Browse Collections"}),(0,t.jsx)(n.Stack,{direction:"row",spacing:2,justifyContent:"center",flexWrap:"wrap",useFlexGap:!0,children:e.map(e=>(0,t.jsx)(s.default,{href:e.href,style:{color:"inherit",textDecoration:"none"},children:(0,t.jsx)(p.Typography,{variant:"body2",sx:{color:"primary.main","&:hover":{textDecoration:"underline"}},children:e.label})},e.href))})]})}e.s(["default",0,function({products:e,brands:n,productTypes:s}){let l=(0,a.useSearchParams)(),x=(0,a.useRouter)(),f=(l.get("q")||"").trim(),[g,y]=(0,i.useState)(f),w=(0,i.useMemo)(()=>{if(!f)return[];if(!f.trim())return e;let t=f.toLowerCase().trim(),i=t.split(/\s+/),a=m[t],r=i.some(e=>m[e]);return e.filter(e=>{let o,d;if(a&&a(e))return!0;if(r)for(let t of i){let i=m[t];if(i&&i(e))return!0}return e.name.toLowerCase().includes(t)||!!(o=n.find(t=>t.id===e.brand))&&o.name.toLowerCase().includes(t)||!!(d=s.find(t=>t.id===e.category))&&d.name.toLowerCase().includes(t)})},[f,e,n,s]),C=e=>{e.preventDefault();let t=g.trim();t?x.push(`/search?q=${encodeURIComponent(t)}`):x.push("/search")};return f?(0,t.jsxs)(o.default,{maxWidth:"lg",sx:{py:4},children:[(0,t.jsx)("form",{onSubmit:C,children:(0,t.jsx)(r.Box,{sx:{mb:3,display:"flex",justifyContent:"center"},children:(0,t.jsx)("input",{type:"text",value:g,onChange:e=>y(e.target.value),placeholder:"Search products...",style:{padding:"10px 16px",fontSize:"1rem",borderRadius:8,border:"1px solid #ccc",width:"100%",maxWidth:400}})})}),(0,t.jsxs)(r.Box,{sx:{mb:4},children:[(0,t.jsx)(p.Typography,{variant:"h5",sx:{mb:1},children:"Search Results"}),(0,t.jsxs)(p.Typography,{variant:"body2",color:"text.secondary",children:["Found ",w.length," product",1!==w.length?"s":""," matching ",`"${f}"`,"."]})]}),(0,t.jsx)(r.Box,{sx:{display:"grid",gridTemplateColumns:{xs:"repeat(2, minmax(0, 1fr))",sm:"repeat(2, minmax(0, 1fr))",md:"repeat(3, minmax(0, 1fr))",lg:"repeat(4, minmax(0, 1fr))"},gap:2,justifyItems:"center"},children:w.map(e=>(0,t.jsx)(r.Box,{children:function(e,i,a){let r="PUR"===e.brand,o=["FC","GC","DI","FS","FP","TL"].includes((Array.isArray(e.product_type)?e.product_type[0]:e.product_type)||"");if(r)return(0,t.jsx)(c.default,{productData:e,brands:i});if(o){let r,o;return(0,t.jsx)(u.default,{type:(r=Array.isArray(e.product_type)?e.product_type[0]:e.product_type,o=a.find(e=>e.id===r),{id:o?.id||r||"FC",name:o?.label||o?.name||"Festive"}),productData:e,brands:i})}return(0,t.jsx)(h.default,{productData:e,brands:i})}(e,n,s)},e.id))}),(0,t.jsx)(d.Divider,{sx:{my:4}}),(0,t.jsx)(b,{})]}):(0,t.jsxs)(o.default,{maxWidth:"lg",sx:{py:4},children:[(0,t.jsx)("form",{onSubmit:C,children:(0,t.jsx)(r.Box,{sx:{mb:3,display:"flex",justifyContent:"center"},children:(0,t.jsx)("input",{type:"text",value:g,onChange:e=>y(e.target.value),placeholder:"Search products...",style:{padding:"10px 16px",fontSize:"1rem",borderRadius:8,border:"1px solid #ccc",width:"100%",maxWidth:400}})})}),(0,t.jsx)(p.Typography,{variant:"h6",color:"text.secondary",align:"center",sx:{mb:3},children:"Please enter a search term."}),(0,t.jsx)(d.Divider,{sx:{my:3}}),(0,t.jsx)(b,{})]})}],26705)}]);