self["webpackHotUpdatevuex"]("main",{

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-1.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-1.use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/css/tailwind.css":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-1.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-1.use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/css/tailwind.css ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1658211842529
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"esModule":false,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

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
/******/ 	__webpack_require__.h = () => ("fb056131842a81465343")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.c20771c34cb342449d11.hot-update.js.map