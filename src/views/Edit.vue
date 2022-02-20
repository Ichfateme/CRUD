<template>
  <Navbar msg="Edit Post ID: #2"/>
  <div class="edit">

    <!-- textarea -->
    <div>
      <h1 class="title">
        Title:
      </h1>
      <textarea v-model="post.title" class="textarea">
      </textarea>
    </div>

    <div>
      <h1 class="title">
        Title:
      </h1>
      <textarea v-model="post.body" class="textarea">
      </textarea>
    </div>

    <!-- button -->
    <div class="button">
      <router-link to="" class="btn">
        Save change
      </router-link>
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
      }
    }

  }
</script>


<style scoped>
  .edit {
    padding: 50px;
  }

  .textarea {
    width: 50%;
    height: 50px;
    border-color: gray;
    border-radius: 5px;
    padding: 5px;
    scroll-behavior: unset;
  }

  .title {
    font-size: 24px;
  }

  .button {
    margin-top: 15px;
  }
</style>