<template>
  <h1>Home</h1>

  <div v-if="isValidating">Loading...</div>

  <div v-else>
    <ul v-if="data && data.results">
      <li v-for="movie in data.results" :key="movie.id">
        <router-link :to="{ name: 'movie', params: { id: movie.id, title: movie.title, overview: movie.overview } }">{{
          movie.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import useSWRV from 'swrv';

  import { fetcher } from 'src/api/fetcher';
  import type { MovieResponse } from 'src/api/types';

  export default defineComponent({
    setup() {
      const { data, isValidating } = useSWRV<MovieResponse>('/movie/popular', fetcher);

      return {
        isValidating,
        data,
      };
    },
  });
</script>
