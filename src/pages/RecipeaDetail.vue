<template>
  <div class="detail-page">
    <p v-if="loading">Loading Recipea...</p>
    <p v-else-if="error">An error occurred. Please refresh page to try again.</p>
    <template v-else-if="recipea">
      <a v-bind:href="recipea.link" class="external-link"
        ><h2>{{ recipea.title }}</h2></a
      >

      <p class="recipea-description">{{ recipea.description }}</p>

      <h3>Ingredients</h3>
      <p v-if="!recipea.ingredients.length" class="missing-info">Recipea has no ingredients</p>
      <ul v-else>
        <li v-for="(ingredient, index) of recipea.ingredients" :key="index">{{ ingredient }}</li>
      </ul>

      <h3>Steps</h3>
      <p v-if="!recipea.steps.length" class="missing-info">Recipea has no steps</p>
      <ol v-else>
        <li v-for="(step, index) of recipea.steps" :key="index">{{ step }}</li>
      </ol>

      <p class="recipea-link">
        <a v-bind:href="recipea.link" class="external-link" target="_blank">{{ recipea.link }}</a>
      </p>

      <p class="recipea-created">Created: {{ createdDate }}</p>
    </template>
  </div>
</template>

<script>
import getRecipea from '../helpers/getRecipea';

export default {
  name: 'Detail',
  data() {
    return {
      loading: false,
      error: false,
      recipea: null,
    };
  },
  async mounted() {
    try {
      this.loading = true;
      const recipea = await getRecipea(this.$route.params.id);

      this.recipea = recipea;

      console.log(recipea);
      this.loading = false;
    } catch (err) {
      this.loading = false;
      this.error = true;

      console.error(err);
    }
  },
  computed: {
    createdDate() {
      const date = new Date(this.recipea.created).toString();
      const formattedDate = date.substring(4, 15);

      return formattedDate;
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
}

ul {
  list-style: disc;
  list-style-position: inside;
}

ol {
  list-style-type: decimal;
  list-style-position: inside;
}

li:not(:last-of-type) {
  margin-bottom: 5px;
}

li:last-of-type {
  margin-bottom: 1.25rem;
}

.recipea-description {
  margin-bottom: 1.25rem;
}

.recipea-created {
  opacity: 0.75;
}

.recipea-link {
  margin-bottom: 1.25rem;
}

.missing-info {
  opacity: 0.75;
  margin-bottom: 1.25rem;
  font-style: italic;
}
</style>
