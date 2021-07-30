<template>
  <div class="main-content__wrapper">
    <DashboardTable :active-tab="this.activeTab"/>
  </div>
</template>

<script>
import DashboardTable from '@/components/blocks/DashboardTable'
export default {
  name: 'DashboardMainContent',
  props: {
    activeTab: Number
  },
  components: { DashboardTable },
  mounted() {
    console.log(this.activeTab)
  }
}
</script>

<style scoped>
.main-content__wrapper {
  width: 100%;
}
</style>
