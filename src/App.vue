<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const { t, locale } = useI18n();

    return { t, locale };
  },
  components: {
    Navbar,
  },

  data() {
    return {
      lang: "en",
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
