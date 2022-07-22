<template>
  <div class="flex h-screen overflow-hidden">
    <div>
      <div id="sidebar" class="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out -translate-x-64">
        <ShoppingCart/>
      </div>
    </div>

    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <header class="sticky top-0 bg-white border-b border-slate-200 z-30">
        <div class="px-4 sm:px-6 lg:px-8">
          Hello {{user}}
        </div>
      </header>

      <main>
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
            <ProductList/>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import ShoppingCart from './ShoppingCart.vue';
import ProductList from './ProductList.vue';
import axios from 'axios';
import moment from 'moment';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { currency } from '../currency';

export default {
  name: "App",
  data() {
    return {
      user: 'John',
      posts: []
    }
  },
  components: {
    ShoppingCart,
    ProductList
  }
}
</script>