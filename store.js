import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        getDoubleCounter(state) {
            return state.counter * 2;
        },
        stringCounter(state) {
            return state.counter + " kez tıklandı";
        }
    },
    mutations: {
        //  updateCounter(state,value){
        //      state.counter += value;
        //  }
        increaseCounter(state) {
            state.counter++;
        },
        decreaseCounter(state) {
            state.counter--;
        }
    },
    actions: {
        increment({commit}) {
            commit("increaseCounter");
        },
        decrement({commit}) {
            commit("decreaseCounter");
        },
        incAsync({commit}) {
            setTimeout(() => {
                commit("increaseCounter")
            },2000)
        }
    }

});