<template>
  <div class="container">
    <h1>This is Create Event page</h1>
    <form>
      <div class="input__wrapper">
        <label>Title name: </label>
        <input
          type="text"
          v-model="event.title"
        >
      </div>
      <div class="input__wrapper">
        <label>Date: </label>
        <input
          type="text"
          v-model="event.date"
        >
      </div>
      <div class="input__wrapper">
        <label>Time: </label>
        <input
          type="text"
          v-model="event.time"
        >
      </div>
      <div class="input__wrapper">
        <label>Location: </label>
        <input
          type="text"
          v-model="event.location"
        >
      </div>
      <div class="input__wrapper">
        <label>Description: </label>
        <input
          type="text"
          v-model="event.description"
        >
      </div>
      <div class="input__wrapper">
        <label>Organizer: </label>
        <input
          type="text"
          v-model="event.organizer.name"
        >
      </div>
      <div class="input__wrapper">
        <label>Category: </label>
        <input
          type="text"
          v-model="event.category"
        >
      </div>
      <p class="attendees__title">Attendees:</p>
      <div
        class="attendees__wrapper"
        v-for="attendee in event.attendees"
        :key="attendee.id"
      >
        <label>name: </label>
        <input
          type="text"
          v-model="attendee.name"
        >
      </div>
      <div
        class="attendees__btn"
        @click="addNewAttendees"
      >
        Add new Attendees
      </div>
    </form>
    <button @click="addEvent">Save Event</button>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  data() {
    return {
      event: this.generateNewEventObject(),
    };
  },
  methods: {
    ...mapActions(['createEvent']),

    generateId() {
      return Math.floor(Math.random() * 10000000);
    },
    generateNewEventObject() {
      const id = this.generateId();
      const user = {
        id: 123,
        name: 'John Doe'
      };

      return {
        id: id,
        user: user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      };
    },
    addNewAttendees() {
      this.event.attendees.push({
        id: this.generateId(),
        name: ''
      });
    },
    async addEvent() {
      try {
        this.createEvent(this.event);

        this.event = this.generateNewEventObject();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: 10px;
  margin: 0 auto;
  background: #eeeeee;
  text-align: left;
}

h1 {
  text-align: center;
}

form {
  background: #a0a0a0;
  padding: 10px;
  max-width: 800px;
}

.input__wrapper {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  cursor: pointer;
}

label {
  margin-right: 10px;
}

input {
  padding: 5px;
  font-size: 20px;
  width: 400px;
}

.attendees__wrapper {
  font-size: 20px;
  margin-left: 20px;
  display: flex;
}

.attendees__wrapper label {
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
.attendees__btn {
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


