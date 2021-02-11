<template>
  <div class="home">
    <CharactersList></CharactersList>
  </div>
</template>

<script>
// @ is an alias to /src
import CharactersList from '../components/CharactersList'
export default {
  name: 'Home',
  components: {
    CharactersList
  }
}
</script>
