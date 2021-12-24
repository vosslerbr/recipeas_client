<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/create">Create</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style></style>
