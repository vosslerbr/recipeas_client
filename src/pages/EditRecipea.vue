<template>
  <div class="create-page">
    <p v-if="loading">Loading Recipea...</p>
    <p v-else-if="error">An error occurred. Please refresh page to try again.</p>
    <template v-else-if="recipea">
      <h2>Edit Recipea</h2>
      <p>Use this form to edit a Recipea!</p>
      <form v-on:submit.prevent="onSubmit">
        <label for="recipea-title">Title</label>
        <input
          type="text"
          placeholder="Title"
          id="recipea-title"
          name="recipea-title"
          class="form-input"
          v-model="title"
          required
        />
        <label for="recipea-description">Description</label>
        <textarea
          type="text"
          placeholder="Description"
          id="recipea-description"
          name="recipea-description"
          class="form-input"
          v-model="description"
        />

        <h3>Ingredients</h3>
        <input
          type="text"
          placeholder="Add an ingredient"
          id="recipea-ingredients"
          name="recipea-ingredients"
          class="form-input margin-clear"
          v-model="currentIngredient"
          @keydown.enter.prevent
          @keyup.enter.prevent="addIngredient"
          @change="addIngredient"
        />
        <ul v-if="ingredients.length">
          <li
            v-for="(ingredient, index) of ingredients"
            :key="index"
            @click="editIngredient(index)"
          >
            {{ ingredient }}
          </li>
        </ul>
        <p v-else>No ingredients added yet</p>
        <div v-if="ingredientEditing">
          <input
            type="text"
            v-focus
            v-model="ingredientEditing.ingredient"
            @blur.prevent="handleIngredientEditSave(ingredientEditing.index)"
          />
        </div>

        <h3>Steps</h3>
        <input
          type="text"
          placeholder="Add a step"
          id="recipea-step"
          name="recipea-step"
          class="form-input margin-clear"
          v-model="currentStep"
          @keydown.enter.prevent
          @keyup.enter.prevent="addStep"
          @change="addStep"
        />
        <ol v-if="steps.length">
          <li v-for="(step, index) of steps" :key="index" @click="editStep(index)">{{ step }}</li>
        </ol>
        <p v-else>No steps added yet</p>
        <div v-if="stepEditing" class="editModal">
          <input
            type="text"
            v-focus
            v-model="stepEditing.step"
            @blur.prevent="handleStepEditSave(stepEditing.index)"
          />
        </div>

        <label for="recipea-link">Link</label>
        <input
          type="url"
          placeholder="Link"
          id="recipea-link"
          name="recipea-link"
          class="form-input"
          v-model="link"
        />
        <label for="recipea-passcode">Passcode</label>
        <input
          type="text"
          placeholder="Passcode"
          id="recipea-passcode"
          name="recipea-passcode"
          class="form-input"
          v-model="passcode"
          required
        />
        <button type="submit">Save Changes</button>
      </form>
    </template>
  </div>
</template>

<script>
import getRecipea from '@/helpers/getRecipea';
import editRecipea from '@/helpers/editRecipea';

export default {
  name: 'Edit',
  data() {
    return {
      loading: false,
      error: false,
      title: '',
      description: '',
      link: '',
      currentIngredient: '',
      ingredientEditing: null,
      ingredients: [],
      currentStep: '',
      stepEditing: null,
      steps: [],
      passcode: '',
      recipea: null,
    };
  },
  async mounted() {
    try {
      this.loading = true;
      const recipea = await getRecipea(this.$route.params.id);

      this.title = recipea.title;
      this.description = recipea.description;
      this.link = recipea.link;
      this.ingredients = recipea.ingredients;
      this.steps = recipea.steps;
      this.recipea = recipea;

      console.log(recipea);
      this.loading = false;
    } catch (err) {
      this.loading = false;
      this.error = true;

      console.error(err);
    }
  },
  methods: {
    addIngredient() {
      this.ingredients.push(this.currentIngredient);
      this.currentIngredient = '';
    },
    editIngredient(index) {
      console.log(index);
      this.ingredientEditing = {};
      this.ingredientEditing.ingredient = this.ingredients[index];
      this.ingredientEditing.index = index;
    },
    handleIngredientEditSave(index) {
      this.ingredients[index] = this.ingredientEditing.ingredient;
      this.ingredientEditing = null;
    },
    addStep() {
      this.steps.push(this.currentStep);
      this.currentStep = '';
    },
    editStep(index) {
      console.log(index);
      this.stepEditing = {};
      this.stepEditing.step = this.steps[index];
      this.stepEditing.index = index;
    },
    handleStepEditSave(index) {
      this.steps[index] = this.stepEditing.step;
      this.stepEditing = null;
    },
    async onSubmit() {
      // get all the state data
      const data = {
        title: this.title,
        description: this.description,
        link: this.link,
        ingredients: this.ingredients,
        steps: this.steps,
        passcode: this.passcode,
      };

      // place in body of POST request
      const response = await editRecipea(data, this.recipea._id);

      // clear state
      this.title = '';
      this.description = '';
      this.link = '';
      this.currentIngredient = '';
      this.ingredients = [];
      this.currentStep = '';
      this.steps = [];
      this.passcode = '';
      console.log(response);
      this.$router.replace('/');
    },
  },
};
</script>

<style scoped>
.create-page {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}

h2 {
  font-size: 2rem;
}

ul,
ol {
  padding: 0px 1.5rem;
}

ol {
  list-style-type: decimal;
}

ul {
  list-style-type: disc;
}

p,
ul,
ol {
  margin: 0.5rem 0px 2rem 0px;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

form {
  display: flex;
  flex-direction: column;
}

input,
textarea {
  font-family: var(--main-font);
  margin-bottom: 2rem;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  border: 1.5px solid var(--main-color);
  font-size: var(--main-font-size);
}

.margin-clear {
  margin-bottom: 5px;
}

label {
  margin-bottom: 0.5rem;
}

button {
  background-color: var(--main-color);
  border-radius: 5px;
  border: none;
  padding: 0.5rem 1.5rem;
  color: var(--background);
  font-size: 1rem;
  max-width: fit-content;
}
</style>
