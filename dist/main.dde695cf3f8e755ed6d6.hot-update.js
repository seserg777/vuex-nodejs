self["webpackHotUpdatevuex"]("main",{

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-1.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-1.use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/css/tailwind.css":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-1.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-1.use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/css/tailwind.css ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1658211385315
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"esModule":false,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/components/App.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/components/App.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (28:2)\nFile was processed with these loaders:\n * ./node_modules/vue-loader/dist/index.js\nYou may need an additional loader to handle the result of these loaders.\n|     }\n|   }\n>   methods: {\n|     load() {\n|       axios.get(`https://62d4757a5112e98e484fa7f0.mockapi.io/posts?page=1&limit=10`)");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/components/App.vue?vue&type=template&id=617ab0be":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/components/App.vue?vue&type=template&id=617ab0be ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _hoisted_1 = { class: "flex h-screen overflow-hidden" }
const _hoisted_2 = {
  id: "sidebar",
  class: "flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out -translate-x-64"
}
const _hoisted_3 = { class: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden" }
const _hoisted_4 = { class: "sticky top-0 bg-white border-b border-slate-200 z-30" }
const _hoisted_5 = { class: "px-4 sm:px-6 lg:px-8" }
const _hoisted_6 = { class: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto" }
const _hoisted_7 = { class: "flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200" }
const _hoisted_8 = { class: "w-full lg:w-1/3 m-2" }
const _hoisted_9 = ["onClick"]

function render(_ctx, _cache) {
  const _component_ShoppingCart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ShoppingCart")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ShoppingCart)
      ])
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_4, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, " Hello " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.user), 1 /* TEXT */)
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", null, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [
                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.posts, (post) => {
                  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_8, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.title), 1 /* TEXT */)
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.date(post.createdAt)), 1 /* TEXT */),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.intro), 1 /* TEXT */),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                        class: "btn bg-indigo-500 hover:bg-indigo-600 text-white",
                        onClick: $event => (_ctx.addProductToCart(post))
                      }, " Add to cart ", 8 /* PROPS */, _hoisted_9)
                    ])
                  ]))
                }), 256 /* UNKEYED_FRAGMENT */))
              ])
            ])
          ])
        ])
      ])
    ])
  ]))
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b7197e1618119e121295")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.dde695cf3f8e755ed6d6.hot-update.js.map