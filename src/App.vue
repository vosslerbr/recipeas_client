<template>
  <nav id="nav">
    <router-link to="/" id="logoLink"><h1>Recipeas</h1></router-link>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/create">Create</router-link></li>
    </ul>
  </nav>
  <router-view />
  <footer>
    <p>&copy; Brady Vossler {{ new Date().getFullYear() }} 🤠</p>
  </footer>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style scoped>
#nav {
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  position: sticky;
  top: 0;
  background-color: var(--background);
}

router-view {
  margin-bottom: 60px;
}

h1 {
  font-size: 30px;
  font-weight: bold;
}

ul {
  display: flex;
  flex-direction: row;
}

li {
  margin-left: 20px;
}

footer {
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
}
</style>
