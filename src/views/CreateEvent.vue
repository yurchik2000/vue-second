<template>
  <div class="container">
    <h1>This is Create Event page</h1>
    <form>        
        <div class="input__wrapper">
          <label>Event ID: </label>
          <input type="text" v-model="item.id">
        </div>
        <div class="input__wrapper">
          <label>Title name: </label>
          <input type="text" v-model="item.title">
        </div>
        <div class="input__wrapper">
          <label>Date: </label>
          <input type="text" v-model="item.date">
        </div>
        <div class="input__wrapper">
          <label>Time: </label>
          <input type="text" v-model="item.time">
        </div>
        <div class="input__wrapper">
          <label>Location: </label>
          <input type="text" v-model="item.location">
        </div>
        <div class="input__wrapper">
          <label>Description: </label>
          <input type="text" v-model="item.description">
        </div>
        <div class="input__wrapper">
          <label>Organizer: </label>
          <input type="text" v-model="item.organizer">
        </div>
        <div class="input__wrapper">
          <label>Category: </label>
          <input type="text" v-model="item.category">
        </div>
        <p class="attendees__title">Attendees:</p>                                          
        <div class="attendees__wrapper" v-for="subitem of item.attendees" :key="subitem.id">
          <label>ID: </label>
          <input type="text" v-model="subitem.id">
          <label>name: </label>
          <input type="text" v-model="subitem.name">                              
        </div>                        
        <div class="attendees__btn" @click="addNewAttendees">Add new Attendees</div>
     </form>            
     <button @click="addItem(item)">Save Event</button>     
  </div>
</template>

<script>  

  import {mapMutations} from 'vuex'

  export default {
    
    data() {
      return {      
        id: '',
        item: {                    
          attendees: []          
          },        
        }        
      },
    components: {
      
    },
    methods: {
          ...mapMutations (['ADD_ITEM']),
          addItem(item) {
            this.$store.commit('ADD_ITEM', item);
          },                              
          addNewAttendees(){
            this.item.attendees.push({
              id: '',
              name: ''
            })            
          }
    },          
  }
</script>

<style scoped>
    .container{
        padding: 10px;
        margin: o auto;
        background: #eeeeee;
        text-align: left;
    }
    h1{
      text-align: center;
    }    
    form{
      background: #a0a0a0;      
      padding: 10px;
      max-width: 800px;
    }
    .input__wrapper{      
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      cursor: pointer;
    }    
    label{      
      margin-right: 10px;      
    }
    input{      
      padding: 5px;
      font-size: 20px;
      width: 400px;
    }    
    .attendees__wrapper{
      font-size: 20px;
      margin-left: 20px;      
      display: flex;
    }
    .attendees__wrapper label{
      margin-left: 10px;
    }
    .attendees__title {
        font-weight: 700;
      }
    p {
      font-size: 20px;
      font-weight: 700;
    }  
    button, 
    .attendees__btn{
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


