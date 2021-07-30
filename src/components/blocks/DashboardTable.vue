<template>
  <div>
    <Loader v-if="!ready"/>
    <table v-else>
      <thead>
      <tr>
        <th width="75"></th>
        <th>Basic info</th>
        <th>Employee code</th>
        <th>Designation</th>
        <th>Phone number</th>
        <th>Join date</th>
        <th width="75"></th>
      </tr>
      </thead>
      <tbody>

      <tr v-for="(user, i) in users" :key="i">
        <td>{{ user.id }}</td>
        <td>
          <div class="grid">
            <img :src="user.avatar"/>
            <h2>{{ user.name }}</h2>
            <span>{{ user.mail }}</span>
          </div>
        </td>
        <td>{{ user.employeeCode }}</td>
        <td>{{ user.designation }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ getDate(user.joiningDate) }}</td>
        <td class="remove">
          <svg viewBox="0 0 510 510" fill="currentColor" @click="removeUser(user.id)">
            <defs/>
            <path fill="currentColor" d="M240 240h30v165h-30zM180 240h30v165h-30zM300 240h30v165h-30z"/>
            <path fill="currentColor"
                  d="M450 60H330V45c0-24.813-20.186-45-45-45h-60c-24.814 0-45 20.187-45 45v15H60v90h31.248l27.584 317.243A44.89 44.89 0 00163.776 510h182.447a44.89 44.89 0 0044.944-42.757L418.752 150H450zM210 45c0-8.271 6.729-15 15-15h60c8.272 0 15 6.729 15 15v15h-90zM90 90h330v30H90zm271.211 375.624A14.965 14.965 0 01346.224 480H163.776a14.964 14.964 0 01-14.987-14.376L121.36 150h267.28c-.08.905 1.788-20.569-27.429 315.624z"/>
          </svg>
        </td>
      </tr>
      </tbody>
    </table>
    <h2 v-if="!users.length && ready">No Employees</h2>
    <Form @onAdd="addUser"/>
  </div>
</template>

<script>
import Loader from "@/components/blocks/Loader";
import Form from "@/components/blocks/Form";
import {store, mutations} from "@/main";

export default {
  name: 'DashboardTable',
  components: {Form, Loader},
  data: () => ({
    activeTab: 0,
    users: [],
    ready: false
  }),
  methods: {
    async getUsers() {
      const response = await fetch('https://6102c7ad79ed680017482305.mockapi.io/users', {
        method: 'GET'
      });
      mutations.addUsers([...response.ok ? await response.json() : []]);
      this.updateUsers();
      if (!response.ok) alert('Something went wrong');
      this.ready = true;
    },

    updateUsers() {
      this.users = [...store.users, ...store.manuallyAddedUsers];
    },

    getDate(rawDate) {
      const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const date = new Date(rawDate);
      return `${month[date.getMonth()]} ${('0' + date.getDate()).slice(-2)}, ${date.getFullYear()}`;
    },

    async filterUsers(tab) {
      this.ready = false;
      this.activeTab = tab;
      this.updateUsers();

      const others = ['manager', 'developer', 'engineer'];

      this.users = tab === 1 ? this.users.filter(usr => usr.designation.toLowerCase() === 'designer') :
          tab === 2 ? this.users.filter(usr => others.includes(usr.designation.trim().toLowerCase())) :
              this.users;
      this.ready = true;
    },

    removeUser(id) {
      mutations.removeUser(id);
      this.users = this.users.filter(usr => usr.id !== id);
    },

    addUser() {
      this.filterUsers(this.activeTab)
    },

  },
  async mounted() {
    await this.getUsers();
    this.$root.$on('changeTab', this.filterUsers);
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-spacing: 0 10px;
  margin: 0 0 30px;
}

thead {
  position: relative;
  z-index: -1;
}

thead > tr {
  border-bottom: 20px solid #F5F8FC;
}

th, td:first-child {
  color: #b7bdc5;
  text-align: center;
}

td {
  padding: 10px 0 20px;
  text-align: center;
  font-size: 14px;
  line-height: 16px;
  color: #293751;
}

th:nth-child(2), td:nth-child(2) {
  text-align: start;
}

.grid img {
  grid-area: ava;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.grid h2 {
  grid-area: title;
  margin: 0;
  font-size: 14px;
  line-height: 16px;
  color: #293751;
}

.grid span {
  grid-area: mail;
  font-size: 14px;
  line-height: 16px;
  color: #293751;
}

.grid {
  display: grid;
  grid-template-areas: 'ava title' 'ava mail';
  justify-content: start;
  align-items: center;
  gap: 5px 20px;
}

tbody {
  position: relative;
  z-index: 1;
}

tbody tr {
  cursor: pointer;
  transition: filter .2s ease;
}

tbody tr:hover {
  filter: drop-shadow(0 4px 9px #e8e8e8);
}

tbody tr:active {
  filter: drop-shadow(0 2px 5px #e8e8e8);
}

tbody tr > td {
  background: #fff;
}

tbody tr > td:first-child {
  border-radius: 10px 0 0 10px;
}

tbody tr > td:last-child {
  border-radius: 0 10px 10px 0;
}

svg {
  width: 30%;
  color: #b7bdc5;
  cursor: pointer;
  transition: all .3s ease;
}

svg:hover {
  transform: scale(1.1);
  filter: drop-shadow(0px 1px 2px #b7bdc5);
}

h2 {
  display: block;
  margin: 0 auto;
  font-size: 40px;
  color: #b7bdc5;
  width: fit-content;
}

</style>
