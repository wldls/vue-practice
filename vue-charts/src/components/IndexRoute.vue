<template>
  <ul>
    <li><router-link to="/barChart">bar chart</router-link></li>
    <li><router-link to="/lineChart">line chart</router-link></li>
    <li><router-link to="/kakaoMap">kakao map 1</router-link></li>
    <li><router-link to="/kakaoMap2">kakao map 2</router-link></li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  margin-top: 10px;
}
</style>
