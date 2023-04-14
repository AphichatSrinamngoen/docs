"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[7272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),b=o,m=u["".concat(l,".").concat(b)]||u[b]||d[b]||r;return n?a.createElement(m,c(c({ref:t},p),{},{components:n})):a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},4166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_label:"Web3 React V6"},c="Using Web3-React V6",i={unversionedId:"wallet/connectors/web3-react-v6",id:"wallet/connectors/web3-react-v6",title:"Using Web3-React V6",description:"The connector is available for web3-react V6. Please note that later versions of web3-react cannot be used with the Web3-React V6 connector due to breaking changes.",source:"@site/docs/03-wallet/05-connectors/05-web3-react-v6.mdx",sourceDirName:"03-wallet/05-connectors",slug:"/wallet/connectors/web3-react-v6",permalink:"/wallet/connectors/web3-react-v6",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/03-wallet/05-connectors/05-web3-react-v6.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Web3 React V6"},sidebar:"sidebar",previous:{title:"Using Web3 Onboard",permalink:"/wallet/connectors/web3-onboard"},next:{title:"FAQ",permalink:"/wallet/connectors/FAQ"}},l={},s=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Initalization",id:"initalization",level:3},{value:"Activation/Deactivation",id:"activationdeactivation",level:3},{value:"Options",id:"options",level:2},{value:"chainId",id:"chainid",level:3},{value:"appName (optional)",id:"appname-optional",level:3},{value:"Example",id:"example",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-web3-react-v6"},"Using Web3-React V6"),(0,o.kt)("p",null,"The connector is available for web3-react V6. Please note that later versions of web3-react cannot be used with the Web3-React V6 connector due to breaking changes."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"The connector maybe installed via the npm package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"}," npm install @0xsequence/web3-react-v6-connector 0xsequence ethers\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"initalization"},"Initalization"),(0,o.kt)("p",null,"The connector must be initialized similarly to other connectors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { SequenceConnector } from '@0xsequence/web3-react-v6-connector'\n\nconst options = {\n  appName: 'Web3 React Demo app'\n}\n\nexport const sequence = new SequenceConnector({ chainId: 137, appName: options.appName  })\n")),(0,o.kt)("h3",{id:"activationdeactivation"},"Activation/Deactivation"),(0,o.kt)("p",null,"The connection can be activated and deactivate from the initialized connector similarly to other connectors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { useWeb3React } from '@web3-react/core'\nimport { sequence as sequenceConnector } from './connectors/sequence'\n\nconst { activate } = useWeb3React()\n\nconst connectWeb3React = async () => {\n  activate(sequenceConnector);\n}\n\nconst disconnectWeb3React = async () => {\n  sequenceConnector.deactivate();\n}\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"chainid"},"chainId"),(0,o.kt)("p",null,"The default chain id as number that the Sequence wallet will attempt to connect to."),(0,o.kt)("h3",{id:"appname-optional"},"appName (optional)"),(0,o.kt)("p",null,"The value of appName will be displayed by the Sequence wallet when initiating a connection."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"A demo app for Web3-React v6 is available ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/demo-dapp-web3-react/tree/v6"},"here")))}u.isMDXComponent=!0}}]);