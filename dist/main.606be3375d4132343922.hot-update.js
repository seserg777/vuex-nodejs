self["webpackHotUpdatevuex"]("main",{

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-1.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-1.use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/css/tailwind.css":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-1.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-1.use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/css/tailwind.css ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1658217870959
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"esModule":false,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/services/shop.js":
/*!******************************!*\
  !*** ./src/services/shop.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    getProducts (cb) {
        axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://62d4757a5112e98e484fa7f0.mockapi.io/posts?page=1&limit=10`)
        .then((response) => {
            console.log('getProducts then', response);
            cb(response.data);
        });
    }
});

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
/* harmony import */ var _services_shop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/shop */ "./src/services/shop.js");
/*import shop from '../../api/shop'*/


// initial state
const state = {
    all: []
}

// getters
const getters = {}

// actions
const actions = {
    getAllProducts ({ commit }) {
        /*shop.getProducts(products => {
            commit('setProducts', products)
        })*/
    }
}

// mutations
const mutations = {
    setProducts (state, products) {
        state.all = products
    },

    /*decrementProductInventory (state, { id }) {
        const product = state.all.find(product => product.id === id)
        product.inventory--
    }*/
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
/******/ 	__webpack_require__.h = () => ("8f63308607b2e506e8b4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.606be3375d4132343922.hot-update.js.map