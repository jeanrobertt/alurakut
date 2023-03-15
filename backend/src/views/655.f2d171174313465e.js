"use strict";(self.webpackChunkalurakut_ng=self.webpackChunkalurakut_ng||[]).push([[655],{2655:(A,d,r)=>{r.r(d),r.d(d,{LoginModule:()=>g});var m=r(6895),t=r(433),c=r(5327),p=r(5861),o=r(4650),f=r(2647),h=r(9653);class u{constructor(e,n,s){this.userdataService=e,this.router=n,this.store=s,this.githubUser="",this.msg="Preencha o campo!",this.userError=!1}login(e){var n=this;return(0,p.Z)(function*(){if(e.preventDefault(),0!==n.githubUser.length){n.githubUser=n.githubUser.toLowerCase(),console.log(n.githubUser);try{(yield n.userdataService.login(n.githubUser,!0))?n.router.navigate(["/"]):(n.msg="Usu\xe1rio inv\xe1lido.",n.userError=!0)}catch(s){console.log(s),n.msg="Falha ao realizar login",n.userError=!0}}})()}}u.\u0275fac=function(e){return new(e||u)(o.Y36(f.M),o.Y36(c.F0),o.Y36(h.yh))},u.\u0275cmp=o.Xpm({type:u,selectors:[["app-login"]],decls:53,vars:2,consts:[[2,"display","flex","height","100vh"],[1,"loginMain"],[1,"loginScreen"],[1,"logoArea"],["src","https://alurakut.vercel.app/logo.svg","alt","alurakut Logo"],[1,"formArea"],[1,"box",3,"ngSubmit"],["placeholder","Usu\xe1rio","name","githubUser",3,"ngModel","ngModelChange"],["type","submit"],[1,"box"],["routerLink","/login"],[1,"footerArea"],["routerLink","/"]],template:function(e,n){1&e&&(o.TgZ(0,"div",0)(1,"main",1)(2,"div",2)(3,"section",3),o._UZ(4,"img",4),o.TgZ(5,"p")(6,"strong"),o._uU(7,"Conecte-se"),o.qZA(),o._uU(8," aos seus amigos e familiares usando recados e mensagens instant\xe2neas "),o.qZA(),o.TgZ(9,"p")(10,"strong"),o._uU(11,"Conhe\xe7a"),o.qZA(),o._uU(12," novas pessoas atrav\xe9s de amigos de seus amigos e comunidades "),o.qZA(),o.TgZ(13,"p")(14,"strong"),o._uU(15,"Compartilhe"),o.qZA(),o._uU(16," seus v\xeddeos, fotos e paix\xf5es em um s\xf3 lugar "),o.qZA()(),o.TgZ(17,"section",5)(18,"form",6),o.NdJ("ngSubmit",function(l){return n.login(l)}),o.TgZ(19,"p"),o._uU(20,"Acesse agora mesmo com seu usu\xe1rio do "),o.TgZ(21,"strong"),o._uU(22,"GitHub"),o.qZA(),o._uU(23,"!"),o.qZA(),o.TgZ(24,"input",7),o.NdJ("ngModelChange",function(l){return n.githubUser=l}),o.qZA(),o.TgZ(25,"b"),o._uU(26),o.qZA(),o.TgZ(27,"button",8),o._uU(28,"Login"),o.qZA()(),o.TgZ(29,"footer",9)(30,"p"),o._uU(31," Ainda n\xe3o \xe9 membro? "),o._UZ(32,"br"),o.TgZ(33,"a",10)(34,"strong"),o._uU(35," ENTRAR J\xc1 "),o.qZA()()()()(),o.TgZ(36,"footer",11)(37,"p"),o._uU(38," \xa9 2021 alura.com.br - "),o.TgZ(39,"a",12),o._uU(40,"Sobre o Orkut.br"),o.qZA(),o._uU(41," - "),o.TgZ(42,"a",12),o._uU(43,"Centro de seguran\xe7a"),o.qZA(),o._uU(44," - "),o.TgZ(45,"a",12),o._uU(46,"Privacidade"),o.qZA(),o._uU(47," - "),o.TgZ(48,"a",12),o._uU(49,"Termos"),o.qZA(),o._uU(50," - "),o.TgZ(51,"a",12),o._uU(52,"Contato"),o.qZA()()()()()()),2&e&&(o.xp6(24),o.Q6J("ngModel",n.githubUser),o.xp6(2),o.hij(" ",0===n.githubUser.length||n.userError?n.msg:""," "))},dependencies:[c.rH,t._Y,t.Fj,t.JJ,t.JL,t.On,t.F],styles:['.loginMain[_ngcontent-%COMP%]{display:flex;flex:1;align-items:center;justify-content:center}.loginScreen[_ngcontent-%COMP%]{padding:16px;max-width:1110px;display:grid;gap:var(--gap);grid-template-areas:"logoArea" "formArea" "footerArea"}.logoArea[_ngcontent-%COMP%]{grid-area:logoArea;background-color:var(--backgroundTertiary);border-radius:var(--commonRadius);padding:var(--gutter);text-align:center;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;align-items:center;min-height:263px}.logoArea[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;line-height:1.2}.logoArea[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-child){margin-bottom:12px}.logoArea[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--colorQuarternary)}.logoArea[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:45px;margin-bottom:36px}.formArea[_ngcontent-%COMP%]{grid-area:formArea;display:flex;flex-wrap:wrap;flex-direction:column}.formArea[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:var(--gutter);padding-left:50px;padding-right:50px;background-color:var(--backgroundSecondary);border-radius:var(--commonRadius);flex:1}.formArea[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:not(:last-child){margin-bottom:var(--gap)}.formArea[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:first-child{min-height:224px}.formArea[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.formArea[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:var(--colorPrimary)}.formArea[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;display:block;border:1px solid var(--textQuarternaryColor);padding:12px;background-color:var(--backgroundTertiary);border-radius:var(--commonRadius);margin-top:24px;margin-bottom:16px}.formArea[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:16px;width:100%;display:block;border:0;padding:12px;border-radius:var(--commonRadius);background-color:var(--colorPrimary);color:var(--textSecondaryColor)}.footerArea[_ngcontent-%COMP%]{grid-area:footerArea;background-color:var(--backgroundQuarternary);border-radius:var(--commonRadius);padding:8px}.footerArea[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;text-align:center}.footerArea[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:var(--colorPrimary)}@media (min-width: 860px){.loginScreen[_ngcontent-%COMP%]{grid-template-columns:2fr 1fr;grid-template-areas:"logoArea formArea" "logoArea formArea" "footerArea footerArea"}.logoArea[_ngcontent-%COMP%]{min-height:368px}.formArea[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:first-child{min-height:282px}}']});const C=[{path:"",component:u}];class a{}a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[c.Bz.forChild(C),c.Bz]});class g{}g.\u0275fac=function(e){return new(e||g)},g.\u0275mod=o.oAB({type:g}),g.\u0275inj=o.cJS({imports:[m.ez,a,t.u5]})}}]);