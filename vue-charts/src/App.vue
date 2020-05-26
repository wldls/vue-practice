<template>
  <div>
    <h2>{{ updateTitle }}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    updateTitle() {
      const path = this.$route.path;
      let title = "";

      if (path.indexOf("Chart") >= 0) {
        title = "Chart.js";
      } else if (path.indexOf("Map") >= 0) {
        title = "KaKao Map";
      } else {
        title = "Index";
      }

      return title;
    }
  }
};
</script>

<style></style>
