<template>
    <div>
      <Banner>banner loading...</Banner>
      <Submenu>submenu loading...</Submenu>
  
      <div class="living_middle">
          <div class="container">
              <div class="entertain_box wow fadeInLeft" data-wow-delay="0.4s">
                <RecipeSimple>Loading recipe simple ... </RecipeSimple>
                <RecipeSimple>Loading recipe simple ... </RecipeSimple>
                <RecipeSimple>Loading recipe simple ... </RecipeSimple>
                <RecipeSimple>Loading recipe simple ... </RecipeSimple>
                <RecipeSimple>Loading recipe simple ... </RecipeSimple>
                <RecipeSimple>Loading recipe simple ... </RecipeSimple>
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import Banner from '../components/Banner.vue';
  import Submenu from '../components/Submenu.vue';
  import RecipeSimple from '../components/RecipeSimple.vue';
  
  export default {
    name: 'profile',
    components: {
      Banner,
      Submenu,
      RecipeSimple
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>