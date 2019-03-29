<template>
  <div id="app" v-colorful.random>
    <component-demo v-colorful="colorfulConfig"></component-demo>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorfulConfig: {
        duration: '2s',
        timing: 'ease-in',
        colors: ['#000', '#333', '#666', '#999', '#ccc', '#fff'],
        delay: 2000,
      },
    };
  },
  components: {
    'component-demo': {
      render: h => h('div', {
        style: {
          width: '100px',
          height: '100px',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        },
      }),
    }
  }
};
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
