<template>
  <section
    class="detail-intro ptb100"
    v-if="series"
    :style="{
      'background-image':
        'linear-gradient(rgb(161, 31, 60, 0.95) 0%,rgb(147, 82, 179, 0.95) 100%),url(http://localhost:1337' +
        series.poster.url +
        ')',
    }"
  >
    <div class="gradient-purple-layer"></div>
  </section>

  <section class="main-detail-intro pb-0" v-if="series">
    <div class="container">
      <div class="row rtl">
        <div class="col-md-4 col-12 d-flex justify-content-center">
          <div class="col-md-12 col-10 text-center" v-if="series.imdb_id">
            <a href="#playContent" class="play-video" v-on:click="play(0, 0)">
              <div class="overlay">
                <img
                  class="rounded shadow-lg"
                  v-bind:src="'http://localhost:1337' + series.poster.url"
                  alt=""
                />
                <font-awesome-icon :icon="['fas', 'play']" class="play-icon" />
              </div>
            </a>
          </div>
        </div>
        <div class="details col-md-8 text-center d-flex flex-column">
          <h2 class="pt-5 pb-2">{{ series.title }}</h2>
          <ul class="list-inline px-0">
            <li class="list-inline-item">{{ series.runtime }} دقیقه</li>
            <li class="list-inline-item px-3">
              {{ series.genres.join(",") }}
            </li>
            <li class="font-weight-bold pt-3">
              <span class="px-2 rounded bg-warning text-dark"
                >10 / {{ series.rating.rate }}</span
              >
              از {{ series.rating.rates_amount }} رای
              <img
                class="mr-3"
                src="@/assets/imdb-logo.png"
                alt="Logo"
                style="width: 40px"
              />
            </li>
          </ul>
          <div
            class="d-flex align-items-center justify-content-center py-4"
            v-if="series.imdb_id"
            v-on:click="play(0, 0)"
          >
            <a
              href="#playContent"
              class="btn btn-info rounded col-lg-5 col-xs-5 col-sm-5"
            >
              <h6>پخش</h6>
            </a>
          </div>
          <div class="row d-flex flex-grow-1 align-items-end mb-0 p-0 pt-4">
            <div class="col-6 m-0 p-0 pl-2">
              <button
                v-if="series.imdb_id"
                type="button"
                class="
                  btn
                  shadow-none
                  rounded-circle
                  border
                  bg-white
                  text-center
                  float-left
                  ml-2
                  p-2
                "
                v-bind:class="{ bgpurple: isLoved }"
                style="width: 45px; height: 45px"
                v-on:click="likeMedia"
              >
                <font-awesome-icon
                  :icon="['far', 'heart']"
                  class="w-100 h-100"
                />
              </button>
            </div>
            <div class="col-6 m-0 p-0 pr-2">
              <button
                type="button"
                class="
                  btn btn-rounded
                  shadow-none
                  border
                  bg-white
                  text-center
                  float-right
                  mr-2
                "
                style="font-size: 18px"
                v-bind:class="{ bgblack: isArchived }"
                v-on:click="archiveMedia"
              >
                <font-awesome-icon :icon="['far', 'bookmark']" class="ml-2" />
                ذخیره
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="playContent" class="pt-5" v-if="playMedia">
    <div class="container">
      <Play v-bind:source="source"> </Play>
    </div>
  </section>

  <section v-if="seasons.length" class="pt-5">
    <div class="container rtl">
      <div
        class="accordion"
        id="accordionExample"
        v-for="(season, seasonIndex) in seasons"
        v-bind:key="seasonIndex"
      >
        <div class="card">
          <div
            class="card-header"
            v-bind:class="{ bgpurple: seasonIndex == selectedSeson }"
            :id="'heading' + seasonIndex"
          >
            <h5
              class="mb-0 px-4"
              data-toggle="collapse"
              :data-target="'#collapse' + seasonIndex"
              aria-expanded="true"
              :aria-controls="'collapse' + seasonIndex"
            >
              فصل {{ seasonIndex + 1 }}
            </h5>
          </div>

          <div
            :id="'collapse' + seasonIndex"
            class="collapse show"
            :aria-labelledby="'heading' + seasonIndex"
            data-parent="#accordionExample"
          >
            <ul
              class="list-group col-12 p-0 text-center"
              v-for="(episode, episodeIndex) in season.episodes"
              v-bind:key="episodeIndex"
            >
              <a
                href="#playContent"
                v-on:click="play(seasonIndex, episodeIndex)"
                class="text-decoration-none text-dark"
              >
                <li class="list-group-item">
                  پخش اپیزود {{ episode.ep_number }}
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="pt-2">
    <div class="container">
      <div class="row rtl d-flex my-5">
        <div class="col-md-8 pt-2 d-flex flex-column" v-if="series.summary">
          <h3 class="title">خلاصه فیلم</h3>
          <p>
            {{ series.summary }}
          </p>

          <div class="row d-flex flex-grow-1 align-items-center">
            <ul class="list-group list-group-flush col-md-5 m-0 my-4 p-0">
              <li v-if="series.years" class="list-group-item p-4">
                <strong class="px-2"> سال ساخت: </strong>
                {{ series.years }}
              </li>
              <!-- <li v-if="movie.budget" class="list-group-item p-4">
                <strong class="px-2"> بودجه ساخت: </strong>
                {{ movie.budget }}
              </li> -->
              <li v-if="series.countries" class="list-group-item p-4">
                <strong class="px-2"> کشور سازنده: </strong>
                {{ series.countries.join(", ") }}
              </li>
              <li v-if="series.languages" class="list-group-item p-4">
                <strong class="px-2"> زبان: </strong>
                {{ series.languages.join(", ") }}
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 p-3">
          <ul class="list-group list-group-flush m-0 p-0 pb-3" v-if="directors">
            <h3 class="py-2 bgpurple text-white rounded-top text-center">
              کارگردان
            </h3>
            <li
              v-for="director in directors"
              v-bind:key="director.imdb_id"
              class="m-0 p-1 list-group-item ltr shadow"
            >
              <router-link
                :to="'/cast/director/' + director.imdb_id"
                class="text-dark"
              >
                <span class="avatar pr-3" v-if="director.head_shot">
                  <img
                    :src="'http://localhost:1337' + director.head_shot.url"
                  />
                </span>
                {{ director.name }}
              </router-link>
            </li>
          </ul>

          <ul class="list-group list-group-flush m-0 p-0" v-if="stars">
            <h3 class="py-2 bgpurple text-white rounded-top text-center">
              ستارگان
            </h3>
            <li
              v-for="star in stars"
              v-bind:key="star.imdb_id"
              class="m-0 p-1 list-group-item ltr shadow"
            >
              <router-link :to="'/cast/star/' + star.imdb_id" class="text-dark">
                <span class="avatar pr-3" v-if="star.head_shot">
                  <img
                    :src="'http://localhost:1337' + star.head_shot.url"
                  />
                </span>
                {{ star.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- <section>
    <div class="container rtl">
      <h3 class="px-4">فیلم های مشابه</h3>
      <div class="wrapper">
        <div
          v-for="sugMovie in suggestions"
          v-bind:key="sugMovie.imdbid"
          class="col-6 col-md-4 col-lg-3"
        >
          <router-link :to="'/media/' + sugMovie.imdbId">
            <img
              class="rounded sug-poster"
              v-bind:src="
                'http://localhost:8000/files/photos/full/' + sugMovie.poster
              "
              alt=""
            />
          </router-link>
        </div>
      </div>
    </div>
  </section> -->
</template>

<script>
import Play from "./PlayPage";

export default {
  components: { Play },
  name: "TvMedia",

  data: function () {
    return {
      series: false,
      suggestions: false,
      seasons: false,
      stars: false,
      directors: false,
      isLoved: false,
      lovedList: false,
      isArchived: false,
      archivedList: false,
      playMedia: false,
      logged_in: false,
      source: null,
      selectedSeson: 0,
    };
  },

  methods: {
    play: function (seasonNumber, episodeNumber) {
      if (this.logged_in) {
        if (this.series.free) {
          this.source =
            this.series.seasons[seasonNumber].episodes[episodeNumber].source;
          this.playMedia = !this.playMedia;
        } else {
          alert("این فیلم رایگان نیست، لطفا اشتراک تهیه کنید");
        }
      } else {
        this.$router.push({ name: "Login" });
        alert("برای تماشا ثبت نام کنید و وارد شوید");
      }
    },
    setProperties: function (data) {
      this.imdb_id = data.tvSeries[0].imdb_id;
      this.series = data.tvSeries[0];
      // this.seasons = this.series.seasons;
      this.seasons = this.series.seasons;
      console.log(this.seasons);
      this.stars = this.series.crew.stars;
      this.directors = this.series.crew.directors;
      this.series.genres = this.series.genres.map((genre) => genre.title);
      this.series.countries = this.series.countries.map(
        (country) => country.name
      );
      // this.suggestions = data.suggestions;
      if (data.me) {
        this.logged_in = true;

        this.lovedList = data.me.user.loved;
        if (this.lovedList.includes(this.imdb_id)) {
          this.isLoved = true;
        }
        this.archivedList = data.me.user.archived_series;
        if (this.archivedList.includes(this.imdb_id)) {
          this.isArchived = true;
        }
      } else {
        this.logged_in = false;
      }
    },
    getMedia: function () {
      fetch("http://localhost:1337/graphql", {
        method: "post",
        body: JSON.stringify({
          query:
            '{tvSeries(where:{imdb_id:"' +
            this.$route.params.id +
            '"}){id ,imdb_id ,title , free ,runtime ,poster {url} ,summary ,years ,genres {title} ,countries {name} ,language ,crew {stars{id , imdb_id , name , head_shot{url}} , directors{imdb_id ,name , head_shot {url}}} ,rating{rate , rates_amount} , seasons{episodes{ep_number , source {videos{url , quality}}}}} ,  me{id , user{archived_series , loved}}}',
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
        // .then((data) => console.log(data));
        .then((data) => this.setProperties(data.data));
    },
    likeMedia: function () {
      if (this.logged_in) {
        var lovedList = this.lovedList;
        if (this.isLoved) {
          this.isLoved = false;
          lovedList = lovedList.replace(this.imdb_id, "");
        } else {
          this.isLoved = true;
          lovedList = lovedList.concat(this.imdb_id);
        }

        console.log(lovedList);

        fetch("http://localhost:1337/users/me", {
          method: "put",
          body: JSON.stringify({
            loved: lovedList,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        });
      } else {
        this.$router.push({ name: "Login" });
        alert("لطفا اول ثبت نام کنید و وارد شوید");
      }
    },
    archiveMedia: function () {
      if (this.logged_in) {
        var archivedList = this.archivedList;
        if (this.isArchived) {
          this.isArchived = false;
          archivedList = archivedList.replace(this.imdb_id, "");
        } else {
          this.isArchived = true;
          archivedList = archivedList.concat(this.imdb_id);
        }

        fetch("http://localhost:1337/users/me", {
          method: "put",
          body: JSON.stringify({
            archived_series: archivedList,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        });
      } else {
        alert("لطفا اول ثبت نام کنید و وارد شوید");
      }
    },
  },

  watch: {
    $route() {
      this.getMedia();
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

.bgpurple {
  background: linear-gradient(to bottom, #a11f3c 0%, #9352b3 100%);
  color: white;
}

.bgred {
  background-color: red !important;
  color: white;
}

.bgblack {
  background-color: black !important;
  color: white;
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

.overlay {
  position: relative;
  display: inline-block;
}

.overlay::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #a11f3c 0%, #9352b3 100%);
  opacity: 0;
  transition: 0.5s ease;
}

.overlay:hover::before {
  opacity: 0.7;
}

.overlay:hover .play-icon {
  opacity: 1;
}

.play-icon {
  color: white;
  font-size: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: 10;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  text-align: center;
  opacity: 0;
}

.play-icon:hover {
  font-size: 90px;
}

.details {
  color: #fff;
}

.half-clear {
  opacity: 0.7;
}

.main-detail-intro {
  display: block;
  position: relative;
  margin-top: -300px;
}

.storyline h3 .title {
  color: #3e4555;
  font-size: 30px;
}

.storyline p {
  clear: #948a99;
  font-size: 20px;
}

.avatar img {
  border-radius: 4px;
  max-width: 60px;
  max-height: 60px;
  object-fit: cover;
  width: auto;
  height: auto;
}

.wrapper {
  display: flex;
  overflow-x: auto;
  direction: rtl;
}

.wrapper::-webkit-scrollbar {
  width: 0;
}

.sug-poster {
  object-fit: cover;
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
  /* height: 350px; */
}
</style>