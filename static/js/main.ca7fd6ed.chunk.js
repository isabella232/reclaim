(this["webpackJsonp@project/react-app"]=this["webpackJsonp@project/react-app"]||[]).push([[0],{100:function(e){e.exports=JSON.parse('[{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"releaseDeed","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"getAllowedTime","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"unhashedName","type":"string"}],"name":"invalidateName","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"hash","type":"bytes32"},{"name":"owner","type":"address"},{"name":"value","type":"uint256"},{"name":"salt","type":"bytes32"}],"name":"shaBid","outputs":[{"name":"sealedBid","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"bidder","type":"address"},{"name":"seal","type":"bytes32"}],"name":"cancelBid","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"entries","outputs":[{"name":"","type":"uint8"},{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ens","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"},{"name":"_value","type":"uint256"},{"name":"_salt","type":"bytes32"}],"name":"unsealBid","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"transferRegistrars","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"bytes32"}],"name":"sealedBids","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"state","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"},{"name":"newOwner","type":"address"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_hash","type":"bytes32"},{"name":"_timestamp","type":"uint256"}],"name":"isAllowed","outputs":[{"name":"allowed","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"finalizeAuction","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"registryStarted","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"launchLength","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"sealedBid","type":"bytes32"}],"name":"newBid","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"labels","type":"bytes32[]"}],"name":"eraseNode","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hashes","type":"bytes32[]"}],"name":"startAuctions","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"bytes32"},{"name":"deed","type":"address"},{"name":"registrationDate","type":"uint256"}],"name":"acceptRegistrarTransfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"startAuction","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"rootNode","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"hashes","type":"bytes32[]"},{"name":"sealedBid","type":"bytes32"}],"name":"startAuctionsAndBid","outputs":[],"payable":true,"type":"function"},{"inputs":[{"name":"_ens","type":"address"},{"name":"_rootNode","type":"bytes32"},{"name":"_startDate","type":"uint256"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":false,"name":"registrationDate","type":"uint256"}],"name":"AuctionStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":true,"name":"bidder","type":"address"},{"indexed":false,"name":"deposit","type":"uint256"}],"name":"NewBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":true,"name":"owner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"status","type":"uint8"}],"name":"BidRevealed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":true,"name":"owner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"registrationDate","type":"uint256"}],"name":"HashRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"}],"name":"HashReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":true,"name":"name","type":"string"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"registrationDate","type":"uint256"}],"name":"HashInvalidated","type":"event"}]')},101:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"label","type":"bytes32"},{"name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"name":"","type":"uint64"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":true,"name":"label","type":"bytes32"},{"indexed":false,"name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"}]')},106:function(e,t,n){e.exports=n(160)},111:function(e,t,n){},113:function(e,t){},117:function(e,t){},119:function(e,t){},132:function(e,t){},156:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var a=n(11),s=n.n(a),u=n(92),i=n.n(u),r=n(42),c=n(23),o=(n(111),n(4)),p=n.n(o),y=n(44),l=n(39),m=n(60),d=n(69),I=n(61),b=(n(153),n(99)),M=n.n(b),f=n(52),j={registrar:n(100),registry:n(101)};n(156);function g(){var e=Object(m.a)(["\nquery Account($account: String!){\n  account(id:$account){\n    id\n    deeds {\n      id\n      value\n      name {\n        id\n      }\n    }\n  }\n}\n"]);return g=function(){return e},e}function h(){var e=Object(m.a)(['\nquery {\n\tstatsEntity(id:""){\n    id\n    numOfDeeds\n    currentValue\n    accumValue\n  }\n}\n']);return h=function(){return e},e}function N(){var e=Object(m.a)(["\nquery Account($account: String!){\n  account(id:$account){\n\t\tid\n    domains{\n      id\n      labelhash\n      labelName\n    }\n  }\n}\n"]);return N=function(){return e},e}var w=Object(r.b)(N()),x=Object(r.b)(h()),L=Object(r.b)(g());var A,D,S,T,v,O=function(e){var t,n=e.ensClient,u=e.registrarAddress,i=e.registryAddress,r=e.stage,c=Object(a.useState)(!1),o=Object(l.a)(c,2),m=o[0],b=o[1],g=Object(a.useState)(""),h=Object(l.a)(g,2),N=h[0],A=h[1],D=Object(a.useState)(""),S=Object(l.a)(D,2),T=S[0],v=S[1],O=Object(a.useState)(!1),C=Object(l.a)(O,2),E=C[0],z=C[1],k=Object(a.useState)(""),Y=Object(l.a)(k,2),P=Y[0],U=Y[1],W=Object(a.useState)(!1),Z=Object(l.a)(W,2),G=Z[0],B=Z[1],Q=Object(a.useState)(!1),H=Object(l.a)(Q,2),R=H[0],V=H[1],J=Object(a.useState)(!1),_=Object(l.a)(J,2),F=_[0],X=_[1],K=Object(f.a)(L,{variables:{account:N}}).data,q=Object(f.a)(w,{variables:{account:N},client:n}).data,$=Object(f.a)(x).data,ee=($=void 0===$?{}:$).statsEntity,te=function(){var e=Object(y.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAddress();case 2:n=e.sent,z(n.toLowerCase()),U(n.toLowerCase()),A(n.toLowerCase());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(y.a)(p.a.mark((function e(t,n){var a,s,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.match(/\.eth/)){e.next=2;break}return e.abrupt("return",!1);case 2:return e.prev=2,a=M.a.hash(n),s=new d.a(i,j.registry,t),e.next=7,s.owner(a);case 7:return u=e.sent,e.abrupt("return",u);case 11:return e.prev=11,e.t0=e.catch(2),V("Problem looking up the name"),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,n){return e.apply(this,arguments)}}(),ae=function(){var e=Object(y.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value.toLowerCase(),e.next=3,ne(m,n);case 3:a=e.sent,U(n.toLowerCase()),A(a&&"0x0000000000000000000000000000000000000000"!==a?a.toLowerCase():n.toLowerCase());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(y.a)(p.a.mark((function e(t,n){var a,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.getSigner(),s=new d.a(u,j.registrar,t),i=s.connect(a),e.next=5,i.releaseDeed(n);case 5:e.sent,V("Transaction has been sent");case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ue=function(){var e=Object(y.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request({method:"eth_requestAccounts"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(y.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t,!e.t0){e.next=5;break}return e.next=4,t.getNetwork();case 4:e.t0=e.sent;case 5:n=e.t0,v(n.chainId);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){window&&window.ethereum?(ue(window.ethereum),b(new I.c(window.ethereum)),t=m&&m.getSigner(),G?E||t&&te(t):B(!0)):b("live"===r?new I.a:new I.b("http://localhost:8545")),ie(m),X(G?1!==T&&"You are connected to the wrong network(only mainnet is supported)":"Your browser is not connected to wallet (eg: Metamask)")}),[window,N,G,E,T,F]);var re=(E&&E.toLowerCase())===(N&&N.toLowerCase()),ce=[];K&&K.account&&(ce=K.account.deeds);var oe=ce.map((function(e){var t=q&&q.account&&q.account.domains.filter((function(t){return t.labelhash===e.name.id}))[0];return{id:e.id,name:t&&t.labelName,labelhash:e.name.id,value:e.value}}));return F&&console.log("warning is already set"),console.log({connected:G,network:T}),s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNzIuNTIgODAuOTUiPjxkZWZzPjxzdHlsZT4uY2xzLTN7ZmlsbDojYTBhOGQ0fTwvc3R5bGU+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSI0MS45NSIgeTE9IjIuNTciIHgyPSIxMi41NyIgeTI9IjM0LjQyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIuNTgiIHN0b3AtY29sb3I9IiNhMGE4ZDQiLz48c3RvcCBvZmZzZXQ9Ii43MyIgc3RvcC1jb2xvcj0iIzg3OTFjNyIvPjxzdG9wIG9mZnNldD0iLjkxIiBzdG9wLWNvbG9yPSIjNjQ3MGI0Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiB4MT0iNDIuNTciIHkxPSI4MS42NiIgeDI9IjcxLjk2IiB5Mj0iNDkuODEiIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQiLz48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0zIiB4MT0iNDIuMjYiIHkxPSIxLjI0IiB4Mj0iNDIuMjYiIHkyPSI4Mi44NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzUxM2VmZiIvPjxzdG9wIG9mZnNldD0iLjE4IiBzdG9wLWNvbG9yPSIjNTE1N2ZmIi8+PHN0b3Agb2Zmc2V0PSIuNTciIHN0b3AtY29sb3I9IiM1Mjk4ZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1MmU1ZmYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBzdHlsZT0iaXNvbGF0aW9uOmlzb2xhdGUiPjxnIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGQ9Ik0xNS4yOCAzNC4zOWMuOCAxLjcxIDIuNzggNS4wOSAyLjc4IDUuMDlMNDAuOTUgMS42NGwtMjIuMzQgMTUuNmE5Ljc1IDkuNzUgMCAwIDAtMy4xOCAzLjUgMTYuMTkgMTYuMTkgMCAwIDAtLjE1IDEzLjY1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYgLTEuNjQpIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik02LjIxIDQ2Ljg1YTI1LjQ3IDI1LjQ3IDAgMCAwIDEwIDE4LjUxbDI0LjcxIDE3LjIzcy0xNS40Ni0yMi4yOC0yOC41LTQ0LjQ1YTIyLjM5IDIyLjM5IDAgMCAxLTIuNjItNy41NiAxMi4xIDEyLjEgMCAwIDEgMC0zLjYzYy0uMzQuNjMtMSAxLjkyLTEgMS45MmEyOS4zNSAyOS4zNSAwIDAgMC0yLjY3IDguNTUgNTIuMjggNTIuMjggMCAwIDAgLjA4IDkuNDN6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNiAtMS42NCkiLz48cGF0aCBkPSJNNjkuMjUgNDkuODRjLS44LTEuNzEtMi43OC01LjA5LTIuNzgtNS4wOUw0My41OCA4Mi41OSA2NS45MiA2N2E5Ljc1IDkuNzUgMCAwIDAgMy4xOC0zLjUgMTYuMTkgMTYuMTkgMCAwIDAgLjE1LTEzLjY2eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYgLTEuNjQpIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC0yKSIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTc4LjMyIDM3LjM4YTI1LjQ3IDI1LjQ3IDAgMCAwLTEwLTE4LjUxTDQzLjYxIDEuNjRzMTUuNDUgMjIuMjggMjguNSA0NC40NWEyMi4zOSAyMi4zOSAwIDAgMSAyLjYxIDcuNTYgMTIuMSAxMi4xIDAgMCAxIDAgMy42M2MuMzQtLjYzIDEtMS45MiAxLTEuOTJhMjkuMzUgMjkuMzUgMCAwIDAgMi42Ny04LjU1IDUyLjI4IDUyLjI4IDAgMCAwLS4wNy05LjQzeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYgLTEuNjQpIi8+PHBhdGggZD0iTTE1LjQzIDIwLjc0YTkuNzUgOS43NSAwIDAgMSAzLjE4LTMuNWwyMi4zNC0xNS42LTIyLjg5IDM3Ljg1cy0yLTMuMzgtMi43OC01LjA5YTE2LjE5IDE2LjE5IDAgMCAxIC4xNS0xMy42NnpNNi4yMSA0Ni44NWEyNS40NyAyNS40NyAwIDAgMCAxMCAxOC41MWwyNC43MSAxNy4yM3MtMTUuNDYtMjIuMjgtMjguNS00NC40NWEyMi4zOSAyMi4zOSAwIDAgMS0yLjYyLTcuNTYgMTIuMSAxMi4xIDAgMCAxIDAtMy42M2MtLjM0LjYzLTEgMS45Mi0xIDEuOTJhMjkuMzUgMjkuMzUgMCAwIDAtMi42NyA4LjU1IDUyLjI4IDUyLjI4IDAgMCAwIC4wOCA5LjQzem02MyAzYy0uOC0xLjcxLTIuNzgtNS4wOS0yLjc4LTUuMDlMNDMuNTggODIuNTkgNjUuOTIgNjdhOS43NSA5Ljc1IDAgMCAwIDMuMTgtMy41IDE2LjE5IDE2LjE5IDAgMCAwIC4xNS0xMy42NnptOS4wNy0xMi40NmEyNS40NyAyNS40NyAwIDAgMC0xMC0xOC41MUw0My42MSAxLjY0czE1LjQ1IDIyLjI4IDI4LjUgNDQuNDVhMjIuMzkgMjIuMzkgMCAwIDEgMi42MSA3LjU2IDEyLjEgMTIuMSAwIDAgMSAwIDMuNjNjLjM0LS42MyAxLTEuOTIgMS0xLjkyYTI5LjM1IDI5LjM1IDAgMCAwIDIuNjctOC41NSA1Mi4yOCA1Mi4yOCAwIDAgMC0uMDctOS40M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02IC0xLjY0KSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOmNvbG9yIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC0zKSIvPjwvZz48L2c+PC9zdmc+",className:"App-logo",alt:"react-logo"}),s.a.createElement("h2",null,"Unclaimed deposit search"),F&&s.a.createElement("span",{style:{color:"yellow",marginBottom:"5px"}},F),s.a.createElement("input",{onChange:ae,placeholder:"Enter ENS name or ETH address",value:P}),oe&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{marginTop:"5px"}},N),P&&s.a.createElement("div",null,"owns ",100===oe.length?"more than":""," ",oe.length," name",1===oe.length?"":"s"," to claim deposit against"),s.a.createElement("ul",null,oe.map((function(e){console.log("**domains",{d:e});var t=e.name?"".concat(e.name,".eth"):"".concat(e.labelhash&&e.labelhash.slice(0,5),"...");return s.a.createElement("li",null,s.a.createElement("span",null,t," has ",e.value/Math.pow(10,18)," ETH deposit"),G&&re&&s.a.createElement("button",{onClick:function(){return se(m,e.labelhash)}},"Claim"))}))),s.a.createElement("span",{style:{width:"60%",marginBottom:"1em",color:"yellow"}},R),oe.length>0&&!re?s.a.createElement("span",{style:{width:"60%",marginBottom:"1em"}},"To claim back the deposit, you need to connect to the wallet which auctioned off the names"):"")),s.a.createElement("div",{className:"App-body"},ee&&s.a.createElement(s.a.Fragment,null,"There are currently ",ee.numOfDeeds," deeds holding ",(ee.currentValue/Math.pow(10,18)).toFixed(2)," ETH ",s.a.createElement("br",null),"To understand more about these unclaimed deposits, ",s.a.createElement("a",{href:""},"read the blog post"),".")))};console.log({ENV:Object({NODE_ENV:"production",PUBLIC_URL:"/claim-deposit",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_STAGE:"live"})}),A="live",D="https://api.thegraph.com/subgraphs/name/makoto/ens-reclaim-deposit-subgraph",S="https://api.thegraph.com/subgraphs/name/ensdomains/ens",v="0x6090a6e47849629b7245dfa1ca21d94cd15878ef",T="0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";var C=new r.a({uri:D}),E=new r.a({uri:S});i.a.render(s.a.createElement(c.a,{client:C},s.a.createElement(O,{ensClient:E,registrarAddress:v,registryAddress:T,stage:A})),document.getElementById("root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.ca7fd6ed.chunk.js.map