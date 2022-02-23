<template>
  <div class="navbar">
    <div class="nav">
      <!-- Post link -->
      <div class="link">
        <button to="" class="btn">
          ←
        </button>
        <h1>{{msg}}</h1>
      </div>

      <div class="icon">
        <img class="img" src="@/assets/jirafe.jpg" alt="">
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
<style>
  .navbar {
    width: 100%;
    background: #FAFAFA;
    margin-bottom: 40px;
  }

  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
  }

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .icon {
    width: 50px;
    height: 50px;
  }

  .img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
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