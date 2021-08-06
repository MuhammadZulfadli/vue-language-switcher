<template>
  <div>
    <select v-model="lang" @change="handleTranslate($event)">
      <option value="en">English</option>
      <option value="id">Indonesia</option>
    </select>
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
