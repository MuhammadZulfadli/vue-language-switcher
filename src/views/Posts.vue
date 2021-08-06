<template>
  <div>
    <ul v-for="post in posts" :key="post.id">
      <li>
        <span> {{ post.name }}</span>
      </li>

      <img :src="post.image_url" alt="" srcset="" />

      <li>
        <span> {{ post.first_brewed }}</span>
      </li>
      <li>
        <span> {{ post.description }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
export default {
  setup() {
    let posts = ref([]);
    onMounted(() => {
      axios
        .get("https://api.punkapi.com/v2/beers")
        .then((result) => {
          posts.value = result.data;
          console.log(posts.value);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    return { posts };
  },
};
</script>

<style lang="scss" scoped></style>
