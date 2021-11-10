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
    <h2 class="text-right pt-2 pr-3 pb-4"> سریال ها </h2>
    <Series v-bind:seriesList="tvSeiresList" />
  </div>
</template>

<script>
// import 'video.js/dist/video-js.min.css';

// import 'video.js/dist/video.min.js';
import Series from "./Series.vue";

export default {
  name: "Animations",
  components: {
    Series,
  },

  data: function () {
    return {
      tvSeiresList: [],
    };
  },

  methods: {
    getMedia: function () {
      fetch("http://localhost:1337/graphql", {
        method: "post",
        body: JSON.stringify({
          query:
            '{tvSeries(sort: "imdb_id"){id ,imdb_id ,title ,poster {url} ,rating{rate}}}',
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((r) => r.json())
        // .then((data) => console.log(data.data.tvSeries));
        .then((data) => (this.tvSeiresList = data.data.tvSeries));
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