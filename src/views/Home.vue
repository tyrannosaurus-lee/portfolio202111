<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Button />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Works from '@/components/Works.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Works,
  }
}
</script>
