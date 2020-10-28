(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),i=c.n(n),s=c(20),r=c.n(s),o=c(12),l=c(14),d=c(11),j=c(10),m=c(2),u=function(e){var t=Object(n.useState)(0),c=Object(d.a)(t,2),i=c[0],s=c[1],r=Object(n.useState)(""),o=Object(d.a)(r,2),l=o[0],j=o[1];return Object(n.useEffect)((function(){!function(){var t=0;e.cartContents.forEach((function(e){var c=(e[0].price*e[1]).toFixed(2);t+=+c})),s(+t.toFixed(2))}()})),Object(a.jsxs)("div",{className:"cart",children:[e.cartContents.length<=0?Object(a.jsx)("div",{className:"no-items-text",children:"You have no items in your cart. Visit the shop page to add items."}):Object(a.jsxs)("div",{className:"cart-items-table",children:[Object(a.jsxs)("div",{className:"cart-row top-row",children:[Object(a.jsx)("div",{className:"item-title",children:"Item"}),Object(a.jsx)("div",{className:"quantity-title",children:"Quantity"}),Object(a.jsx)("div",{className:"total-title",children:"Total"})]}),e.cartContents.map((function(t,c){return Object(a.jsxs)("div",{className:"cart-row",children:[Object(a.jsxs)("div",{className:"cart-item-name-and-options",children:[Object(a.jsx)("div",{className:"item-title",children:t[0].name}),Object(a.jsx)("i",{className:"far fa-trash-alt btn-delete",onClick:function(){return function(t){e.removeFromCart(t)}(c)}}),Object(a.jsx)("i",{className:"fas fa-edit btn-edit",onClick:function(){return j(c)}})]}),Object(a.jsxs)("div",{className:"quantity","data-index":c,children:[l===c?Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(t,c){var a=new FormData(t.currentTarget).get("amount");e.changeItemAmount(c,+a),j("")}(t,c)},children:[Object(a.jsx)("input",{className:"edit-input",name:"amount",type:"number",min:"1",defaultValue:t[1]}),Object(a.jsx)("input",{type:"submit",value:"Update"})]}):"".concat(t[1],"  x  $").concat(t[0].price),e.cartContents.length-1===c?Object(a.jsxs)("div",{className:"total phone-only",children:["$",i]}):""]}),Object(a.jsxs)("div",{className:"sub-total",children:["$".concat((t[0].price*t[1]).toFixed(2)),e.cartContents.length-1===c?Object(a.jsxs)("div",{className:"total",children:["$",i]}):""]})]},c)}))]}),e.cartContents.length>=1?Object(a.jsxs)("div",{className:"checkout",children:[Object(a.jsx)("div",{className:"checkout-text",children:"Proceed to checkout: "}),Object(a.jsx)("button",{className:"btn-pay",children:"Pay"})]}):""]})},b=function(e){return Object(a.jsxs)("nav",{className:"main-nav",children:[Object(a.jsxs)("div",{className:"logo",children:["Fresh",Object(a.jsx)("strong",{children:"Fruit"})]}),Object(a.jsxs)("ul",{className:"nav-items-container",children:[Object(a.jsx)(j.b,{to:"/",children:Object(a.jsx)("li",{className:"nav-item",children:"Shop"})}),Object(a.jsx)(j.b,{to:"/cart",children:Object(a.jsxs)("li",{className:"nav-item cart",children:[Object(a.jsx)("i",{className:"fas fa-shopping-cart"}),Object(a.jsx)("span",{className:e.cartAmount>=1?"cart-amount":"cart-amount hide",children:e.cartAmount})]})})]})]})},p=function(e){return Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("div",{className:"ribbon ribbon-top-left",children:Object(a.jsxs)("span",{children:["$",e.object.price]})}),Object(a.jsx)("img",{src:e.object.imageUrl}),Object(a.jsx)("div",{className:"item-name",children:e.object.name}),Object(a.jsx)("div",{className:"item-desc",children:e.object.desc}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c=new FormData(t.currentTarget).get("amount");t.currentTarget.reset(),c<=0&&(c=1),e.addToCartFromShop(e.object,c)},children:[Object(a.jsx)("input",{type:"number",name:"amount",min:"1",placeholder:"1"}),Object(a.jsx)("input",{type:"submit",value:"Add to cart"})]})]})},h=c.p+"static/media/apple.62dfd3a2.jpg",O=c.p+"static/media/avocado.954ebe5d.jpg",g=c.p+"static/media/banana.36cdd142.jpg",x=c.p+"static/media/blueberry.7fadafeb.jpg",f=c.p+"static/media/cantelope.4e00b435.jpg",v=c.p+"static/media/lemon.b6abae5b.jpg",N=c.p+"static/media/lime.2bc19714.jpg",y=c.p+"static/media/orange.6ac06bbe.jpg",w=c.p+"static/media/pair.f87665d7.jpg",C=c.p+"static/media/papaya.462c1899.jpg",L=c.p+"static/media/pineapple.66847545.jpg",U=c.p+"static/media/strawberry.873ee6d6.jpg",F=function(e){var t={apple:{name:"Apple",imageUrl:h,desc:"Local grown, juicy, and delicious",price:2.99},avocado:{name:"Avocado",imageUrl:O,desc:"Local grown, juicy, and delicious",price:2.99},banana:{name:"Banana",imageUrl:g,desc:"Local grown, juicy, and delicious",price:2.99},blueberry:{name:"Blueberry",imageUrl:x,desc:"Local grown, juicy, and delicious",price:.99},cantelope:{name:"Cantelope",imageUrl:f,desc:"Local grown, juicy, and delicious",price:.99},lemon:{name:"Lemon",imageUrl:v,desc:"Local grown, juicy, and delicious",price:.99},lime:{name:"Lime",imageUrl:N,desc:"Local grown, juicy, and delicious",price:3.49},orange:{name:"Orange",imageUrl:y,desc:"Local grown, juicy, and delicious",price:3.49},pair:{name:"Pair",imageUrl:w,desc:"Local grown, juicy, and delicious",price:3.49},papaya:{name:"Papaya",imageUrl:C,desc:"Local grown, juicy, and delicious",price:.49},pineapple:{name:"Pineapple",imageUrl:L,desc:"Local grown, juicy, and delicious",price:.49},strawberry:{name:"Strawberry",imageUrl:U,desc:"Local grown, juicy, and delicious",price:.49}},c=function(t,c){e.addToCart(t,c)};return Object(a.jsxs)("div",{className:"shop",children:[Object(a.jsx)("h2",{children:"Browse through our selection of fantastic fruit"}),Object(a.jsx)("div",{className:"items-container",children:Object.keys(t).map((function(e,n){return Object(a.jsx)(p,{object:t[e],addToCartFromShop:c},n)}))})]})},S=(c(32),function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1],s=function(e,t){var a=Object(l.a)(c),n=!1;a.forEach((function(c,a){if(c[0].name===e.name){n=!0,console.log(n),console.log(t),console.log(c[1]);var i=+t+ +c[1];console.log(i),p(a,i)}})),n||(a.push([e,t]),i(a))},r=function(e){var t=Object(l.a)(c);t.splice(e,1),i(t)},p=function(e,t){var a=Object(l.a)(c);console.log(a),console.log(e),a[e][1]=t,i(a)};return Object(n.useEffect)((function(){}),[c]),Object(a.jsx)(j.a,{children:Object(a.jsxs)("div",{className:"app l-container-full-screen",children:[Object(a.jsx)(b,{cartAmount:c.length}),Object(a.jsx)("div",{className:"l-container-1080",children:Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{exact:!0,path:"/",render:function(e){return Object(a.jsx)(F,Object(o.a)(Object(o.a)({},e),{},{addToCart:s}))}}),Object(a.jsx)(m.a,{exact:!0,path:"/cart",render:function(e){return Object(a.jsx)(u,Object(o.a)(Object(o.a)({},e),{},{removeFromCart:r,cartContents:c,changeItemAmount:p}))}})]})})]})})});r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.c9af8747.chunk.js.map