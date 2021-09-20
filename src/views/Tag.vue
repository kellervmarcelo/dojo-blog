<template>
  <div class="tag">
    <div v-if="error">
      <p>Deu ruim, 🥺</p>
    </div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="filteredPosts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPosts from "../composables/getPosts";
import PostList from "@/components/PostList.vue";
import Spinner from "../components/Spinner.vue";
import TagCloud from "../components/TagCloud.vue";
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";

export default {
  components: { PostList, Spinner, TagCloud },
  setup() {
    const { posts, error, load } = getPosts();
    const tag = useRoute().params.tag;

    load();

    const filteredPosts = computed(() => {
      return posts.value.filter((post) => {
        return post.tags.includes(tag);
      });
    });

    return { posts, error, filteredPosts };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
