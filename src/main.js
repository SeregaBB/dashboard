import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const store = {
  state: {
    activeTab: 0
  }
}

new Vue({
  data: function () {
    return {
      state: store.state
    }
  },
  render: h => h(App)
}).$mount('#app')
