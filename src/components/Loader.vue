<template>
  <div class="container">
    <span v-for="n in [0, 1, 2]" :key="n" class="dot" />
  </div>
</template>

<script>
export default {
  name: 'Loader',
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100px;
  height: 150px;
  margin: auto;
}
.dot {
  --p: 0.75;
  
  background: var(--bg-brand);
  border-radius: 50%;
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 5px;
  animation: wave calc(1.3s * var(--p)) linear infinite;
}
.dot:nth-child(2) {
  animation-delay: calc(-1.1s * var(--p));
}
.dot:nth-child(3) {
  animation-delay: calc(-0.9s * var(--p));
}

@keyframes wave {
  0%,
  60%,
  100% {
    transform: initial;
  }

  30% {
    transform: translateY(-15px);
  }
}
</style>
