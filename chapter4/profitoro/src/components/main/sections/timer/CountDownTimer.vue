//CountDownTimer.vue
<template>
  <div class="container">
    <div>
      <svg-circle-sector :angle="30" :text="'Hello'"></svg-circle-sector>
    </div>
  </div>
</template>
<script>
  import SvgCircleSector from './SvgCircleSector'
  export default {
    components: {
      SvgCircleSector
    }
  }
</script>
<style scoped lang="scss">

</style>
