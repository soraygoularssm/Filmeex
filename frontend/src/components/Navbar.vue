<template>
  <nav class="navbar navbar-expand-lg navbar-light" id="ftco-navbar">
    <div class="container" dir="rtl">
      <a class="text-white pl-4" href="/" style="text-decoration: none">
        <img
          class="mr-3"
          src="@/assets/FILMEEX.png"
          alt="Logo"
          style="width: 100px"
        />
      </a>
      <button
        class="navbar-toggler collapsed text-light"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="bx bx-menu text-light"></span> منو
      </button>

      <div class="navbar-collapse collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto text-right">
          <li class="nav-item">
            <a href="/" class="nav-link text-light pl-3">خانه</a>
          </li>
          <li class="nav-item">
            <a href="/tvseries" class="nav-link text-light pl-3">سریال</a>
          </li>
          <li class="nav-item">
            <a href="/movies" class="nav-link text-light pl-3">فیلم</a>
          </li>
          <li class="nav-item">
            <a href="/animations" class="nav-link text-light pl-3">انیمیشن</a>
          </li>
          <li class="nav-item">
            <a href="/genres" class="nav-link text-light pl-3">زانر ها</a>
          </li>
          <li class="nav-item">
            <a href="/subscription" class="nav-link text-light">خرید اشتراک</a>
          </li>
          <li v-if="logged_in">
            <a
              href="/archive"
              class="
                btn btn-rounded
                shadow-none
                bg-transparent
                text-white text-center
                float-right
              "
              style="font-size: 18px"
            >
              <font-awesome-icon :icon="['far', 'bookmark']" class="ml-2" />
              آرشیو من
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>



<script>
export default {
  name: "Navbar",
  data: function () {
    return {
      logged_in: false,
    }
  },
  mounted() {
    fetch("http://localhost:1337/graphql", {
      method: "post",
      body: JSON.stringify({
        query: "{me{id}}",
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
      .then((data) => {
        if (data.data.me) {
          this.logged_in = true;
        } else {
          this.logged_in = false;
        }
      });
  },
};
</script>

<style scoped>
.navbar {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  z-index: 999;
}
.navbar-light {
  background: rgb(161, 31, 60, 0.95);
}
</style>