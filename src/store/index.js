import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const PORT = 8000;
const store = new Vuex.Store({
  state: {
    products: [],
    product: {}
  },
  getters: {
    getProducts: (state) => state.products,
    getProduct: (state) => state.product
  },
  mutations: {
    ADD_PRODUCT(state, newProduct) {
      state.products.push(newProduct);
    },
    GET_PRODUCTS(state, products) {
      state.products = [...products];
    },
    DELETE_PRODUCT(state, idProduct) {
      state.products.forEach((product, index) => {
        if (product._id === idProduct) state.products.splice(index, 1);
      });
    },
    EDIT_PRODUCT(state, editedProduct) {
      state.products.forEach((product, index) => {
        if (product._id === editedProduct._id) {
          state.products[index].name = editedProduct.name;
          state.products[index].price = editedProduct.price;
          state.products[index].amount = editedProduct.amount;
          state.products[index].detail = editedProduct.detail;
          state.products[index].image = editedProduct.image;
        }
      });
    },
    SET_PRODUCT_BY_ID(state, product){
      state.product = {...product}
    }
  },
  actions: {
    async createNewProduct(context, newProduct) {
      try {
        const data = await axios.post(
          `http://localhost:${PORT}/api/create`,
          newProduct
        );
        context.commit("ADD_PRODUCT", data.data.data);
      } catch (err) {
        console.log(err.message);
      }
    },
    async getProducts(context) {
      try {
        const data = await axios.get(`http://localhost:${PORT}/api`);
        context.commit("GET_PRODUCTS", data.data.data);
      } catch (err) {
        console.log(err.message);
      }
    },
    async deleteProduct(context, idProduct) {
      try {
        await axios.delete(`http://localhost:${PORT}/api/${idProduct}`);
        context.commit("DELETE_PRODUCT", idProduct);
      } catch (err) {
        console.log(err.message);
      }
    },
    async editProduct(context, editedProduct) {
      try {
        let id = editedProduct.id;
        let dataEditedProduct = {
          name: editedProduct.name,
          price: editedProduct.price,
          amount: editedProduct.amount,
          detail: editedProduct.detail,
          image: editedProduct.image,
        };
        let data = await axios.patch(
          `http://localhost:${PORT}/api/${id}`,
          dataEditedProduct
        );
        context.commit("EDIT_PRODUCT", data.data.data);
      } catch (err) {
        console.log(err.message);
      }
    },
    async getProductById (context, idProduct) {
      try {
        let id = idProduct;
        let data = await axios.get(`http://localhost:${PORT}/api/getProductById/${id}`)
        context.commit("SET_PRODUCT_BY_ID", data.data.data)
       
      }
      catch (err) {
        console.log(err.message);
      }
    }
  },
});
export default store;
