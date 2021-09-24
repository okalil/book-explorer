<template>
  <div id="vue-app"></div>
</template>

<script>
document.title = 'Book Explorer';

export default {
  name: 'App',
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --bg-general: #f8e2d3;
  --bg-brand: #ff8000;
  --text-dark: #5c3e3e;
  --text-light: #a08479;
}

body {
  background: var(--bg-general);
  font: 400 1rem 'Poppins', sans-serif;
}

ul {
  list-style: none;
}
</style>
