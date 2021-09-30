import Vue from 'vue';
import api from '../services/api';

const search = Vue.observable({
  query: '',
  results: null,
  loading: false,
});

// getters
const state = {
  query: () => search.query,
  results: () => search.results,
  loading: () => search.loading,
};

export default state;

// setters
const newSearch = q => {
  search.query = q;
  search.loading = true;
};
const updateResults = r => {
  search.results = r;
  search.loading = false;
};

// actions
export const fetchResults = query => {
  newSearch(query);

  api
    .get(`?q=${query}`)
    .then(r => updateResults(r.data.items))
    .catch(err => console.log(err));
};
