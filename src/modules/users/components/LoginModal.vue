<template>
  <div
      class="inner"
      @click="isOpen = true"
  >
    <font-awesome-icon :icon="['fas', 'user']" />
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
        <h3 class="text-2xl">Login</h3>
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

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginModal",
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style scope lang="scss">
  .inner {
    @apply text-white mx-2;
  }
</style>