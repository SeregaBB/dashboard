import Vue from 'vue'
import Dashboard from "@/components/pages/Dashboard";

Vue.config.productionTip = false

export const store = Vue.observable({
  users: [],
  manuallyAddedUsers: []
});

export const mutations = {
  addUsers(users) {
    store.users = users;
  },
  manuallyAddUser(user) {
    user.id = Math.max(store.users.length, store.manuallyAddedUsers.length) + 1;
    store.manuallyAddedUsers = [...store.manuallyAddedUsers, user]
  },
  removeUser(id) {
    store.manuallyAddedUsers = store.manuallyAddedUsers.filter(usr => usr.id !== id);
    store.users = store.users.filter(usr => usr.id !== id);
  }
};

new Vue({
  data: function () {
    return {
      state: store.state
    }
  },
  render: h => h(Dashboard)
}).$mount('#app')
