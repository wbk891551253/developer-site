"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[2460],{71766:function(e,t,r){var n=r(97218),o=r(67294),i=(r(31877),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u9ed8\u8ba4\u503c",dataIndex:"dafault",width:"10%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return o.createElement(n.Z,{dataSource:e.dataSource,columns:i,pagination:!1})}},72181:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(75068),o=r(67294),i=r(45697),a=r.n(i),c=r(41481),d=function(e){function t(t){var r;return(r=e.call(this,t)||this).createRecevier=function(){r.destroyRecevier(),r.recevier=new c.Z,r.recevier.on("updateHeight",(function(e,t,n){r.iframe&&n===r.iframe.contentWindow&&(r.container.style.height=(e.msg||0)+"px",r.props.onUpdateHeight(e.msg||"#"))}))},r.destroyRecevier=function(){r.recevier&&(r.recevier.destroy(),r.recevier=null)},r.container=null,r.iframe=null,r}(0,n.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},r.componentDidUpdate=function(e){var t=e.url,r=e.disableHeightSync;e.style;t.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height||"800px"),r!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},r.componentWillUnmount=function(){this.destroyRecevier()},r.render=function(){var e=this,t=this.props,r=t.className,n=t.id,i=t.style,a=t.url;return a?o.createElement("div",{className:"bg-iframe "+r,id:n,style:Object.assign({height:800,width:"100%"},i),ref:function(t){e.container=t}},o.createElement("iframe",{src:a,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):o.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(o.PureComponent);d.displayName="bg-iframe",d.propTypes={className:a().string,disableHeightSync:a().bool,id:a().string,onUpdateHeight:a().func,style:a().object,url:a().string.isRequired},d.defaultProps={className:"",disableHeightSync:!1,id:"",onUpdateHeight:function(){},style:{},syncParam:!0,url:""}},24895:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=r(72181),c=r(71766),d=["components"],s={title:"\u62bd\u5c49",order:8},l="\u62bd\u5c49",p={unversionedId:"components/basic/drawer",id:"components/basic/drawer",title:"\u62bd\u5c49",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/basic/drawer.mdx",sourceDirName:"components/basic",slug:"/components/basic/drawer",permalink:"/docs/components/basic/drawer",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/basic/drawer.mdx",tags:[],version:"current",frontMatter:{title:"\u62bd\u5c49",order:8},sidebar:"components",previous:{title:"\u5bf9\u8bdd\u6846",permalink:"/docs/components/basic/dialog"},next:{title:"\u89c6\u9891\u64ad\u653e",permalink:"/docs/components/basic/video"}},u=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],m={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,d);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u62bd\u5c49"},"\u62bd\u5c49"),(0,i.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,i.kt)(a.Z,{url:"https://pre-yida-performance3.alibaba-inc.com/developer/drawer-v2?isRenderNav=false",mdxType:"Iframe"}),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,i.kt)(c.Z,{dataSource:[{attr:"\u6807\u9898",code:"title",type:"String",demo:"\u6807\u9898",dafault:"",desc:""},{attr:"\u5bbd\u5ea6",code:"width",type:"String",demo:"520px",dafault:"",desc:""},{attr:"\u9ad8\u5ea6",code:"height",type:"String",demo:"600px",dafault:"",desc:""},{attr:"\u662f\u5426\u663e\u793a",code:"hasMask",type:"bool",demo:"true",dafault:"",desc:""},{attr:"\u663e\u793a\u906e\u7f69",code:"iconName",type:"String",demo:"add",dafault:"",desc:""},{attr:"\u5f39\u51fa\u4f4d\u7f6e",code:"placement",type:"string",demo:'"top"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"top","bottom","left","right" '},{attr:"\u5173\u95ed\u65b9\u5f0f",code:"closeable",type:"array",demo:'["mask"]',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"mask","esc"'},{attr:"\u663e\u793afooter",code:"footer",type:"bool",demo:'"true"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"left","right","center"'},{attr:"footer\u5bf9\u9f50\u65b9\u5f0f",code:"footerAlign",type:"string",demo:'"right"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"left","right","center"'},{attr:"footer\u6392\u5217\u65b9\u5f0f",code:"footerActions",type:"string",demo:'""ok,cancel" "',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"ok,cancel","cancel,ok","ok","cancel"'},{attr:"onOk",code:"onOk",type:"function ",demo:"()=>{} ",dafault:"",desc:""},{attr:"onCancel",code:"onCancel",type:"function ",demo:"()=>{} ",dafault:"",desc:""},{attr:"afterClose",code:"afterClose",type:"function ",demo:"()=>{} ",dafault:"",desc:""}],mdxType:"AttrTable"}))}f.isMDXComponent=!0}}]);