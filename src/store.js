import Vue from 'vue';

const store = Vue.observable({
  search: {
    query: '',
    results: null,
  },
  setSearch(q, r) {
    this.search.query = q;
    this.search.results = r;
  },
});

export default store;
