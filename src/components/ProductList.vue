<template>
  <table>
    <tbody>
    <tr class="w-full lg:w-1/3 m-2" v-for="product in products">
      <td>
        <h3>
          {{ product.title }}
        </h3>
      </td>

      <td>
        {{ date(product.createdAt) }}
      </td>

      <td>
        {{ product.intro }}
      </td>

      <td>
        <button
            class="btn bg-indigo-500 hover:bg-indigo-600 text-white"
            @click="addProductToCart(product)">
          Add to cart
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { currency } from '../currency'
import moment from "moment";

export default {
  setup () {
    const store = useStore()
    const products = computed(() => store.state.products.all)
    const addProductToCart = (product) => store.dispatch('cart/addProductToCart', product)
    store.dispatch('products/getAllProducts')
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