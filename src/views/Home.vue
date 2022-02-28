<template>
  <div class="flex flex-col justify-center items-start">
    <Navbar msg="All Posts" />

    <div class="flex flex-wrap justify-center gap-6">
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