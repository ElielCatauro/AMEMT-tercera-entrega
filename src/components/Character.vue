<template>
    <div class="card mb-3" style="width: 18rem;">
        <img :src="character.image" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">{{ character.name }}</h5>
            <p class="card-text">{{ character.status }}</p>
            <a @click.prevent="goToDetails" class="btn btn-primary">Go to details</a>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        character: {
            type: Object,
            required: true
        }
    },
    methods: {
        goToDetails() {
            this.$router.push({ name: 'Character', params: { id: this.character.id } })
        }
    },
}
</script>
<style lang="">
    
</style>