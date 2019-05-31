<template>
  <div class="addreply">
    <div class="top">添加回复</div>
    <div classs="bottom">
      <textarea v-model="val" name id cols="30" rows="10"></textarea>

      <button @click="huifu(val)">回复</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
export default {
  name: "addpinglun",
  data() {
    return {
      val: ""
    };
  },

  computed: {
    ...mapState({
      value: state => state.reply.huifu
    })
  },
  methods: {
    ...mapActions(["gethuifu"]),
    huifu(contents) {
      const { id } = this.$route.params;
      console.log(id);
      axios
        .post(`https://www.vue-js.com/api/v1/topic/${id}/replies`, {
          accesstoken: sessionStorage.accesstoken,
          content: contents
        })
        .then(res => {
          this.val = "";
        });
    }
  }
};
</script>

<style>
.addreply {
  background-color: #fff;
  width: 70%;
  margin-left: 80px;
  border-radius: 3px;
}
.top {
  background-color: #f6f6f6;
  padding: 10px;
  font-size: 14px;
  border-radius: 3px 3px 0px 0px;
  border-bottom: 1px solid #ccc;
}
textarea {
  width: 100%;
  border: 0;
  resize: none;
}
input:focus,
textarea:focus {
  outline: none;
}

button {
  background-color: rgb(94, 94, 248);
  padding: 5px 10px;
  border: none;
  color: #fff;
  border-radius: 3px;
  margin-left: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}
button:focus {
  outline: none;
}
button:hover {
  background-color: rgb(52, 52, 250);
}
</style>
