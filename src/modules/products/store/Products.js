import ProductService from '../../../services/ProductService';

const state = {
    all: []
}

const getters = {
    all: state => state.all
}

const actions = {
    getAllItems ({ commit }) {
        ProductService.index()
        .then(r => {
            commit('setItems', r.data);
        });
    }
}

const mutations = {
    setItems (state, items) {
        state.all = items
    },

    /*decrementProductInventory (state, { id }) {
        const product = state.all.find(product => product.id === id)
        product.inventory--
    }*/
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}