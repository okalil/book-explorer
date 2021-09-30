<template>
  <form @submit.prevent="onSubmit">
    <input
      type="text"
      name="search"
      placeholder="Encontre seu livro aqui."
      autocomplete="off"
      spellcheck="false"
      :value="savedQuery"
    />
    <button type="submit">
      Buscar Livro
    </button>
  </form>
</template>

<script>
import { fetchResults } from '../store/search';

export default {
  name: 'SearchControl',
  props: {
    savedQuery: { type: String, default: '' },
  },
  methods: {
    onSubmit(e) {
      const formData = new FormData(e.target);
      const query = formData.get('search');

      if (!query.trim()) return;

      fetchResults(query);

      if (this.$root.currentRoute !== '/search') {
        this.$root.currentRoute = '/search';
        window.history.pushState(null, 'Search', '/search');
      }
    },
  },
};
</script>

<style scoped>
* {
  border: 0;
}

form {
  --radius: 8px;
  display: flex;
  box-shadow: 6px 6px 11px 8px #00000015;
  border-radius: var(--radius);
}

input {
  padding: 1rem;
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  flex: 2;
  font: 300 1rem 'Poppins', sans-serif;
  outline: 0;
}

button {
  background: var(--bg-brand);
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  color: white;
  cursor: pointer;
  font: 300 1rem 'Poppins', sans-serif;
  flex: 1;
}
</style>
