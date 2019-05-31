<template>
  <div class="topic" v-if="topic">
    <h2 style="marign:0">{{topic.title}}</h2>
    <div class="time">
      <span>{{topic.create_at|dateFrm}}</span>
      <span>· 作者 {{topic.author.loginname}}</span>
      <span>· {{topic.visit_count}}次浏览</span>
      <span>· {{topic.last_reply_at |dateFrm}}</span>
      <span>来自 · {{topic.tab==='share'?'分享':topic.tab==='ask'?'问答':'招聘'}}</span>

      <!-- 内容区 -->
      <article class="article" v-html="topic.content"></article>
    </div>
    <Pinglun v-if="$store.state.reply.huifu"/>
    <Addpinglun v-if="$store.state.login.info"/>
  </div>
</template>

<script>
import moment from "moment";
import Pinglun from "./Pinglun";
import Addpinglun from "./Addpinglun";
import { mapState, mapActions } from "vuex";
export default {
  name: "topic",
  components: {
    Pinglun,
    Addpinglun
  },
  watch: {
    "$route.path": {
      handler() {
        const { id } = this.$route.params;
        this.getTopic(id);
      },
      immediate: true
    }
  },
  computed: {
    ...mapState({
      topic: state => state.topic.all
    })
  },
  methods: {
    ...mapActions(["getTopic"])
  },
  filters: {
    dateFrm: function(date) {
      moment.locale("zh-cn");
      return moment(date).fromNow();
    }
  }
};
</script>

<style scoped>
.time h2 {
  margin: 0;
}
.time span {
  margin-right: 10px;
  color: #ccc;
}
.article {
  width: 60%;
}
.topic {
  margin-left: 80px;
}
</style>
