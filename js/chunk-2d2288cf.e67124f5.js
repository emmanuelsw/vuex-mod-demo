(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2288cf"],{da51:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("h6",{staticClass:"card-header"},[t._v("\n    Detalle del producto\n  ")]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[a("feather",{attrs:{type:"file-text"}})],1)]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.orderId,expression:"orderId"}],staticClass:"form-control",class:{"is-invalid":t.errors.orderId},attrs:{type:"text",placeholder:"Order de compra"},domProps:{value:t.orderId},on:{input:function(e){e.target.composing||(t.orderId=e.target.value)}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.errors.orderId,expression:"errors.orderId"}],staticClass:"invalid-feedback"},[t._v("\n        "+t._s(t.errors.orderId)+"\n      ")])]),a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[a("feather",{attrs:{type:"archive"}})],1)]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.name=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",selected:""},domProps:{value:{name:"",code:""}}},[t._v("Nombre del articulo")]),t._l(t.products,function(e,r){return a("option",{key:r,domProps:{value:e}},[t._v(t._s(e.name))])})],2)]),a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[a("feather",{attrs:{type:"hash"}})],1)]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.code=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",selected:""},domProps:{value:{name:"",code:""}}},[t._v("Código del producto")]),t._l(t.products,function(e,r){return a("option",{key:r,domProps:{value:e}},[t._v(t._s(e.code))])})],2)]),a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[a("feather",{attrs:{type:"layers"}})],1)]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"form-control",class:{"is-invalid":t.errors.quantity},attrs:{type:"number",placeholder:"Cantidad"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.errors.quantity,expression:"errors.quantity"}],staticClass:"invalid-feedback"},[t._v("\n        "+t._s(t.errors.quantity)+"\n      ")])]),a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[a("feather",{attrs:{type:"dollar-sign"}})],1)]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.kiloValue,expression:"kiloValue"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Valor kilo"},domProps:{value:t.kiloValue},on:{input:function(e){e.target.composing||(t.kiloValue=e.target.value)}}})]),a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[a("feather",{attrs:{type:"arrow-down"}})],1)]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.discount,expression:"discount"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Descuento"},domProps:{value:t.discount},on:{input:function(e){e.target.composing||(t.discount=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text"},[a("feather",{attrs:{type:"percent"}})],1)])]),a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[a("feather",{attrs:{type:"calendar"}})],1)]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"form-control",attrs:{type:"date",placeholder:"dd/mm/yyyy"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})])])])},s=[],o=(a("7f7f"),a("cebc")),n=a("2f62"),i=a("5935"),d={name:"ProductForm",data:function(){return{products:[{code:"685485",name:"LAM 4K AZUL BILINEAR"},{code:"696541",name:"LAM ESPESOR 2L CUAD"},{code:"612862",name:"LAM TRILINEAR MOD 8K"},{code:"684221",name:"LAM SENCILLA 0K ESP"}]}},computed:Object(o["a"])({},Object(n["c"])({errors:function(t){return t.order.errors}}),Object(i["b"])(["product.orderId","product.quantity","product.kiloValue","product.discount","product.date"]),{name:{get:function(){return{name:this.$store.state.order.product.name,code:this.$store.state.order.product.code}},set:function(t){this.$store.commit("setNameCode",t)}},code:{get:function(){return{name:this.$store.state.order.product.name,code:this.$store.state.order.product.code}},set:function(t){this.$store.commit("setNameCode",t)}}})},u=d,c=a("2877"),p=Object(c["a"])(u,r,s,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d2288cf.e67124f5.js.map