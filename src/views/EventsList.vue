<template>
  <div class="container">
    <h1>This is Events List page</h1>
    <nav>    
      <ul>            
        <router-link v-for="item of DataList.events" :key="item.id" 
            :to="{name: 'event-item', 
            params: {id: String(item.id), item: item}}">
          Event Item #{{item.id}}
        </router-link>         
      </ul>           
      <router-view/>
      
    </nav>
  </div>
</template>

<script>
    import DataList from '../../db.json'
    export default {
        data(){
            return {
                DataList,                                
                item: {}
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .container{
        padding: 10px;
        margin: o auto;
        background: #f0f0f0;
    }
    ul{
        width: 70%;
        margin: 0 auto;                
        display: flex;        
        flex-wrap: wrap;
        margin-bottom: 20px;
    }
    ul a{
        margin: 10px;
        font-size: 20px;        
        background: #FDD9B5;
        padding: 10px;
    }
</style>
