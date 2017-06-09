<template>
  <div id="app">
    <slide-menu></slide-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import slideMenu from '@/components/slide-menu'
export default {
  name: 'app',
  components: {
    slideMenu
  }
}
</script>

<style>

</style>
