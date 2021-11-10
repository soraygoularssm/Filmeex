<template>
  <section
    v-if="cast"
    class="detail-intro ptb100 d-flex justify-content-center align-items-center"
    :style="{
      'background-image':
        'linear-gradient(rgb(161, 31, 60, 0.95) 0%,rgb(147, 82, 179, 0.95) 100%),url(http://localhost:1337' +
        cast.head_shot.url +
        ')',
    }"
  ></section>

  <section class="main-detail-intro pb-0" v-if="cast">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-12 d-flex justify-content-center align-items-center">
          <div class="col-md-12 col-10 text-center text-white" v-if="cast">
            <h2 class="pt-5 pb-2">
                {{cast.name}}
            </h2>
          </div>
        </div>

        <div class="col-md-4 col-12 d-flex justify-content-center">
          <div class="col-md-12 col-10 text-center px-3" v-if="cast">
            <img
              class="rounded-lg shadow-lg"
              v-bind:src="'http://localhost:1337' + cast.head_shot.url"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <div>
    <br />
    <!-- <h2 class="text-right pt-2 pr-3 pb-4" v-if="mylist.length">
        آرشیو من
    </h2> -->

    <div class="container-fluid">
      <div class="row rtl p-3 py-5">
        <div
          class="btn col-6"
          @click="showMovies = true"
          :class="{ 'border-dark': showMovies }"
        >
          فیلم ها
        </div>
        <div
          class="btn col-6"
          @click="showMovies = false"
          :class="{ 'border-dark': !showMovies }"
        >
          سریال ها
        </div>
      </div>
    </div>

    <Movie
      v-bind:moviesList="movieslist"
      v-if="movieslist.length && showMovies"
    />
    <Series
      v-bind:seriesList="serieslist"
      v-if="serieslist.length && !showMovies"
    />
    <div
      v-if="!movieslist.length && showMovies"
      class="d-flex align-items-center justify-content-center text-center"
      style="height: 100px"
    >
      <h2>فیلمی برای این شخصیت یافت نشد</h2>
    </div>
    <div
      v-if="!serieslist.length && !showMovies"
      class="d-flex align-items-center justify-content-center text-center"
      style="height: 100px"
    >
      <h2>سریالی برای این شخصیت یافت نشد</h2>
    </div>
  </div>
</template>

<script>
// import 'video.js/dist/video-js.min.css';

// import 'video.js/dist/video.min.js';
import Movie from "./Movie.vue";
import Series from "./Series.vue";

export default {
  name: "Cast",
  components: {
    Movie,
    Series,
  },

  data: function () {
    return {
      movieslist: [],
      serieslist: [],
      showMovies: true,
      cast: false,
    };
  },

  methods: {
    getMedia: function () {
      if (this.$route.params.type == "director") {
        fetch("http://localhost:1337/graphql", {
          method: "post",
          body: JSON.stringify({
            query:
              '{directors(where: {imdb_id: "' +
              this.$route.params.id +
              '"}) {name,farsi_name,head_shot {url},crews{movie{imdb_id , poster{url} , rating{rate}} , tv_sery{imdb_id , poster{url} , rating{rate}}}}}',
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((r) => r.json())
          .then((data) => {
            if (data != undefined) {
              this.cast = data.data.directors[0];
              const movieslist = this.cast.crews.map((crew) => crew.movie);
              const serieslist = this.cast.crews.map(
                (crew) => crew.tv_sery
              );
              if (movieslist[0] != null) {
                this.movieslist = movieslist;
              }
              if (serieslist[0] != null) {
                this.serieslist = serieslist;
              }
            }
          })
          .catch((error) => console.log(error));
      } else {
        fetch("http://localhost:1337/graphql", {
          method: "post",
          body: JSON.stringify({
            query:
              '{stars(where: {imdb_id: "' +
              this.$route.params.id +
              '"}) {name,head_shot {url},crews{movie{imdb_id , poster{url} , rating{rate}} , tv_sery{imdb_id , poster{url} , rating{rate}}}}}',
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((r) => r.json())
          .then((data) => {
            if (data != undefined) {
              this.cast = data.data.stars[0];
              const movieslist = this.cast.crews.map((crew) => crew.movie);
              const serieslist = this.cast.crews.map((crew) => crew.tv_sery);
              if (movieslist[0] != null) {
                this.movieslist = movieslist;
              }
              if (serieslist[0] != null) {
                this.serieslist = serieslist;
              }
            }
          })
          .catch((error) => console.log(error));
      }
    },
  },

  mounted() {
    this.getMedia();
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
}

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

.main-detail-intro {
  display: block;
  position: relative;
  margin-top: -300px;
}

.bgpurple {
  background: linear-gradient(to bottom, #a11f3c 0%, #9352b3 100%);
  color: white;
}
</style>