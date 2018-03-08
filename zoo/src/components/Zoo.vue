<template>
  <div class="row">
    <h2>Here's your Zoo</h2>
    <ol>
      <li v-bind:key="animal.id" v-for="animal in animals"><span class="animal" :animal="animalsCodes[animal]"></span></li>
    </ol>
  </div>
</template>

<script>
export default {
  props: ['animals', 'animalsCodes', 'name']
}
</script>
