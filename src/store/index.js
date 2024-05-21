import { createStore } from 'vuex';

export default createStore({
    state: {
        colors: [
            { red: 10, green: 20, blue: 30 },
            { red: 20, green: 120, blue: 90 }
        ],
        mixtures: [
            { variant: 'red', amount: 20 },
            { variant: 'green', amount: 70 },
            { variant: 'blue', amount: 40 }
        ]
    },

    getters: {
        RGBColors(state) {
            return state.colors.map(color => `rgb(${color.red}, ${color.green}, ${color.blue})`);
        },
        ColorsAmount(state) {
            return state.colors.length;
        }
    },
    mutations: {
        ADD_COLOR(state, color) {
            state.colors.push(color);
        },
        REMOVE_COLOR(state, index) {
            state.colors.splice(index, 1);
        },
        SET_MIX(state, { index, amount }) {
            state.mixtures[index].amount = amount;
        },
        RESET_MIX(state, amounts = {}) {
            state.mixtures = state.mixtures.map((item, index) => ({
                ...item,
                amount: amounts[item.variant] !== undefined ? amounts[item.variant] : state.mixtures[index].amount
            }));
        }
    },
    actions: {
        addColor({ commit }, colors) {
            if (colors.length === 3) {
                const [red, green, blue] = colors.map(item => Math.floor(item.amount * 2.5));
                commit('ADD_COLOR', { red, green, blue });
            }
        }
    }
});