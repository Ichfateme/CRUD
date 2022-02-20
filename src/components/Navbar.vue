<template>
  <div class="nav">
    <!-- Post link -->
    <button to="" class="btn">
      ←
    </button>
    <h1>{{msg}}</h1>
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
<style>
  .nav {
    padding: 0 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 80px;
    background: #FAFAFA;
    margin-bottom: 40px;
    gap: 20px;
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