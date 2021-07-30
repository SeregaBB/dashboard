<template>
  <nav>
    <ul>
      <li :class="[{active: activeTab === 0 }]" @click="clickHandler(0)">Employee list</li>
      <li :class="[{active: activeTab === 1 }]" @click="clickHandler(1)">Designers</li>
      <li :class="[{active: activeTab === 2 }]" @click="clickHandler(2)">Others</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'DashboardTabs',
  data: () => ({
    activeTab: 0
  }),
  methods: {
    clickHandler (tab) {
      this.activeTab = tab;
      this.$emit('changeTab', tab)
    }
  }
}
</script>

<style scoped>
  nav {
    overflow-x: hidden;
    padding-bottom: 2px;
    margin: 0 0 55px;
  }
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    box-shadow: 0 7px 1px #b7bdc5;
  }
  li {
    margin: 0 40px 0 0;
    padding: 0 0 20px;
    cursor: pointer;
  }

  .active {
    box-shadow: 0 20px 0 #00dc80;
    overflow: hidden;
  }
</style>
