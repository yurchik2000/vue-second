import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView";
import EventsList from "../views/EventsList";
import CreateEvent from "../views/CreateEvent";
import EditEvent from "../views/EditEvent";
import EventItem from "../components/EventItem";
import NotFoundComponent from "@/components/NotFoundComponent";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/edit",
    name: "edit",
    component: EditEvent,
  },
  {
    path: "/create",
    name: "create",
    component: CreateEvent,
  },
  {
    path: "/events",
    name: "events",
    component: EventsList,
    children: [
      {
        path: ":id",
        name: "event-item",
        component: EventItem,
        props: true,
      },
    ],
  },
  {
    path: "*",
    component: NotFoundComponent,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
