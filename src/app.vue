<template>
  <div id="app">
    <div v-colorful.random="config">
      {{test}}
    </div>

    <demo v-colorful></demo>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 'colorful',
      config: {
        duration: '2s',
        timing: 'ease-in',
        colors: ['#000', '#fff'],
        delay: 2000
      }
    }
  },
  components: {
    'demo': {
      template: '<div id="demo">demo</div>'
    }
  }
}
</script>
