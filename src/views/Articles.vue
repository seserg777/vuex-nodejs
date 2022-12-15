<template>
  Articles
  <div
      v-for="(article, index) in articles"
  >
    <div>
      {{ article.title }}
    </div>
  </div>
</template>

<script>
import ArticlesService from "./../services/ArticleService";

export default {
  name: "Articles",
  data() {
    return {
      articles: []
    }
  },
  methods: {
    index() {
      ArticlesService.index()
          .then(r => {
            this.articles = r;
          });
    }
  }
}
</script>

<style scoped>

</style>