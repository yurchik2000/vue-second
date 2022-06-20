<template>
  <div class="container">
    <h1>This is Edit Event page</h1>
    <nav>
      <ul>
        <li v-for="item of events" :key="item.id">
          <button @click="showPopUp(item)">Event ID #{{ item.id }}</button>
        </li>
      </ul>
    </nav>
    <PopUp
      v-if="isPopUpVisible"
      @closePopUp="closePopUp"
      :id="String(item.id)"
      :newItem="item"
    />
  </div>
</template>

<script>

import { mapState} from "vuex";
import PopUp from "@/components/PopUp"
    import {mapActions} from 'vuex'

export default {
  data() {
    return {
      isPopUpVisible: false,
      item: {}
    }
  },
  components: {
    PopUp
  },
  computed: {
    ...mapState(["events"]),
  },
  methods: {
    ...mapActions([ 'GET_ALL_FROM_API']),
    
    showPopUp(item){
      this.item = item
      this.isPopUpVisible = true
    },
    closePopUp(){
      this.isPopUpVisible = false
    },    
  },
  mounted() {
    this.GET_ALL_FROM_API()
  }
};
</script>

<style scoped>
.container {
  padding: 10px;
  margin: 0 auto;
  background: #f0f0f0;
}
ul {
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  list-style: none;
}
li button {
  margin: 15px;
  font-size: 20px;
  background: #fdd9b5;
  padding: 10px;
  border: 2px solid #141414;
  cursor: pointer;
}
</style>
