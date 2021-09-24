<template>
  <div id="vue-app">
    <Header />
  </div>
</template>

<script>
import './styles/global.css';
import Header from './components/Header';

document.title = 'Book Explorer';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
