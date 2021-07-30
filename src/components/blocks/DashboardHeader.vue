<template>
  <div class="wrapper">
    <h1>Dashboard</h1>
    <button>+ Add Employee</button>
  </div>
</template>

<script>
export default {
  name: 'DashboardHeader'
}

</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 50px;
}

button {
  background: #00DC80;
  color: #FFF;
  border: 2px solid #FFF;
  outline: none;
  padding: 10px 15px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  transition: all .2s ease;
}

button:hover {
  background: #FFF;
  color: #00DC80;
  border: 2px solid #00DC80;
}
</style>
