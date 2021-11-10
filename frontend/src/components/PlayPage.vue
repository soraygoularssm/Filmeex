<template>
  <div class="w-100" v-if="source">
    <video class="w-100 h-100" :key="playingMediaIndex" controls>
      <source v-bind:src="source.videos[playingMediaIndex].url" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="container">
      <ul class="list-inline" v-if="source">
        <li
          v-for="(video, index) in source.videos"
          v-bind:key="index"
          v-on:click="this.playingMediaIndex = index"
          class="col-4 col-lg-3 m-0 list-inline-item text-center"
        >
          <a class="btn col-12 btn-dark">
            {{ video.quality }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>



<script>
export default {
  name: "Play",
  props: ['source'],
  data: function () {
    return {
      playingMediaIndex: 0,
      // mediaUrls: false,
    };
  },

  // watch: {
  //   $route() {
  //     this.getMediaSources();
  //   },
  // },

  // mounted() {
  //   this.getMediaSources();
  // },
};
</script>

<style scoped>
</style>