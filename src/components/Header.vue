<template>
  <header>
    <img src="@/assets/logo.svg" alt="Book Explorer" id="logo" />
    <nav>
      <a
        v-for="{ name, href } in links"
        :href="href"
        :key="name"
        target="_blank"
        >{{ name }}</a
      >
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    links: [
      { name: 'Sobre', href: 'https://github.com/okalil/book-explorer' },
      { name: 'Contato', href: 'https://linkedin.com/in/andrew-magalhães-2b3781210' },
    ],
  }),
};
</script>

<style scoped>
header {
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: min(100vw, 1000px);
  margin: auto;
}

#logo {
  max-height: 100%;
  width: 200px;
}

a {
  color: var(--text-dark);
  margin-left: 1.5rem;
  /* font-weight: 300; */
}
</style>
