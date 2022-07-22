self["webpackHotUpdatevuex"]("main",{

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-1.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-1.use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/css/tailwind.css":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-1.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-1.use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/css/tailwind.css ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1658211087949
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"esModule":false,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

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
//import shop from '../../api/shop'

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
        /*shop.buyProducts(
            products,
            () => commit('setCheckoutStatus', 'successful'),
            () => {
                commit('setCheckoutStatus', 'failed')
                // rollback to the cart saved before sending the request
                commit('setCartItems', { items: savedCartItems })
            }
        )*/
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("122e488d8606e40ae5cf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.0cf37bf1ffd977f528a2.hot-update.js.map