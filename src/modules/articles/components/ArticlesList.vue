<template>
  <h1>ArticleList</h1>
  <div
      class="grid grid-cols-4 gap-8"
  >
    <div
        v-for="(article, index) in this.$store.state.articles.all"
    >
      <div>
        <p class="text-lg font-bold">
          {{ article.title }}
        </p>

        <p>
          {{ date(article.createdAt) }}
        </p>

        <p>
          {{ article.intro }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {currency} from "../../../currency";
import moment from "moment";

export default {
  name: "ArticlesList",
  data() {
    return {
      filters: []
    }
  },
  setup () {
    const store = useStore();
    const articles = store.state.articles.all;
    !articles.length && store.dispatch('articles/getAllItems');
    return {
      articles,
      currency
    }
  },
  methods: {
    date(date) {
      return moment(String(date)).format('DD MMMM YYYY')
    }
  }
}
</script>

<style scoped>

</style>