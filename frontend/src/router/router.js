import { createWebHistory, createRouter } from "vue-router";
// import Home from "@components/Home"
import Home from "@/components/HomePage";
import Movies from "@/components/MoviesPage";
import Animations from "@/components/AnimationsPage";
import TvSeries from "@/components/TvSeriesPage";
import Media from "@/components/MediaPage";
import TvMedia from "@/components/TvMediaPage";
import Genres from "@/components/GenresPage";
import Genre from "@/components/GenrePage";
import Archive from "@/components/ArchivePage";
import Register from "@/components/RegisterPage";
import Login from "@/components/LoginPage";
import Cast from "@/components/CastPage";
import Subscription from "@/components/SubscriptionPage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/media/:id",
    name: "Media",
    component: Media,
  },
  {
    path: "/tvmedia/:id",
    name: "TvMedia",
    component: TvMedia,
  },
  {
    path: "/cast/:type/:id",
    name: "Cast",
    component: Cast,
  },
  {
    path: "/genres",
    name: "Genres",
    component: Genres,
  },
  {
    path: "/genre/:id",
    name: "Genre",
    component: Genre,
  },
  {
    path: "/archive",
    name: "Archive",
    component: Archive,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
  },
  {
    path: "/animations",
    name: "Animations",
    component: Animations,
  },
  {
    path: "/tvseries",
    name: "TvSeries",
    component: TvSeries,
  },
  {
    path: "/subscription",
    name: "Subscribtion",
    component: Subscription,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;