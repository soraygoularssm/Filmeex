<template>
  <section
    class="detail-intro ptb100 d-flex justify-content-center align-items-center"
    :style="{
      'background-image':
        'linear-gradient(rgb(161, 31, 60, 0.95) 0%,rgb(147, 82, 179, 0.95) 100%),url(http://localhost:1337/uploads/archive_090a92f046.webp)',
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
    <!-- <h2 class="text-right pt-2 pr-3 pb-4" v-if="mylist.length">
        آرشیو من
    </h2> -->

    <div class="container-fluid">
      <div class="row rtl p-3 py-5">
      <div class="btn col-6" @click="showMovies=true" :class="{'border-dark' : showMovies}">
          فیلم ها
      </div>
       <div class="btn col-6" @click="showMovies=false" :class="{'border-dark' : !showMovies}">
          سریال ها
      </div>
    </div>
    </div>

    <Movie v-bind:moviesList="movieslist" v-if="movieslist.length && showMovies"/>
    <Series v-bind:seriesList="serieslist" v-if="serieslist.length && !showMovies"/>
    <div
      v-if="!movieslist.length && showMovies"
      class="d-flex align-items-center justify-content-center text-center"
      style="height: 100px"
    >
      <h2>شما هیچ فیلمی در آرشیو خود ندارید</h2>
    </div>
    <div
      v-if="!serieslist.length && !showMovies"
      class="d-flex align-items-center justify-content-center text-center"
      style="height: 100px"
    >
      <h2>شما هیچ سریالی در آرشیو خود ندارید</h2>
    </div>
  </div>
</template>

<script>
// import 'video.js/dist/video-js.min.css';

// import 'video.js/dist/video.min.js';
import Movie from "./Movie.vue";
import Series from "./Series.vue";

export default {
  name: "Archive",
  components: {
    Movie, Series
  },

  data: function () {
    return {
      movieslist: [],
      serieslist: [],
      showMovies: true,
      archivedMoviesList: [],
      archivedSeriesList: [],
    };
  },

  methods: {
    getMedia: function () {
      fetch("http://localhost:1337/graphql", {
        method: "post",
        body: JSON.stringify({
          query: "{me{user{archived_movies , archived_series}}}",
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: localStorage.getItem("jwt")
            ? "Bearer " + localStorage.getItem("jwt")
            : "",
        },
      })
        .then((r) => r.json())
        .then(
          (data) => {
            this.archivedMoviesList = data.data.me.user.archived_movies.split("tt")
            this.archivedSeriesList = data.data.me.user.archived_series.split("tt")
            }
        )
        .then(() => {
          var archivedMoviesList = [];
          this.archivedMoviesList.forEach((num) => {
            if (num != "" || num != " " || num != "." || num != null || num != "tt") {
              archivedMoviesList.push("tt" + num);
            }
          });
          this.archivedMoviesList = JSON.stringify(archivedMoviesList);

          var archivedSeriesList = [];
          this.archivedSeriesList.forEach((num) => {
            if (num != "" || num != " " || num != "." || num != null || num != "tt") {
              archivedSeriesList.push("tt" + num);
            }
          });
          this.archivedSeriesList = JSON.stringify(archivedSeriesList);
        })
        .then(() => {
          fetch("http://localhost:1337/graphql", {
            method: "post",
            body: JSON.stringify({
              query:
                "{movies(where:{imdb_id:" +
                this.archivedMoviesList +
                "}){id , imdb_id , title , poster{url} , rating{rate}}}",
            }),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: localStorage.getItem("jwt")
                ? "Bearer " + localStorage.getItem("jwt")
                : "",
            },
          })
            .then((r) => r.json())
            .then((data) => (this.movieslist = data.data.movies));
          

          fetch("http://localhost:1337/graphql", {
            method: "post",
            body: JSON.stringify({
              query:
                "{tvSeries(where:{imdb_id:" +
                this.archivedSeriesList +
                "}){id , imdb_id , title , poster{url} , rating{rate}}}",
            }),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: localStorage.getItem("jwt")
                ? "Bearer " + localStorage.getItem("jwt")
                : "",
            },
          })
            .then((r) => r.json())
            .then((data) => (this.serieslist = data.data.tvSeries));
        })
        .catch((error) => console.log(error));
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