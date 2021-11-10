<template>
  <div class="container-fluid">
    <div class="row equal d-flex flex-row flex-nowrap overflow-auto" dir="rtl">
      <div
        v-for="director in directorsList"
        v-bind:key="director.id"
        class="col-4 col-sm-5 col-md-3 col-lg-2 text-center"
      >
        <router-link :to="'/cast/director/' + director.imdb_id" class="text-dark">
          <img
            class="card-img-top rounded-circle"
            v-bind:src="'http://localhost:1337' + director.head_shot.url"
            v-bind:alt="director.name"
          />
          <div class="card-body">
            <h5 class="card-title">{{ director.farsi_name }}</h5>
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
  name: "Director",
  props: {
    directorsList: Array,
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

img {
  object-fit: cover;
  height: 150px;
  width: 150px;
}

@media (max-width: 768px) {
  img {
    object-fit: cover;
    height: 100px;
    width: 100px;
  }
}
</style>