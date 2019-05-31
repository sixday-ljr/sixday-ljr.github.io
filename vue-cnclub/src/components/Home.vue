<template>
  <div>
    <nav class="nav">
      <ul>
        <li>
          <router-link
            :class="{active: $route.path === '/vue-shequ' || $route.path === '/vue-shequ/all'|| $route.path === '/vue-shequ/all'}"
            to="/vue-shequ/all"
          >首页</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/vue-shequ/good">精华</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/vue-shequ/weex">weex</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/vue-shequ/share">分享</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/vue-shequ/ask">问答</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/vue-shequ/job">招聘</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
.nav {
  position: absolute;
  top: 84px;
  background-color: #f6f6f6;
  width: 77%;
  margin-left: 40px;
  margin-top: 40px;
  height: 30px;
}
.nav ul {
  margin: 0;
  padding: 0;
  margin-left: 10px;
  display: flex;
}
.nav ul li {
  line-height: 30px;
  margin-right: 10px;
}
.active {
  line-height: 30px;
  color: #ccc;
  background-color: green;
}
</style>
