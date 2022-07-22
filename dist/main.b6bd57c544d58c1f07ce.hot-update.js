"use strict";
self["webpackHotUpdatevuex"]("main",{

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/App.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/App.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "App",
  data() {
    return {
      user: 'John',
      posts: []
    }
  },
  methods: {
    load() {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://62d4757a5112e98e484fa7f0.mockapi.io/posts`)
      .then((response) => {
        this.posts = response.data;
      });
    }
  },
  mounted() {
    this.load();
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _hoisted_1 = { class: "w-full lg:w-1/3 m-2" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Hello " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.user) + " ", 1 /* TEXT */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.posts, (post) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_1, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.title), 1 /* TEXT */)
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.createdAt), 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.intro), 1 /* TEXT */)
          ]))
        }), 256 /* UNKEYED_FRAGMENT */))
      ])
    ])
  ], 64 /* STABLE_FRAGMENT */))
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("099e27e99210a3eb4856")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.b6bd57c544d58c1f07ce.hot-update.js.map