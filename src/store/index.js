import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const PORT = 8000;
const store = new Vuex.Store({
  state: {
    products: [],
    product: {},
    cart: {
      products: [],
      totalPrice: 0,
    },
    order: {},
    orders: []
  },
  getters: {
    getProducts: (state) => state.products,
    getProduct: (state) => state.product,
    getCart: (state) => state.cart,
    getOrder: (state) => state.order,
    getOrders: (state) => state.orders
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
    SET_PRODUCT_BY_ID(state, product) {
      state.product = { ...product };
    },

    // handle cart mutations
    SET_CART(state, product) {
      state.cart.products.push(product);
      state.cart.totalPrice += product.price * product.quantity;
      localStorage.setItem("cart", JSON.stringify({ cart: state.cart }));
    },
    DELETE_PRODUCT_ON_CART(state, index) {
      let cart = { ...state.cart };
      cart.products.forEach((product, i) => {
        if (i == index) {
          state.cart.products.splice(i, 1);
          state.cart.totalPrice =
            state.cart.totalPrice - product.price * product.quantity;
          localStorage.setItem("cart", JSON.stringify({ cart: state.cart }));
        }
      });
      console.log(state.cart);
    },
    DECREMENT_PRODUCT_QUANTITY(state, index) {
      state.cart.products.forEach((product, i) => {
        if (i === index) {
          if (product.quantity > 1) {
            product.quantity--;
            state.cart.totalPrice = state.cart.totalPrice - product.price
          }
        }
     
      })
      localStorage.setItem("cart", JSON.stringify({ cart: state.cart }));
    },
    INCREMENT_PRODUCT_QUANTITY(state, index) {
      state.cart.products.forEach((product, i) => {
        if (i === index) {
            product.quantity++;
            state.cart.totalPrice = state.cart.totalPrice + product.price
        }
     
      })
      localStorage.setItem("cart", JSON.stringify({ cart: state.cart }));
    },
    // handle order
    SET_ORDER(state, order) {
      state.order = {...order};
    },

    SET_ORDERS(state, orders) {
      state.orders = [...orders];
    },

    DELETE_ORDER(state, id) {
      state.orders.forEach((order,index) => {
        if (order._id == id) {
          state.orders.splice(index, 1);
        }
      })
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
    async getProductById(context, idProduct) {
      try {
        let id = idProduct;
        let data = await axios.get(
          `http://localhost:${PORT}/api/getProductById/${id}`
        );
        context.commit("SET_PRODUCT_BY_ID", data.data.data);
      } catch (err) {
        console.log(err.message);
      }
    },

    // handle cart actions
    addToCart(context, product) {
      context.commit("SET_CART", product);
    },
    deleteProductOnCart(context, index) {
      context.commit("DELETE_PRODUCT_ON_CART", index);
    },
    decrementQuantity(context, index) {
      context.commit("DECREMENT_PRODUCT_QUANTITY", index);
    },
    incrementQuantity(context, index) {
      context.commit("INCREMENT_PRODUCT_QUANTITY", index);
    },

    //handle create order
    async createOrder(context, data) {
      let order =  await axios.post(`http://localhost:${PORT}/api/order/create-order`, data)
      console.log(order);
    },
    async getOrder(context) {
      let data = await axios.get(`http://localhost:${PORT}/api/order/`)
      let order = data.data.data[data.data.data.length - 1];
      console.log(order)
      context.commit("SET_ORDER", order)
    },
    async getOrders(context) {
      let data = await axios.get(`http://localhost:${PORT}/api/order/`)
      let orders = data.data.data
      console.log(orders)
      context.commit("SET_ORDERS", orders)
    },
    async deleteOrder(context, idOrder) {
      let data = await axios.delete(`http://localhost:${PORT}/api/order/${idOrder}`)
      let id = data.data.data._id;
      context.commit("DELETE_ORDER", id)
    }
  },
});
export default store;
