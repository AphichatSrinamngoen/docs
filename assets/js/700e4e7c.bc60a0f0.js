"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6397],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(k,l(l({ref:t},i),{},{components:a})):n.createElement(k,l({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),o=a(6010),l=a(2389),s=a(7392),p=a(7094),c=a(2466);const i="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,a;const{lazy:l,block:d,defaultValue:m,values:k,groupId:h,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,s.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===m?m:null!=(t=null!=m?m:null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)?t:b[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:C}=(0,p.U)(),[N,E]=(0,r.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:q}=(0,c.o5)();if(null!=h){const e=w[h];null!=e&&e!==N&&y.some((t=>t.value===e))&&E(e)}const D=e=>{const t=e.currentTarget,a=x.indexOf(t),n=y[a].value;n!==N&&(q(t),E(n),null!=h&&C(h,String(n)))},P=e=>{var t;let a=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{var n;const t=x.indexOf(e.currentTarget)+1;a=null!=(n=x[t])?n:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;a=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",i)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},y.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:P,onClick:D},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},6496:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));a(5488),a(5162);const o={sidebar_label:"API Usage"},l="Metadata API Reference & Usage",s={unversionedId:"metadata/api-usage",id:"metadata/api-usage",title:"Metadata API Reference & Usage",description:"The Sequence Metadata API service offers a simple and fast API to query token & NFT metadata",source:"@site/docs/05-metadata/03-api-usage.mdx",sourceDirName:"05-metadata",slug:"/metadata/api-usage",permalink:"/metadata/api-usage",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/05-metadata/03-api-usage.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"API Usage"},sidebar:"sidebar",previous:{title:"Installation",permalink:"/metadata/installation"},next:{title:"Token metadata",permalink:"/metadata/guides/token-metadata"}},p={},c=[{value:"Example",id:"example",level:2},{value:"Usage",id:"usage",level:2},{value:"REST endpoints",id:"rest-endpoints",level:2},{value:"RPC Client",id:"rpc-client",level:2},{value:"Metadata RPC Methods",id:"metadata-rpc-methods",level:2}],i={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metadata-api-reference--usage"},"Metadata API Reference & Usage"),(0,r.kt)("p",null,"The Sequence Metadata API service offers a simple and fast API to query token & NFT metadata\nfor Ethereum-compatible chains."),(0,r.kt)("p",null,"Quite simply, the Metadata API allows you to query the token metadata of any ERC20, ERC721 or ERC1155\ncontract on a ",(0,r.kt)("a",{parentName:"p",href:"/multi-chain-support"},"number of supported Ethereum chains"),"."),(0,r.kt)("p",null,"Please note, for your dev convenience, the Sequence Metadata service is automatically integrated in the ",(0,r.kt)("a",{parentName:"p",href:"/indexer"},"Sequence Indexer"),".\nBut as we demonstrate below, it's also useful to be able to query the token/contract metadata directly too :)"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's say you'd like to query the metadata of a Skyweaver 1155 card on the Polygon network. Of course,  the\nbelow example will work for any network / contract / token combination as well."),(0,r.kt)("p",null,"First, the Skyweaver 1155 assets contract is located at address ",(0,r.kt)("inlineCode",{parentName:"p"},"0x631998e91476DA5B870D741192fc5Cbc55F5a52E"),"\non the Polygon network. Second, let's build the metadata lookup endpoint to query Skyweaver's contract\nfor token ID ",(0,r.kt)("inlineCode",{parentName:"p"},"20"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20"},"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "tokenId": "20",\n    "contractAddress": "0x631998e91476da5b870d741192fc5cbc55f5a52e",\n    "name": "Unstoppable Chop",\n    "description": "Attach Silence to target unit. Do 4\xa0damage to it.",\n    "image": "https://assets.skyweaver.net/TNqWLuJZ/webapp/cards/full-cards/6x/20-silver.png",\n    "decimals": 2,\n    "properties": {\n      "baseCardId": 20,\n      "goldCardId": 131092,\n      "grade": "oldSilver",\n      "id": 20,\n      "silverCardId": 65556\n    },\n    "attributes": null\n  }\n]\n')),(0,r.kt)("p",null,"If you'd like to query a number of tokens at the same time, you can include more token ids comma-separated:\n",(0,r.kt)("a",{parentName:"p",href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20,21,22"},"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20,21,22")," -- click\nto see the JSON response to query token ids ",(0,r.kt)("inlineCode",{parentName:"p"},"20"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"21"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"22")," in a single batched request."),(0,r.kt)("p",null,"Feel free to try tweaking the metadata.sequence.app URL above for your own contract, or another popular\nproject to see how the responses come back. You can change the network to ",(0,r.kt)("a",{parentName:"p",href:"/multi-chain-support"},"one of our supported networks"),"\nand specify any contract and/or token id."),(0,r.kt)("p",null,"In addition to easily querying ",(0,r.kt)("em",{parentName:"p"},"token-level metadata")," like in the above example, you can also query ",(0,r.kt)("em",{parentName:"p"},"contract-level metadata"),".\nContract-level metadata provides you more information about a contract address such as a name, contract type, logo, and description.\nSimply change the metadata URL above to just query the contract address: ",(0,r.kt)("a",{parentName:"p",href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E"},"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E")),(0,r.kt)("p",null,"and see result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "chainId": 137,\n  "address": "0x631998e91476da5b870d741192fc5cbc55f5a52e",\n  "name": "Skyweaver",\n  "type": "ERC1155",\n  "symbol": "SKYWVR",\n  "logoURI": "https://assets.skyweaver.net/_tX5dRVi/webapp/icons/skyweaver-token.png",\n  "extensions": {\n    "link": "https://www.skyweaver.net/",\n    "description": "Skyweaver is a Free-to-Play, trading card game powered by Polygon and Ethereum.",\n    "ogImage": "https://skyweaver.net/images/skyweavercover.jpg",\n    "originAddress": "0x631998e91476da5b870d741192fc5cbc55f5a52e"\n  }\n}\n')),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The Metadata API service is accessible either with a simple ",(0,r.kt)("a",{parentName:"p",href:"#rest-endpoints"},"REST interface"),", or a ",(0,r.kt)("a",{parentName:"p",href:"#rpc-client"},"RPC client"),".\nFor the RPC client, we offer Web browser, node and Go clients. We recommend the RPC client for most integrations, but\nmake the REST interface available for convenience."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"rest-endpoints"},"REST endpoints"),(0,r.kt)("p",null,"As mentioned in the ",(0,r.kt)("a",{parentName:"p",href:"#example"},"example")," above. The general format of the REST endpoint is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://metadata.sequence.app/tokens/<network>/<contractAddress>[/<tokenID>]\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<network>")," must be one of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Chain ID")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Chain Handle")," of ",(0,r.kt)("a",{parentName:"p",href:"/multi-chain-support#networks"},"the supported networks"),"."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fetch contract-level metadata:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://metadata.sequence.app/tokens/<network>/<contractAddress>\n")),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E"},"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fetch token-level metadata:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://metadata.sequence.app/tokens/<network>/<contractAddress>/<tokenID>[,<tokenID>,...]\n")),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20"},"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20,21"},"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20,21"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"rpc-client"},"RPC Client"),(0,r.kt)("p",null,"The Metadata RPC interface offers the full capabilities of the Metadata service."),(0,r.kt)("p",null,"We provide SDKs for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js"},"Web / node.js")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/go-sequence"},"Go"),".\nOr if you'd like to integrate the Metadata service with another language target, simply follow the API reference below\nto implement the HTTP requests. Additionally, read the Typescript client source code as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/master/packages/metadata/src/metadata.gen.ts"},"reference\nimplementation of the Metadata RPC client")," as well."),(0,r.kt)("h2",{id:"metadata-rpc-methods"},"Metadata RPC Methods"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Metadata API endpoint:")," ",(0,r.kt)("a",{parentName:"p",href:"https://metadata.sequence.app"},"https://metadata.sequence.app")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Metadata RPC methods:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetTokenMetadata")," - fetch token metadata of ERC721 or ERC1155 tokens from a single contract "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetTokenMetadataBatch")," - fetch token metadata of ERC721 or ERC1155 token from a batch of contracts "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetContractInfo")," - fetch contract metadata of an ERC20, ERC721 or ERC1155 contract address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetContractInfoBatch")," - fetch contract metadata of a batch of ERC20, ERC721 or ERC1155 contract addresses")))}u.isMDXComponent=!0}}]);