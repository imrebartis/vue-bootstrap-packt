/* eslint-disable */
<template>
  <div id="app">
    <div v-for="message in messages">
      <h4>{{ message.title }}</h4>
      <p>{{ message.text }}</p>
      <p>{{ message.timestamp }}</p>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'

  let config = {
    apiKey: "AIzaSyBIlL5hA3DykrxEVcAHeG2theMu2PaLKUg",
    authDomain: "pleaseintroduceyourself-c6a0f.firebaseapp.com",
    databaseURL: "https://pleaseintroduceyourself-c6a0f.firebaseio.com",
    projectId: "pleaseintroduceyourself-c6a0f",
    storageBucket: "pleaseintroduceyourself-c6a0f.appspot.com",
    messagingSenderId: "96581135433"
  };

  let app = Firebase.initializeApp(config)
  let db = app.database()
  let messagesRef = db.ref('messages')
  export default {
    name: 'app',
    firebase: {
      messages: messagesRef
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
