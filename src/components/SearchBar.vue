<template>
  <div class="search">
    <input v-model="query" />
    <p>{{ query }}</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'SearchBar',
    data: () => {
      return {
        query: '',
      };
    },
  });
</script>

<style scoped>
  .search {
    border: 1px solid #333;
  }
</style>
