<template>
  <ul>
    <li
      v-for="{
        id,
        title,
        authors,
        imageLinks,
        description,
        publishedDate,
      } in computedResults"
      :key="id"
    >
      <div
        v-if="imageLinks"
        :style="{ backgroundImage: `url(${imageLinks.thumbnail})` }"
        class="thumbnail left-radius"
      />
      <span v-else class="left-radius unavailable">Imagem indisponível</span>
      <div class="information">
        <strong>{{ title }}</strong>
        <div>
          <span v-for="(author, i) in authors" :key="author"
            >{{ author }}<span v-if="i !== authors.length - 1">, </span>
          </span>
        </div>
        <div v-if="publishedDate">{{ publishedDate }}</div>
        <p v-if="description">{{ description }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import state from '../store/search';

export default {
  name: 'Results',
  computed: {
    computedResults() {
      const value = state.results().map(({ id, volumeInfo }) => ({
        id,
        ...volumeInfo,
        publishedDate: volumeInfo.publishedDate?.split('-')[0],
      }));

      return value;
    },
  },
};
</script>

<style scoped>
li {
  --radius: 8px;
  background: #fff;
  border-radius: var(--radius);
  margin-top: 1rem;
  min-height: 9.5rem;
  display: grid;
  grid-template-columns: 7rem 1fr;
}

.left-radius {
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
}
.thumbnail {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.unavailable {
  background: #fafafa;
  display: flex;
  align-items: center;
  font-size: 0.925rem;
  font-weight: 300;
  text-align: center;
}
.information {
  display: flex;
  flex-direction: column;
  padding: 0.25rem 1rem 0.5rem;
}
.information p {
  margin-top: 0.5rem;
  max-height: 50%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
