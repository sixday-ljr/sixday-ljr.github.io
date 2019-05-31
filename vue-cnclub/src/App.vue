<template>
  <div class="app">
    <HomeTop/>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeTop from "./components/HomeTop";
export default {
  name: "app",
  components: {
    HomeTop
  }
};
</script>

<style>
.app {
  background-color: #e1e1e1;
}
</style>
