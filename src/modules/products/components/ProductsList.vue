<template>
  <div>
    <h1>ProductsList</h1>

    <div class="grid grid-cols-4 gap-8">
      <div
          v-for="(product, index) in this.$store.state.products.all"
      >
        <div>
          <img
              :src="product.image"
              class="rounded-lg"
          />

          <p class="text-lg font-bold">
            <router-link
                :to="{ path: `/products/${product.id}` }"
            >
              {{ product.title }}
            </router-link>

          </p>

          <p class="italic">
            {{ currency(product.price) }}
          </p>

          <button
              class="btn bg-green-700 hover:bg-green-800 text-white rounded-md px-4 py-1"
              @click="addProductToCart(product)"
          >
              Add to cart
          </button>
        </div>

      </div>
    </div>
  </div>


</template>

<script>
import { useStore } from "vuex";
import moment from "moment/moment";
import {currency} from "../../../currency";

export default {
  name: "ProductsList",
  data() {
    return {
      //products: store.state.products.all,
      filters: []
    }
  },
  setup () {
    const store = useStore();
    const products = store.state.products.all;
    const addProductToCart = (product) => store.dispatch('cart/addProductToCart', product)
    !products.length && store.dispatch('products/getAllItems');
    return {
      products,
      addProductToCart,
      currency
    }
  },
  methods: {
    date(date) {
      return moment(String(date)).format('MM.DD.YYYY hh:mm')
    }
  }
}
</script>

<style scoped>

</style>