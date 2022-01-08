<template>
  <div class="home-page">
    <p v-if="store.loading">Loading Recipeas...</p>
    <p v-else-if="store.error">An error occurred. Please refresh page to try again.</p>
    <p v-else-if="(!store.loading && !store.error && !store.recipeas) || !store.recipeas.length">
      No Recipeas found.
    </p>
    <RecipeaCard
      v-else
      v-for="(recipea, index) in store.recipeas"
      :key="index"
      :recipea="recipea"
    />
  </div>
</template>

<script>
import { useStore } from '@/store';
import RecipeaCard from '../components/RecipeaCard.vue';
import getAllRecipeas from '../helpers/getAllRecipes';

export default {
  name: 'Home',
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
  components: {
    RecipeaCard,
  },
  async mounted() {
    try {
      this.store.loading = true;
      const recipeas = await getAllRecipeas();

      this.store.recipeas = recipeas;
      this.store.loading = false;
    } catch (err) {
      console.error(err);
      this.store.error = true;
      this.store.loading = false;
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
