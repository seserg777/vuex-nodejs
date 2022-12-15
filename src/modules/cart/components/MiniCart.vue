<template>
  <div
      class="inner"
      @click="isOpen = true"
  >
    <font-awesome-icon :icon="['fas', 'shopping-cart']" />
    <span
        v-if="!!quantity"
    >
      {{ quantity }}
    </span>
  </div>

  <div
      v-show="isOpen"
      class="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-gray-700 bg-opacity-50
        "
  >
    <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
      <div class="flex items-center justify-between">
        <h3 class="text-2xl">Your Cart</h3>
        <svg
            @click="isOpen = false"
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-red-900 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div class="mt-4">
        <p
            v-if="!quantity"
        >
          <i>Please add some products to cart.</i>
        </p>

        <ul
            v-if="!!quantity"
        >
          <li v-for="product in products" :key="product.id">
            {{ product.title }} - {{ currency(product.price) }} x {{ product.quantity }}
          </li>
        </ul>

        <p
            v-if="!!quantity"
        >
          Total: {{ currency(total) }}
        </p>
        <button
            @click="isOpen = false"
            class="px-6 py-2 text-blue-800 border border-blue-600 rounded"
        >
          Cancel
        </button>
        <button
            v-if="!!quantity"
            class="px-6 py-2 ml-2 text-blue-100 bg-blue-600 rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { currency } from "./../../../currency";

export default {
  name: "MiniCart",
  setup () {
    const store = useStore();

    const checkoutStatus = computed(() => store.state.cart.checkoutStatus);
    const products = computed(() => store.getters['cart/cartProducts']);
    const total = computed(() => store.getters['cart/cartTotalPrice']);
    const quantity = computed(() => store.getters['cart/quantityProducts']);

    const checkout = (products) => store.dispatch('cart/checkout', products);

    return {
      currency,
      quantity,
      checkoutStatus,
      products,
      total,
      checkout
    }
  },
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>
  .inner {
    @apply text-white mx-2;
  }
</style>