<template>
  <main>
    <h1>404</h1>
    <h2>Essa não é a página que você procura.</h2>
  </main>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 10%;
  color: var(--text-dark);
  text-align: center;
}

h1 {
  font-size: 3.5rem;
}
</style>
