import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";

import en from "./translation/en.json";
import id from "./translation/id.json";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: localStorage.getItem("lang") || "en",
  messages: {
    en: en,
    id: id,
  },
  fallbackLocale: "en",
});

const app = createApp(App).use(store).use(router).use(i18n);

app.mount("#app");
