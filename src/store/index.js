import Vue from 'vue';
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex)
const PORT = 8000;
const store = new Vuex.Store({
    state: {
        products: []
    },
    getters: {
        getProducts: (state) => state.products 
    },
    mutations: {
        ADD_PRODUCT(state, newProduct) {
            state.products.push(newProduct);
        },
        GET_PRODUCTS(state, products) {
            state.products = [...products]
        }
    },
    actions: {
        async createNewProduct(context, newProduct){
            try {
                const data = await axios.post(`http://localhost:${PORT}/api/create`, newProduct);
                context.commit("ADD_PRODUCT", data.data.data);
            }
            catch (err) {
                console.log(err.message)
            }
        },
        async getProducts(context) {
            try {
                const data = await axios.get(`http://localhost:${PORT}/api`);
                context.commit("GET_PRODUCTS", data.data.data);
            }
            catch (err) {
                console.log(err.message)
            }
        }
    }
})
export default store;