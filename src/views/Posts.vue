<template>
  <div class="container">
    <h4>{{ t("posts.title") }}</h4>
    <div class="row justify-content-center mt-4">
      <div class="col-4" v-for="post in posts" :key="post.id">
        <div class="card rounded shadow mb-4">
          <div>
            <img
              class="mt-4"
              :src="post.image_url"
              style="width: 120px; height: 220px"
            />
          </div>
          <div class="card-body">
            <h4 class="card-title">{{ post.name }}</h4>
            <h5 class="card-body">Release : {{ post.first_brewed }}</h5>
            <p class="card-text">{{ post.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const { t, locale } = useI18n();
    //   state untuk menampung data
    let posts = ref([]);

    // methods - funciton untuk get data from api
    async function getlist() {
      try {
        const response = await axios.get("https://api.punkapi.com/v2/beers");
        posts.value = response.data;
        console.log(posts.value);
      } catch (error) {
        console.log(error);
      }
    }

    // Memanggil function getlist() pada mounted
    onMounted(() => {
      getlist();
    });

    return { posts, t, locale };
  },
};
</script>

<style lang="css" scoped></style>
