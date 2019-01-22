<template>
  <div
    class="card"
    :style="{backgroundColor: determineColor(sub), color: sub.key_color}"
  >
    <div class="badge">
      <p>#{{position + 1}}</p>
    </div>
    <img class="team-icon" v-if="sub.icon_img" :src="sub.icon_img" alt="logo" width="100">
    <div class="info-container">
      <a :href="`https://reddit.com${sub.url}`">
        <h1>{{sub.display_name_prefixed}}</h1>
      </a>
      <i>{{sub.title}}</i>
      <h2>Sub Count: {{sub.subscribers}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamCard',
  props: {
    sub: {
      banner_background_color: String,
      community_icon: String,
      display_name_prefixed: String,
      icon_img: String,
      key_color: String,
      primary_color: String,
      subscribers: String,
      title: String,
      url: String
    },
    position: Number
  },
  methods: {
    determineColor(sub) {
      const {
        banner_background_color,
        primary_color,
        display_name_prefixed
      } = sub;

      switch (display_name_prefixed) {
        case('r/steelers'):
          return '#101820';
        case('r/KansasCityChiefs'):
          return '#FFB81C';
        case('r/49ers'):
          return '#B3995D';
        case('r/Jaguars'):
          return '#9F792C';
        case('r/miamidolphins'):
          return '#F26A24';
        case('r/buccaneers'):
          return '#FF7900';
        case('r/LosAngelesRams'):
          return '#0C243C';
        case('r/nyjets'):
          return '#27251F';
        case('r/bengals'):
          return '#000000';
        case('r/Browns'):
          return '#311D00';
        case('r/detroitlions'):
          return '#0076B6';
        case('r/DenverBroncos'):
          return '#FA5211';
        default:
          return banner_background_color || primary_color
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.card {
  display: inline-flex;
  height: 200px;
  border-radius: 15px;
  border: 2px solid black;
  margin: 10px;
  align-items: center;
  padding: 20px;
  flex: 1;
  justify-content: center;
  position: relative;

  .badge {
    position: absolute;
    top: 10px;
    left: 10px;

    p {
      font-weight: bold;
      padding: 0;
      margin: 0;
    }
  }

  img {
    padding: 20px;
  }

  a {
    color: inherit;
  }

  .info-container {
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (max-width: 520px) {
  .team-icon {
    display: none;
  }

  .card {
    min-width: 250px;
  }
}

@media only screen and (min-width: 521px) {
  .card {
    min-width: 400px;
  }

  .info-container {
    text-align: left;
  }
}
</style>
