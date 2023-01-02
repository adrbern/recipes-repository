<template>
    <div>
      <div class="col-md-4 margin-verrtical7 wow fadeInLeft" data-wow-delay="0.4s">
        <div class="living_box"><a href="./education.html">
        <img src="images/l4.jpg" class="img-responsive" alt=""/>
      <span class="sale-box">
        <span class="sale-label-novedad">Novedad</span>
        </span>
      </a>
      <div class="living_desc">
        <h3><router-link to="recipe">{{ recipe?.name }}</router-link></h3>
      <p>{{ recipe?.description }}</p>
      <router-link class="btn3" to="recipe">Ir a receta</router-link>
      <p class="price">45 Minutos</p>
      </div>
        <table border="1" class="propertyDetails">
        <tbody>
          <tr>
            <td><img src="images/area.png" alt="" style="margin-right:7px;">{{ recipe?.persons }} persons</td>
            <td><img src="images/bed.png" alt="" style="margin-right:7px;">4 Ingredien</td>
            <td><img src="images/drop.png" alt="" style="margin-right:7px;">384 kcal</td>
          </tr>
        </tbody>
        </table>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecipeCard',
   props: {
      recipe: {
          type: Object,
          required: true
      }
    },
    
    components: {
    },
    setup(props) {
      console.log(props)
      console.log(this)
      return {}
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
