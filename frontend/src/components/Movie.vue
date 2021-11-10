<template>
  <div class="container-fluid">
    <div class="row equal" :class="{'d-flex flex-row flex-nowrap overflow-auto hide-scrollbar' : horizontalScroll}" dir="rtl">
      <div
        v-for="movie in moviesList"
        v-bind:key="movie.id"
        :class="horizontalScroll ? 'col-5' : 'col-6'"
        class="col-sm-5 col-md-3 col-lg-2 text-center"
      >
        <router-link :to="'/media/' + movie.imdb_id" class="text-dark">
          <img
            class="card-img-top poster rounded-lg"
            v-bind:src="'http://localhost:1337' + movie.poster.url"
            v-bind:alt="movie.title"
          />
          <div class="card-body">
            <!-- <h5 class="card-title">{{ movie.title }}</h5> -->
          </div>
          <div class="rating bg-warning p-1 rounded">
            <span>{{ movie.rating.rate }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>



<script>
// import 'video.js/dist/video-js.min.css';

// import 'video.js/dist/video.min.js';

export default {
  name: "Movie",
  props: {
    moviesList: Array,
    horizontalScroll: Boolean,
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

p {
  text-align: center;
}

.poster {
  object-fit: cover;
}

.rating {
  position: absolute!important;
  left: 30px;
  bottom: 55px;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>