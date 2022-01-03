<template>
  <div class="create-page">
    <h2>Create Recipea</h2>
    <p>Use this form to create a new Recipea!</p>
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
        <li v-for="(ingredient, index) of ingredients" :key="index" @click="editIngredient(index)">
          {{ ingredient }}
        </li>
      </ul>
      <p v-else>No ingredients added yet</p>
      <div v-if="ingredientEditing">
        <input
          type="text"
          v-focus
          v-model="ingredientEditing.ingredient"
          @change.prevent="handleIngredientEditSave(ingredientEditing.index)"
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
        <li v-for="(step, index) of steps" :key="index">{{ step }}</li>
      </ol>
      <p v-else>No steps added yet</p>

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
      />
      <button type="submit">Create Recipea</button>
    </form>
  </div>
</template>

<script>
import createRecipea from '../helpers/createRecipea';

export default {
  name: 'Create',
  components: {},
  data() {
    return {
      title: '',
      description: '',
      link: '',
      currentIngredient: '',
      ingredientEditing: null,
      ingredients: [],
      currentStep: '',
      steps: [],
      passcode: '',
    };
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
      const response = await createRecipea(data);

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
