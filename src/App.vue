<template>
  <div id="app">
    <img class="logo" alt="NFL Reddit Logo" src="./assets/logo.png">
    <input class="search" type="text" v-model="search" placeholder="Search..."/>
    <div v-if="search === ''" class="card-container">
      <TeamCard v-for="sub in subs" :key="sub.title" :sub="sub"/>
    </div>
    <div v-if="search !== ''" class="card-container">
      <TeamCard v-for="sub in filterToSearchVal()" :key="sub.title" :sub="sub"/>
    </div>
    <footer>
      <p>Created by <a href='https://github.com/ztoben'>ztoben</a>.</p>
    </footer>
  </div>
</template>

<script>
import TeamCard from './components/TeamCard.vue'
import stats from './assets/stats';

function normalizeInput(input) {
  return input.toLowerCase().trim();
}

function searchContains(value, search) {
  return normalizeInput(value).includes(normalizeInput(search));
}

export default {
  name: 'app',
  components: {
    TeamCard
  },
  data() {
    return {
      subs: stats,
      search: ''
    }
  },
  methods: {
    filterToSearchVal: function() {
      return this.subs.filter(sub => {
        return searchContains(sub.display_name_prefixed, this.search)
          || searchContains(sub.title, this.search);
      });
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    width: 50%;
    max-width: 350px
  }

  .search {
    border: 1px solid gray;
    border-radius: 15px;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 5px;
    outline: none;
  }

  .card-container {
    display: flex;
    width: 90vw;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width: 600px) {
  .search {
    width: 80%;
  }
}

@media only screen and (min-width: 601px) {
  .search {
    width: 500px;
  }
}

</style>
