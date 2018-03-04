/* eslint-disable */
<template>
  <div id="app" class="jumbotron">
    <div class="container">
      <h1>Hello! Nice to meet you!</h1>
      <hr />
      <form @submit="addMessage">
        <div class="form-group">
          <input maxlength="40" autofocus class="form-control" v-model="newMessage.title" placeholder="Please introduce yourself :)" />
        </div>
        <div class="form-group">
          <textarea placeholder="Leave your message!" class="form-control" v-model="newMessage.text" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
      </form>
      <hr />
      <div class="card-columns">
        <card v-bind:message="firstMessage"></card>
        <card v-for="message in reverse(messages)" v-bind:message="message"></card>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
import { reverse } from './utils/utils'
import Card from './components/Card'

let config = {
  apiKey: 'AIzaSyBIlL5hA3DykrxEVcAHeG2theMu2PaLKUg',
  authDomain: 'pleaseintroduceyourself-c6a0f.firebaseapp.com',
  databaseURL: 'https://pleaseintroduceyourself-c6a0f.firebaseio.com',
  projectId: 'pleaseintroduceyourself-c6a0f',
  storageBucket: 'pleaseintroduceyourself-c6a0f.appspot.com',
  messagingSenderId: '96581135433'
}

let app = Firebase.initializeApp(config)
let db = app.database()
let messagesRef = db.ref('messages')
export default {
  data () {
    return {
      firstMessage: {
        isFirst: true,
        title: 'This is le fixed card!',
        text: 'Amazing, isn\'t it?',
        timestamp: Date.now()
      },
      newMessage: {
        title: '',
        text: '',
        timestamp: null
      }
    }
  },
  methods: {
    addMessage (e) {
      e.preventDefault()
      if (this.newMessage.title === '') {
        return
      }
      this.newMessage.timestamp = Date.now()
      messagesRef.push(this.newMessage)
      this.newMessage.text = ''
      this.newMessage.title = ''
      this.newMessage.timestamp = null
    },
    reverse
  },
  firebase: {
    messages: messagesRef.limitToLast(100)
  },
  components: {
    Card
  }
}
</script>

<style lang="sass">
  .card-block
    h5, p
      overflow: hidden
      text-overflow: ellipsis
</style>
