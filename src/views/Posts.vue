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

    return { posts };
  },
};
</script>

<style lang="scss" scoped></style>
