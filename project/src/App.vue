<template>
  <div id="app">
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
.content{
  overflow-y: auto;
}

</style>
