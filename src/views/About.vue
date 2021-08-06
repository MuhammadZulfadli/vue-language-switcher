<template>
  <div class="about">
    <h1>{{ t("about.message") }}</h1>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const { t, locale } = useI18n();

    return { t, locale };
  },
};
</script>
