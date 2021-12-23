<template>
  <div>
    <h2>{{ recipea.title }}</h2>
    <a v-bind:href="recipea.link">{{ recipea.link }}</a>
    <h3>Ingredients</h3>
    <ul>
      <li v-for="(ingredient, index) in recipea.ingredients" :key="index">{{ ingredient }}</li>
    </ul>
    <h3>Steps</h3>
    <ol>
      <li v-for="(step, index) in recipea.steps" :key="index">{{ step }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Recipea Card',
  props: {
    recipea: Object,
  },
};
</script>
