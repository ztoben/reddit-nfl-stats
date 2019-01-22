<template>
  <div id="app">
    <img class="logo" alt="NFL Reddit Logo" src="./assets/logo.png">
    <div class="card-container">
      <TeamCard v-for="(sub, idx) in subs" :key="sub.title" :sub="sub" :position="idx"/>
    </div>
    <footer>
      <p>Created by <a href='https://github.com/ztoben'>ztoben</a>.</p>
    </footer>
  </div>
</template>

<script>
import TeamCard from './components/TeamCard.vue'
import stats from './assets/stats';

export default {
  name: 'app',
  components: {
    TeamCard
  },
  data() {
    return {
      subs: stats
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

  .logo {
    width: 50%;
    max-width: 350px
  }

  .card-container {
    display: flex;
    width: 90vw;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
