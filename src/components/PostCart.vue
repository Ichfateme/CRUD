<template>
  <div class="postCart">
    <div class="textCart">
      <!-- Post title -->
      <p class="text">
        {{ title }}
      </p>

      <!-- Post link -->
      <router-link
        :to="{
          name: 'SinglePage',
          params: {
            id: id
          }
        }"
        class="btn"
      >
        →
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PostCard",

    props: {
      title: {
        type: String,
        required: true
      },
      id: {
        type: Number,
        required: true
      }
    }

  };
</script>

<style>
  .postCart {
    display: flex;
    justify-content: flex-end;
    gap: 20px;

  }

  .textCart {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    background: #EEEEEE;
    padding: 24px;
    border-radius: 15px;
    width: 350px;
  }

  .text {
    font-size: 24px;
  }

  .btn {
    font-size: 20px;
    background: #000;
    color: #fff;
    border: 0;
    border-radius: 10px;
    text-decoration: none;
    display: inline-flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
  }
</style>