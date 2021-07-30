<template>
  <div class="dashboard__wrapper">
    <DashboardHeader/>
    <DashboardTabs/>
    <DashboardTable />
  </div>
</template>

<script>
import DashboardHeader from '@/components/blocks/DashboardHeader'
import DashboardTabs from '@/components/blocks/DashboardTabs'
import DashboardTable from "@/components/blocks/DashboardTable";

export default {
  name: 'Dashboard',
  components: { DashboardTabs, DashboardHeader, DashboardTable },
}
</script>

<style>
*{
  box-sizing: border-box;
  font-family: sans-serif;
}
body {
  background: #F5F8FC;
}

.dashboard__wrapper {
  width: 95%;
  margin: 0 auto;
}
</style>
