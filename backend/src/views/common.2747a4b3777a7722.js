"use strict";(self.webpackChunkalurakut_ng=self.webpackChunkalurakut_ng||[]).push([[592],{8150:(p,u,s)=>{s.d(u,{d:()=>l});var t=s(4650),c=s(9653),r=s(5327),g=s(6895);function _(a,e){if(1&a&&(t.TgZ(0,"li",2)(1,"div",3)(2,"div",4)(3,"a",5),t._UZ(4,"img",6),t.qZA()(),t.TgZ(5,"div",7)(6,"div",8)(7,"a",5)(8,"h6",9),t._uU(9),t.qZA()(),t.TgZ(10,"small"),t._uU(11),t.qZA()(),t.TgZ(12,"div",10)(13,"p",11),t._uU(14),t.qZA()()()()()),2&a){const n=e.$implicit;t.Q6J("ngClass",e.index%2==0?"listItemPrimary":"listItemScondary"),t.uIk("key",null==n?null:n._id),t.xp6(3),t.Q6J("routerLink","/u/"+(null==n?null:n.sender)),t.xp6(1),t.Q6J("src","https://github.com/"+(null==n?null:n.sender)+".png",t.LSH)("alt","User's profile picture"+(null==n?null:n.sender)),t.xp6(3),t.Q6J("routerLink","/u/"+(null==n?null:n.sender)),t.xp6(2),t.Oqu(null==n?null:n.sender),t.xp6(2),t.Oqu(null==n?null:n.updatedAt),t.xp6(3),t.Oqu(null==n?null:n.text)}}class l{constructor(e,n){this.store=e,this.route=n}ngOnInit(){"home"===this.route.snapshot.title?this.store.select(e=>e.messages.messages).subscribe(e=>this.handleMessage(e)):this.store.select(e=>e.userProfile.messages).subscribe(e=>this.handleMessage(e))}handleMessage(e){let n=setInterval(()=>{e&&(this.messages=e.map(o=>({_id:o._id,text:o.text,sender:o.sender,receiver:o.receiver,createdAt:this.handleDate(o.createdAt),updatedAt:this.handleDate(o.updatedAt)})),clearInterval(n))},500)}handleDate(e){let n=new Date(e),o=new Date;return n.toLocaleDateString()==o.toLocaleDateString()?`Hoje, ${n.toLocaleTimeString()}`:n.toLocaleString()}}l.\u0275fac=function(e){return new(e||l)(t.Y36(c.yh),t.Y36(r.gz))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-messages"]],decls:2,vars:1,consts:[[1,"media-list","list-group"],["class","list-group-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"list-group-item",3,"ngClass"],[1,"d-flex","align-items-start",2,"margin-top","5px"],[1,"media"],[3,"routerLink"],[1,"rounded-circle","me-3",3,"src","alt"],[1,"d-flex","flex-column","flex-grow-1","msg"],[1,"d-flex","justify-content-between"],[1,"fw-bold"],[1,"mt-2"],[1,"lh-base"]],template:function(e,n){1&e&&(t.TgZ(0,"ul",0),t.YNc(1,_,15,9,"li",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",n.messages))},dependencies:[g.mk,g.sg,r.rH],styles:["ul[_ngcontent-%COMP%]{margin-top:10px}p[_ngcontent-%COMP%]{margin-bottom:0}a[_ngcontent-%COMP%]{color:#495057}img[_ngcontent-%COMP%]{width:42px;height:42px}.media[_ngcontent-%COMP%]{margin-right:5px}.msg[_ngcontent-%COMP%]{width:475px}small[_ngcontent-%COMP%]{font-size:small}ul[_ngcontent-%COMP%]   li.listItemPrimary[_ngcontent-%COMP%]{background:#d9e6f6}ul[_ngcontent-%COMP%]   li.listItemScondary[_ngcontent-%COMP%]{background:#f1f9fe}"]})},2699:(p,u,s)=>{s.d(u,{w:()=>e});var t=s(4650),c=s(6895);function r(n,o){if(1&n&&(t.TgZ(0,"li")(1,"span",1),t._uU(2),t.qZA(),t.TgZ(3,"span",2),t._UZ(4,"img",3),t._uU(5," 0 "),t.qZA()()),2&n){const i=o.$implicit;t.uIk("key","orkut__icon_set__"+i.slug),t.xp6(2),t.hij(" ",i.name," "),t.xp6(2),t.Q6J("src","https://alurakut.vercel.app/icons/"+i.icon+".svg",t.LSH)("alt","icone orkut "+i.slug),t.uIk("key","orkut__icon_set__"+i.slug+"_img")}}const g=function(n){return{opacity:n}};function _(n,o){if(1&n&&t._UZ(0,"img",6),2&n){const i=o.index,m=t.oxw().$implicit;t.Q6J("src","https://alurakut.vercel.app/icons/"+m.icon+".svg",t.LSH)("alt","icone orkut "+m.slug)("ngStyle",t.VKq(4,g,i<=1?1:"0.5")),t.uIk("key","orkut__icon_set__"+m.slug+"_img_"+i)}}const l=function(){return[0,1,2]};function a(n,o){if(1&n&&(t.TgZ(0,"li")(1,"span",1),t._uU(2),t.qZA(),t.TgZ(3,"span",4),t.YNc(4,_,1,6,"img",5),t.qZA()()),2&n){const i=o.$implicit;t.uIk("key","orkut__icon_set__"+i.slug),t.xp6(2),t.hij(" ",i.name," "),t.xp6(2),t.Q6J("ngForOf",t.DdM(3,l))}}class e{constructor(){this.iconSet1=[],this.iconSet2=[]}ngOnInit(){this.iconSet1=[{name:"Recados",slug:"recados",icon:"book"},{name:"Fotos",slug:"fotos",icon:"camera"},{name:"Videos",slug:"videos",icon:"video-camera"},{name:"F\xe3s",slug:"fas",icon:"star"},{name:"Mensagens",slug:"mensagens",icon:"email"}],this.iconSet2=[{name:"Confi\xe1vel",slug:"confiavel",icon:"smile"},{name:"Legal",slug:"legal",icon:"cool"},{name:"Sexy",slug:"sexy",icon:"heart"}]}}e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-orkut-icon-set"]],decls:3,vars:2,consts:[[4,"ngFor","ngForOf"],[1,"OrkutNostalgicIconSet__title"],[1,"OrkutNostalgicIconSet__number",2,"grid-area","number"],[1,"OrkutNostalgicIconSet__iconSample",3,"src","alt"],[1,"OrkutNostalgicIconSet__iconComplex","OrkutNostalgicIconSet__number"],["style","margin-right: 2px",3,"src","alt","ngStyle",4,"ngFor","ngForOf"],[2,"margin-right","2px",3,"src","alt","ngStyle"]],template:function(o,i){1&o&&(t.TgZ(0,"ul"),t.YNc(1,r,6,5,"li",0),t.YNc(2,a,5,4,"li",0),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",i.iconSet1),t.xp6(1),t.Q6J("ngForOf",i.iconSet2))},dependencies:[c.sg,c.PC],styles:['ul[_ngcontent-%COMP%]{margin-top:32px;list-style:none;display:flex;justify-content:space-between;flex-wrap:wrap}li[_ngcontent-%COMP%]{font-size:12px;color:#5a5a5a;display:grid;grid-template-areas:"title title" "number number"}li[_ngcontent-%COMP%]:not(:last-child){margin-right:5px}li[_ngcontent-%COMP%]   .OrkutNostalgicIconSet__title[_ngcontent-%COMP%]{display:block;font-style:italic;grid-area:title}li[_ngcontent-%COMP%]   .OrkutNostalgicIconSet__number[_ngcontent-%COMP%]{min-width:15px;display:flex;align-items:center;justify-content:flex-start;grid-area:number}li[_ngcontent-%COMP%]   .OrkutNostalgicIconSet__number[_ngcontent-%COMP%]   .OrkutNostalgicIconSet__iconSample[_ngcontent-%COMP%]{margin-right:7px}']})}}]);