"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1069],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),c=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n;const{lazy:l,block:p,defaultValue:m,values:y,groupId:f,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=y?y:b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),k=(0,i.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===m?m:null!=(t=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:x,setTabGroupChoices:w}=(0,s.U)(),[T,N]=(0,a.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=f){const e=x[f];null!=e&&e!==T&&g.some((t=>t.value===e))&&N(e)}const C=e=>{const t=e.currentTarget,n=O.indexOf(t),r=g[n].value;r!==T&&(E(t),N(r),null!=f&&w(f,String(r)))},j=e=>{var t;let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{var r;const t=O.indexOf(e.currentTarget)+1;n=null!=(r=O[t])?r:O[0];break}case"ArrowLeft":{var a;const t=O.indexOf(e.currentTarget)-1;n=null!=(a=O[t])?a:O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},h)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:j,onClick:C},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},2066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(5488),l=n(5162);const i={sidebar_label:"Wallet transaction history"},s="Wallet transaction history",c={unversionedId:"indexer/guides/transaction-history",id:"indexer/guides/transaction-history",title:"Wallet transaction history",description:"Fetch the transaction history for any wallet address",source:"@site/docs/04-indexer/03-guides/03-transaction-history.mdx",sourceDirName:"04-indexer/03-guides",slug:"/indexer/guides/transaction-history",permalink:"/indexer/guides/transaction-history",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/04-indexer/03-guides/03-transaction-history.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Wallet transaction history"},sidebar:"sidebar",previous:{title:"Tokens API",permalink:"/indexer/guides/fetch-tokens"},next:{title:"All unique tokens in a contract",permalink:"/indexer/guides/unique-tokens"}},u={},d=[{value:"Fetch the transaction history for any wallet address",id:"fetch-the-transaction-history-for-any-wallet-address",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wallet-transaction-history"},"Wallet transaction history"),(0,a.kt)("h2",{id:"fetch-the-transaction-history-for-any-wallet-address"},"Fetch the transaction history for any wallet address"),(0,a.kt)("p",null,"Fetches the transaction / token history for any wallet address of any ERC20, ERC721 and ERC1155 token.\nThe response includes decoded transaction details for easy consumption / rendering."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Sequence Indexer ",(0,a.kt)("inlineCode",{parentName:"em"},"GetTransactionHistory")," Method:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Request: POST /rpc/Indexer/GetTransactionHistory"),(0,a.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,a.kt)("li",{parentName:"ul"},"Body (in JSON):",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filter")," (object)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"accountAddress")," (string) -- the wallet account address"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"contractAddress")," (string) -- optionally specify a contract address to filter"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"includeMetadata")," (boolean - optional - default: false) -- toggle token metadata to be included in the response")))),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example: ",(0,a.kt)("inlineCode",{parentName:"strong"},"GetTransactionHistory")," of a wallet account address on Polygon")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash wrap",metastring:"class=wrap"},'curl -X POST -H"Content-Type: application/json" https://polygon-indexer.sequence.app/rpc/Indexer/GetTransactionHistory -d \'{ "filter": { "accountAddress": "0x8e3E38fe7367dd3b52D1e281E4e8400447C8d8B9" }, "includeMetadata": true }\'\n'))),(0,a.kt)(l.Z,{value:"js",label:"Javascript / Typescript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Works in both a Webapp (browser) or Node.js:\nimport { SequenceIndexerClient } from '@0xsequence/indexer'\n\nconst indexer = new SequenceIndexerClient('https://polygon-indexer.sequence.app')\n\n// try any account address you'd like :)\nconst accountAddress = '0xabc...'\n\n// query Sequence Indexer for all token balances of the account on Polygon\nconst transactionHistory = await indexer.getTransactionHistory({\n    accountAddress: accountAddress,\n    includeMetadata: true\n})\nconsole.log('transaction history in account:', transactionHistory)\n"))),(0,a.kt)(l.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n    "log"\n    "net/http"\n\n    "github.com/0xsequence/go-sequence/indexer"\n)\n\nfunc GetTransactionHistory(accountAddress string) {\n    seqIndexer := indexer.NewIndexerClient("https://polygon-indexer.sequence.app", http.DefaultClient)\n\n    filter := &indexer.TransactionHistoryFilter{\n        AccountAddress: &accountAddress,\n    }\n    includeMetadata := true\n\n    _, history, err := seqIndexer.GetTransactionHistory(context.Background(), filter, nil, &includeMetadata)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println("transaction history:", history)\n}\n'))),(0,a.kt)(l.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,a.kt)("p",null,"Please ",(0,a.kt)("a",{parentName:"p",href:"/support"},"contact our team")," for assistance with integrations to another target."))))}m.isMDXComponent=!0}}]);