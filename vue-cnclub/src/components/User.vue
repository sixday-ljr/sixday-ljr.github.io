<template>
  <div>
    <div v-if="!loginInfo">
      <label>用户名:</label>
      <input type="text" v-model="val">
      <br>
      <button @click="login(val)">登录</button>
    </div>
    <div v-else>
      <img :src="loginInfo.avatar_url" alt>
      <button @click="logout">登出</button>
    </div>
  </div>
</template>

// 
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "user",
  data() {
    return {
      val: "79b3b12e-9631-467b-9210-c68449c98a35"
    };
  },
  computed: {
    ...mapState({
      loginInfo: state => state.login.info
    })
  },
  methods: {
    ...mapActions(["login"]),
    ...mapMutations(["logout"])
  },
  created() {
    if (sessionStorage.success) {
      this.$store.commit("login", {
        id: sessionStorage.success.id,
        loginname: sessionStorage.success.loginname,
        avatar_url: sessionStorage.success.avatar_url,
        success: true
      });
    }
  }
};
</script>

<style>
</style>

