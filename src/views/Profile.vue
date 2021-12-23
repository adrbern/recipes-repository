<template>
    <div>
        <SearchRecipes>search loading...</SearchRecipes>
        <Submenu>submenu loading...</Submenu>

        <div class="living_middle">
            <div class="container">
                Profile
            </div>
        </div>
    </div>
</template>

<script>
import SearchRecipes from '../components/SearchRecipes.vue';
import Submenu from '../components/Submenu.vue';

export default {
  name: 'profile',
  components: {
    SearchRecipes,
    Submenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>