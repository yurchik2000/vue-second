<template>
  <div class="container">
    <h1>This is Events List page</h1>            
    <div class="loader" v-if="loading">
      <img src="@/images/loader.gif">
    </div>    
    <nav>    
      <ul>            
        <li v-for="item of events" :key="item.id">
            <router-link  
              :to="{name: 'event-item', 
              params: {id: String(item.id), item: item}}">
              Event ID #{{item.id}}          
            </router-link>         
            <button @click="deleteEventFromServer(item), removeItem(item)"> X </button>
        </li>
      </ul>  
      <button class='btn' v-if="isShowedPrev" @click="prevPage"> Prev </button>    
      <button class='btn' v-if="isShowedNext" @click="nextPage"> Next </button>          
      
      <router-view/>                  
    </nav>
  </div>
</template>

<script>
    //import DataList from '../../db.json'
    // import store from '@/vuex/store'
    import {mapMutations, mapState, mapActions} from 'vuex'
    import axios from 'axios';
      
    export default {
        data(){
            return {
                usersPerPage: 5,
                pageNumber: 0,
                isShowedPrev:  false,
                isShowedNext:  true,                
                allEventsLength: 0
            }
        },
        computed: {
          ...mapState(['events', 'loading', 'page', 'perPage']),                              
          
        },
        methods: {
          ...mapActions([ 'GET_FROM_API']),    
          deleteEventFromServer(item) {
            axios.delete('http://localhost:3000/events/' + item.id)
              .then(() => console.log('Delete successful'))
              .catch(error => console.log(error))
          },
          ...mapMutations (['REMOVE_ITEM', 'MOVE_TO_NEXT_PAGE', 'MOVE_TO_PREV_PAGE']),          
          removeItem(item) {            
            this.REMOVE_ITEM(item)            
          },          
          nextPage(){            
            this.MOVE_TO_NEXT_PAGE(this.page)
            this.GET_FROM_API()            
            if (this.page > 1) this.isShowedPrev = true
            if (this.page <= 1) this.isShowedPrev = false            
            if (this.page >= Math.ceil(this.allEventsLength / this.perPage)) this.isShowedNext = false; 
              else this.isShowedNext = true;                
          },
          prevPage(){
            this.MOVE_TO_PREV_PAGE(this.page)
            this.GET_FROM_API()
            if (this.page > 1) this.isShowedPrev = true
            if (this.page <= 1) this.isShowedPrev = false
            if (this.page >= Math.ceil(this.allEventsLength / this.perPage)) this.isShowedNext = false; 
              else this.isShowedNext = true;                
          },
          getAllEventsLength(){            
            return axios 
              .get('http://localhost:3000/events')                
                .then (response => {                                                            
                this.allEventsLength = response.data.length
                return response.data.length
              })
              .catch((error) => {
                console.log(error)
              return error
              })                        
          }
        },
        mounted() {
           this.GET_FROM_API()
           this.getAllEventsLength()
  }        
    }
</script>

<style scoped>
    .container{
        padding: 10px;
        margin: 0 auto;
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
    .loader{
      width: 50px;
      height: 50px;
      margin: 0 auto;
    } 
    .loader img {
      width: 100%;
      object-fit: cover;      
    }
    .btn{
      font-size: 20px;
      font-weight: 700;
      padding: 10px;
      margin-top: 20px;
      margin-bottom: 20px;
      cursor: pointer;
      text-align: center;
      background: #fafafa;
      border: 2px solid #101010;
    }
</style>
