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


const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "flex h-screen overflow-hidden" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      id: "sidebar",
      class: "flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out -translate-x-64"
    })
  ]),
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden" }, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", { class: "sticky top-0 bg-white border-b border-slate-200 z-30" })
  ])
], -1 /* HOISTED */)
const _hoisted_2 = { class: "w-full lg:w-1/3 m-2" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Hello " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.user) + " ", 1 /* TEXT */),
    _hoisted_1,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.posts, (post) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_2, [
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
/******/ 	__webpack_require__.h = () => ("12949a3afabcd8a4b889")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e9bcfdc6268363f44240.hot-update.js.map