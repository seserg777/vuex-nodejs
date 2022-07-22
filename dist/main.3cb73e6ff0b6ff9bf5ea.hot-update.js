self["webpackHotUpdatevuex"]("main",{

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-1.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-1.use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/css/tailwind.css":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-1.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-1.use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/css/tailwind.css ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1658210944162
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"esModule":false,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ "./src/store/modules/cart.js");
/* harmony import */ var _modules_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/products */ "./src/store/modules/products.js");




const debug = "development" !== 'production'

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vuex__WEBPACK_IMPORTED_MODULE_2__.createStore)({
    modules: {
        cart: _modules_cart__WEBPACK_IMPORTED_MODULE_0__["default"],
        products: _modules_products__WEBPACK_IMPORTED_MODULE_1__["default"]
    },
    strict: debug,
    plugins: debug ? [(0,vuex__WEBPACK_IMPORTED_MODULE_2__.createLogger)()] : []
}));

/***/ }),

/***/ "./src/store/modules/products.js":
/*!***************************************!*\
  !*** ./src/store/modules/products.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../api/shop'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


// initial state
const state = {
    all: []
}

// getters
const getters = {}

// actions
const actions = {
    getAllProducts ({ commit }) {
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../api/shop'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(products => {
            commit('setProducts', products)
        })
    }
}

// mutations
const mutations = {
    setProducts (state, products) {
        state.all = products
    },

    decrementProductInventory (state, { id }) {
        const product = state.all.find(product => product.id === id)
        product.inventory--
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    namespaced: true,
    state,
    getters,
    actions,
    mutations
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("19b99539f0a8e2cf3ff1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.3cb73e6ff0b6ff9bf5ea.hot-update.js.map