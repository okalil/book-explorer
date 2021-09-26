<template>
  <main>
    <div>
      <h1>Guia de Livros</h1>
      <h2>
        Encontre o livro que você procura. Busque por nome, autor ou
        publicadora.
      </h2>
      <form @submit.prevent>
        <input type="text" name="search" />
        <button type="submit">
          Buscar Livro
        </button>
      </form>
    </div>
    <div>
      <img src="@/assets/books.png" alt="Livros" id="books" />
    </div>
  </main>
</template>

<script>
export default { name: 'Home' };
</script>

<style>
main {
  width: min(100%, 1100px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  margin: auto;
}

main > * {
  flex: 1;
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
}
</style>
