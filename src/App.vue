<template>
  <div id="vue-app">
    <Header />
    <component :is="View" />
  </div>
</template>

<script>
import './styles/global.css';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import routes from './routes';

export default {
  name: 'App',
  computed: {
    View() {
      const matchingView = routes.find(e => e.path === this.$root.currentRoute);
      document.title = matchingView
        ? matchingView.title
          ? matchingView.title
          : 'Book Explorer'
        : 'Página não encontrada';
      return matchingView ? matchingView.component : NotFound;
    },
  },
  components: {
    Header,
    NotFound,
  },
};
</script>
