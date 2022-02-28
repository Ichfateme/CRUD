<template>
  <div>
    <Navbar msg="Post ID: #2" />

    <div class="flex justify-center flex-col px-16">
      <!-- Edit and Delete -->
      <div class="flex gap-5">
        <div>
          <router-link :to="{
          name: 'Edit',
          params: {
            id: $route.params.id
          }
        }" class="flex items-center justify-center px-2 py-1 no-underline bg-black rounded-md text-white">
            edit
          </router-link>
        </div>
        <div>
          <button @click="remove()" to=""
            class="flex items-center justify-center px-2 py-1 no-underline bg-black rounded-md text-white">
            delete
          </button>
        </div>
      </div>

      <!-- Title -->
      <h1 class="text-lg mt-2">
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
      },

      remove() {
        const id = this.$route.params.id
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((succes) => {
            this.$router.push({
              path: '/'
            })
            console.log(succes);
          })
      }
    }
  }
</script>


<style>
  .title {
    font-size: 24px;
  }
</style>