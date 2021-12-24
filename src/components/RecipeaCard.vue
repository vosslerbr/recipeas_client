<template>
  <div class="recipea-card">
    <h2>{{ recipea.title }}</h2>
    <p v-if="recipea.description">{{ recipea.description }}</p>
    <h3>Ingredients: {{ recipea.ingredients.length }}</h3>
    <h3>Steps: {{ recipea.steps.length }}</h3>
    <a v-bind:href="recipea.link" class="external-link">{{ recipea.link }}</a>
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

<style scoped>
.recipea-card {
  display: flex;
  flex-direction: column;
  background-color: var(--card-background);
  padding: 20px;
  grid-column: span 4;
  border-radius: 5px;
}

@media screen and (max-width: 850px) {
  .recipea-card {
    grid-column: span 6;
  }
}

@media screen and (max-width: 600px) {
  .recipea-card {
    grid-column: span 12;
  }
}

h2 {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
}

p {
  margin-bottom: 20px;
}

h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

h3:last-of-type {
  margin-bottom: 20px;
}

.external-link {
  opacity: 0.65;
  margin-top: auto;
}
</style>
