"use strict";(self.webpackChunkwordlift_plugin_app=self.webpackChunkwordlift_plugin_app||[]).push([[562],{3562:(R,h,i)=>{i.r(h),i.d(h,{PostsModule:()=>d});var c=i(6895),m=i(8176),v=i(7579),z=i(4351),P=i(9635),u=i(8505),M=i(5698),w=i(9300),Z=i(6150),t=i(4650),T=i(240),x=i(8800),r=i(6666),_=i(545),y=i(5087),b=i(1354),A=i(1723),C=i(7423);function O(e,o){1&e&&t.GkF(0)}function J(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"wlx-filters",12),t.NdJ("filterChange",function(a){t.CHM(n);const g=t.oxw(2);return t.KtG(g.filter=a)})("filterChange",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.cursor.next(""))}),t.qZA()}if(2&e){const n=t.oxw(2);t.Q6J("filter",n.filter)("stats",n.stats)}}function S(e,o){if(1&e&&(t.TgZ(0,"div",9)(1,"p",10),t._uU(2),t.qZA(),t.YNc(3,J,1,2,"wlx-filters",11),t.qZA()),2&e){const n=t.oxw();t.xp6(2),t.AsE("",n.stats.total," ",n.stats.label,""),t.xp6(1),t.Q6J("ngIf",n.page)}}const I=function(){return{width:325}},Q=function(){return{width:100}};function E(e,o){if(1&e&&(t.TgZ(0,"tr",14)(1,"td"),t._UZ(2,"nz-skeleton",15),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"nz-skeleton",15),t.qZA()()),2&e){const n=t.oxw(2);t.xp6(2),t.Q6J("nzActive",!0)("nzLoading",n.loading)("nzParagraph",!1)("nzTitle",t.DdM(8,I)),t.xp6(2),t.Q6J("nzActive",!0)("nzLoading",n.loading)("nzParagraph",!1)("nzTitle",t.DdM(9,Q))}}function N(e,o){if(1&e&&(t.TgZ(0,"tbody"),t.YNc(1,E,5,10,"tr",13),t.qZA()),2&e){t.oxw();const n=t.MAs(8);t.xp6(1),t.Q6J("ngForOf",n.data)}}function U(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"tr",17)(1,"td")(2,"a",18),t._uU(3),t.qZA()(),t.TgZ(4,"td",19)(5,"wlx-main-ingredient",20),t.NdJ("onMainIngredientChange",function(a){const f=t.CHM(n).$implicit,B=t.oxw(2);return t.KtG(B.ingredientChange(f,a))})("onStartEdit",function(){const g=t.CHM(n).$implicit,f=t.oxw(2);return t.KtG(f.startEdit(g.id))})("onStopEdit",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.stopEdit())}),t.qZA()()()}if(2&e){const n=o.$implicit,s=t.oxw(2);t.xp6(2),t.Q6J("href",n.post_link,t.LSH),t.xp6(1),t.Oqu(n.post_title),t.xp6(2),t.Q6J("data",n)("editMode",s.editId===n.id)}}function F(e,o){if(1&e&&(t.TgZ(0,"tbody"),t.YNc(1,U,6,4,"tr",16),t.qZA()),2&e){t.oxw();const n=t.MAs(8);t.xp6(1),t.Q6J("ngForOf",n.data)}}const Y=function(){return[]};class p{constructor(o,n){this.appSettings=o,this.apiService=n,this.loading=!1,this.editId=null,this.cursor=new v.x,this.cursor$=this.cursor.asObservable().pipe((0,w.h)(s=>null!=s),(0,z.b)(s=>this.apiService.list({cursor:s,has_match:this.filter})),(0,P.z)((0,u.b)(s=>{this.page=s}))),this.stats=o.stats.find(s=>"Posts"===s.label)}ngOnInit(){this.apiService.list({}).pipe((0,u.b)(()=>this.loading=!1)).subscribe(o=>{this.page=o})}ingredientChange(o,n){(o.match_id?this.apiService.create({post_id:o.id,body:n}):this.apiService.update({post_id:o.id,match_id:o.match_id,body:n})).pipe((0,M.q)(1)).subscribe()}startEdit(o){this.editId=o}stopEdit(){this.editId=null}}p.\u0275fac=function(o){return new(o||p)(t.Y36(Z.N),t.Y36(T.s))},p.\u0275cmp=t.Xpm({type:p,selectors:[["wlx-posts"]],decls:19,vars:12,consts:[[4,"ngIf"],["nz-typography",""],["nz-typography","","nzType","secondary","id","description"],["id","filters",4,"ngIf"],[3,"nzData","nzNoResult","nzShowPagination"],["basicTable",""],["nzWidth","369.33px",1,"table-header"],["nz-icon","","nzType","question-circle","nzTheme","outline",1,"tooltip"],[3,"page","cursor"],["id","filters"],["id","count"],[3,"filter","stats","filterChange",4,"ngIf"],[3,"filter","stats","filterChange"],["class","table-row",4,"ngFor","ngForOf"],[1,"table-row"],[3,"nzActive","nzLoading","nzParagraph","nzTitle"],["class","table-row editable-row",4,"ngFor","ngForOf"],[1,"table-row","editable-row"],["target","_blank",3,"href"],[1,"autocomplete-input-column"],["datasetUri","https://knowledge.cafemedia.com/gardening/",1,"autocomplete-input",3,"data","editMode","onMainIngredientChange","onStartEdit","onStopEdit"]],template:function(o,n){1&o&&(t.YNc(0,O,1,0,"ng-container",0),t.ALo(1,"async"),t.TgZ(2,"h1",1),t._uU(3,"Posts"),t.qZA(),t.TgZ(4,"p",2),t._uU(5," Some copy that explains what is on this screen and how to work with it. Maybe it\u2019s a couple of sentences for two 3 rows of text maximum\n"),t.qZA(),t.YNc(6,S,4,3,"div",3),t.TgZ(7,"nz-table",4,5)(9,"thead")(10,"tr")(11,"th",6),t._uU(12,"Post title"),t.qZA(),t.TgZ(13,"th",6),t._uU(14," Matched Entity "),t._UZ(15,"span",7),t.qZA()()(),t.YNc(16,N,2,1,"tbody",0),t.YNc(17,F,2,1,"tbody",0),t.qZA(),t._UZ(18,"wlx-pagination",8)),2&o&&(t.Q6J("ngIf",t.lcZ(1,9,n.cursor$)),t.xp6(6),t.Q6J("ngIf",n.page),t.xp6(1),t.Q6J("nzData",n.page&&n.page.items?n.page.items:t.DdM(11,Y))("nzNoResult",void 0)("nzShowPagination",!1),t.xp6(9),t.Q6J("ngIf",n.loading),t.xp6(1),t.Q6J("ngIf",!n.loading),t.xp6(1),t.Q6J("page",n.page)("cursor",n.cursor))},dependencies:[c.sg,c.O5,x.ZU,r.N8,r.Uo,r._C,r.Om,r.p0,r.$Z,_.ng,y.Q,b.l,A.b,C.Ls,c.Ov],styles:[".editable-cell[_ngcontent-%COMP%]{position:relative;padding:5px 12px;cursor:pointer}.editable-row[_ngcontent-%COMP%]:hover   .editable-cell[_ngcontent-%COMP%]{border:1px solid #d9d9d9;border-radius:4px;padding:4px 11px}wlx-pagination[_ngcontent-%COMP%], #filters[_ngcontent-%COMP%]{width:100%;flex-direction:row;display:flex;align-items:center;margin-top:18px;margin-bottom:16px}#count[_ngcontent-%COMP%]{font-weight:400;font-size:14px;line-height:19px;color:#00000073;margin:0}wlx-filters[_ngcontent-%COMP%]{margin-left:auto}#description[_ngcontent-%COMP%]{font-weight:400;font-size:16px;line-height:24px;color:#000000a6;width:600px}.autocomplete-input[_ngcontent-%COMP%]{width:320px;height:32px;display:block}.autocomplete-input-column[_ngcontent-%COMP%]{padding:16px}.table-header[_ngcontent-%COMP%]{font-weight:600;font-size:14px;line-height:22px;color:#000000e0}.tooltip[_ngcontent-%COMP%]{margin:4px 3px}"]});const H=[{path:"",pathMatch:"full",redirectTo:"posts"},{path:"posts",data:{breadcrumb:"Posts"},component:p}];class l{}l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[m.Bz.forChild(H),m.Bz]});var $=i(2271),L=i(8231),D=i(5635),G=i(4586),K=i(2383);class d{}d.\u0275fac=function(o){return new(o||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[c.ez,l,x.ZJ,r.HQ,_.H0,$.m,L.LV,D.o7,G.D,K.ic,C.PV]})}}]);