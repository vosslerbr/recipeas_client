<template>
  <RecipeaCard v-for="(recipea, index) in recipeas" :key="index" :recipea="recipea" />
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
    };
  },
  async mounted() {
    try {
      const recipeas = await getAllRecipeas();

      this.recipeas = recipeas;
    } catch (err) {
      console.error(err);
    }
  },
};
</script>

<style></style>
