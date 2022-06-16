<template>
  <div class="container">
    <h1>This is Events List page</h1>
    <nav>    
      <ul>            
        <li v-for="item of DataList" :key="item.id">
            <router-link  
              :to="{name: 'event-item', 
              params: {id: String(item.id), item: item}}">
              Event Item #{{item.id}}          
            </router-link>         
            <button @click="removeItem(item)"> X </button>
        </li>
      </ul>                       
      <router-view/>            
    </nav>
  </div>
</template>

<script>
    //import DataList from '../../db.json'
    import store from '@/vuex/store'
    import {mapMutations} from 'vuex'

    
    
    export default {
        data(){
            return {
                //DataList,                                
                // item: {}
            }
        },
        computed: {
          DataList () {            
            return store.state.events
          }                    
        },
        created () {
          store.dispatch('fetchProducts')
        },
        methods: {
          ...mapMutations (['REMOVE_ITEM']),
          removeItem(item) {
            this.$store.commit('REMOVE_ITEM', item);
          }
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
        list-style: none;
    }
   li{
        margin: 10px;
        font-size: 20px;        
        background: #FDD9B5;
        padding: 10px;        
    }
    button{
      margin-left: 20px;      
      border: 2px solid #141414;
      cursor: pointer;
    }
</style>
