<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <counter-component></counter-component>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CounterComponent from '@/components/CounterComponent.vue'
export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    CounterComponent
  }
}
</script>
