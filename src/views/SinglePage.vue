<template>
  <div>
    <Navbar />

    <div class="post">
      <!-- Edit and Delete -->
      <div class="button">
        <div>
          <router-link :to="{
          name: 'Edit',
          params: {
            id: $route.params.id
          }
        }" class="btn">
            edit
          </router-link>
        </div>
        <div>
          <router-link to="" class="btn">
            delete
          </router-link>
        </div>
      </div>

      <!-- Title -->
      <h1 class="title">
        {{post.title}}
      </h1>

      <!-- Body -->
      <p class="body">
        {{post.body}}
      </p>
    </div>
  </div>
</template>

<script>
  // Packages
  import axios from "axios"

  //components
  import Navbar from "@/components/Navbar.vue"

  export default {
    name: 'SinglePage',


    components: {
      Navbar
    },

    data() {
      return {
        post: {}
      }
    },

    created() {
      this.loadPost()
    },

    methods: {
      loadPost() {
        const id = this.$route.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response) => {
            this.post = response.data
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  }
</script>


<style>
  .post {
    display: flex;
    padding: 0 70px;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    font-size: 24px;
  }

  .button {
    display: flex;
    font-size: 12px;
    gap: 20px;
  }
</style>