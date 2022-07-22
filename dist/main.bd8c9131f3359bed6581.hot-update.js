self["webpackHotUpdatevuex"]("main",{

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-1.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-1.use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/css/tailwind.css":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-1.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-1.use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/css/tailwind.css ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1658218074781
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"esModule":false,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/components/ShoppingCart.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/components/ShoppingCart.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../currency */ "./src/currency.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup () {
    const store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)()

    const checkoutStatus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => store.state.cart.checkoutStatus)
    const products = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => store.getters['cart/cartProducts'])
    const total = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => store.getters['cart/cartTotalPrice'])

    const checkout = (products) => store.dispatch('cart/checkout', products)

    return {
      currency: _currency__WEBPACK_IMPORTED_MODULE_1__.currency,
      checkoutStatus,
      products,
      total,
      checkout
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/components/ShoppingCart.vue?vue&type=template&id=ee9c2650":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/components/ShoppingCart.vue?vue&type=template&id=ee9c2650 ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _hoisted_1 = { class: "cart text-white" }
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Your Cart", -1 /* HOISTED */)
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", null, "Please add some products to cart.", -1 /* HOISTED */)
const _hoisted_4 = [
  _hoisted_3
]
const _hoisted_5 = ["disabled"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    _hoisted_2,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, _hoisted_4, 512 /* NEED_PATCH */), [
      [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$setup.products.length]
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.products, (product) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          key: product.id
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.title) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.currency(product.price)) + " x " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.quantity), 1 /* TEXT */))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Total: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.currency($setup.total)), 1 /* TEXT */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        disabled: !$setup.products.length,
        onClick: _cache[0] || (_cache[0] = $event => ($setup.checkout($setup.products)))
      }, "Checkout", 8 /* PROPS */, _hoisted_5)
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Checkout " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.checkoutStatus) + ".", 513 /* TEXT, NEED_PATCH */), [
      [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.checkoutStatus]
    ])
  ]))
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8fb6d9ae43a05cee97ce")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.bd8c9131f3359bed6581.hot-update.js.map