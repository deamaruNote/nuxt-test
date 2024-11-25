import{_ as t,o as n,c as s,q as o,b as c,a as d}from"./CFFdOR1B.js";const a={},u={class:""},l=o(`<ul><li><div class="card"><div class="title">安裝 Vuex：</div><pre>npm install vuex</pre></div></li><li><div class="card"><div class="title">創建一個 Vuex Store：</div><div class="url">store/index.js</div><pre><code class="language-javascript">
import Vue from &#39;vue&#39;;
import Vuex from &#39;vuex&#39;;

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
      commit(&#39;increment&#39;);
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
});</code>
  </pre></div></li><li><div class="card"><div class="title">在主 Vue 實例中使用 Vuex Store：</div><div class="url">main.js</div><pre>import Vue from &#39;vue&#39;;
import App from &#39;./App.vue&#39;;
import store from &#39;./store&#39;;

new Vue({
  store,
  render: h =&gt; h(App),
}).$mount(&#39;#app&#39;);
            </pre></div></li><li><div class="card"><div class="title">從 Store 中獲取狀態：</div><pre>computed: {
  count() {
    return this.$store.state.count;
  },
},
</pre></div><div class="card"><div class="title">提交 mutation：</div><pre>methods: {
  increment() {
    this.$store.commit(&#39;increment&#39;);
  },
},
</pre></div><div class="card"><div class="title">調用 action：</div><pre>methods: {
  increment() {
    this.$store.dispatch(&#39;increment&#39;);
  },
},
</pre></div><div class="card"><div class="title">使用 getters：</div><pre>computed: {
  doubleCount() {
    return this.$store.getters.doubleCount;
  },
},
</pre></div></li></ul>`,1),p=[l];function v(i,r,e,f,$,g){return n(),s("div",u,p)}const m=t(a,[["render",v]]),_={},h={class:"content"},x=d("h1",null,"Vue 的使用入門",-1);function V(i,r){const e=m;return n(),s("div",h,[x,c(e)])}const b=t(_,[["render",V]]);export{b as default};
