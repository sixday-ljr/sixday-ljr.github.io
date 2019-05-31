<template>
  <div class="top">
    <img src="https://www.vue-js.com/public/images/vue.png" alt>
    <span>Vue.js</span>
    <input type="text">
    <ul>
      <li>
        <router-link active-class="active" to="/vue-shequ/">首页</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/vue-shequ/">微信公众号</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/vue-shequ/">VUE 2.0</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/vue-shequ/">参考资料</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/vue-shequ/">API</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/vue-shequ/">关于</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/vue-shequ/">注册</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/vue-shequ/user/User">登录</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "hometop"
};
</script>

<style scoped>
.top {
  background-color: green;
  position: relative;
}
.top img {
  width: 50px;
  margin: 10px 10px 10px 50px;
}
.top > span {
  font-size: 24px;
  position: absolute;
  top: 25%;
  color: #fff;
}
.top input {
  background-color: darkgreen;
  position: absolute;
  top: 35%;
  left: 23%;
  border: 0;
  height: 20px;
  border-radius: 10px;
  outline: none;
}
.top input:hover {
  background-color: #fff;
}
.top > ul {
  position: absolute;
  right: 0;
  top: 15%;
  display: flex;
  margin-right: 40px;
}
.top ul li {
  margin-right: 20px;
  font-size: 12px;
}
.top ul li:last-child > active {
}
.active {
  color: #ccc;
}
</style>
