<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to My first Vue.js App"/>    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  
  name: 'HomeView',
  components: {
    HelloWorld
  },  
  computed: {
    
  },
  methods: {
    
  },
}
</script>

<style scoped>
    .container{
        padding: 40px;
        margin: o auto;
        background: #a0a0a0;        
    }   
    .loader{
      width: 50px;
      height: 50px;
      margin: 0 auto;
    } 
    .loader img {
      width: 100%;
      object-fit: cover;      
    }
</style>