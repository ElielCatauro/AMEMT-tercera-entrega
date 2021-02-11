<template>
    <div>
        <h1>{{ character.name }}</h1>
        <img :src="character.image" alt="">
        <ul>
            <li><span>Status: </span> {{ character.status }}</li>
            <li><span>Species: </span> {{ character.species }}</li>
            <li><span>Type: </span> {{ character.type || 'none' }}</li>
            <li><span>Gender: </span> {{ character.gender }}</li>
            <li><span>Location: </span> {{ character.location.name }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            character: {}
        }
    },
    mounted() {
        const characterId = this.$route.params.id;
        this.getCharacter(characterId);
    },
    methods: {
        async getCharacter(id) {
            this.character = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
                .then(resp => resp.json())
        }
    },
    watch: {
        $route(to) {
            const id = to.params.id
            this.getCharacter(id);
        }
    }
}
</script>
<style>
    ul li {
        list-style-type: none;
    }
</style>