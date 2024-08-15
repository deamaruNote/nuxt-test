<template>
  <div class="">
    <ul>
      <li>
        <div class="card">
            <div class="title">安裝 Vuex：</div>
            <pre>npm install vuex</pre>
        </div>
      </li>
      <li>
        <div class="card">
          <div class="title">創建一個 Vuex Store：</div>
          <div class="url">store/index.js</div>
          <pre>
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
});
  </pre
          >
        </div>
      </li>
      <li>
        <div class="card">
            <div class="title">在主 Vue 實例中使用 Vuex Store：</div>
            <div class="url">main.js</div>
            <pre>
import Vue from 'vue';
import App from './App.vue';
import store from './store';

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
            </pre>
        </div>
      </li>
      <li>
        <div class="card">
            <div class="title">從 Store 中獲取狀態：</div>
            <pre>computed: {
  count() {
    return this.$store.state.count;
  },
},
</pre>
        </div>
        <div class="card">
            <div class="title">提交 mutation：</div>
            <pre>methods: {
  increment() {
    this.$store.commit('increment');
  },
},
</pre>
        </div>
        <div class="card">
            <div class="title">調用 action：</div>
            <pre>methods: {
  increment() {
    this.$store.dispatch('increment');
  },
},
</pre>
        </div>
        <div class="card">
            <div class="title">使用 getters：</div>
            <pre>computed: {
  doubleCount() {
    return this.$store.getters.doubleCount;
  },
},
</pre>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style >
pre {
  border: 1px solid #fff;
  padding: 5px;
  border-radius: 3px;
}
</style>