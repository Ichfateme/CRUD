<template>
  <div class="home">
    <Navbar msg="All Posts" />

    <div class="posts">
      <post-cart :id="post.id" :title="post.title" v-for="post in posts" :key="post.id" />
    </div>
  </div>
</template>

<script>
  // Packages
  import axios from "axios"

  // Components
  import Navbar from "@/components/Navbar.vue";
  import PostCart from "@/components/PostCart.vue";

  export default {
    name: "Home",

    components: {
      Navbar,
      PostCart
    },

    data() {
      return {
        posts: []
      }
    },

    created() {
      this.loadPosts()
    },

    methods: {
      loadPosts() {
        axios
          .get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _limit: 6
            }
          })
          .then((r) => {
            this.posts = r.data
            console.log(r.data);
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  };
</script>

<style>
  .home {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  }

  .posts {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }
</style>