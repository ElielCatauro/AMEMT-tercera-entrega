<template>
    <div class="d-flex flex-wrap justify-content-around mt-4">
        <Character
            v-for="character in characters"
            :key="character.id"
            :character="character">
        </Character>
    </div>
</template>
<script>
import Character from './Character'
export default {
    components: {
        Character
    },
    data() {
        return {
            characters: []
        }
    },
    mounted() {
        this.getCharacters();
    },
    methods: {
        getCharacters() {
            fetch('https://rickandmortyapi.com/api/character')
                .then(resp => resp.json())
                .then(data => {
                    this.characters = data.results;
                })
        }
    },
}
</script>
<style lang="">
    
</style>