<template>
  <div class="container">
     <form>
        <div class="input__wrapper">
          <label>Event ID: </label>
          <input type="text" :value="item.id">
        </div>
        <div class="input__wrapper">
          <label>Title name: </label>
          <input type="text" :value="item.title">
        </div>
        <div class="input__wrapper">
          <label>Date: </label>
          <input type="text" :value="item.date">
        </div>
        <div class="input__wrapper">
          <label>Time: </label>
          <input type="text" :value="item.time">
        </div>
        <div class="input__wrapper">
          <label>Location: </label>
          <input type="text" :value="item.location">
        </div>
        <div class="input__wrapper">
          <label>Description: </label>
          <input type="text" :value="item.description">
        </div>
        <div class="input__wrapper">
          <label>Organizer: </label>
          <input type="text" :value="item.organizer">
        </div>
        <div class="input__wrapper">
          <label>Category: </label>
          <input type="text" :value="item.category">
        </div>
        
        <div class="attendees__wrapper">
          <p class="attendees__title">Attendees:</p>          
          <p v-for="subitem of item.attendees" :key="subitem.id"> <span> ID: </span> {{subitem.id}} <span>,  name: </span> {{subitem.name}}</p>
        </div>      
     </form>        
  </div>
</template>

<script>
    export default {      
        props: {
          id: Number,          
          item: Object
        }        
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
    }
    .attendees__title {
        font-weight: 700;
      }
    p span{
      font-weight: 700;
    }  
</style>
