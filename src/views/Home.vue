<template>
  <div class="home">
    <NoticiasList></NoticiasList>
  </div>
</template>

<script>

import NoticiasList from '../components/NoticiasList'
export default {
  name: 'Home',
  components: {
    NoticiasList
  }
}
</script>
