<template>
  <header>
    <img src="@/assets/logo.svg" alt="Book Explorer" id="logo" />
    <nav>
      <Link v-for="{ name, to } in links" :to="to" :key="name">{{ name }}</Link>
    </nav>
  </header>
</template>

<script>
import Link from './Link.vue';
export default {
  name: 'Header',
  data() {
    return {
      links: [
        { name: 'Início', to: '/' },
        { name: 'Sobre', to: '/about' },
        { name: 'Contato', to: '/contact' },
      ],
    };
  },
  components: { Link },
};
</script>

<style scoped>
header {
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: min(100vw, 1200px);
  margin: auto;
}

#logo {
  max-height: 100%;
  width: 200px;
}

a {
  color: var(--text-dark);
  margin-left: 1.5rem;
}
</style>
