<template>
  <div>
    <div class="replys">
      <div
        class="reply"
        v-show="topic.length"
      >{{topic.length>0 ?topic.length:''}}{{topic.length>0?"回复":''}}</div>
      <ul>
        <li v-for="(reply,index) in topic" :key="reply.id">
          <div class="author">
            <router-link :to="`/user/${reply.author.loginname}`">
              <img class="author-img" width="30px" :src="reply.author.avatar_url" alt>
            </router-link>
            <div class="author-info">
              <span>{{reply.author.loginname}}</span>

              <a href class="time">{{index+1}}楼•{{reply.create_at |dateFrm}}</a>
            </div>

            <!-- <div class=""> xxx</div> -->
          </div>
          <div v-html="reply.content" class="reply-area">{{reply.content}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { mapState, mapActions } from "vuex";
export default {
  name: "pinglun",
  watch: {
    "$route.path": {
      handler() {
        const { id } = this.$route.params;

        this.gethuifu(id);
      },
      immediate: true
    }

    // topic:{
    //   l(){
    //     const { id } = this.$route.params;
    //     this.gethuifu(id);
    //   }
    // }
  },

  computed: {
    ...mapState({
      topic: state => state.reply.huifu
    })
  },
  methods: {
    ...mapActions(["gethuifu"])
  },
  // created () {
  //     axios.post().then(res=>{

  //     })
  // },
  filters: {
    dateFrm: function(el) {
      moment.locale("zh-cn");
      // return moment(el, "YYYYMMDD").fromNow();
      return moment(el)
        .startOf()
        .fromNow();
    }
  }
};
</script>

<style scoped>
.replys {
  background-color: #fff;
  margin-left: 80px;
  width: 70%;
  border-radius: 3px;
}
.reply {
  margin-top: 20px;
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
}
.reply-area {
  padding-right: 10px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  overflow: hidden;
  width: 100%;
  padding-left: 50px;
}
.reply-area img {
  width: 100%;
}

ul {
  padding-left: 10px;
}

.author {
  display: flex;
  align-items: center;
  font-size: 12px;
  padding: 10px 0px;
}
.author-info {
  margin-left: 10px;
}
.author-img {
  border-radius: 3px;
}
.author-info > span {
  font-weight: bold;
}

.time {
  color: #08c;
  margin-left: 5px;
  font-size: 8px;
}
.time:hover {
  text-decoration: underline;
  color: #000;
}
</style>
