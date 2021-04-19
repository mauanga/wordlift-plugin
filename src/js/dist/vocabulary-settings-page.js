!function(t){var e={};function n(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(s,r,function(e){return t[e]}.bind(null,r));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=253)}({0:function(t,e){t.exports=window.React},119:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var s=n(0),r=n.n(s);const a=({progress:t})=>r.a.createElement("div",{style:{width:"100%",height:"10px",backgroundColor:"#eee"}},r.a.createElement("div",{style:{width:t+"%",height:"10px",backgroundColor:"green",textAlign:"center"}}))},23:function(t,e){t.exports=window.ReactDOM},239:function(t,e,n){},253:function(t,e,n){"use strict";n.r(e);var s=n(23),r=n.n(s),a=n(0),i=n.n(a);n(239);var o=n(119);class c extends i.a.Component{constructor(t){super(t),this.state={stats:{index:0,count:0},isRequestInProgress:!1},this.buttonClickListener=this.buttonClickListener.bind(this),this.restartClickListener=this.restartClickListener.bind(this),this.getStats(),this.interval=setInterval(()=>this.getStats(),5e3)}componentWillUnmount(){clearInterval(this.interval)}getStats(){this.setState({isRequestInProgress:!0}),function(t){const{baseUrl:e,nonce:n}=t;return fetch(e+"/background_analysis/stats",{method:"POST",headers:{"X-WP-Nonce":n}}).then(t=>t.json()).then(t=>t)}(this.props.apiConfig).then(t=>{this.setState({stats:t,isRequestInProgress:!1})})}buttonClickListener(){this.setState({isRequestInProgress:!0}),this.isAnalysisRunning(this.state.stats)?function(t){const{baseUrl:e,nonce:n}=t;return fetch(e+"/background_analysis/stop",{method:"POST",headers:{"X-WP-Nonce":n}}).then(t=>t.json()).then(t=>t)}(this.props.apiConfig).then(()=>{this.updateAnalysisState("stopped")}):function(t){const{baseUrl:e,nonce:n}=t;return fetch(e+"/background_analysis/start",{method:"POST",headers:{"X-WP-Nonce":n}}).then(t=>t.json()).then(t=>t)}(this.props.apiConfig).then(()=>{this.updateAnalysisState("started")})}updateAnalysisState(t){this.setState(e=>({...e,stats:{...e.stats,state:t}}))}render(){const t=this.state.stats;let e=this.calcProgress(t);return e>100&&(e=100),i.a.createElement("div",{className:"wl_cmkg_analysis_progress_bar_container"},i.a.createElement("div",{style:{width:"90%"}},i.a.createElement("h3",null,"Analysis background task (",t.index+"/"+t.count,")"),i.a.createElement("br",null),i.a.createElement(o.a,{progress:e})),i.a.createElement("div",{style:{width:"10%"}},i.a.createElement("span",{style:{cursor:"pointer",fontSize:"30px",marginTop:"10px"},className:this.getIconName(t),onClick:this.buttonClickListener}),i.a.createElement("span",{style:{cursor:"pointer",fontSize:"30px",marginTop:"10px",marginLeft:"20px"},className:"dashicons dashicons-image-rotate",title:"Restart Analysis",onClick:this.restartClickListener})))}getIconName(t){return this.isAnalysisRunning(t)?"dashicons dashicons-controls-pause":"dashicons dashicons-controls-play"}isAnalysisRunning(t){return"started"===t.state}calcProgress(t){return 0===t.count||0===t.index?0:t.index/t.count*100}restartClickListener(){!0===confirm("Restarting analysis will remove the previous results, are you sure you want to proceed ? ")&&function(t){const{baseUrl:e,nonce:n}=t;return fetch(e+"/background_analysis/restart",{method:"POST",headers:{"X-WP-Nonce":n}}).then(t=>t.json()).then(t=>t)}(this.props.apiConfig).then(()=>{this.getStats()})}}window.addEventListener("load",()=>{const t=document.getElementById("wl_vocabulary_analysis_progress_bar");t&&r.a.render(i.a.createElement(c,{apiConfig:window.wlSettings.matchTerms}),t)})}});