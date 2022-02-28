<template>
  <div>
    <Navbar msg="Edit Post ID: #2" />
    <div class="p-3">
      <div>
        <h1 class="text-lg font-bold">
          Title:
        </h1>
        <textarea v-model="post.title" class="w-1/2 h-14 p-2 border-solid border-2 border-sky-500">
      </textarea>
      </div>
      <div>
        <h1 class="text-lg font-bold">
          Title:
        </h1>
        <textarea v-model="post.body" class="w-1/2 h-14 p-2 border-solid border-2 border-sky-500">
      </textarea>
      </div>
      <div class="mt-2">
        <button @click="edit"
          class="flex items-center justify-center px-2 py-1 no-underline bg-black rounded-md text-white">
          Save change
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  // Packages
  import axios from 'axios'

  //components
  import Navbar from "@/components/Navbar.vue"

  export default {

    name: 'Edit',

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
        axios
          .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((r) => {
            this.post = r.data
            console.log(r.data);
          })
          .catch((err) => {
            console.log(err);
          })
      },

      edit() {
        const id = this.$route.params.id
        axios
          .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            data: {
              ...this.post
            }
          })
          .then((r) => {
            alert('changeing :)')
            console.log(r.data);
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }

  }
</script>