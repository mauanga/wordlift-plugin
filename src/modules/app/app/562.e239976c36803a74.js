"use strict";(self.webpackChunkwordlift_plugin_app=self.webpackChunkwordlift_plugin_app||[]).push([[562],{3562:(W,f,e)=>{e.r(f),e.d(f,{PostsModule:()=>d});var p=e(6895),m=e(8176),z=e(7579),_=e(4351),y=e(9635),u=e(8505),w=e(5698),T=e(9300),M=e(6150),t=e(4650),Z=e(240),x=e(8800),r=e(13),C=e(545),b=e(5087),A=e(1354),O=e(1723),P=e(7423),I=e(5505),v=e(7570);function S(i,o){1&i&&t.GkF(0)}function F(i,o){if(1&i){const n=t.EpF();t.TgZ(0,"wlx-filters",12),t.NdJ("filterChange",function(a){t.CHM(n);const g=t.oxw(2);return t.KtG(g.filter=a)})("filterChange",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.cursor.next(""))}),t.qZA()}if(2&i){const n=t.oxw(2);t.Q6J("filter",n.filter)("stats",n.stats)}}function J(i,o){if(1&i&&(t.TgZ(0,"div",9)(1,"p",10),t._uU(2),t.qZA(),t.YNc(3,F,1,2,"wlx-filters",11),t.qZA()),2&i){const n=t.oxw();t.xp6(2),t.AsE("",n.stats.total," ",n.stats.label,""),t.xp6(1),t.Q6J("ngIf",n.page)}}const N=function(){return{width:325}},E=function(){return{width:100}};function Q(i,o){if(1&i&&(t.TgZ(0,"tr",14)(1,"td"),t._UZ(2,"nz-skeleton",15),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"nz-skeleton",15),t.qZA()()),2&i){const n=t.oxw(2);t.xp6(2),t.Q6J("nzActive",!0)("nzLoading",n.loading)("nzParagraph",!1)("nzTitle",t.DdM(8,N)),t.xp6(2),t.Q6J("nzActive",!0)("nzLoading",n.loading)("nzParagraph",!1)("nzTitle",t.DdM(9,E))}}function U(i,o){if(1&i&&(t.TgZ(0,"tbody"),t.YNc(1,Q,5,10,"tr",13),t.qZA()),2&i){t.oxw();const n=t.MAs(8);t.xp6(1),t.Q6J("ngForOf",n.data)}}function Y(i,o){if(1&i){const n=t.EpF();t.TgZ(0,"tr",17)(1,"td")(2,"a",18),t._uU(3),t.qZA()(),t.TgZ(4,"td",19)(5,"wlx-main-ingredient",20),t.NdJ("onMainIngredientChange",function(a){const h=t.CHM(n).$implicit,V=t.oxw(2);return t.KtG(V.ingredientChange(h,a))})("onStartEdit",function(){const g=t.CHM(n).$implicit,h=t.oxw(2);return t.KtG(h.startEdit(g.id))})("onStopEdit",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.stopEdit())}),t.qZA()()()}if(2&i){const n=o.$implicit,s=o.index,a=t.oxw(2);t.xp6(2),t.Q6J("href",n.post_link,t.LSH),t.xp6(1),t.Oqu(n.post_title),t.xp6(2),t.Q6J("wlxCyId","AutoCompleteField"+s)("data",n)("editMode",a.editId===n.id)}}function H(i,o){if(1&i&&(t.TgZ(0,"tbody"),t.YNc(1,Y,6,5,"tr",16),t.qZA()),2&i){t.oxw();const n=t.MAs(8);t.xp6(1),t.Q6J("ngForOf",n.data)}}const L=function(){return[]};class c{constructor(o,n){this.appSettings=o,this.apiService=n,this.loading=!1,this.editId=null,this.cursor=new z.x,this.cursor$=this.cursor.asObservable().pipe((0,T.h)(s=>null!=s),(0,_.b)(s=>this.apiService.list({cursor:s,has_match:this.filter})),(0,y.z)((0,u.b)(s=>{this.page=s}))),this.Number=Number,this.stats=o.stats.find(s=>"Posts"===s.label)}ngOnInit(){this.apiService.list({}).pipe((0,u.b)(()=>this.loading=!1)).subscribe(o=>{this.page=o})}ingredientChange(o,n){(o.match_id?this.apiService.create({post_id:o.id,body:n}):this.apiService.update({post_id:o.id,match_id:o.match_id,body:n})).pipe((0,w.q)(1)).subscribe()}startEdit(o){this.editId=o}stopEdit(){this.editId=null}}c.\u0275fac=function(o){return new(o||c)(t.Y36(M.N),t.Y36(Z.s))},c.\u0275cmp=t.Xpm({type:c,selectors:[["wlx-posts"]],decls:19,vars:14,consts:[[4,"ngIf"],["nz-typography","","id","heading"],["nz-typography","","nzType","secondary","id","description"],["id","filters",4,"ngIf"],[3,"nzData","nzNoResult","nzShowPagination","nzFrontPagination","nzTotal"],["basicTable",""],["nzWidth","369.33px",1,"table-header"],["nz-icon","","nzType","question-circle","nzTheme","outline","nz-tooltip","","nzTooltipTitle","The main entity matching the post title.",1,"tooltip"],["wlxCy","","wlxCyId","PostsPagination",3,"page","cursor"],["id","filters"],["id","count"],["wlxCy","","wlxCyId","PostsFilters",3,"filter","stats","filterChange",4,"ngIf"],["wlxCy","","wlxCyId","PostsFilters",3,"filter","stats","filterChange"],["class","table-row",4,"ngFor","ngForOf"],[1,"table-row"],[3,"nzActive","nzLoading","nzParagraph","nzTitle"],["class","table-row editable-row",4,"ngFor","ngForOf"],[1,"table-row","editable-row"],["target","_blank",3,"href"],[1,"autocomplete-input-column"],["wlxCy","","datasetUri","https://knowledge.cafemedia.com/gardening/",1,"autocomplete-input","editable-cell",3,"wlxCyId","data","editMode","onMainIngredientChange","onStartEdit","onStopEdit"]],template:function(o,n){1&o&&(t.YNc(0,S,1,0,"ng-container",0),t.ALo(1,"async"),t.TgZ(2,"h1",1),t._uU(3,"Posts"),t.qZA(),t.TgZ(4,"p",2),t._uU(5,' This is the list of the Posts. For each Post, WordLift matched the main entity which will show in the Structured Data "about" property To assign a new entity, click on the name (or on the dash) and start typing to select it from the list. Then click anywhere to accept the change.\n'),t.qZA(),t.YNc(6,J,4,3,"div",3),t.TgZ(7,"nz-table",4,5)(9,"thead")(10,"tr")(11,"th",6),t._uU(12,"Post title"),t.qZA(),t.TgZ(13,"th",6),t._uU(14," Matched Entity "),t._UZ(15,"span",7),t.qZA()()(),t.YNc(16,U,2,1,"tbody",0),t.YNc(17,H,2,1,"tbody",0),t.qZA(),t._UZ(18,"wlx-pagination",8)),2&o&&(t.Q6J("ngIf",t.lcZ(1,11,n.cursor$)),t.xp6(6),t.Q6J("ngIf",n.page),t.xp6(1),t.Q6J("nzData",n.page&&n.page.items?n.page.items:t.DdM(13,L))("nzNoResult",void 0)("nzShowPagination",!1)("nzFrontPagination",!1)("nzTotal",n.Number.MAX_SAFE_INTEGER),t.xp6(9),t.Q6J("ngIf",n.loading),t.xp6(1),t.Q6J("ngIf",!n.loading),t.xp6(1),t.Q6J("page",n.page)("cursor",n.cursor))},dependencies:[p.sg,p.O5,x.ZU,r.N8,r.Uo,r._C,r.Om,r.p0,r.$Z,C.ng,b.Q,A.l,O.b,P.Ls,I.N,v.SY,p.Ov],styles:[".editable-cell[_ngcontent-%COMP%]{position:relative;cursor:pointer}.editable-row[_ngcontent-%COMP%]:hover   .editable-cell[_ngcontent-%COMP%]{border:1px solid #d9d9d9;border-radius:4px}.editable-cell[_ngcontent-%COMP%]:focus-within{border:none}#heading[_ngcontent-%COMP%]{font-weight:600;font-size:20px;line-height:32px}wlx-pagination[_ngcontent-%COMP%], #filters[_ngcontent-%COMP%]{width:100%;flex-direction:row;display:flex;align-items:center;margin-top:18px;margin-bottom:16px}#count[_ngcontent-%COMP%]{font-weight:400;font-size:14px;line-height:19px;color:#00000073;margin:0}wlx-filters[_ngcontent-%COMP%]{margin-left:auto}#description[_ngcontent-%COMP%]{text-align:justify;font-weight:400;font-size:16px;line-height:24px;color:#000000a6;width:600px}.autocomplete-input[_ngcontent-%COMP%]{width:320px;height:32px;display:block}.autocomplete-input-column[_ngcontent-%COMP%]{padding:16px}.table-header[_ngcontent-%COMP%]{font-weight:600;font-size:14px;line-height:22px;color:#000000e0}.tooltip[_ngcontent-%COMP%]{cursor:pointer;margin:4px 3px;color:#00000073}"]});const $=[{path:"",pathMatch:"full",redirectTo:"posts"},{path:"posts",data:{breadcrumb:"Posts"},component:c}];class l{}l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[m.Bz.forChild($),m.Bz]});var D=e(2271),G=e(8231),K=e(5635),R=e(4586),j=e(2383),B=e(5540);class d{}d.\u0275fac=function(o){return new(o||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[p.ez,l,x.ZJ,r.HQ,C.H0,D.m,G.LV,K.o7,R.D,j.ic,P.PV,B.o,v.cg]})}}]);