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
};
</script>

<style scoped>
#nav {
  margin-bottom: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0px;
  position: sticky;
  top: 0;
  background-color: var(--background);
}

router-view {
  margin-bottom: 64px;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
}

ul {
  display: flex;
  flex-direction: row;
}

li {
  margin-left: 1.25rem;
}

footer {
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 0px;
}
</style>
