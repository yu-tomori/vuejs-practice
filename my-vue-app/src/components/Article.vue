<template>
  <div>
    <div>記事 id:13</div>
    <span><router-link to="/articles/13/pages/1">1ページ目</router-link></span>
    <span><router-link to="/articles/13/pages/2">2ページ目</span>
    <hr />
    <router-view />
  </div>
</template>

<script>
export default {
  template: '<span>id: {{ $route.params.id }}</span>'
}
</script>

<style>
.color {
  color: blue
}
</style>
