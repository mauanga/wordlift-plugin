"use strict";(self.webpackChunkwordlift_plugin_app=self.webpackChunkwordlift_plugin_app||[]).push([[360],{6360:(Y,g,o)=>{o.r(g),o.d(g,{RecipesModule:()=>p});var d=o(6895),l=o(5263),u=o(7779),v=o(7579),z=o(4351),Z=o(9635),h=o(8505),y=o(5698),T=o(9300),t=o(4650),x=o(240),m=o(9498),s=o(6666),f=o(545),A=o(5087),C=o(1354);function R(i,e){1&i&&t.GkF(0)}const M=function(){return{width:325}},J=function(){return{width:100}};function w(i,e){if(1&i&&(t.TgZ(0,"tr",7)(1,"td"),t._UZ(2,"nz-skeleton",8),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"nz-skeleton",8),t.qZA()()),2&i){const n=t.oxw(2);t.xp6(2),t.Q6J("nzActive",!0)("nzLoading",n.loading)("nzParagraph",!1)("nzTitle",t.DdM(8,M)),t.xp6(2),t.Q6J("nzActive",!0)("nzLoading",n.loading)("nzParagraph",!1)("nzTitle",t.DdM(9,J))}}function Q(i,e){if(1&i&&(t.TgZ(0,"tbody"),t.YNc(1,w,5,10,"tr",6),t.qZA()),2&i){t.oxw();const n=t.MAs(7);t.xp6(1),t.Q6J("ngForOf",n.data)}}function S(i,e){if(1&i){const n=t.EpF();t.TgZ(0,"tr",7)(1,"td")(2,"a",9),t._uU(3),t.qZA()(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td")(7,"wlx-main-ingredient",10),t.NdJ("onMainIngredientChange",function(N){const L=t.CHM(n).$implicit,P=t.oxw(2);return t.KtG(P.ingredientChange(L,N))}),t.qZA()()()}if(2&i){const n=e.$implicit;t.xp6(2),t.Q6J("href",n.post_permalink,t.LSH),t.xp6(1),t.Oqu(n.name),t.xp6(2),t.hij(" ",n.recipe_name," "),t.xp6(2),t.Q6J("data",n)}}function b(i,e){if(1&i&&(t.TgZ(0,"tbody"),t.YNc(1,S,8,4,"tr",6),t.qZA()),2&i){t.oxw();const n=t.MAs(7);t.xp6(1),t.Q6J("ngForOf",n.data)}}const U=function(){return[]};class c{constructor(e,n){this.liftedItems=e,this.apiService=n,this.loading=!1,this.filter="ALL",this.cursor=new v.x,this.cursor$=this.cursor.asObservable().pipe((0,T.h)(a=>null!=a),(0,z.b)(a=>this.apiService.list({post_type:"wprm_recipe",cursor:a})),(0,Z.z)((0,h.b)(a=>{this.page=a}))),this.recipes=e.find(a=>"Recipes"===a.label)}ngOnInit(){this.apiService.list({post_type:"wprm_recipe"}).pipe((0,h.b)(()=>this.loading=!1)).subscribe(e=>{this.page=e})}ingredientChange(e,n){console.log("ingredient change"),(e.match_id?this.apiService.create({post_id:e.id,body:n}):this.apiService.update({post_id:e.id,match_id:e.match_id,body:n})).pipe((0,y.q)(1)).subscribe()}}c.\u0275fac=function(e){return new(e||c)(t.Y36(u.S),t.Y36(x.s))},c.\u0275cmp=t.Xpm({type:c,selectors:[["wlx-recipes"]],decls:19,vars:11,consts:[[4,"ngIf"],["nz-typography",""],["nz-typography","","nzType","secondary"],[3,"nzData","nzNoResult","nzShowPagination"],["basicTable",""],[3,"page","cursor"],["class","table-row",4,"ngFor","ngForOf"],[1,"table-row"],[3,"nzActive","nzLoading","nzParagraph","nzTitle"],["target","_blank",3,"href"],[3,"data","onMainIngredientChange"]],template:function(e,n){1&e&&(t.YNc(0,R,1,0,"ng-container",0),t.ALo(1,"async"),t.TgZ(2,"h1",1),t._uU(3,"Recipes"),t.qZA(),t.TgZ(4,"p",2),t._uU(5," Some copy that explains what is on this screen and how to work with it. Maybe it\u2019s a couple of sentences for two 3 rows of text maximum\n"),t.qZA(),t.TgZ(6,"nz-table",3,4)(8,"thead")(9,"tr")(10,"th"),t._uU(11,"Post title"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Ingredient Term"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Matched Ingredient"),t.qZA()()(),t.YNc(16,Q,2,1,"tbody",0),t.YNc(17,b,2,1,"tbody",0),t.qZA(),t._UZ(18,"wlx-pagination",5)),2&e&&(t.Q6J("ngIf",t.lcZ(1,8,n.cursor$)),t.xp6(6),t.Q6J("nzData",n.page&&n.page.items?n.page.items:t.DdM(10,U))("nzNoResult",void 0)("nzShowPagination",!1),t.xp6(10),t.Q6J("ngIf",n.loading),t.xp6(1),t.Q6J("ngIf",!n.loading),t.xp6(1),t.Q6J("page",n.page)("cursor",n.cursor))},dependencies:[d.sg,d.O5,m.ZU,s.N8,s.Uo,s._C,s.Om,s.p0,s.$Z,f.ng,A.Q,C.l,d.Ov],styles:["wlx-pagination[_ngcontent-%COMP%]{width:100%}"]});const I=[{path:"",pathMatch:"full",redirectTo:"recipes"},{path:"recipes",data:{breadcrumb:"Recipes"},component:c}];class r{}r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[l.Bz.forChild(I),l.Bz]});var O=o(2271),F=o(8231);class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[d.ez,r,m.ZJ,s.HQ,f.H0,O.m,F.LV]})}}]);