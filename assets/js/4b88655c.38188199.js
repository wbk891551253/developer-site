"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[8313],{94579:function(e,t,n){var i=n(97218),a=n(59301),o=(n(94648),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return a.createElement(i.Z,{dataSource:e.dataSource,columns:o,pagination:!1})}},50199:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(44117),a=n(59301),o=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),r=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new o,n.recevier.on("updateHeight",(function(e,t,i){n.iframe&&i===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,i=t.id,o=t.style,r=t.url;return r?a.createElement("div",{className:"bg-iframe "+n,id:i,style:Object.assign({height:800,width:"100%"},o),ref:function(t){e.container=t}},a.createElement("iframe",{src:r,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):a.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(a.PureComponent);r.displayName="bg-iframe"},18064:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var i=n(21810),a=n(86919),o=(n(59301),n(99278)),r=n(50199),d=n(94579),s=["components"],c={title:"\u7ffb\u9875\u5668",order:9},l="\u7ffb\u9875\u5668",p={unversionedId:"components/advanced/pagination",id:"components/advanced/pagination",title:"\u7ffb\u9875\u5668",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/advanced/pagination.mdx",sourceDirName:"components/advanced",slug:"/components/advanced/pagination",permalink:"/developer-site/docs/components/advanced/pagination",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/advanced/pagination.mdx",tags:[],version:"current",frontMatter:{title:"\u7ffb\u9875\u5668",order:9},sidebar:"components",previous:{title:"\u67e5\u8be2",permalink:"/developer-site/docs/components/advanced/filter"},next:{title:"\u6811\u5f62\u63a7\u4ef6",permalink:"/developer-site/docs/components/advanced/tree"}},u=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2}],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7ffb\u9875\u5668"},"\u7ffb\u9875\u5668"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728\u6709\u5927\u91cf\u5185\u5bb9\u5c55\u73b0\u9700\u8981\u8fdb\u884c\u5206\u9875\u52a0\u8f7d\u5904\u7406\u7684\u65f6\u5019\uff1b")),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(r.Z,{url:"https://www.aliwork.com/developer/pagination-v2?isRenderNav=false",mdxType:"Iframe"}),"## \u7ec4\u4ef6\u5c5e\u6027",(0,o.kt)(d.Z,{dataSource:[{attr:"\u603b\u8bb0\u5f55\u6570",code:"total",type:"String",demo:"",dafault:"100",desc:""},{attr:"\u5f53\u524d\u9875\u7801",code:"current",type:"String",demo:"",dafault:"1",desc:""},{attr:"\u5206\u9875\u5c3a\u5bf8",code:"size",type:"String",demo:'"small"',dafault:"normal",desc:'"small" "medium" "large"'},{attr:"\u5206\u9875\u7c7b\u578b",code:"type",type:"String",demo:'"normal"',dafault:"normal",desc:'"normal" "simple" "mini"'},{attr:"\u524d\u8fdb\u540e\u9000\u6309\u94ae\u6837\u5f0f",code:"shape",type:"String",demo:'"normal" "arrow-only" "arrow-prev-only" "no-border"',dafault:"false",desc:""},{attr:"\u6bcf\u9875\u663e\u793a\u9009\u62e9\u5668\u7c7b\u578b",code:"pageSizeSelector",type:"boolean/string",demo:"'false, 'filter', 'dropdown'",dafault:"false",desc:""},{attr:"\u6bcf\u9875\u663e\u793a\u9009\u62e9\u5668\u53ef\u9009\u503c",code:"pageSizeList",type:"String",demo:'"5, 10, 20" ',dafault:"",desc:""},{attr:"pageSize",code:"pageSize",type:"String",demo:"",dafault:"10",desc:""},{attr:"\u6bcf\u9875\u663e\u793a\u9009\u62e9\u5668\u5728\u7ec4\u4ef6\u4e2d\u7684\u4f4d\u7f6e",code:"pageSizePosition",type:"String",demo:'"start" "end"',dafault:'"end"',desc:""},{attr:"\u5f53\u5206\u9875\u6570\u4e3a 1 \u65f6\uff0c\u662f\u5426\u9690\u85cf\u5206\u9875\u5668",code:"hideOnlyOnePage",type:"String",demo:"",dafault:"false",desc:""},{attr:"\u663e\u793a\u8df3\u8f6c\u8f93\u5165\u6846\u4e0e\u6309\u94ae",code:"showJump",type:"String",demo:"",dafault:"true",desc:""},{attr:"\u5f53\u6bcf\u9875\u6570\u91cf\u6539\u53d8\u65f6",code:"onPageSizeChange",type:"Function",demo:"function(pageSize){}",dafault:"",desc:""},{attr:"\u5f53\u9875\u7801\u6539\u53d8\u65f6",code:"onChange",type:"Function",demo:"ffunction(currentPagination){}",dafault:"",desc:""}],mdxType:"AttrTable"}))}f.isMDXComponent=!0}}]);