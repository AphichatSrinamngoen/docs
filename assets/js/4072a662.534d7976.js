"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[814],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9460:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={},c="Building Relaying Server with Sequence",l={unversionedId:"build-with-sequence/building-relaying-server",id:"build-with-sequence/building-relaying-server",title:"Building Relaying Server with Sequence",description:"With Sequence, you can create a smart contract wallet your server can use to dispatch transactions for your users without you having to be worried about transaction speed, throughput and re-orgs.",source:"@site/docs/build-with-sequence/12-building-relaying-server.mdx",sourceDirName:"build-with-sequence",slug:"/build-with-sequence/building-relaying-server",permalink:"/build-with-sequence/building-relaying-server",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/build-with-sequence/12-building-relaying-server.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"sidebar",previous:{title:"Building Backends with Sequence",permalink:"/build-with-sequence/building-backends"},next:{title:"Using Sequence on testnets",permalink:"/build-with-sequence/using-testnets"}},u={},d=[{value:"Nodejs Server",id:"nodejs-server",level:3},{value:"Parallel Transactions",id:"parallel-transactions",level:2}],p={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"building-relaying-server-with-sequence"},"Building Relaying Server with Sequence"),(0,o.kt)("p",null,"With Sequence, you can create a smart contract wallet your server can use to dispatch transactions for your users without you having to be worried about transaction speed, throughput and re-orgs."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Sequentual Transactions")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"By default, Sequence transactions will be executable sequentially. "))),(0,o.kt)("h3",{id:"nodejs-server"},"Nodejs Server"),(0,o.kt)("p",null,"Your server will need an EOA wallet that will be able to sign messages. It will be the owner of your server side Sequence wallet which will be used to dispatch transactions.\nThis Sequence wallet should have the correct ownership at your contract level, not the EOA.\nAlso, the Sequence wallet should be sufficiently funded in order to pay the fee needed by the relayer to dispatch your transactions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { RpcRelayer } from '@0xsequence/relayer'\nimport { Wallet } from '@0xsequence/wallet'\nimport { ethers } from 'ethers'\n\n// Create your server EOA\nconst walletEOA = new ethers.Wallet(serverPrivateKey, provider)\n\n// Create your rpc relayer instance with relayer node you want to use\nconst relayer = new RpcRelayer({url: 'https://polygon-relayer.sequence.app'})\n\n// Create your Sequence server wallet, controlled by your server EOA, and connect it to the relayer\nconst wallet = (await Wallet.singleOwner(walletEOA)).connect(provider, relayer)\n\n// Craft your transaction\nconst erc721Interface = new ethers.utils.Interface([\n  'function safeTransferFrom(address _from, address _to, uint256 _tokenId)'\n])\n\nconst data = erc721Interface.encodeFunctionData(\n  'safeTransferFrom', [senderAddress, recipientAddress, id]\n)\n\nconst txn = {\n  to: erc721TokenAddress,\n  data\n}\n\n// Request the possible fee options the relayer will accept for this transaction\nconst [config, context] = await Promise.all([wallet.getWalletConfig(), wallet.getWalletContext()])\nconst { options, quote } = await relayer.getFeeOptions(config, context, txn /* , txn2, txn3, etc... */)\n\n\n\n// Choose a fee from the list of options returned by the relayer\n// MATIC is native to Polygon and needs to be handled differently than other ERC-20 tokens like USDC\n\n// === vvv To pay the fee in native MATIC: vvv ===\nconst option = options.find(option => option.token.symbol === 'MATIC')\nif (!option) {\n  throw Error(`relayer doesn't support MATIC fees`)\n}\n\n// Craft the MATIC fee payment transaction\nconst feeTxn = {\n  to: option.to,\n  value: option.value,\n  gasLimit: option.gasLimit\n}\n// === ^^^ MATIC fee ^^^ ===\n\n\n\n// === vvv To pay the fee in USDC: vvv ===\nconst option = options.find(option => option.token.symbol === 'USDC')\nif (!option) {\n  throw Error(`relayer doesn't support USDC fees`)\n}\n\nconst erc20Interface = new ethers.utils.Interface([\n  'function transfer(address _to, uint256 _value)'\n])\n\n// Craft the USDC fee payment transaction\nconst feeTxn = {\n  to: option.token.contractAddress,\n  gasLimit: option.gasLimit,\n  data: erc20Interface.encodeFunctionData('transfer', [option.to, option.value])\n}\n// === ^^^ USDC fee ^^^ ===\n\n\n\n// Send your transaction with the fee and quote to the relayer for dispatch\nconst txnResponse = await wallet.sendTransaction([txn, feeTxn], undefined, undefined, quote)\n\n// Wait for transaction to be mined\nconst txnReceipt = await txnResponse.wait()\n\n// Check if transaction was successful \nif (txnReceipt.status != 1) {\n  console.log(`Unexpected status: ${txnReceipt.status}`)\n}\n\n")),(0,o.kt)("h2",{id:"parallel-transactions"},"Parallel Transactions"),(0,o.kt)("p",null,"You can enforce that transactions can be executed in parallel by using a random nonce space, as follow; "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Import sequence nonce encoding function\nimport { encodeNonce } from '@0xsequence/transactions';\n\n// Generate random nonce spaces with ~0% probability of collision\nconst randomNonceSpace1 = ethers.BigNumber.from(ethers.utils.hexlify(ethers.utils.randomBytes(20)))\nconst randomNonceSpace2 = ethers.BigNumber.from(ethers.utils.hexlify(ethers.utils.randomBytes(20)))\n\n// Generate transactions\nconst txn1 = {\n        to: tokenContract.address,\n        data: erc20Interface.encodeFunctionData(\n          'transfer', [recipient1, amount1]\n        ),\n        nonce: encodeNonce(randomNonceSpace1, 0)\n      }\n\nconst txn2 = {\n        to: tokenContract.address,\n        data: erc20Interface.encodeFunctionData(\n          'transfer', [recipient2, amount2]\n        ),\n        nonce: encodeNonce(randomNonceSpace2, 0)\n      }\n\n// Dispatch transactions, which can now be executed in parallel\nconst txnResponse = await wallet.sendTransactionBatch([txn1, txn2])\n")),(0,o.kt)("p",null,"You can also send transactions in batches using ",(0,o.kt)("inlineCode",{parentName:"p"},"await wallet.sendTransactionBatch(txns)"),". You can read more about batch transactions in ",(0,o.kt)("a",{parentName:"p",href:"/build-with-sequence/send-batch-transactions"},"Sending Batched Transactions"),"."))}f.isMDXComponent=!0}}]);