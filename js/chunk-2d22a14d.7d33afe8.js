(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22a14d"],{dfd9:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card mt-3"},[r("h6",{staticClass:"card-header text-center"},[t._v("Detalle del pedido")]),r("div",{staticClass:"card-body"},[r("table",{staticClass:"table table-bordered table-hover"},[t._m(0),r("tbody",[t.orderProducts?t._e():r("tr",[r("td",{staticClass:"text-center",attrs:{colspan:"5"}},[t._v("No hay ordenes para mostrar.")])]),t._l(t.orderProducts,function(e,a){return r("tr",{key:a},[r("td",[t._v(t._s(e.orderId))]),r("td",[t._v(t._s(e.name))]),r("td",[t._v(t._s(t._f("currency")(e.unitValue)))]),r("td",[t._v(t._s(t._f("currency")(e.totalValue)))]),r("td",[r("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return t.removeProduct(a)}}},[r("feather",{attrs:{type:"trash-2"}}),t._v(" \n              Eliminar\n            ")],1)])])})],2)]),r("div",{staticClass:"d-flex justify-content-end"},[r("p",{staticClass:"h5 mb-0"},[r("b",[t._v("Total:")]),t._v(" "+t._s(t._f("currency")(t.totalOrder)))])])])])},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("Order #")]),r("th",{attrs:{scope:"col"}},[t._v("Descripción")]),r("th",{attrs:{scope:"col"}},[t._v("Valor Unitario")]),r("th",{attrs:{scope:"col"}},[t._v("Valor Total")]),r("th",{attrs:{scope:"col"}},[t._v("Opciones")])])])}],s=r("cebc"),o=r("2f62"),n={name:"OrderDetail",computed:Object(s["a"])({},Object(o["b"])(["totalOrder"]),Object(o["c"])({orderProducts:function(t){return t.order.order.products}})),methods:{removeProduct:function(t){this.$store.commit("removeProduct",t)}}},d=n,l=r("2877"),i=Object(l["a"])(d,a,c,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d22a14d.7d33afe8.js.map