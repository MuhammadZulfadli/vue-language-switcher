<template>
  <div>
    <div class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Vue Switcher</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">{{
                t("nav.home")
              }}</router-link>
              <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">{{
                t("nav.about")
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/posts">{{
                t("nav.posts")
              }}</router-link>
            </li>
          </ul>
        </div>

        <div class="d-flex justify-content-end">
          <div>
            <select
              class="form-select dropdown-toggle"
              v-model="lang"
              @change="handleTranslate($event)"
            >
              <option value="en">English</option>
              <option value="id">Indonesia</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const { t, locale } = useI18n();

    return { t, locale };
  },

  data() {
    const lang = localStorage.getItem("lang") || "en";
    return {
      lang: lang,
    };
  },
  methods: {
    handleTranslate(event) {
      localStorage.setItem("lang", event.target.value);
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped></style>
