import ArticleService from '../../../services/ArticleService';

const state = {
    all: []
}

const getters = {
    all: state => state.all
}

const actions = {
    getAllItems({ commit }) {
        ArticleService.index()
        .then(r => {
            commit('setItems', r.data);
        });
    }
}

const mutations = {
    setItems(state, items) {
        state.all = items
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}