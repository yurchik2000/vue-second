<template>
  <div class="container">         
     <form>        
        <div class="input__wrapper">
          <label>Event ID: </label>
          <input type="text" :value="item.id" readonly>
        </div>
        <div class="input__wrapper">
          <label>Title name: </label>
          <input type="text" :value="item.title" readonly>
        </div>
        <div class="input__wrapper">
          <label>Date: </label>
          <input type="text" :value="item.date" readonly>
        </div>
        <div class="input__wrapper">
          <label>Time: </label>
          <input type="text" :value="item.time" readonly>
        </div>
        <div class="input__wrapper">
          <label>Location: </label>
          <input type="text" :value="item.location" readonly>
        </div>
        <div class="input__wrapper">
          <label>Description: </label>
          <input type="text" :value="item.description" readonly>
        </div>
        <div class="input__wrapper">
          <label>Organizer: </label>
          <input type="text" :value="item.organizer" readonly>
        </div>
        <div class="input__wrapper">
          <label>Category: </label>
          <input type="text" :value="item.category" readonly>
        </div>
<!--        
        <div class="attendees__wrapper">
          <p class="attendees__title">Attendees:</p>          
          <p v-for="subitem of item.attendees" :key="subitem.id"> <span> ID: </span> {{subitem.id}} <span>,  name: </span> {{subitem.name}}</p>
        </div>      
-->
        <p class="attendees__title">Attendees:</p>          
        <div class="attendees__wrapper" v-for="subitem of item.attendees" :key="subitem.id">
          <label>ID: </label>
          <input type="text" :value="subitem.id" readonly>          
          <label>name: </label>
          <input type="text" :value="subitem.name" readonly>                    
        </div>      
     </form>        
  </div>
</template>

<script>
    export default {                    
        props: {
          id: String,          
          item: Object,                    
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
</style>
