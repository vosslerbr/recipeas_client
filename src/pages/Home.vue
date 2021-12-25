<template>
  <div class="home-page">
    <p v-if="loading">Loading Recipeas...</p>
    <p v-else-if="error">An error occurred. Please refresh page to try again.</p>
    <p v-else-if="(!loading && !error && !recipeas) || !recipeas.length">No Recipeas found.</p>
    <RecipeaCard v-else v-for="(recipea, index) in recipeas" :key="index" :recipea="recipea" />
  </div>
</template>

<script>
import RecipeaCard from '../components/RecipeaCard.vue';
import getAllRecipeas from '../helpers/getAllRecipes';

export default {
  name: 'Home',
  components: {
    RecipeaCard,
  },
  data() {
    return {
      recipeas: null,
      loading: false,
      error: false,
    };
  },
  async mounted() {
    try {
      this.loading = true;
      const recipeas = await getAllRecipeas();

      this.recipeas = recipeas;
      this.loading = false;
    } catch (err) {
      console.error(err);
      this.error = true;
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.home-page {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}

p {
  grid-column: span 12;
}
</style>
