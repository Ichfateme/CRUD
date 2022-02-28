<template>
  <div class="flex justify-end">
    <div class="flex flex-col justify-between items-start p-5 w-80 bg-zinc-100 rounded-md">
      <!-- Post title -->
      <p class="text-lg mb-2">
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
        class="flex items-center justify-center px-2 py-1 no-underline bg-black rounded-md text-white"
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
