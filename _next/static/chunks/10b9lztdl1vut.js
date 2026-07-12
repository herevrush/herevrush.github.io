(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,84429,t=>{"use strict";var e=t.i(12678),i=t.i(61801);t.s(["default",0,function({props:t,name:a,defaultTheme:o,themeId:r}){let n=(0,i.default)(o);return r&&(n=n[r]||n),function(t){let{theme:i,name:a,props:o}=t;return i&&i.components&&i.components[a]&&i.components[a].defaultProps?(0,e.default)(i.components[a].defaultProps,o):o}({theme:n,name:a,props:t})}],84429)},1434,t=>{"use strict";let e=(0,t.i(16506).default)();t.s(["default",0,e])},52057,t=>{"use strict";t.i(47167);var e=t.i(71645),i=t.i(7670),a=t.i(19727),o=t.i(19130),r=t.i(85661),n=t.i(84429),d=t.i(1434),l=t.i(17494),s=t.i(43476);let p=(0,l.default)(),c=(0,d.default)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:i}=t;return[e.root,e[`maxWidth${(0,r.default)(String(i.maxWidth))}`],i.fixed&&e.fixed,i.disableGutters&&e.disableGutters]}}),x=t=>(0,n.default)({props:t,name:"MuiContainer",defaultTheme:p});var h=t.i(42196),u=t.i(12178),m=t.i(94425);let g=function(t={}){let{createStyledComponent:n=c,useThemeProps:d=x,componentName:l="MuiContainer"}=t,p=n(({theme:t,ownerState:e})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!e.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}}),({theme:t,ownerState:e})=>e.fixed&&Object.keys(t.breakpoints.values).reduce((e,i)=>{let a=t.breakpoints.values[i];return 0!==a&&(e[t.breakpoints.up(i)]={maxWidth:`${a}${t.breakpoints.unit}`}),e},{}),({theme:t,ownerState:e})=>({..."xs"===e.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},...e.maxWidth&&"xs"!==e.maxWidth&&{[t.breakpoints.up(e.maxWidth)]:{maxWidth:`${t.breakpoints.values[e.maxWidth]}${t.breakpoints.unit}`}}}));return e.forwardRef(function(t,e){let n=d(t),{className:c,component:x="div",disableGutters:h=!1,fixed:u=!1,maxWidth:m="lg",classes:g,...f}=n,b={...n,component:x,disableGutters:h,fixed:u,maxWidth:m},v=((t,e)=>{let{classes:i,fixed:n,disableGutters:d,maxWidth:l}=t,s={root:["root",l&&`maxWidth${(0,r.default)(String(l))}`,n&&"fixed",d&&"disableGutters"]};return(0,o.default)(s,t=>(0,a.default)(e,t),i)})(b,l);return(0,s.jsx)(p,{as:x,ownerState:b,className:(0,i.default)(v.root,c),ref:e,...f})})}({createStyledComponent:(0,u.default)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:i}=t;return[e.root,e[`maxWidth${(0,h.default)(String(i.maxWidth))}`],i.fixed&&e.fixed,i.disableGutters&&e.disableGutters]}}),useThemeProps:t=>(0,m.useDefaultProps)({props:t,name:"MuiContainer"})});t.s(["default",0,g],52057)},614,t=>{"use strict";t.i(47167);var e=t.i(71645),i=t.i(7670),a=t.i(76423),o=t.i(19727),r=t.i(19130),n=t.i(1434),d=t.i(84429),l=t.i(39416),s=t.i(17494),p=t.i(43982),c=t.i(10900),x=t.i(43476);let h=(0,s.default)(),u=(0,n.default)("div",{name:"MuiStack",slot:"Root"});function m(t){return(0,d.default)({props:t,name:"MuiStack",defaultTheme:h})}let g=({ownerState:t,theme:e})=>{let i={display:"flex",flexDirection:"column",...(0,p.handleBreakpoints)({theme:e},(0,p.resolveBreakpointValues)({values:t.direction,breakpoints:e.breakpoints.values}),t=>({flexDirection:t}))};if(t.spacing){let o=(0,c.createUnarySpacing)(e),r=Object.keys(e.breakpoints.values).reduce((e,i)=>(("object"==typeof t.spacing&&null!=t.spacing[i]||"object"==typeof t.direction&&null!=t.direction[i])&&(e[i]=!0),e),{}),n=(0,p.resolveBreakpointValues)({values:t.direction,base:r}),d=(0,p.resolveBreakpointValues)({values:t.spacing,base:r});"object"==typeof n&&Object.keys(n).forEach((t,e,i)=>{if(!n[t]){let a=e>0?n[i[e-1]]:"column";n[t]=a}}),i=(0,a.default)(i,(0,p.handleBreakpoints)({theme:e},d,(e,i)=>t.useFlexGap?{gap:(0,c.getValue)(o,e)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[i?n[i]:t.direction]}`]:(0,c.getValue)(o,e)}}))}return(0,p.mergeBreakpointsInOrder)(e.breakpoints,i)};var f=t.i(12178),b=t.i(94425);let v=function(t={}){let{createStyledComponent:a=u,useThemeProps:n=m,componentName:d="MuiStack"}=t,s=a(g);return e.forwardRef(function(t,a){let p,c=n(t),{component:h="div",direction:u="column",spacing:m=0,divider:g,children:f,className:b,useFlexGap:v=!1,...y}=(0,l.extendSxProp)(c),w=(0,r.default)({root:["root"]},t=>(0,o.default)(d,t),{});return(0,x.jsx)(s,{as:h,ownerState:{direction:u,spacing:m,useFlexGap:v},ref:a,className:(0,i.default)(w.root,b),...y,children:g?(p=e.Children.toArray(f).filter(Boolean)).reduce((t,i,a)=>(t.push(i),a<p.length-1&&t.push(e.cloneElement(g,{key:`separator-${a}`})),t),[]):f})})}({createStyledComponent:(0,f.default)("div",{name:"MuiStack",slot:"Root"}),useThemeProps:t=>(0,b.useDefaultProps)({props:t,name:"MuiStack"})});t.s(["default",0,v],614)},7716,t=>{"use strict";var e=t.i(43476),i=t.i(68238),a=t.i(97555),o=t.i(63745),r=t.i(18566),n=t.i(69221),d=t.i(13607),l=t.i(13235),s=t.i(66796),p=t.i(97053);(0,p.default)(n.Badge).withConfig({displayName:"homemadeCard.styles__BrandBadge",componentId:"sc-5aaec27e-0"})`
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
`,(0,p.default)(s.Typography).withConfig({displayName:"homemadeCard.styles__CardHeaderTitle",componentId:"sc-5aaec27e-1"})`
  font-size: 14px !important;
  font-weight: 800 !important;
  color: ${t=>t.theme.palette.secondary.dark} !important;
  @media (max-width: 1023px) {
    font-size: 14px !important;
  }
  @media (max-width: 768px) {
    font-size: 11px !important;
    font-weight: 700 !important;
  }
`;let c=(0,p.default)(l.CardMedia).withConfig({displayName:"homemadeCard.styles__ProductCardImg",componentId:"sc-5aaec27e-2"})`
  width: 100%;
  height: 112px;
  display: block;
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-bottom: 1px solid ${t=>t.theme.palette.divider};
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
`;(0,p.default)(s.Typography).withConfig({displayName:"homemadeCard.styles__SubHeader",componentId:"sc-5aaec27e-3"})`
  font-size: 12px !important;
  font-weight: 800 !important;
  color: ${t=>t.theme.palette.info.main} !important;

  @media (max-width: 1023px) {
    font-size: 12px !important;
  }
  @media (max-width: 768px) {
    font-size: 10px !important;
    font-weight: 700 !important;
  }
`;let x=(0,p.default)(d.Card).withConfig({displayName:"homemadeCard.styles__StyledCard",componentId:"sc-5aaec27e-4"})`
  /* width: 100%; */
  width: 184px;
  min-height: 218px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 14px;
  background-color: ${t=>t.theme.palette.background.paper};

  border: 1px solid ${t=>t.theme.palette.divider};
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${t=>t.theme.palette.primary.light};
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.1);
  }

  &:focus-visible {
    outline: 2px solid ${t=>t.theme.palette.primary.main};
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
`;var h=t.i(48241),u=t.i(86689),m=t.i(51627),g=t.i(59631);t.s(["default",0,({productData:t,brands:n})=>{let d=(0,r.useRouter)(),l=n.filter(e=>e.id===t.brand)[0],s=(0,u.getOfferChipProps)(t);return(0,e.jsxs)(x,{onClick:()=>{d.push(`/product/${t.id}`)},sx:{cursor:"pointer"},children:[t.image&&(0,e.jsxs)(c,{image:t.image,title:t.name,sx:{position:"relative"},children:[(0,e.jsx)(a.Chip,{icon:(0,e.jsx)(g.default,{fontSize:"small",color:"secondary"}),label:"Homemade",color:"primary",size:"small",sx:{position:"absolute",top:4,left:4,fontWeight:600,fontSize:"12px",borderColor:"secondary"}}),s&&(0,e.jsx)(a.Chip,{label:s.label,color:s.color,size:"small",sx:{position:"absolute",top:36,left:4,fontWeight:600,fontSize:"12px",border:"1px solid",borderColor:"inherit"}})]}),l&&(0,e.jsx)(m.default,{productData:t,brand:l}),(0,e.jsx)(i.CardContent,{sx:{padding:"6px 8px 8px"},children:(0,e.jsxs)(o.Stack,{direction:"row",spacing:1,justifyContent:"space-between",alignItems:"center",children:[(0,e.jsx)(h.WeightLabel,{variant:"body1",align:"left",children:t.weight}),(0,e.jsx)(h.PriceLabel,{variant:"body1",color:"primary",children:t.sale_price?`$ ${t.sale_price.toFixed(2)}`:`$ ${t.retail_price.toFixed(2)}`})]})})]})}],7716)},10984,t=>{"use strict";var e=t.i(43476),i=t.i(68238),a=t.i(97555),o=t.i(18566),r=t.i(13607),n=t.i(13235),d=t.i(97053);let l=(0,d.default)(r.Card).withConfig({displayName:"festiveCard.styles__StyledCard",componentId:"sc-466a2b4f-0"})`
  width: 184px;
  min-height: 218px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 14px;
  background-color: ${t=>t.theme.palette.background.paper} !important;
  border-color: ${t=>t.theme.palette.divider} !important;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${t=>t.theme.palette.primary.light} !important;
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.1);
  }

  &:focus-visible {
    outline: 2px solid ${t=>t.theme.palette.primary.main};
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
`,s=(0,d.default)(r.Card).withConfig({displayName:"festiveCard.styles__StyledWiderCard",componentId:"sc-466a2b4f-1"})`
  width: 230px;
  min-height: 228px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 14px;
  background-color: ${t=>t.theme.palette.background.paper} !important;
  border-color: ${t=>t.theme.palette.divider} !important;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${t=>t.theme.palette.primary.light} !important;
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.1);
  }

  &:focus-visible {
    outline: 2px solid ${t=>t.theme.palette.primary.main};
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
`,p=(0,d.default)(n.CardMedia).withConfig({displayName:"festiveCard.styles__FestiveCardImg",componentId:"sc-466a2b4f-2"})`
  width: 100%;
  height: 112px;
  display: block;
  object-fit: contain;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-bottom: 1px solid ${t=>t.theme.palette.divider};
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
`,c=(0,d.default)(n.CardMedia).withConfig({displayName:"festiveCard.styles__FaralCardImg",componentId:"sc-466a2b4f-3"})`
  width: 100%;
  height: 120px;
  display: block;
  object-fit: contain;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-bottom: 1px solid ${t=>t.theme.palette.divider};
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
`;var x=t.i(51627),h=t.i(18172),u=t.i(86689);t.s(["default",0,({productData:t,brands:r,type:n})=>{let d=(0,o.useRouter)(),m="DI"===n.id||"TL"===n.id,g="TL"===n.id,f=r.filter(e=>e.id===t.brand)[0],b=(0,u.getOfferChipProps)(t);return(0,e.jsxs)(g?s:l,{onClick:()=>{d.push(`/product/${t.id}`)},sx:{cursor:"pointer"},variant:"outlined",children:[t.image&&m&&(0,e.jsx)(c,{image:t.image,title:t.name,sx:{position:"relative"},children:b&&(0,e.jsx)(a.Chip,{label:b.label,color:b.color,size:"small",sx:{position:"absolute",top:4,left:4,fontWeight:600,fontSize:"12px",border:"1px solid",borderColor:"inherit"}})}),t.image&&!m&&(0,e.jsx)(p,{image:t.image,title:t.name,sx:{height:220,objectFit:"contain",backgroundColor:"#fff",p:2,position:"relative"},children:b&&(0,e.jsx)(a.Chip,{label:b.label,color:b.color,size:"small",sx:{position:"absolute",top:4,left:4,fontWeight:600,fontSize:"12px",border:"1px solid",borderColor:"inherit"}})}),f&&(0,e.jsx)(x.default,{productData:t,brand:f}),(0,e.jsx)(i.CardContent,{sx:{marginTop:"auto"},children:(0,e.jsx)(h.default,{productData:t})})]})}],10984)},57991,t=>{"use strict";var e=t.i(55742),i=t.i(43476);let a=(0,e.default)([(0,i.jsx)("path",{d:"M11 4H4v7l9 9.01L20 13zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8",opacity:".3"},"0"),(0,i.jsx)("path",{d:"M12.41 2.58C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01 4 11V4h7v-.01l9 9z"},"1"),(0,i.jsx)("circle",{cx:"6.5",cy:"6.5",r:"1.5"},"2")],"LocalOfferTwoTone");t.s(["default",0,a])},57570,t=>{"use strict";var e=t.i(55742),i=t.i(43476);let a=(0,e.default)((0,i.jsx)("path",{d:"M5.644 7.05 7.05 5.645l2.123 2.122-1.408 1.407zM11 1h2v6h-2zm5.242 13.834 2.12 2.12-1.406 1.408-2.12-2.12zM14.834 7.76l2.12-2.123 1.41 1.407-2.123 2.122zm-5.668 8.482-2.122 2.12-1.407-1.406 2.122-2.122zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m-1 8h2v6h-2zM1 11h6v2H1zm16 0h6v2h-6z"}),"FlareTwoTone");t.s(["default",0,a])},36807,t=>{"use strict";t.i(47167);var e=t.i(71645),i=t.i(7670),a=t.i(12678),o=t.i(19130),r=t.i(356),n=t.i(52039),d=t.i(40799),l=t.i(75149),s=t.i(94425),p=t.i(54033),c=t.i(88762),x=t.i(42196),h=t.i(35057),u=t.i(40672),m=t.i(19727);function g(t){return(0,m.default)("MuiButton",t)}let f=(0,u.default)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge","loading","loadingWrapper","loadingIconPlaceholder","loadingIndicator","loadingPositionCenter","loadingPositionStart","loadingPositionEnd"]),b=e.createContext({}),v=e.createContext(void 0);var y=t.i(43476);let w=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],C=(0,d.styled)(p.default,{shouldForwardProp:t=>(0,n.default)(t)||"classes"===t,name:"MuiButton",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:i}=t;return[e.root,e[i.variant],e[`${i.variant}${(0,x.default)(i.color)}`],e[`size${(0,x.default)(i.size)}`],e[`${i.variant}Size${(0,x.default)(i.size)}`],"inherit"===i.color&&e.colorInherit,i.disableElevation&&e.disableElevation,i.fullWidth&&e.fullWidth,i.loading&&e.loading]}})((0,l.default)(({theme:t})=>{let e="light"===t.palette.mode?t.palette.grey[300]:t.palette.grey[800],i="light"===t.palette.mode?t.palette.grey.A100:t.palette.grey[700];return{...t.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${f.disabled}`]:{color:(t.vars||t).palette.action.disabled},variants:[{props:({ownerState:t})=>t.startIcon||t.loading&&"start"===t.loadingPosition,style:{"&::before":{content:'"\\200b"',width:0,overflow:"hidden"}}},{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(t.vars||t).shadows[2],"&:hover":{boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2]}},"&:active":{boxShadow:(t.vars||t).shadows[8]},[`&.${f.focusVisible}`]:{boxShadow:(t.vars||t).shadows[6]},[`&.${f.disabled}`]:{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${f.disabled}`]:{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(t.palette).filter((0,h.default)()).map(([e])=>({props:{color:e},style:{"--variant-textColor":(t.vars||t).palette[e].main,"--variant-outlinedColor":(t.vars||t).palette[e].main,"--variant-outlinedBorder":t.alpha((t.vars||t).palette[e].main,.5),"--variant-containedColor":(t.vars||t).palette[e].contrastText,"--variant-containedBg":(t.vars||t).palette[e].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(t.vars||t).palette[e].dark,"--variant-textBg":t.alpha((t.vars||t).palette[e].main,(t.vars||t).palette.action.hoverOpacity),"--variant-outlinedBorder":(t.vars||t).palette[e].main,"--variant-outlinedBg":t.alpha((t.vars||t).palette[e].main,(t.vars||t).palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":t.vars?t.vars.palette.Button.inheritContainedBg:e,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":t.vars?t.vars.palette.Button.inheritContainedHoverBg:i,"--variant-textBg":t.alpha((t.vars||t).palette.text.primary,(t.vars||t).palette.action.hoverOpacity),"--variant-outlinedBg":t.alpha((t.vars||t).palette.text.primary,(t.vars||t).palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:t.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:t.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:t.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:t.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:t.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:t.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${f.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${f.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{loadingPosition:"center"},style:{transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),[`&.${f.loading}`]:{color:"transparent"}}}]}})),S=(0,d.styled)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,e)=>{let{ownerState:i}=t;return[e.startIcon,i.loading&&e.startIconLoadingStart,e[`iconSize${(0,x.default)(i.size)}`]]}})(({theme:t})=>({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},{props:{loadingPosition:"start",loading:!0},style:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"start",loading:!0,fullWidth:!0},style:{marginRight:-8}},...w]})),j=(0,d.styled)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,e)=>{let{ownerState:i}=t;return[e.endIcon,i.loading&&e.endIconLoadingEnd,e[`iconSize${(0,x.default)(i.size)}`]]}})(({theme:t})=>({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},{props:{loadingPosition:"end",loading:!0},style:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"end",loading:!0,fullWidth:!0},style:{marginLeft:-8}},...w]})),z=(0,d.styled)("span",{name:"MuiButton",slot:"LoadingIndicator"})(({theme:t})=>({display:"none",position:"absolute",visibility:"visible",variants:[{props:{loading:!0},style:{display:"flex"}},{props:{loadingPosition:"start"},style:{left:14}},{props:{loadingPosition:"start",size:"small"},style:{left:10}},{props:{variant:"text",loadingPosition:"start"},style:{left:6}},{props:{loadingPosition:"center"},style:{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled}},{props:{loadingPosition:"end"},style:{right:14}},{props:{loadingPosition:"end",size:"small"},style:{right:10}},{props:{variant:"text",loadingPosition:"end"},style:{right:6}},{props:{loadingPosition:"start",fullWidth:!0},style:{position:"relative",left:-10}},{props:{loadingPosition:"end",fullWidth:!0},style:{position:"relative",right:-10}}]})),k=(0,d.styled)("span",{name:"MuiButton",slot:"LoadingIconPlaceholder"})({display:"inline-block",width:"1em",height:"1em"}),M=e.forwardRef(function(t,n){let d=e.useContext(b),l=e.useContext(v),p=(0,a.default)(d,t),h=(0,s.useDefaultProps)({props:p,name:"MuiButton"}),{children:u,color:m="primary",component:f="button",className:w,disabled:M=!1,disableElevation:$=!1,disableFocusRipple:I=!1,endIcon:B,focusVisibleClassName:P,fullWidth:W=!1,id:R,loading:T=null,loadingIndicator:L,loadingPosition:H="center",size:_="medium",startIcon:A,type:N,variant:V="text",...O}=h,E=(0,r.unstable_useId)(R),D=L??(0,y.jsx)(c.default,{"aria-labelledby":E,color:"inherit",size:16}),F={...h,color:m,component:f,disabled:M,disableElevation:$,disableFocusRipple:I,fullWidth:W,loading:T,loadingIndicator:D,loadingPosition:H,size:_,type:N,variant:V},G=(t=>{let{color:e,disableElevation:i,fullWidth:a,size:r,variant:n,loading:d,loadingPosition:l,classes:s}=t,p={root:["root",d&&"loading",n,`${n}${(0,x.default)(e)}`,`size${(0,x.default)(r)}`,`${n}Size${(0,x.default)(r)}`,`color${(0,x.default)(e)}`,i&&"disableElevation",a&&"fullWidth",d&&`loadingPosition${(0,x.default)(l)}`],startIcon:["icon","startIcon",`iconSize${(0,x.default)(r)}`],endIcon:["icon","endIcon",`iconSize${(0,x.default)(r)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]},c=(0,o.default)(p,g,s);return{...s,...c}})(F),U=(A||T&&"start"===H)&&(0,y.jsx)(S,{className:G.startIcon,ownerState:F,children:A||(0,y.jsx)(k,{className:G.loadingIconPlaceholder,ownerState:F})}),Y=(B||T&&"end"===H)&&(0,y.jsx)(j,{className:G.endIcon,ownerState:F,children:B||(0,y.jsx)(k,{className:G.loadingIconPlaceholder,ownerState:F})}),K="boolean"==typeof T?(0,y.jsx)("span",{className:G.loadingWrapper,style:{display:"contents"},children:T&&(0,y.jsx)(z,{className:G.loadingIndicator,ownerState:F,children:D})}):null,{root:q,...J}=G;return(0,y.jsxs)(C,{ownerState:F,className:(0,i.default)(d.className,G.root,w,l||""),component:f,disabled:M||T,focusRipple:!I,focusVisibleClassName:(0,i.default)(G.focusVisible,P),ref:n,type:N,id:T?E:R,...O,classes:J,children:[U,"end"!==H&&K,u,"end"===H&&K,Y]})});t.s(["default",0,M],36807)},55579,t=>{"use strict";t.i(47167);var e=t.i(71645),i=t.i(7670),a=t.i(19130),o=t.i(40799),r=t.i(75149),n=t.i(94425),d=t.i(40672),l=t.i(19727);function s(t){return(0,l.default)("MuiCardActionArea",t)}let p=(0,d.default)("MuiCardActionArea",["root","focusVisible","focusHighlight"]);var c=t.i(54033),x=t.i(48106),h=t.i(43476);let u=(0,o.styled)(c.default,{name:"MuiCardActionArea",slot:"Root"})((0,r.default)(({theme:t})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${p.focusHighlight}`]:{opacity:(t.vars||t).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${p.focusVisible} .${p.focusHighlight}`]:{opacity:(t.vars||t).palette.action.focusOpacity}}))),m=(0,o.styled)("span",{name:"MuiCardActionArea",slot:"FocusHighlight"})((0,r.default)(({theme:t})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}))),g=e.forwardRef(function(t,e){let o=(0,n.useDefaultProps)({props:t,name:"MuiCardActionArea"}),{children:r,className:d,focusVisibleClassName:l,slots:p={},slotProps:c={},...g}=o,f=(t=>{let{classes:e}=t;return(0,a.default)({root:["root"],focusHighlight:["focusHighlight"]},s,e)})(o),b={slots:p,slotProps:c},[v,y]=(0,x.default)("root",{elementType:u,externalForwardedProps:{...b,...g},shouldForwardComponentProp:!0,ownerState:o,ref:e,className:(0,i.default)(f.root,d),additionalProps:{focusVisibleClassName:(0,i.default)(l,f.focusVisible)}}),[w,C]=(0,x.default)("focusHighlight",{elementType:m,externalForwardedProps:b,ownerState:o,className:f.focusHighlight});return(0,h.jsxs)(v,{...y,children:[r,(0,h.jsx)(w,{...C})]})});t.s(["CardActionArea",0,g],55579)},34251,t=>{"use strict";var e=t.i(36807);t.s(["Button",()=>e.default])},36328,64048,30668,t=>{"use strict";var e=t.i(55742),i=t.i(43476);let a=(0,e.default)((0,i.jsx)("path",{d:"M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"}),"ArrowOutward");t.s(["default",0,a],36328);let o=(0,e.default)((0,i.jsx)("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z"}),"LightMode");t.s(["default",0,o],64048);var r=t.i(76552),n=t.i(63745),d=t.i(66796);t.s(["default",0,function({title:t,description:e,action:a,children:o,spacing:l=2}){return(0,i.jsxs)(n.Stack,{spacing:l,children:[(0,i.jsxs)(n.Stack,{direction:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:{xs:"flex-start",sm:"center"},spacing:1,sx:{paddingTop:{xs:2,md:3}},children:[(0,i.jsxs)(r.Box,{children:[(0,i.jsx)(d.Typography,{variant:"h5",sx:{fontWeight:800,color:"primary.dark"},children:t}),e&&(0,i.jsx)(d.Typography,{variant:"body2",color:"text.secondary",sx:{mt:.5},children:e})]}),a]}),o]})}],30668)},86015,t=>{"use strict";var e=t.i(55742),i=t.i(43476);let a=(0,e.default)((0,i.jsx)("path",{d:"m2 22 14-5-9-9zm12.53-9.47 5.59-5.59c.49-.49 1.28-.49 1.77 0l.59.59 1.06-1.06-.59-.59c-1.07-1.07-2.82-1.07-3.89 0l-5.59 5.59zm-4.47-5.65-.59.59 1.06 1.06.59-.59c1.07-1.07 1.07-2.82 0-3.89l-.59-.59-1.06 1.07.59.59c.48.48.48 1.28 0 1.76m7 5-1.59 1.59 1.06 1.06 1.59-1.59c.49-.49 1.28-.49 1.77 0l1.61 1.61 1.06-1.06-1.61-1.61c-1.08-1.07-2.82-1.07-3.89 0m-2-6-3.59 3.59 1.06 1.06 3.59-3.59c1.07-1.07 1.07-2.82 0-3.89l-1.59-1.59-1.06 1.06 1.59 1.59c.48.49.48 1.29 0 1.77"}),"Celebration");t.s(["default",0,a])},29955,t=>{"use strict";var e=t.i(43476),i=t.i(30668),a=t.i(36328),o=t.i(86015),r=t.i(57570),n=t.i(59631),d=t.i(64048);let l=(0,t.i(55742).default)((0,e.jsx)("path",{d:"m21.9 8.89-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 8.89c-.24 1.02-.02 2.06.62 2.88.08.11.19.19.28.29V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6.94c.09-.09.2-.18.28-.28.64-.82.87-1.87.62-2.89m-2.99-3.9 1.05 4.37c.1.42.01.84-.25 1.17-.14.18-.44.47-.94.47-.61 0-1.14-.49-1.21-1.14L16.98 5zM13 5h1.96l.54 4.52c.05.39-.07.78-.33 1.07-.22.26-.54.41-.95.41-.67 0-1.22-.59-1.22-1.31zM8.49 9.52 9.04 5H11v4.69c0 .72-.55 1.31-1.29 1.31-.34 0-.65-.15-.89-.41-.25-.29-.37-.68-.33-1.07m-4.45-.16L5.05 5h1.97l-.58 4.86c-.08.65-.6 1.14-1.21 1.14-.49 0-.8-.29-.93-.47-.27-.32-.36-.75-.26-1.17M5 19v-6.03c.08.01.15.03.23.03.87 0 1.66-.36 2.24-.95.6.6 1.4.95 2.31.95.87 0 1.65-.36 2.23-.93.59.57 1.39.93 2.29.93.84 0 1.64-.35 2.24-.95.58.59 1.37.95 2.24.95.08 0 .15-.02.23-.03V19z"}),"Storefront");var s=t.i(76552),p=t.i(13607),c=t.i(55579),x=t.i(97555),h=t.i(63745);let u={homemade:(0,e.jsx)(n.default,{fontSize:"small",color:"warning"}),brands:(0,e.jsx)(l,{fontSize:"small",color:"warning"}),festive:(0,e.jsx)(o.default,{fontSize:"small",color:"warning"}),lanterns:(0,e.jsx)(d.default,{fontSize:"small",color:"warning"}),ganesha:(0,e.jsx)(r.default,{fontSize:"small",color:"error"})};t.s(["default",0,function({title:t,description:o,items:r}){return(0,e.jsx)(i.default,{title:t,description:o,children:(0,e.jsx)(s.Box,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"repeat(2, minmax(0, 1fr))",lg:"repeat(4, minmax(0, 1fr))"},gap:2},children:r.map(t=>(0,e.jsx)(p.Card,{variant:"outlined",sx:{borderRadius:3,overflow:"hidden",borderColor:"rgba(215, 223, 214, 0.9)",boxShadow:"0 12px 28px rgba(128, 140, 128, 0.06)"},children:(0,e.jsx)(c.CardActionArea,{component:"a",href:t.href,sx:{height:"100%"},children:(0,e.jsxs)(h.Stack,{spacing:1.5,sx:{p:2.25,minHeight:210,background:`linear-gradient(180deg, ${t.accent} 0%, rgba(255,255,255,0.98) 68%)`},children:[(0,e.jsxs)(h.Stack,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,e.jsx)(x.Chip,{icon:u[t.icon],label:t.badgeLabel||`${t.count} products`,size:"small",sx:{fontWeight:700,bgcolor:"rgba(255,255,255,0.88)",border:"1px solid rgba(215, 223, 214, 0.85)"}}),(0,e.jsx)(a.default,{fontSize:"small",color:"action"})]}),(0,e.jsx)(s.Box,{sx:{fontSize:"1.25rem",fontWeight:800,color:"primary.dark"},children:t.title}),(0,e.jsx)(s.Box,{sx:{fontSize:"0.875rem",color:"text.secondary"},children:t.description})]})})},t.id))})})}],29955)},1074,t=>{"use strict";var e=t.i(43476),i=t.i(36328),a=t.i(64048),o=t.i(76552),r=t.i(34251),n=t.i(13607),d=t.i(55579),l=t.i(97555),s=t.i(63745),p=t.i(66796),c=t.i(7716),x=t.i(10984),h=t.i(15703),u=t.i(30668);function m({title:t,description:i,href:a,children:n}){return(0,e.jsx)(u.default,{title:t,description:i,action:(0,e.jsx)(r.Button,{component:"a",href:a,variant:"text",color:"primary",children:"View all"}),spacing:1.75,children:(0,e.jsx)(o.Box,{sx:{display:"flex",flexWrap:"wrap",gap:2,alignItems:"stretch"},children:n})})}function g({title:t,description:c,href:x,categories:h}){return(0,e.jsx)(u.default,{title:t,description:c,action:(0,e.jsx)(r.Button,{component:"a",href:x,variant:"text",color:"primary",children:"View collection"}),spacing:1.75,children:(0,e.jsx)(o.Box,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",md:"repeat(2, minmax(0, 1fr))",xl:"repeat(3, minmax(0, 1fr))"},gap:2},children:h.map(t=>(0,e.jsx)(n.Card,{variant:"outlined",sx:{borderRadius:3,overflow:"hidden",borderColor:"rgba(229, 223, 208, 0.85)",boxShadow:"0 10px 24px rgba(143, 135, 117, 0.06)"},children:(0,e.jsx)(d.CardActionArea,{component:"a",href:t.href,sx:{height:"100%"},children:(0,e.jsxs)(s.Stack,{spacing:1.25,sx:{p:2.25,minHeight:190,background:"linear-gradient(180deg, rgba(255, 252, 244, 0.96) 0%, rgba(255,255,255,1) 72%)"},children:[(0,e.jsxs)(s.Stack,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,e.jsx)(l.Chip,{icon:(0,e.jsx)(a.default,{fontSize:"small"}),label:`${t.itemCount} ${1===t.itemCount?"style":"styles"}`,size:"small",color:"primary",sx:{fontWeight:700,bgcolor:"rgba(255,255,255,0.88)"}}),(0,e.jsx)(i.default,{fontSize:"small",color:"action"})]}),(0,e.jsxs)(o.Box,{children:[(0,e.jsx)(p.Typography,{variant:"h6",sx:{fontWeight:800,color:"primary.dark"},children:t.title}),t.subtitle&&(0,e.jsx)(p.Typography,{variant:"body2",color:"text.secondary",sx:{mt:.5},children:t.subtitle})]}),(0,e.jsx)(s.Stack,{spacing:.75,sx:{mt:"auto"},children:t.previewNames.map(t=>(0,e.jsx)(p.Typography,{variant:"body2",color:"text.secondary",children:t},t))})]})})},t.id))})})}t.s(["default",0,function({brands:t,homemadeProducts:i,brandedProducts:a,festiveProducts:o,homemadeShelf:r,brandedShelf:n,festiveShelf:d,lanternShelf:l,lanternCategories:p=[]}){return console.log(i),(0,e.jsxs)(s.Stack,{spacing:4,children:[i.length>0&&(0,e.jsx)(m,{...r,children:i.map(i=>(0,e.jsx)(c.default,{productData:i,brands:t},i.id))}),a.length>0&&(0,e.jsx)(m,{...n,children:a.map(i=>(0,e.jsx)(h.default,{productData:i,brands:t},i.id))}),o.length>0&&(0,e.jsx)(m,{...d,children:o.map(i=>{let a;return(0,e.jsx)(x.default,{productData:i,brands:t,type:{id:(a=Array.isArray(i.product_type)?i.product_type[0]:i.product_type)||"FC",name:a||"Festive"}},i.id)})}),l&&p.length>0&&(0,e.jsx)(g,{...l,categories:p})]})}])},92548,t=>{"use strict";var e=t.i(55742),i=t.i(43476);let a=(0,e.default)((0,i.jsx)("path",{d:"m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z"}),"Verified");t.s(["default",0,a])}]);