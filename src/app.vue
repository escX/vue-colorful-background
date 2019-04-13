<template>
  <div id="app">
    <div class="demo1">
      <div class="container" v-colorful.random>
        <pre>v-colorful.random</pre>
      </div>
    </div>
    <div class="demo2">
      <div class="container" v-colorful="colorfulConfig">
<pre>v-colorful="colorfulConfig"

colorfulConfig: {
  duration: '1s',
  timing: 'linear',
  colors: ['#000', '#fff'],
  delay: 3000
}</pre>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      colorfulConfig: {
        duration: '1s',
        timing: 'linear',
        colors: ['#000', '#fff'],
        delay: 3000
      }
    };
  }
};
</script>

<style>
  .container {
    width: 100%;
    padding: 50px 0;
    position: relative;
  }
  .demo1 {
    text-align: center;
  }
  .demo2 {
    margin-top: 50px;
  }
  .demo1 .container {
    height: 120px;
  }
  .demo2 .container {
    height: 300px;
  }
  pre {
    background-color: #fff;
    box-shadow: 0 0 10px 0 #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
