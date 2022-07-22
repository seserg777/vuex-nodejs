self["webpackHotUpdatevuex"]("main",{

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-1.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-1.use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/css/tailwind.css":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-1.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-1.use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/css/tailwind.css ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1658210866071
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"esModule":false,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _components_App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App.vue */ "./src/components/App.vue");
/* harmony import */ var _css_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/tailwind.css */ "./src/css/tailwind.css");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./src/store/index.js");






(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_components_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"])
    .component("font-awesome-icon", _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon)
    .mount("#app");

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

/***/ "./src/store/modules/cart.js":
/*!***********************************!*\
  !*** ./src/store/modules/cart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../api/shop'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


// initial state
// shape: [{ id, quantity }]
const state = {
    items: [],
    checkoutStatus: null
}

// getters
const getters = {
    cartProducts: (state, getters, rootState) => {
        return state.items.map(({ id, quantity }) => {
            const product = rootState.products.all.find(product => product.id === id)
            return {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity
            }
        })
    },

    cartTotalPrice: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
    }
}

// actions
const actions = {
    checkout ({ commit, state }, products) {
        const savedCartItems = [...state.items]
        commit('setCheckoutStatus', null)
        // empty cart
        commit('setCartItems', { items: [] })
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../api/shop'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(
            products,
            () => commit('setCheckoutStatus', 'successful'),
            () => {
                commit('setCheckoutStatus', 'failed')
                // rollback to the cart saved before sending the request
                commit('setCartItems', { items: savedCartItems })
            }
        )
    },

    addProductToCart ({ state, commit }, product) {
        commit('setCheckoutStatus', null)
        if (product.inventory > 0) {
            const cartItem = state.items.find(item => item.id === product.id)
            if (!cartItem) {
                commit('pushProductToCart', { id: product.id })
            } else {
                commit('incrementItemQuantity', cartItem)
            }
            // remove 1 item from stock
            commit('products/decrementProductInventory', { id: product.id }, { root: true })
        }
    }
}

// mutations
const mutations = {
    pushProductToCart (state, { id }) {
        state.items.push({
            id,
            quantity: 1
        })
    },

    incrementItemQuantity (state, { id }) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++
    },

    setCartItems (state, { items }) {
        state.items = items
    },

    setCheckoutStatus (state, status) {
        state.checkoutStatus = status
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    namespaced: true,
    state,
    getters,
    actions,
    mutations
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
/******/ 	__webpack_require__.h = () => ("620122670b354f0a4126")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.c99274117695f7117971.hot-update.js.map