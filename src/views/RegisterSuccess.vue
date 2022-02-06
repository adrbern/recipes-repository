<template>
    <div>
        <Banner>banner loading...</Banner>
        <div class="living_middle wow fadeInUp" data-wow-delay="0.4s">
            <div class="container">
                <h2>Existo</h2>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from '../components/Banner.vue';

export default {
    name: 'RegisterSuccess',
    components: {
        Banner
    },
    data() {
        return {}
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>