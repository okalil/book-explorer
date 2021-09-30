<template>
  <main>
    <div>
      <search-control :saved-query="query" />
    </div>
    <loader v-if="loading" />
    <results v-else-if="results" />
  </main>
</template>

<script>
import state from '../store/search';
import SearchControl from '../components/SearchControl.vue';
import Results from '../components/Results.vue';
import Loader from '../components/Loader.vue';

const { query, loading, results } = state;

export default {
  components: { SearchControl, Results, Loader },
  computed: {
    query,
    loading,
    results,
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
