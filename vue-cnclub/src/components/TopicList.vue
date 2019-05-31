<template>
  <div class="all">
    <div class="list">
      <ul v-if="topics.length">
        <li class="cell" v-for="topic in topics" :key="topic.id">
          <img :src="topic.author.avatar_url" alt>
          <span>{{topic.reply_count}}</span>
          <span>/</span>
          <span>{{topic.visit_count}}</span>
          <span
            :class="(topic.top||topic.good)?'box show':'box'"
          >{{topic.top?'置顶':topic.good?'精华':topic.tab==='share'?'分享':topic.tab==='ask'?'问答':'招聘'}}</span>
          <router-link class="a" :to="`/vue-shequ/topic/${topic.id}`">{{topic.title}}</router-link>
          <span class="date">{{topic.last_reply_at|date}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState, mapActions } from "vuex";
export default {
  name: "topiclist",
  watch: {
    "$route.path": {
      handler() {
        const { type } = this.$route.params;
        this.getTopics(type);
      },
      immediate: true
    }
  },
  computed: {
    ...mapState({
      topics: state => state.topics.all
    })
  },
  methods: {
    ...mapActions(["getTopics"])
  },
  filters: {
    date: function(date) {
      moment.locale("zh-cn");
      return moment(date).fromNow();
    }
  }
};
</script>

<style scoped>
.all {
  background-color: #e1e1e1;
}
.list {
  margin-top: 80px;
  width: 80%;
}
.list ul {
  background-color: #fff;
  margin-left: 40px;
  padding-left: 10px;
}
.list .box {
  background-color: #ccc;
  color: #000;
  padding: 4px 6px;
  border-radius: 4px;
  font-size: 12px;
}
.list .show {
  background-color: green;
  color: #fff;
}
.list .cell img {
  width: 30px;
  border-radius: 3px;
}
.list .a {
  margin-bottom: 15px;
  color: #000;
}
.list .a:hover {
  text-decoration: underline;
}
.list .cell {
  padding: 10px 0 10px 10px;
  margin-left: -10px;
  border-top: 1px solid #ccc;
}
.list .cell:hover {
  background-color: #ccc;
}
.list .cell > span:nth-child(5) {
  margin-left: 10px;
  margin-right: 10px;
}
.list .cell > span:nth-child(2) {
  margin-left: 10px;
}
.list .cell:first-child {
  border: 0;
}
.date {
  float: right;
  margin-right: 10px;
}
</style>
