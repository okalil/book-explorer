<template>
  <a :href="to" @click.prevent="handle">
    <slot></slot>
  </a>
</template>

<script>
import routes from '../routes';

export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  methods: {
    handle() {
      this.$root.currentRoute = this.to;
      window.history.pushState(
        null,
        routes.find(e => e.path === this.to),
        this.to
      );
    },
  },
};
</script>
