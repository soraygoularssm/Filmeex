<template>
  <div class="container-fluid">
    <div class="row equal pb-5" :class="{'d-flex flex-row flex-nowrap overflow-x-auto hide-scrollbar' : horizontalScroll}" dir="rtl">
      <div
        v-for="series in seriesList"
        v-bind:key="series.id"
        class="col-sm-6 col-md-3 col-lg-2 text-center"
        :class="horizontalScroll ? 'col-5' : 'col-6'"
      >
        <router-link :to="'/tvmedia/' + series.imdb_id" class="text-dark">
          <div class="d-flex justify-content-center">
            <div class="position-absolute pb-5 px-5">
              <img
                class="col-12 poster rounded-lg"
                style="z-index: 0; opacity: 0.4"
                v-bind:src="'http://localhost:1337' + series.poster.url"
              />
            </div>
            <div class="position-relative pt-2 px-3">
              <img
                class="col-12 poster rounded-lg"
                style="z-index: 1; opacity: 0.8"
                v-bind:src="'http://localhost:1337' + series.poster.url"
              />
            </div>
            <div class="position-absolute pt-4 px-3 pb-3">
              <img
                class="col-12 poster rounded-lg"
                style="z-index: 2; opacity: 1"
                v-bind:src="'http://localhost:1337' + series.poster.url"
              />
            </div>
          </div>
          <div class="card-body">
            <!-- <h5 class="card-title">{{ movie.title }}</h5> -->
          </div>
          <div class="rating bg-warning p-1 rounded" style="z-index: 3">
            <span>{{ series.rating.rate }}</span>
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
  name: "Series",
  props: {
    seriesList: Array,
    horizontalScroll: Boolean,
  },
};
</script>

<style scoped>
img {
  /* border: orangered 10px solid; */
  padding: 0;
}
ul {
  list-style-type: none;
}

p {
  text-align: center;
}

.poster {
  object-fit: cover;
  display: block;
}

.rating {
  position: absolute !important;
  left: 30px;
  bottom: 0px;
}

.overflow-x-auto {
  overflow-x: auto;
  overflow-y: hidden!important;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>