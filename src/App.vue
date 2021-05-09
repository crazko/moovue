<template>
  <header>
    <router-link :to="{ name: 'home' }">Movue</router-link>
    <SearchBar />
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import SearchBar from 'src/components/SearchBar.vue';

  export default defineComponent({
    name: 'App',
    components: {
      SearchBar,
    },
  });
</script>
