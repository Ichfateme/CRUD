<template>
  <div class="w-full bg-zinc-100 mb-10">
    <div class="flex justify-center items-center justify-between py-5 px-3 ">
      <!-- Post link -->
      <div class="flex justify-center items-center gap-5">
        <button to="" class="flex items-center justify-center px-2 py-1 no-underline bg-black rounded-md text-white">
          ←
        </button>
        <h1 class="font-bold text-lg">{{msg}}</h1>
      </div>

      <div class="w-14 h-14">
        <img class="w-full h-full rounded-full" src="@/assets/jirafe.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navbar",
    props: {
      msg: String
    }
  };
</script>
