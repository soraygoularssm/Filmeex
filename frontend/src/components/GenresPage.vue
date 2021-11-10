<template>
  <div class="container">
    <h2 class="text-right py-4 pr-2">ژانر ها</h2>
    <div class="row p-0" dir="rtl">
      <div
        class="col-12 col-lg-4 p-3"
        v-for="genre in genresList"
        v-bind:key="genre.id"
      >
        <a :href="'genre/' + genre.id">
          <div
            v-if="genre.image"
            class="
              col-12
              border
              rounded-lg
              d-flex
              justify-content-between
              align-items-center
            "
            :style="
              'background-image: linear-gradient(rgb(161, 31, 60, 0.7) 0%,rgb(147, 82, 179, 0.7) 100%),url(http://localhost:1337' +
              genre.image.url +
              '); height: 200px;background-position: center; background-size: cover;'
            "
          >
            <h4 class="text-center col-12 text-white">{{ genre.title }}</h4>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Genres",

  data: function () {
    return {
      genresList: false,
    };
  },

  mounted() {
    axios
      .post("http://localhost:1337/graphql", {
        query: "{genres{id ,title , image{url}}}",
      })
      .then((response) => (this.genresList = response.data.data.genres));
  },
};
</script>

<style scoped>
</style>