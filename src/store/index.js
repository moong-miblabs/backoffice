import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
    state: {
        serverURL   : 'https://',
        token       : null,
        ID          : null
    },
    getters: {
        getServerURL(state){ return state.serverURL },

        getToken(state){ return state.token },
        getId(state){ return state.ID }
    },
    mutations: {
        mutToken(state,payload){ state.token = payload },
        mutId(state,payload){ state.ID = payload }
    },
    actions: {
        setToken(context,payload){ context.commit('mutToken',payload) },
        setId(context,payload){ context.commit('mutId',payload) }
    },
    modules: {},
    plugins: [createPersistedState()]
})
