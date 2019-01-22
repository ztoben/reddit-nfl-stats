<template>
  <div
    class="card"
    :style="{backgroundColor: sub.banner_background_color || sub.primary_color, color: sub.key_color}"
  >
    <div class="badge">
      <p>#{{position + 1}}</p>
    </div>
    <img v-if="sub.icon_img" :src="sub.icon_img" alt="logo" width="100">
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.card {
  display: inline-flex;
  min-width: 400px;
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
    text-align: left;
  }
}
</style>
