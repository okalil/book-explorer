<template>
  <main>
    <div>
      <search-control :savedQuery="query" />
    </div>
    <loader v-if="loading" />
    <results v-else-if="results" :results="results" />
  </main>
</template>

<script>
import store from '../store';
import SearchControl from '../components/SearchControl.vue';
import Results from '../components/Results.vue';
import Loader from '../components/Loader.vue';

export default {
  components: { SearchControl, Results, Loader },
  computed: {
    query: () => store.search.query,
    results: () => store.search.results,
    loading: () => store.search.loading,
  },
};
</script>

<style scoped>
main {
  width: min(100%, 1200px);
  margin: auto;
}

main > * {
  margin: auto;
}

main > div {
  max-width: 550px;
}

main > ul {
  max-width: 600px;
}
</style>
