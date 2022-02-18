"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[2748],{71766:function(e,t,n){var o=n(97218),d=n(67294),i=(n(31877),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u9ed8\u8ba4\u503c",dataIndex:"dafault",width:"10%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return d.createElement(o.Z,{dataSource:e.dataSource,columns:i,pagination:!1})}},72181:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(75068),d=n(67294),i=n(45697),a=n.n(i),r=n(41481),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new r.Z,n.recevier.on("updateHeight",(function(e,t,o){n.iframe&&o===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){var t=e.url,n=e.disableHeightSync;e.style;t.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height||"800px"),n!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,o=t.id,i=t.style,a=t.url;return a?d.createElement("div",{className:"bg-iframe "+n,id:o,style:Object.assign({height:800,width:"100%"},i),ref:function(t){e.container=t}},d.createElement("iframe",{src:a,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):d.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(d.PureComponent);c.displayName="bg-iframe",c.propTypes={className:a().string,disableHeightSync:a().bool,id:a().string,onUpdateHeight:a().func,style:a().object,url:a().string.isRequired},c.defaultProps={className:"",disableHeightSync:!1,id:"",onUpdateHeight:function(){},style:{},syncParam:!0,url:""}},64622:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return f}});var o=n(87462),d=n(63366),i=(n(67294),n(3905)),a=n(72181),r=n(71766),c=["components"],l={title:"\u660e\u7ec6",order:16},s="\u660e\u7ec6",u={unversionedId:"components/form/tableField",id:"components/form/tableField",title:"\u660e\u7ec6",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/tableField.mdx",sourceDirName:"components/form",slug:"/components/form/tableField",permalink:"/docs/components/form/tableField",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/form/tableField.mdx",tags:[],version:"current",frontMatter:{title:"\u660e\u7ec6",order:16},sidebar:"components",previous:{title:"\u7ea7\u8054\u9009\u62e9",permalink:"/docs/components/form/cascadeSelectField"},next:{title:"JSX",permalink:"/docs/components/advanced/JSX"}},m=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],p={toc:m};function f(e){var t=e.components,n=(0,d.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u660e\u7ec6"},"\u660e\u7ec6"),(0,i.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,i.kt)(a.Z,{url:"https://pre-yida-performance3.alibaba-inc.com/developer/table-field-v2?isRenderNav=false",mdxType:"Iframe"}),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,i.kt)(r.Z,{dataSource:[{attr:"\u6807\u9898",code:"label",type:"String",demo:"\u6807\u9898",dafault:"",desc:""},{attr:"\u663e\u793a\u6807\u9898",code:"showLabel",type:"bool",demo:"true",dafault:"",desc:""},{attr:"\u9ed8\u8ba4\u503c",code:"value",type:"Array",demo:'[{"fieldId1": "123", "fieldId2": "456"}, {"fieldId1": "abc", "fieldId2": "def"}] ',dafault:"",desc:""},{attr:"\u6392\u5217\u65b9\u5f0f",code:"representation",type:"string",demo:"\u201cTILED\u201d",dafault:"",desc:'\u53ef\u9009\u503c\uff1a"TILED", "TABLE"'},{attr:"\u5c55\u73b0\u65b9\u5f0f",code:"layout",type:"string",demo:'"VERTICAL"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"VERTICAL", "HORIZONTAL"'},{attr:"\u4e3b\u9898",code:"theme",type:"string",demo:'"split"',dafault:"",desc:'\u53ea\u5728 PC \u8868\u683c\u6a21\u5f0f\u4e0b\u6709\u6548\uff0c\u53ef\u9009\u503c\uff1a"zebra", "split", "border"'},{attr:"\u663e\u793a\u5e8f\u53f7",code:"showIndex",type:"bool",demo:"true",dafault:"",desc:"\u53ea\u5728 PC \u8868\u683c\u6a21\u5f0f\u4e0b\u6709\u6548 "},{attr:"\u663e\u793a\u8868\u5934",code:"showTableHead",type:"bool",demo:"true",dafault:"",desc:"\u53ea\u5728 PC \u8868\u683c\u6a21\u5f0f\u4e0b\u6709\u6548"},{attr:"\u6309\u94ae\u540d\u79f0",code:"buttonName",type:"string",demo:' "\u65b0\u589e\u4e00\u6761"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a\u201cleft\u201d,\u201dright"'},{attr:"\u5220\u9664\u6309\u94ae",code:"deleteButtonName",type:"string",demo:'"\u5220\u9664"',dafault:"",desc:""},{attr:"\u72b6\u6001",code:"behavior",type:"string",demo:'{fieldBehavior: "NORMAL"}',dafault:"",desc:'fieldBehavior \u53ef\u9009\u503c\uff1a"NORMAL","DISABLED","READONLY","HIDDEN"'},{attr:"\u6700\u5927\u5bbd\u5ea6",code:"style",type:"object",demo:'{ maxWidth:"100%" } ',dafault:"",desc:"\u4ec5 PC \u7aef\u652f\u6301"},{attr:"\u6700\u5927\u6761\u6570",code:"listNum",type:"number",demo:"10",dafault:"",desc:""},{attr:"\u6700\u5c0f\u6761\u6570",code:"listMinNum",type:"number",demo:"1",dafault:"",desc:""},{attr:"\u989d\u5916\u6309\u94ae",code:"importButton",type:"string",demo:'"\u5176\u4ed6\u6309\u94ae"',dafault:"",desc:""},{attr:"\u70b9\u51fb\u6dfb\u52a0\u4e8b\u4ef6",code:"onAddClick",type:"function",demo:"function(ctx) {} ",dafault:"",desc:""},{attr:"\u70b9\u51fb\u5220\u9664\u4e8b\u4ef6",code:"onDelClick",type:"function",demo:"function(ctx) {} ",dafault:"",desc:""},{attr:"\u70b9\u51fb\u81ea\u5b9a\u4e49\u6309\u94ae\u4e8b\u4ef6",code:"onClick",type:"function",demo:"function(ctx) {}",dafault:"",desc:""},{attr:"\u503c\u53d1\u751f\u6539\u53d8\u4e8b\u4ef6",code:"onChange",type:"function",demo:"function({ values, extra }) {}",dafault:"",desc:"'extra \u7ed3\u6784\uff1a{ from: '\u52a8\u4f5c\u6765\u6e90\uff0c\u5982 add_item / del_item', formGroupId: '\u8868\u5355\u5206\u7ec4 ID', changes: { name: '\u5b57\u6bb5\u540d\u79f0', value: '\u5b57\u6bb5\u503c' } }'"}],mdxType:"AttrTable"}))}f.isMDXComponent=!0}}]);