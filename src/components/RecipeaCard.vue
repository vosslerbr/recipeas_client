<template>
  <div class="recipea-card">
    <router-link :to="{ path: '/recipea/' + recipea._id }">
      <h2>
        {{ recipea.title }}
      </h2>
      <p v-if="recipea.description">{{ recipea.description }}</p>
      <h3>Ingredients: {{ recipea.ingredients.length }}</h3>
      <h3>Steps: {{ recipea.steps.length }}</h3>
      <a v-bind:href="recipea.link" class="external-link">{{ recipea.link }}</a>
    </router-link>
    <div id="buttons">
      <button id="edit">Edit</button>
      <button @click="deleteRec" id="delete">Delete</button>
    </div>
  </div>
</template>

<script>
import { useStore } from '@/store';
import deleteRecipea from '../helpers/deleteRecipea';

export default {
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
  name: 'Recipea Card',
  props: {
    recipea: Object,
  },
  methods: {
    async deleteRec() {
      try {
        // show prompt for passcode
        let passcode = window.prompt('Please enter passcode.');

        // if prompt closed, do nothing, else send request for deletion with passcode in body
        if (!passcode) return;

        const data = { passcode };

        const response = await deleteRecipea(this.recipea._id, data);

        // log the response
        console.log(response);

        this.store.recipeas = this.store.recipeas.filter((recipea) => {
          return recipea._id !== this.recipea._id;
        });
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
.recipea-card {
  display: flex;
  flex-direction: column;
  background-color: var(--card-background);
  box-shadow: 5px 7px 20px 2px rgba(0, 0, 0, 0.08);
  padding: 20px;
  grid-column: span 4;
  border-radius: 5px;
}

.recipea-card:hover {
  box-shadow: 5px 7px 20px 2px rgba(0, 0, 0, 0.12);
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

#buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

button {
  width: calc(50% - 8px);
  font-family: var(--main-font);
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 5px;
  background: var(--main-color);
  color: var(--background);
  font-weight: bolder;
  cursor: pointer;
}

button:hover {
  box-shadow: 5px 7px 20px 2px rgba(0, 0, 0, 0.08);
  transform: scale(1.02);
}

#delete {
  background: #f38080;
}
</style>
