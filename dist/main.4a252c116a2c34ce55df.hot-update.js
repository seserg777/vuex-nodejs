self["webpackHotUpdatevuex"]("main",{

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-1.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-1.use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/css/tailwind.css":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-1.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-1.use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/css/tailwind.css ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1658344041149
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"esModule":false,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/components/App.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/components/App.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShoppingCart_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShoppingCart.vue */ "./src/components/ShoppingCart.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../currency */ "./src/currency.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "App",
  data() {
    return {
      user: 'John',
      posts: []
    }
  },
  components: {
    ShoppingCart: _ShoppingCart_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup () {
    const store = (0,vuex__WEBPACK_IMPORTED_MODULE_5__.useStore)()
    const products = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(() => store.state.products.all)
    const addProductToCart = (product) => store.dispatch('cart/addProductToCart', product)
    store.dispatch('products/getAllProducts')
    return {
      products,
      addProductToCart,
      currency: _currency__WEBPACK_IMPORTED_MODULE_4__.currency
    }
  },
  methods: {
    load() {
      axios__WEBPACK_IMPORTED_MODULE_1___default().get(`https://62d4757a5112e98e484fa7f0.mockapi.io/posts?page=1&limit=10`)
      .then((response) => {
        this.posts = response.data;
      });
    },
    date(date) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(String(date)).format('MM.DD.YYYY hh:mm')
    }
  },
  mounted() {
    this.load();
  }
});


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
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto" }, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200" })
  ])
], -1 /* HOISTED */)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ShoppingCart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ShoppingCart")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ShoppingCart)
      ])
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_4, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, " Hello " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.user), 1 /* TEXT */)
      ]),
      _hoisted_6
    ])
  ]))
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f5944e58bdfd1d7ce8ce")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.4a252c116a2c34ce55df.hot-update.js.map