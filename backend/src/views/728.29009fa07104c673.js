"use strict";(self.webpackChunkalurakut_ng=self.webpackChunkalurakut_ng||[]).push([[728],{3728:(F,c,n)=>{n.r(c),n.d(c,{HomeModule:()=>m});var i=n(433),h=n(6895),f=n(3305),d=n(5327),C=n(727),t=n(4650),g=n(9653),y=n(5981),v=n(7385),Z=n(1228),U=n(8312),M=n(2613),A=n(2699),T=n(8150),J=n(9808),D=n(590),b=n(4004),x=n(6336);class r{constructor(e,o){this.communitydataService=e,this.store=o,this.title="",this.imageUrl="",this.user=""}createCommunity(e){e.preventDefault();try{(0,J.n)(this.store.select(o=>o.user.userdata?.login).pipe((0,D.P)(),(0,b.U)(o=>{const l={title:this.title,imageUrl:this.imageUrl,users:[o],creatorSlug:o};console.log(l),this.communitydataService.createCommunity(l)})))}catch(o){console.log(o)}}}r.\u0275fac=function(e){return new(e||r)(t.Y36(x.M),t.Y36(g.yh))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-create-community"]],decls:7,vars:2,consts:[[1,"form",3,"ngSubmit"],["name","title","type","text","placeholder","Qual o nome da sua comunidade?","aria-label","Qual o nome da sua comunidade?","required","",1,"form-control",3,"ngModel","ngModelChange"],["name","imageUrl","type","text","placeholder","URL da imagem de capa","aria-label","URL da imagem de capa","required","",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-outline-primary"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(p){return o.createCommunity(p)}),t.TgZ(1,"div")(2,"input",1),t.NdJ("ngModelChange",function(p){return o.title=p}),t.qZA()(),t.TgZ(3,"div")(4,"input",2),t.NdJ("ngModelChange",function(p){return o.imageUrl=p}),t.qZA()(),t.TgZ(5,"button",3),t._uU(6,"Criar Comunidade"),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngModel",o.title),t.xp6(2),t.Q6J("ngModel",o.imageUrl))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.On,i.F],styles:[".form[_ngcontent-%COMP%]{margin-top:15px}.form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-bottom:8px}"]});const S=function(a){return{type:"user",data:a}};class u{constructor(e){this.store=e,this.userData={},this.communitiesData={},this.subscriptions=new C.w0}ngOnInit(){this.userData.items=[],this.communitiesData.items=[],this.subscriptions.add(this.store.select(e=>e).subscribe(e=>{this.name$=e.user.userdata.name,this.userdata$=e.user.userdata,this.userData.smallTitle=`Seguidores (${e.user.userdata.followers})`,e.user.followers.forEach(o=>{this.userData.items.push({name:o.login,image:o.avatar_url,link:`/u/${o.login}`})}),this.communitiesData.smallTitle=`Comunidades (${e.communities.communities.length})`,e.communities.communities.forEach(o=>{this.communitiesData.items.push({name:o.title,image:o.imageUrl,link:`/community/${o._id}`})})}))}ngOnDestroy(){this.subscriptions.unsubscribe()}}u.\u0275fac=function(e){return new(e||u)(t.Y36(g.yh))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-home"]],decls:20,vars:6,consts:[[1,"profileArea"],[3,"data"],[1,"welcomeArea"],[1,"title"],[1,"subTitle"],[1,"profileRelationsArea"]],template:function(e,o){1&e&&(t._UZ(0,"app-alurakut-menu"),t.TgZ(1,"app-main-grid")(2,"aside",0),t._UZ(3,"app-profile-sidebar",1),t.qZA(),t.TgZ(4,"div",2)(5,"app-grid-box")(6,"h1",3),t._uU(7),t.qZA(),t._UZ(8,"app-orkut-icon-set"),t.qZA(),t.TgZ(9,"app-grid-box")(10,"h2",4),t._uU(11,"Crie sua pr\xf3pria comunidade!"),t.qZA(),t._UZ(12,"app-create-community"),t.qZA(),t.TgZ(13,"app-grid-box")(14,"h2",4),t._uU(15,"Recados"),t.qZA(),t._UZ(16,"app-messages"),t.qZA()(),t.TgZ(17,"div",5),t._UZ(18,"app-profile-relations-box",1)(19,"app-profile-relations-box",1),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("data",t.VKq(4,S,o.userdata$)),t.xp6(4),t.hij("Bem Vindo(a) ",o.name$,""),t.xp6(11),t.Q6J("data",o.userData),t.xp6(1),t.Q6J("data",o.communitiesData))},dependencies:[y.A,v.$,Z.l,U.A,M.z,A.w,T.d,r]});const $=[{path:"",component:u}];class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[d.Bz.forChild($),d.Bz]});class m{}m.\u0275fac=function(e){return new(e||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[h.ez,s,i.u5,f.m]})}}]);