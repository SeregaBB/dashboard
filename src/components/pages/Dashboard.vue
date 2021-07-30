<template>
  <div class="dashboard__wrapper">
    <DashboardHeader />
    <DashboardTabs @changeTab="onChangeTab" />
    <DashboardMainContent :activeTab="this.activeTab"/>
  </div>
</template>

<script>
import DashboardHeader from '@/components/blocks/DashboardHeader'
import DashboardTabs from '@/components/blocks/DashboardTabs'
import DashboardMainContent from '@/components/blocks/DashboardMainContent'
export default {
  name: 'Dashboard',
  components: { DashboardMainContent, DashboardTabs, DashboardHeader },
  data: () => ({
    activeTab: 0
  }),
  methods: {
    onChangeTab(tab){
      this.activeTab = tab;
    }
  }
}
</script>

<style scoped>
  .dashboard__wrapper {
    width: 95%;
    margin: 0 auto;
  }
</style>
