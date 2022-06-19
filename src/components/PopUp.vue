<template>
  <div class="popup">           
     <form>        
        <div class="input__wrapper">
          <label>Event ID: </label>
          <input type="text" v-model="item.id" readonly>
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
          <input type="text" v-model="item.time" readonly>
        </div>
        <div class="input__wrapper">
          <label>Location: </label>
          <input type="text" v-model="item.location" readonly>
        </div>
        <div class="input__wrapper">
          <label>Description: </label>
          <input type="text" v-model="item.description" readonly>
        </div>
        <div class="input__wrapper">
          <label>Organizer: </label>
          <input type="text" v-model="item.organizer" readonly>
        </div>
        <div class="input__wrapper">
          <label>Category: </label>
          <input type="text" v-model="item.category" readonly>
        </div>
        <p class="attendees__title">Attendees:</p>          
        <div class="attendees__wrapper" v-for="attendee of item.attendees" :key="attendee.id">
          <label>ID: </label>
          <input type="text" v-model="attendee.id" readonly>          
          <label>name: </label>
          <input type="text" v-model="attendee.name" readonly>                    
        </div>      
     </form>             
     <footer>
        <button @click="replaceEvent">Save</button>
        <button @click="closePopUp">Cancel</button>
     </footer>  
  </div>
</template>

<script>
    import {mapMutations } from "vuex";
    import axios from 'axios';

    export default {                    
        props: {
          id: String,          
          newItem: Object,                    
        },
        data(){
          return {              
            item: this.newItem    
          }
        },        
        methods: {
          ...mapMutations (['REPLACE_EVENT']),
          closePopUp() {
            this.$emit('closePopUp')
          },
          replaceEventOnServer(item) {
            axios.put('http://localhost:3000/events/' + item.id, item)
              .then(() => console.log('Replace successful'))
              .catch(error => console.log(error))
          },
        async replaceEvent(){
            try {                      
              console.log(this.item)      
              this.REPLACE_EVENT(this.item);              
              this.replaceEventOnServer(this.item)                         
            } catch(error) {
              console.error(error);
            }
          },         
        }  
        }  
    
</script>

<style scoped>
    .popup{
        padding: 10px;
        margin: 0 auto;
        background: #d1d1d1;
        text-align: left;
        position: fixed;
        top: 100px;
        left: 0;
        right: 0;        
        width: 900px;
    }
    form{
      background: #a0a0a0;      
      padding: 10px;
      max-width: 800px;
      margin: 0 auto;            
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
    button
    {
      font-size: 20px;
      font-weight: 700;
      padding: 10px;
      margin: 20px;      
      cursor: pointer;
      text-align: center;
      background: #fafafa;
      border: 2px solid #101010;
    }
</style>
