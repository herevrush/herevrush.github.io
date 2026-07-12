(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,43633,e=>{e.q("/_next/static/media/homemade.2lopfh1a5ab72.png")},1434,e=>{"use strict";let t=(0,e.i(16506).default)();e.s(["default",0,t])},84429,e=>{"use strict";var t=e.i(12678),i=e.i(61801);e.s(["default",0,function({props:e,name:a,defaultTheme:r,themeId:o}){let d=(0,i.default)(r);return o&&(d=d[o]||d),function(e){let{theme:i,name:a,props:r}=e;return i&&i.components&&i.components[a]&&i.components[a].defaultProps?(0,t.default)(i.components[a].defaultProps,r):r}({theme:d,name:a,props:e})}],84429)},614,e=>{"use strict";e.i(47167);var t=e.i(71645),i=e.i(7670),a=e.i(76423),r=e.i(19727),o=e.i(19130),d=e.i(1434),n=e.i(84429),l=e.i(39416),p=e.i(17494),s=e.i(43982),m=e.i(10900),c=e.i(43476);let x=(0,p.default)(),h=(0,d.default)("div",{name:"MuiStack",slot:"Root"});function u(e){return(0,n.default)({props:e,name:"MuiStack",defaultTheme:x})}let g=({ownerState:e,theme:t})=>{let i={display:"flex",flexDirection:"column",...(0,s.handleBreakpoints)({theme:t},(0,s.resolveBreakpointValues)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e}))};if(e.spacing){let r=(0,m.createUnarySpacing)(t),o=Object.keys(t.breakpoints.values).reduce((t,i)=>(("object"==typeof e.spacing&&null!=e.spacing[i]||"object"==typeof e.direction&&null!=e.direction[i])&&(t[i]=!0),t),{}),d=(0,s.resolveBreakpointValues)({values:e.direction,base:o}),n=(0,s.resolveBreakpointValues)({values:e.spacing,base:o});"object"==typeof d&&Object.keys(d).forEach((e,t,i)=>{if(!d[e]){let a=t>0?d[i[t-1]]:"column";d[e]=a}}),i=(0,a.default)(i,(0,s.handleBreakpoints)({theme:t},n,(t,i)=>e.useFlexGap?{gap:(0,m.getValue)(r,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[i?d[i]:e.direction]}`]:(0,m.getValue)(r,t)}}))}return(0,s.mergeBreakpointsInOrder)(t.breakpoints,i)};var f=e.i(12178),b=e.i(94425);let w=function(e={}){let{createStyledComponent:a=h,useThemeProps:d=u,componentName:n="MuiStack"}=e,p=a(g);return t.forwardRef(function(e,a){let s,m=d(e),{component:x="div",direction:h="column",spacing:u=0,divider:g,children:f,className:b,useFlexGap:w=!1,...y}=(0,l.extendSxProp)(m),C=(0,o.default)({root:["root"]},e=>(0,r.default)(n,e),{});return(0,c.jsx)(p,{as:x,ownerState:{direction:h,spacing:u,useFlexGap:w},ref:a,className:(0,i.default)(C.root,b),...y,children:g?(s=t.Children.toArray(f).filter(Boolean)).reduce((e,i,a)=>(e.push(i),a<s.length-1&&e.push(t.cloneElement(g,{key:`separator-${a}`})),e),[]):f})})}({createStyledComponent:(0,f.default)("div",{name:"MuiStack",slot:"Root"}),useThemeProps:e=>(0,b.useDefaultProps)({props:e,name:"MuiStack"})});e.s(["default",0,w],614)},63745,e=>{"use strict";var t=e.i(614);e.s(["Stack",()=>t.default])},13607,e=>{"use strict";e.i(47167);var t=e.i(71645),i=e.i(7670),a=e.i(19130),r=e.i(40799),o=e.i(94425),d=e.i(67719),n=e.i(40672),l=e.i(19727);function p(e){return(0,l.default)("MuiCard",e)}(0,n.default)("MuiCard",["root"]);var s=e.i(43476);let m=(0,r.styled)(d.default,{name:"MuiCard",slot:"Root"})({overflow:"hidden"}),c=t.forwardRef(function(e,t){let r=(0,o.useDefaultProps)({props:e,name:"MuiCard"}),{className:d,raised:n=!1,...l}=r,c={...r,raised:n},x=(e=>{let{classes:t}=e;return(0,a.default)({root:["root"]},p,t)})(c);return(0,s.jsx)(m,{className:(0,i.default)(x.root,d),elevation:n?8:void 0,ref:t,ownerState:c,...l})});e.s(["Card",0,c],13607)},68238,e=>{"use strict";e.i(47167);var t=e.i(71645),i=e.i(7670),a=e.i(19130),r=e.i(40799),o=e.i(94425),d=e.i(40672),n=e.i(19727);function l(e){return(0,n.default)("MuiCardContent",e)}(0,d.default)("MuiCardContent",["root"]);var p=e.i(43476);let s=(0,r.styled)("div",{name:"MuiCardContent",slot:"Root"})({padding:16,"&:last-child":{paddingBottom:24}}),m=t.forwardRef(function(e,t){let r=(0,o.useDefaultProps)({props:e,name:"MuiCardContent"}),{className:d,component:n="div",...m}=r,c={...r,component:n},x=(e=>{let{classes:t}=e;return(0,a.default)({root:["root"]},l,t)})(c);return(0,p.jsx)(s,{as:n,className:(0,i.default)(x.root,d),ownerState:c,ref:t,...m})});e.s(["CardContent",0,m],68238)},13235,e=>{"use strict";e.i(47167);var t=e.i(71645),i=e.i(7670),a=e.i(19130),r=e.i(40799),o=e.i(94425),d=e.i(40672),n=e.i(19727);function l(e){return(0,n.default)("MuiCardMedia",e)}(0,d.default)("MuiCardMedia",["root","media","img"]);var p=e.i(43476);let s=(0,r.styled)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e,{isMediaComponent:a,isImageComponent:r}=i;return[t.root,a&&t.media,r&&t.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),m=["video","audio","picture","iframe","img"],c=["picture","img"],x=t.forwardRef(function(e,t){let r=(0,o.useDefaultProps)({props:e,name:"MuiCardMedia"}),{children:d,className:n,component:x="div",image:h,src:u,style:g,...f}=r,b=m.includes(x),w=!b&&h?{backgroundImage:`url("${h}")`,...g}:g,y={...r,component:x,isMediaComponent:b,isImageComponent:c.includes(x)},C=(e=>{let{classes:t,isMediaComponent:i,isImageComponent:r}=e;return(0,a.default)({root:["root",i&&"media",r&&"img"]},l,t)})(y);return(0,p.jsx)(s,{className:(0,i.default)(C.root,n),as:x,role:!b&&h?"img":void 0,ref:t,style:w,ownerState:y,src:b?h||u:void 0,...f,children:d})});e.s(["CardMedia",0,x],13235)},51627,e=>{"use strict";var t=e.i(43476);e.i(47167);var i=e.i(71645),a=e.i(19130),r=e.i(26863),o=e.i(80473),d=e.i(40799),n=e.i(94425),l=e.i(40672),p=e.i(19727);function s(e){return(0,p.default)("MuiCardHeader",e)}let m=(0,l.default)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var c=e.i(48106);let x=(0,d.styled)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>[{[`& .${m.title}`]:t.title},{[`& .${m.subheader}`]:t.subheader},t.root]})({display:"flex",alignItems:"center",padding:16}),h=(0,d.styled)("div",{name:"MuiCardHeader",slot:"Avatar"})({display:"flex",flex:"0 0 auto",marginRight:16}),u=(0,d.styled)("div",{name:"MuiCardHeader",slot:"Action"})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=(0,d.styled)("div",{name:"MuiCardHeader",slot:"Content"})({flex:"1 1 auto",[`.${o.typographyClasses.root}:where(& .${m.title})`]:{display:"block"},[`.${o.typographyClasses.root}:where(& .${m.subheader})`]:{display:"block"}}),f=i.forwardRef(function(e,i){let o=(0,n.useDefaultProps)({props:e,name:"MuiCardHeader"}),{action:d,avatar:l,component:p="div",disableTypography:m=!1,subheader:f,subheaderTypographyProps:b,title:w,titleTypographyProps:y,slots:C={},slotProps:v={},...k}=o,j={...o,component:p,disableTypography:m},M=(e=>{let{classes:t}=e;return(0,a.default)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},s,t)})(j),$={slots:C,slotProps:{title:y,subheader:b,...v}},S=w,[z,_]=(0,c.default)("title",{className:M.title,elementType:r.default,externalForwardedProps:$,ownerState:j,additionalProps:{variant:l?"body2":"h5",component:"span"}});null==S||S.type===r.default||m||(S=(0,t.jsx)(z,{..._,children:S}));let R=f,[B,O]=(0,c.default)("subheader",{className:M.subheader,elementType:r.default,externalForwardedProps:$,ownerState:j,additionalProps:{variant:l?"body2":"body1",color:"textSecondary",component:"span"}});null==R||R.type===r.default||m||(R=(0,t.jsx)(B,{...O,children:R}));let[P,T]=(0,c.default)("root",{ref:i,className:M.root,elementType:x,externalForwardedProps:{...$,...k,component:p},ownerState:j}),[I,N]=(0,c.default)("avatar",{className:M.avatar,elementType:h,externalForwardedProps:$,ownerState:j}),[H,W]=(0,c.default)("content",{className:M.content,elementType:g,externalForwardedProps:$,ownerState:j}),[L,F]=(0,c.default)("action",{className:M.action,elementType:u,externalForwardedProps:$,ownerState:j});return(0,t.jsxs)(P,{...T,children:[l&&(0,t.jsx)(I,{...N,children:l}),(0,t.jsxs)(H,{...W,children:[S,R]}),d&&(0,t.jsx)(L,{...F,children:d})]})});var b=e.i(66796);let w=(0,d.styled)(f)(({theme:e})=>({padding:"8px 10px 2px",".MuiCardHeader-content":{overflow:"hidden"},".MuiCardHeader-subheader":{marginTop:e.spacing(.25)}})),y=(0,d.styled)(b.Typography)(({theme:e})=>({fontSize:"0.86rem",fontWeight:700,lineHeight:1.28,color:e.palette.primary.main,overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",[e.breakpoints.down("md")]:{fontSize:"0.82rem"},[e.breakpoints.down("sm")]:{fontSize:"0.8rem",fontWeight:650}})),C=(0,d.styled)(b.Typography)(({theme:e})=>({fontSize:"0.74rem",lineHeight:1.3,fontWeight:600,color:e.palette.text.secondary,[e.breakpoints.down("sm")]:{fontSize:"0.72rem"}}));e.s(["default",0,({productData:e,brand:i})=>(0,t.jsx)(w,{title:(0,t.jsx)(y,{color:"primary",children:e.name}),subheader:(0,t.jsx)(C,{variant:"body2",color:"secondary.dark",children:i.name})})],51627)},48241,e=>{"use strict";var t=e.i(66796),i=e.i(40799);let a=(0,i.styled)(t.Typography)(({theme:e})=>({fontSize:"0.78rem",fontWeight:600,color:e.palette.text.secondary,letterSpacing:.1,[e.breakpoints.down("md")]:{fontSize:"0.74rem"},[e.breakpoints.down("sm")]:{fontSize:"0.72rem"}})),r=(0,i.styled)(t.Typography)(({theme:e})=>({fontSize:"0.92rem",fontWeight:700,color:e.palette.primary.main,letterSpacing:.1,[e.breakpoints.down("md")]:{fontSize:"0.84rem"},[e.breakpoints.down("sm")]:{fontSize:"0.82rem"}})),o=(0,i.styled)(t.Typography)(({theme:e})=>({fontSize:"0.72rem",fontWeight:600,textDecoration:"line-through",color:e.palette.text.secondary,[e.breakpoints.down("md")]:{fontSize:"0.68rem"},[e.breakpoints.down("sm")]:{fontSize:"0.66rem"}}));e.s(["PriceLabel",0,r,"RetailPrice",0,o,"WeightLabel",0,a])},18172,e=>{"use strict";var t=e.i(43476),i=e.i(63745),a=e.i(48241);e.s(["default",0,({productData:e})=>(0,t.jsxs)(i.Stack,{direction:"row",spacing:1,justifyContent:"space-between",alignItems:"center",children:[(0,t.jsx)(a.WeightLabel,{variant:"body1",align:"left",children:e.weight}),e.retail_price!==e.sale_price?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.RetailPrice,{variant:"body2",align:"left",children:`$${e.retail_price.toFixed(2)}`}),(0,t.jsx)(a.PriceLabel,{variant:"body1",color:"primary",align:"right",children:e.sale_price?`$${e.sale_price.toFixed(2)}`:`$${e.retail_price.toFixed(2)}`})]}):(0,t.jsx)(a.PriceLabel,{variant:"body1",color:"primary",children:`$${e.retail_price.toFixed(2)}`})]})])},86689,e=>{"use strict";e.i(43476),e.i(43633).default;var t=e.i(57688),i=e.i(45679),a=e.i(97053);(0,a.default)(i.default).withConfig({displayName:"screenUtils__OfferChip",componentId:"sc-41e4081d-0"})`
  // left: -50px !important;
  @media (max-width: 1024px) {
    font-size: 10px !important;
    font-weight: 600 !important;
  }
  @media (max-width: 768px) {
    font-size: 10px !important;
    font-weight: 600 !important;
  }
`,(0,a.default)(t.default).withConfig({displayName:"screenUtils__PurnannaImage",componentId:"sc-41e4081d-1"})`
  height: auto;
  width: auto;
  display: block;
  border-radius: 4px;
  object-fit: contain;
  max-width: 95px;
  @media (max-width: 768px) {
    height: 30px;
    max-width: 100px;
    border-radius: 2px;
  }
  
`,e.s(["getOfferChipProps",0,e=>e.offers?.length&&e.offers.length>0?{label:e.offers[0],color:"warning"}:e.pre_order?{label:"Pre-order",color:"secondary"}:e.coming_soon?{label:"Coming soon",color:"secondary"}:e.retail_price!==e.sale_price?{label:"Limited time offer",color:"error"}:null],86689)},69221,e=>{"use strict";e.i(47167);var t=e.i(71645),i=e.i(7670);let a=function(e){let i=t.useRef({});return t.useEffect(()=>{i.current=e}),i.current};var r=e.i(19130);let o=function(e){let{badgeContent:t,invisible:i=!1,max:r=99,showZero:o=!1}=e,d=a({badgeContent:t,max:r}),n=i;!1!==i||0!==t||o||(n=!0);let{badgeContent:l,max:p=r}=n?d:e,s=l&&Number(l)>p?`${p}+`:l;return{badgeContent:l,invisible:n,max:p,displayValue:s}};var d=e.i(40799),n=e.i(75149),l=e.i(35057),p=e.i(94425),s=e.i(42196),m=e.i(40672),c=e.i(19727);function x(e){return(0,c.default)("MuiBadge",e)}let h=(0,m.default)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]);var u=e.i(48106),g=e.i(43476);let f=(0,d.styled)("span",{name:"MuiBadge",slot:"Root"})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),b=(0,d.styled)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.badge,t[i.variant],t[`anchorOrigin${(0,s.default)(i.anchorOrigin.vertical)}${(0,s.default)(i.anchorOrigin.horizontal)}${(0,s.default)(i.overlap)}`],"default"!==i.color&&t[`color${(0,s.default)(i.color)}`],i.invisible&&t.invisible]}})((0,n.default)(({theme:e})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen}),variants:[...Object.entries(e.palette).filter((0,l.default)(["contrastText"])).map(([t])=>({props:{color:t},style:{backgroundColor:(e.vars||e).palette[t].main,color:(e.vars||e).palette[t].contrastText}})),{props:{variant:"dot"},style:{borderRadius:4,height:8,minWidth:8,padding:0}},{props:{invisible:!0},style:{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})}},{style:({ownerState:e})=>{let{vertical:t,horizontal:i}=e.anchorOrigin,a="circular"===e.overlap?"14%":0;return{"--Badge-translateX":"right"===i?"50%":"-50%","--Badge-translateY":"top"===t?"-50%":"50%",top:"top"===t?a:"initial",bottom:"bottom"===t?a:"initial",right:"right"===i?a:"initial",left:"left"===i?a:"initial",transform:"scale(1) translate(var(--Badge-translateX), var(--Badge-translateY))",transformOrigin:`${"right"===i?"100%":"0%"} ${"top"===t?"0%":"100%"}`,[`&.${h.invisible}`]:{transform:"scale(0) translate(var(--Badge-translateX), var(--Badge-translateY))"}}}}]})));function w(e){return{vertical:e?.vertical??"top",horizontal:e?.horizontal??"right"}}let y=t.forwardRef(function(e,t){let d=(0,p.useDefaultProps)({props:e,name:"MuiBadge"}),{anchorOrigin:n,className:l,classes:m,component:c,components:h={},componentsProps:y={},children:C,overlap:v="rectangular",color:k="default",invisible:j=!1,max:M=99,badgeContent:$,slots:S,slotProps:z,showZero:_=!1,variant:R="standard",...B}=d,{badgeContent:O,invisible:P,max:T,displayValue:I}=o({max:M,invisible:j,badgeContent:$,showZero:_}),N=a({anchorOrigin:w(n),color:k,overlap:v,variant:R,badgeContent:$}),H=P||null==O&&"dot"!==R,{color:W=k,overlap:L=v,anchorOrigin:F,variant:D=R}=H?N:d,Y=w(F),A="dot"!==D?I:void 0,V={...d,badgeContent:O,invisible:H,max:T,displayValue:A,showZero:_,anchorOrigin:Y,color:W,overlap:L,variant:D},U=(e=>{let{color:t,anchorOrigin:i,invisible:a,overlap:o,variant:d,classes:n={}}=e,l={root:["root"],badge:["badge",d,a&&"invisible",`anchorOrigin${(0,s.default)(i.vertical)}${(0,s.default)(i.horizontal)}`,`anchorOrigin${(0,s.default)(i.vertical)}${(0,s.default)(i.horizontal)}${(0,s.default)(o)}`,`overlap${(0,s.default)(o)}`,"default"!==t&&`color${(0,s.default)(t)}`]};return(0,r.default)(l,x,n)})(V),E={slots:{root:S?.root??h.Root,badge:S?.badge??h.Badge},slotProps:{root:z?.root??y.root,badge:z?.badge??y.badge}},[X,K]=(0,u.default)("root",{elementType:f,externalForwardedProps:{...E,...B},ownerState:V,className:(0,i.default)(U.root,l),ref:t,additionalProps:{as:c}}),[q,G]=(0,u.default)("badge",{elementType:b,externalForwardedProps:E,ownerState:V,className:U.badge});return(0,g.jsxs)(X,{...K,children:[C,(0,g.jsx)(q,{...G,children:A})]})});e.s(["Badge",0,y],69221)},20686,e=>{"use strict";var t=e.i(69221),i=e.i(13607),a=e.i(13235),r=e.i(97555),o=e.i(97053);(0,o.default)(t.Badge).withConfig({displayName:"productCard.styles__BrandBadge",componentId:"sc-61f455f6-0"})`
  .MuiBadge-badge {
    top: 8px;
    right: 10px;
    @media (max-width: 768px) {
      top: 6px;
      right: 8px;
    }
    z-index: 2;
  }
`;let d=(0,o.default)(a.CardMedia).withConfig({displayName:"productCard.styles__ProductCardImg",componentId:"sc-61f455f6-1"})`
  width: 100%;
  height: 112px;
  display: block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff;
  position: relative;
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
`;(0,o.default)(r.Chip).withConfig({displayName:"productCard.styles__OfferChip",componentId:"sc-61f455f6-2"})`
  border-radius: 999px !important;
  font-weight: 600 !important;
  letter-spacing: 0.1px;
  @media (max-width: 1024px) {
    font-size: 10px !important;
    font-weight: 600 !important;
  }
  @media (max-width: 768px) {
    font-size: 10px !important;
    font-weight: 600 !important;
  }
`;let n=(0,o.default)(i.Card).withConfig({displayName:"productCard.styles__StyledCard",componentId:"sc-61f455f6-3"})`
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
    min-height: 192px;
  }
  @media (max-width: 348px) {
    max-width: 125px;
    min-height: 176px;
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
`;e.s(["ProductCardImg",0,d,"StyledCard",0,n])},15703,e=>{"use strict";var t=e.i(43476),i=e.i(68238),a=e.i(97555),r=e.i(18566),o=e.i(20686),d=e.i(86689),n=e.i(51627),l=e.i(18172);e.s(["default",0,({productData:e,brands:p,imageHeight:s=180,cardSx:m={}})=>{let c=(0,r.useRouter)(),x=p.filter(t=>t.id===e.brand)[0],h=(0,d.getOfferChipProps)(e);return(0,t.jsxs)(o.StyledCard,{onClick:()=>{c.push(`/product/${e.id}`)},variant:"elevation",sx:{cursor:"pointer",...m},children:[e.image&&(0,t.jsx)(o.ProductCardImg,{image:e.image,title:e.name,sx:{height:s,backgroundSize:"contain",objectFit:"contain"},children:h&&(0,t.jsx)(a.Chip,{label:h.label,color:h.color,size:"small",sx:{position:"absolute",top:4,left:4,fontWeight:600,fontSize:"12px",border:"1px solid",borderColor:"inherit"}})}),x&&(0,t.jsx)(n.default,{productData:e,brand:x}),(0,t.jsx)(i.CardContent,{sx:{padding:"6px 8px 8px"},children:(0,t.jsx)(l.default,{productData:e})})]})}])},10984,e=>{"use strict";var t=e.i(43476),i=e.i(68238),a=e.i(97555),r=e.i(18566),o=e.i(13607),d=e.i(13235),n=e.i(97053);let l=(0,n.default)(o.Card).withConfig({displayName:"festiveCard.styles__StyledCard",componentId:"sc-466a2b4f-0"})`
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
`,p=(0,n.default)(o.Card).withConfig({displayName:"festiveCard.styles__StyledWiderCard",componentId:"sc-466a2b4f-1"})`
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
`,s=(0,n.default)(d.CardMedia).withConfig({displayName:"festiveCard.styles__FestiveCardImg",componentId:"sc-466a2b4f-2"})`
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
`,m=(0,n.default)(d.CardMedia).withConfig({displayName:"festiveCard.styles__FaralCardImg",componentId:"sc-466a2b4f-3"})`
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
`;var c=e.i(51627),x=e.i(18172),h=e.i(86689);e.s(["default",0,({productData:e,brands:o,type:d})=>{let n=(0,r.useRouter)(),u="DI"===d.id||"TL"===d.id,g="TL"===d.id,f=o.filter(t=>t.id===e.brand)[0],b=(0,h.getOfferChipProps)(e);return(0,t.jsxs)(g?p:l,{onClick:()=>{n.push(`/product/${e.id}`)},sx:{cursor:"pointer"},variant:"outlined",children:[e.image&&u&&(0,t.jsx)(m,{image:e.image,title:e.name,sx:{position:"relative"},children:b&&(0,t.jsx)(a.Chip,{label:b.label,color:b.color,size:"small",sx:{position:"absolute",top:4,left:4,fontWeight:600,fontSize:"12px",border:"1px solid",borderColor:"inherit"}})}),e.image&&!u&&(0,t.jsx)(s,{image:e.image,title:e.name,sx:{height:220,objectFit:"contain",backgroundColor:"#fff",p:2,position:"relative"},children:b&&(0,t.jsx)(a.Chip,{label:b.label,color:b.color,size:"small",sx:{position:"absolute",top:4,left:4,fontWeight:600,fontSize:"12px",border:"1px solid",borderColor:"inherit"}})}),f&&(0,t.jsx)(c.default,{productData:e,brand:f}),(0,t.jsx)(i.CardContent,{sx:{marginTop:"auto"},children:(0,t.jsx)(x.default,{productData:e})})]})}],10984)},7716,e=>{"use strict";var t=e.i(43476),i=e.i(68238),a=e.i(97555),r=e.i(63745),o=e.i(18566),d=e.i(69221),n=e.i(13607),l=e.i(13235),p=e.i(66796),s=e.i(97053);(0,s.default)(d.Badge).withConfig({displayName:"homemadeCard.styles__BrandBadge",componentId:"sc-5aaec27e-0"})`
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
`,(0,s.default)(p.Typography).withConfig({displayName:"homemadeCard.styles__CardHeaderTitle",componentId:"sc-5aaec27e-1"})`
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
`;let m=(0,s.default)(l.CardMedia).withConfig({displayName:"homemadeCard.styles__ProductCardImg",componentId:"sc-5aaec27e-2"})`
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
`;(0,s.default)(p.Typography).withConfig({displayName:"homemadeCard.styles__SubHeader",componentId:"sc-5aaec27e-3"})`
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
`;let c=(0,s.default)(n.Card).withConfig({displayName:"homemadeCard.styles__StyledCard",componentId:"sc-5aaec27e-4"})`
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
`;var x=e.i(48241),h=e.i(86689),u=e.i(51627),g=e.i(59631);e.s(["default",0,({productData:e,brands:d})=>{let n=(0,o.useRouter)(),l=d.filter(t=>t.id===e.brand)[0],p=(0,h.getOfferChipProps)(e);return(0,t.jsxs)(c,{onClick:()=>{n.push(`/product/${e.id}`)},sx:{cursor:"pointer"},children:[e.image&&(0,t.jsxs)(m,{image:e.image,title:e.name,sx:{position:"relative"},children:[(0,t.jsx)(a.Chip,{icon:(0,t.jsx)(g.default,{fontSize:"small",color:"secondary"}),label:"Homemade",color:"primary",size:"small",sx:{position:"absolute",top:4,left:4,fontWeight:600,fontSize:"12px",borderColor:"secondary"}}),p&&(0,t.jsx)(a.Chip,{label:p.label,color:p.color,size:"small",sx:{position:"absolute",top:36,left:4,fontWeight:600,fontSize:"12px",border:"1px solid",borderColor:"inherit"}})]}),l&&(0,t.jsx)(u.default,{productData:e,brand:l}),(0,t.jsx)(i.CardContent,{sx:{padding:"6px 8px 8px"},children:(0,t.jsxs)(r.Stack,{direction:"row",spacing:1,justifyContent:"space-between",alignItems:"center",children:[(0,t.jsx)(x.WeightLabel,{variant:"body1",align:"left",children:e.weight}),(0,t.jsx)(x.PriceLabel,{variant:"body1",color:"primary",children:e.sale_price?`$ ${e.sale_price.toFixed(2)}`:`$ ${e.retail_price.toFixed(2)}`})]})})]})}],7716)}]);