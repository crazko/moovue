<template>
  <h1>{{ title }}</h1>
  <p>{{ overview }}</p>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      id: { type: String, required: true },
      title: { type: String, required: true },
      overview: { type: String, required: true },
    },
  });
</script>
