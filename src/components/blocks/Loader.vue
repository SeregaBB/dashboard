<template>
  <div />
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style scoped>
div {
  display: inline-block;
  width: 80px;
  height: 80px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
div:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #00dc80;
  border-color: #00dc80 transparent #00dc80 transparent;
  animation: move 1.2s linear infinite;
}
@keyframes move {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>