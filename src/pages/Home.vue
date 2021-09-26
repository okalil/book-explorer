<template>
  <main>
    <div>
      <h1>Guia de Livros</h1>
      <h2>
        Encontre o livro que você procura. Busque por nome, autor ou
        publicadora.
      </h2>
      <SearchControl />
    </div>
    <div>
      <img src="@/assets/books.png" alt="Livros" id="books" />
    </div>
  </main>
</template>

<script>
import SearchControl from '../components/SearchControl';

export default {
  name: 'Home',
  components: { SearchControl },
};
</script>

<style scoped>
main {
  width: min(100%, 1200px);
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 0 1rem;
  margin: auto;
}

main > :first-child {
  flex: 4;
  margin-top: 9%;
}

main > :last-child {
  flex: 5;
}

main div:last-child img {
  width: 100%;
}

h1,
h2 {
  color: var(--text-dark);
}

h1 {
  font-size: 3.5rem;
  font-weight: 600;
}
h2 {
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 2rem;
}
</style>
