import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Topic from './components/Topic.vue'
import User from './components/User.vue'
import TopicList from './components/TopicList.vue'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [{
      path: '/vue-shequ/',
      component: Home,
      children: [{
          path: "",
          component: TopicList
        },
        {
          path: ":type",
          component: TopicList
        }
      ]
    },
    {
      path: '/vue-shequ/topic/:id',
      component: Topic
    },
    {
      path: '/vue-shequ/user/:id',
      component: User
    }
  ],
  mode: 'history'
})