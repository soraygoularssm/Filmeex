<template>
  <section
    class="detail-intro ptb100 d-flex justify-content-center align-items-center"
    :style="{
      'background-image':
        'linear-gradient(rgb(161, 31, 60, 0.95) 0%,rgb(147, 82, 179, 0.95) 100%),url(http://localhost:1337/uploads/trailer_1d43752e96.gif)',
    }"
  >
    <div class="input-group col-lg-5 col-xs-10">
      <input
        type="search"
        class="form-control rounded"
        placeholder="جست و جو"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <button type="button" class="btn btn-outline-light mx-1">جست و جو</button>
    </div>
    <!-- <div class="gradient-purple-layer"></div> -->
  </section>
  <div>
    <br />
    <h2 class="text-right pt-2 pr-3 pb-4">جدیدترین ها</h2>
    <Movie v-bind:moviesList="newList" v-bind:horizontalScroll="true"/>

    <br />
    <h2 class="text-right pt-2 pr-3 pb-4">برگزیده ها</h2>
    <Movie v-bind:moviesList="topSelectedList" v-bind:horizontalScroll="true"/>

    <br />
    <h2 class="text-right pt-2 pr-3 pb-4">سریال ها</h2>
    <Series v-bind:seriesList="topSelectedSeries" v-bind:horizontalScroll="true"/>

    <br />
    <h2 v-if="topSelectedDirectors.length >= 1" class="text-right pt-2 pr-3 pb-4">کارگردان های برجسته</h2>
    <Director v-bind:directorsList="topSelectedDirectors" v-bind:horizontalScroll="true"/>
  </div>
</template>

<script>
// import 'video.js/dist/video-js.min.css';

// import 'video.js/dist/video.min.js';
import Movie from "./Movie.vue";
import Series from "./Series.vue";
import Director from "./Director.vue";

export default {
  name: "Home",
  components: {
    Movie,
    Series,
    Director
  },

  data: function () {
    return {
      newList: [],
      topSelectedList: [],
      topSelectedSeries: [],
      topSelectedDirectors: [],
    };
  },

  methods: {
    getMedia: function () {
      fetch("http://localhost:1337/graphql", {
        method: "post",
        body: JSON.stringify({
          query:
            "{movies(where:{new:true}){id ,imdb_id ,title ,poster {url} ,rating{rate}}}",
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((r) => r.json())
        .then((data) => (this.newList = data.data.movies));

      fetch("http://localhost:1337/graphql", {
        method: "post",
        body: JSON.stringify({
          query:
            "{movies(where:{top_selected:true}){id ,imdb_id ,title ,poster {url} ,rating{rate}}}",
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((r) => r.json())
        .then((data) => (this.topSelectedList = data.data.movies));

      fetch("http://localhost:1337/graphql", {
        method: "post",
        body: JSON.stringify({
          query:
            "{tvSeries(where:{top_selected:true}){id ,imdb_id ,title ,poster {url} ,rating{rate}}}",
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((r) => r.json())
        .then((data) => this.topSelectedSeries = data.data.tvSeries);

      fetch("http://localhost:1337/graphql", {
        method: "post",
        body: JSON.stringify({
          query:
            "{directors(where:{top_selected:true}){id ,imdb_id ,farsi_name ,head_shot {url}}}",
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((r) => r.json())
        .then((data) => this.topSelectedDirectors = data.data.directors);
    },
  },

  mounted() {
    this.getMedia();
  },
};
</script>

<style scoped>
.ptb100 {
  padding: 100px 0;
}

.detail-intro {
  color: #fff;
  min-height: 500px;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center;
  /* filter: blur(8px);
  -webkit-filter: blur(8px); */
}

.bgpurple {
  background: linear-gradient(to bottom, #a11f3c 0%, #9352b3 100%);
  color: white;
}
</style>