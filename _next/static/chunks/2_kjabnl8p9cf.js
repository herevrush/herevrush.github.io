(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,32963,e=>{"use strict";var t=e.i(67719);e.s(["Paper",()=>t.default])},67025,e=>{"use strict";var t,i=e.i(43476),o=e.i(71645),a=e.i(32963),d=e.i(97053);(0,d.default)(a.Paper).withConfig({displayName:"ProductCatalog.styles__ProductContainer",componentId:"sc-1321f092-0"})`
  // margin: 5px;
  //   align-content: center;
  //   align-items: center;
  margin: 0px;
  // width: 100%;
`;let r=d.default.div.withConfig({displayName:"ProductCatalog.styles__StyledContainer",componentId:"sc-1321f092-1"})`
  display: flex;
  flex-direction: row;
  height: 75vh;
  // gap: 8px;

  @media (max-width: 768px) {
    display: block;
    // flex-direction: column;
    height: auto;
    min-height: 100vh;
    // top: 50px;
    position: relative;
    gap: 0;
  }
`,n=d.default.div.withConfig({displayName:"ProductCatalog.styles__ProductsContainer",componentId:"sc-1321f092-2"})`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  padding: 8px 16px 20px;
  // padding: 8px;
  @media (max-width: 1280px) {
    padding: 8px 12px 18px;
  }
  @media (max-width: 1024px) {
    // margin-top: 34px;
    // padding: 16px 8px;
  }
  @media (max-width: 768px) {
    margin-top: 0px; /* No margin needed since mobile nav is now in normal flow */
    padding: 0px 8px 16px 8px;
  }
`;var p=e.i(10984),l=e.i(7716),s=e.i(15703),c=((t={}).HOMEMADE="homemade",t.BRANDED="branded",t.FESTIVE="festive",t),m=e.i(63745),g=e.i(66796),h=e.i(40799);let x=(0,h.styled)(m.Stack)(()=>({width:"100%",flexWrap:"wrap",justifyContent:"flex-start",gap:"16px",padding:"0 8px","@media (max-width: 1200px)":{gap:"12px",padding:"0 6px"},"@media (max-width: 768px)":{paddingTop:"8px",paddingBottom:"8px",gap:"5px !important",justifyContent:"space-around"}})),u=(0,d.default)(g.Typography).withConfig({displayName:"categorisedProducts.styles__CategoryName",componentId:"sc-8fa16f00-0"})`
  font-weight: 800 !important;
  margin-top: 10px !important;
  margin-bottom: 5px !important;
  align-self: center;
  @media (max-width: 768px) {
    font-size: 0.875rem !important;
  }
`,f=(0,h.styled)(a.Paper)(()=>({marginBottom:"10px !important",border:"0px",paddingTop:"10px !important",paddingBottom:"20px !important",display:"flex",gap:"20px",flexDirection:"column",width:"100%","@media (max-width: 768px)":{paddingLeft:"1px !important",paddingRight:"1px !important",paddingBottom:"5px !important",paddingTop:"5px !important",gap:"10px"}})),y=({type:e,allRelatedProducts:t,brands:a,catalogType:d})=>{let r=o.default.useRef(null);return(0,i.jsxs)(f,{id:e.id,ref:r,variant:"outlined",children:[(0,i.jsx)(u,{variant:"h6",align:"center",sx:{color:(c.HOMEMADE,"info.dark")},children:e.label}),(0,i.jsx)(x,{direction:"row",useFlexGap:!0,alignItems:"center",children:t.map((t,o)=>d===c.HOMEMADE?(0,i.jsx)(l.default,{productData:t,brands:a},`homemade-${o}`):d===c.BRANDED?(0,i.jsx)(s.default,{productData:t,brands:a},`product-${o}`):(0,i.jsx)(p.default,{productData:t,brands:a,type:e},`festive-${o}`))})]})},b=d.default.div.withConfig({displayName:"ProductNavigation.styles__NavigationContainer",componentId:"sc-7dd07ca2-0"})``,v=d.default.div.withConfig({displayName:"ProductNavigation.styles__DesktopWrapper",componentId:"sc-7dd07ca2-1"})`
  @media (max-width: 768px) {
    display: none;
  }
`,w=d.default.div.withConfig({displayName:"ProductNavigation.styles__MobileWrapper",componentId:"sc-7dd07ca2-2"})`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: sticky;
    top: 252px;
    z-index: 1050;
    background-color: ${e=>e.theme.palette.background.paper};
  }
`,k=d.default.div.withConfig({displayName:"ProductNavigation.styles__MobileNavShell",componentId:"sc-7dd07ca2-3"})`
  position: relative;
  @media (max-width: 768px) {
    padding-top: 6px;
    padding-bottom: 6px;
    background-color: ${e=>e.theme.palette.background.paper};
    border-bottom: 1px solid ${e=>e.theme.palette.divider};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  }
`,C=d.default.div.withConfig({displayName:"ProductNavigation.styles__MobileScrollHint",componentId:"sc-7dd07ca2-4"})`
  font-size: 12px;
  line-height: 1.2;
  color: ${e=>e.theme.palette.text.secondary};
  padding: 4px 12px 0;
`,N=d.default.div.withConfig({displayName:"ProductNavigation.styles__MobileEdgeCue",componentId:"sc-7dd07ca2-5"})`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 34px;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    ${e=>e.theme.palette.background.paper}
  );
`,_=d.default.span.withConfig({displayName:"ProductNavigation.styles__MobileChevronCue",componentId:"sc-7dd07ca2-6"})`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${e=>e.theme.palette.text.secondary};
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
`,I=d.default.div.withConfig({displayName:"ProductNavigation.styles__DesktopSidebar",componentId:"sc-7dd07ca2-7"})`
  width: 150px;
  max-height: 75vh;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${e=>e.theme.palette.background.paper};
  padding: 8px;
  border-right: 1px solid ${e=>e.theme.palette.divider};

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.palette.divider};
    border-radius: 999px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`,j=d.default.div.withConfig({shouldForwardProp:e=>"isSelected"!==e}).withConfig({displayName:"ProductNavigation.styles__DesktopTypeItem",componentId:"sc-7dd07ca2-8"})`
  padding: 5px 8px;
  margin-bottom: 8px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${e=>e.isSelected?e.theme.palette.primary.light:e.theme.palette.background.paper};
  color: ${e=>e.isSelected?e.theme.palette.primary.contrastText:e.theme.palette.text.secondary};
  border: 1px solid
    ${e=>e.isSelected?e.theme.palette.primary.light:e.theme.palette.divider};
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    background-color: ${e=>e.isSelected?e.theme.palette.primary.light:e.theme.palette.grey[50]};
  }
`,$=d.default.div.withConfig({displayName:"ProductNavigation.styles__DesktopTypeLabel",componentId:"sc-7dd07ca2-9"})`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
`,P=d.default.div.withConfig({displayName:"ProductNavigation.styles__DesktopTypeCount",componentId:"sc-7dd07ca2-10"})`
  font-size: 12px;
  opacity: 0.8;
`,T=d.default.div.withConfig({displayName:"ProductNavigation.styles__MobileNavbar",componentId:"sc-7dd07ca2-11"})`
  width: 100%;
  min-height: 68px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: ${e=>e.theme.palette.background.paper};
  border-top: 1px solid ${e=>e.theme.palette.divider};
  border-bottom: 1px solid ${e=>e.theme.palette.divider};
  padding: 10px 12px;
  align-items: center;
  gap: 8px;
  scroll-behavior: smooth;
  scroll-snap-type: x proximity;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.palette.divider};
    border-radius: 999px;
  }
`,S=d.default.button.withConfig({shouldForwardProp:e=>"isSelected"!==e}).withConfig({displayName:"ProductNavigation.styles__MobileTypeItem",componentId:"sc-7dd07ca2-12"})`
  min-width: max-content;
  white-space: nowrap;
  min-height: 44px;
  padding: 10px 14px;
  border-radius: 20px;
  cursor: pointer;
  appearance: none;
  background-color: ${e=>e.isSelected?e.theme.palette.primary.light:e.theme.palette.background.paper};
  color: ${e=>e.isSelected?e.theme.palette.primary.contrastText:e.theme.palette.text.secondary};
  border: 1px solid
    ${e=>e.isSelected?e.theme.palette.primary.light:"#e0e0e0"};
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
  font-size: 13px;
  line-height: 1;
  scroll-snap-align: start;

  &:hover {
    background-color: ${e=>e.isSelected?e.theme.palette.primary.light:e.theme.palette.grey[50]};
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.palette.primary.main};
    outline-offset: 2px;
  }
`,E=d.default.span.withConfig({displayName:"ProductNavigation.styles__MobileTypeLabel",componentId:"sc-7dd07ca2-13"})`
  font-weight: 600;
  margin-right: 4px;
`,M=d.default.span.withConfig({displayName:"ProductNavigation.styles__MobileTypeCount",componentId:"sc-7dd07ca2-14"})`
  font-size: 12px;
  opacity: 0.8;
`,D=({filteredTypes:e,selectedTypeId:t,onTypeSelect:a,onSelectedTypeChange:d})=>{let r=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{let e=()=>{window.scrollY>4&&(r.current=!0)};return window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)}},[]),(0,o.useEffect)(()=>{let t=new IntersectionObserver(e=>{if(!r.current)return;let t=e.filter(e=>e.isIntersecting).sort((e,t)=>t.intersectionRatio-e.intersectionRatio)[0];t&&d(t.target.id.replace("category-",""))},{rootMargin:"-80px 10px -10% 0px",threshold:[.2,.4,.6]});return e.forEach(e=>{let i=document.getElementById(`category-${e.id}`);i&&t.observe(i)}),()=>{t.disconnect()}},[e,d]),(0,i.jsx)(I,{children:e.map(e=>(0,i.jsxs)(j,{isSelected:t===e.id,onClick:()=>{var t;let i;return a(t=e.id),void((i=document.getElementById(`category-${t}`))&&i.scrollIntoView({behavior:"smooth",block:"start"}))},children:[(0,i.jsx)($,{children:e.name}),(0,i.jsxs)(P,{children:[e.products.length," products"]})]},e.id))})},B=({filteredTypes:e,selectedTypeId:t,onTypeSelect:a})=>{let d=(0,o.useRef)(null),[r,n]=o.default.useState(!1),[p,l]=o.default.useState(!1);return(0,o.useEffect)(()=>{let e=d.current;if(!e)return;let t=()=>{n(e.scrollWidth>e.clientWidth+8)},i=()=>{e.scrollLeft>6&&l(!0)};return t(),e.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",t),()=>{e.removeEventListener("scroll",i),window.removeEventListener("resize",t)}},[e]),(0,i.jsxs)(k,{children:[(0,i.jsx)(T,{ref:d,"aria-label":"Product categories",children:e.map(e=>(0,i.jsxs)(S,{type:"button",isSelected:t===e.id,"aria-pressed":t===e.id,"aria-label":`${e.name}, ${e.products.length} products`,onClick:()=>{var t;let i;return a(t=e.id),void((i=document.getElementById(`category-${t}`))&&i.scrollIntoView({behavior:"smooth",block:"start"}))},children:[(0,i.jsx)(E,{children:e.name}),(0,i.jsxs)(M,{children:["(",e.products.length,")"]})]},e.id))}),r&&!p&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(N,{"aria-hidden":"true"}),(0,i.jsx)(_,{"aria-hidden":"true",children:"›"}),(0,i.jsx)(C,{children:"Swipe to see more categories"})]})]})},R=({filteredTypes:e,selectedTypeId:t,onTypeSelect:o,onSelectedTypeChange:a})=>(0,i.jsxs)(b,{children:[(0,i.jsx)(v,{children:(0,i.jsx)(D,{filteredTypes:e,selectedTypeId:t,onTypeSelect:o,onSelectedTypeChange:a})}),(0,i.jsx)(w,{children:(0,i.jsx)(B,{filteredTypes:e,selectedTypeId:t,onTypeSelect:o})})]});e.s(["default",0,({products:e,brands:t,productTypes:a,catalogType:d})=>{let p=(0,o.useMemo)(()=>a.map(t=>({...t,products:e.filter(e=>e.product_type?.includes(t.id)&&(e.in_stock||e.pre_order))})).filter(e=>e.products.length>0),[e,a]),[l,s]=(0,o.useState)(null);return(0,o.useEffect)(()=>{!l&&p.length>0&&s(p[0].id)},[p,l]),(0,i.jsxs)(r,{children:[(0,i.jsx)(R,{filteredTypes:p,selectedTypeId:l,onTypeSelect:e=>{s(e)},onSelectedTypeChange:e=>{s(e)}}),(0,i.jsx)(n,{children:p.map(e=>(0,i.jsx)("div",{id:`category-${e.id}`,children:(0,i.jsx)(y,{type:e,allRelatedProducts:e.products,brands:t,catalogType:d})},`category-${e.id}`))})]})}],67025)}]);