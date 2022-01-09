<template>
  <div class="recipea-card">
    <router-link :to="{ path: '/recipea/' + recipea._id }">
      <h2>
        {{ recipea.title }}
      </h2>
      <p v-if="recipea.description">{{ recipea.description }}</p>
      <h3>Ingredients: {{ recipea.ingredients.length }}</h3>
      <h3>Steps: {{ recipea.steps.length }}</h3>
    </router-link>
    <a v-bind:href="recipea.link" class="external-link" target="_blank">{{ recipea.link }}</a>
    <div id="buttons">
      <router-link :to="{ path: '/recipea/edit/' + recipea._id }">Edit</router-link>
      <button @click="deleteRec" id="delete">Delete</button>
    </div>
  </div>
</template>

<script>
import { useStore } from '@/store';
import deleteRecipea from '../helpers/deleteRecipea';

export default {
  name: 'Recipea Card',
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
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
  box-shadow: 5px 7px 1.5rem 2px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  grid-column: span 4;
  border-radius: 5px;
}

.recipea-card:hover {
  box-shadow: 5px 7px 1.5rem 2px rgba(0, 0, 0, 0.12);
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
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1.5rem;
}

h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

h3:last-of-type {
  margin-bottom: 1.5rem;
}

.external-link {
  opacity: 0.65;
  margin-top: auto;
  z-index: 2;
}

#buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.5rem;
}

button,
#buttons a {
  width: calc(50% - 0.75rem);
  font-family: var(--main-font);
  font-size: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background: var(--main-color);
  color: var(--background);
  font-weight: bolder;
  cursor: pointer;
}

#buttons a {
  text-align: center;
  vertical-align: middle;
  padding: 9px 0px 7px 0px;
}

button:hover,
#buttons a:hover {
  box-shadow: 5px 7px 1.5rem 2px rgba(0, 0, 0, 0.08);
  transform: scale(1.02);
}

#delete {
  background: #f38080;
}
</style>
