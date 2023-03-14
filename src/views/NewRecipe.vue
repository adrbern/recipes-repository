<template>
  <div>
        <Banner>banner loading...</Banner>
        <div class="living_middle wow fadeInUp" data-wow-delay="0.4s">
            <div class="container">
                <h2>Receta</h2>
                <form action="">
                  <div class="to">
                    <input type="text" class="text" v-model="resgistreRecipe.name" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Nombre';}">
                    <input type="text" class="text" v-model="resgistreRecipe.type" value="Type" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Tipo';}">
                    <input type="text" class="text" v-model="resgistreRecipe.description" value="Description" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Descripcion';}">
                    <input type="text" class="text" v-model="resgistreRecipe.persons" value="Persons" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Personas';}">
                    <div class="clearfix"></div>
                  </div>

                  <div>
                    <input name="submit" type="submit" id="submitRecipe" value="Continuar"  v-on:click="onRecipeForm">
                  </div>
                  <h2>Ingredientes</h2>
                  <div class="to">
                    <input type="text" class="text" v-model="resgistreIngredients.name" value="Name ingredient" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Persons';}">
                    <input type="text" class="text" v-model="resgistreIngredients.size" value="Size" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Persons';}">
                    <input type="text" class="text" v-model="resgistreIngredients.type" value="Type ingredient" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Persons';}">
                    <div class="clearfix"></div>
                  </div>

                  <div>
                    <input name="submit" type="submit" id="submitNewIngredient" value="Nuevo ingrediente">
                    <input name="submit" type="submit" id="submitIngredients" value="Continuar">
                  </div>
                  
                  <h2>Pasos</h2>
                  <div class="to">
                    <input type="text" class="text" v-model="resgistreSteps.name" value="Step" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Persons';}">
                    <input type="text" class="text" v-model="resgistreSteps.description" value="Description Step" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Persons';}">
                    <input type="text" class="text" v-model="resgistreSteps.time" value="Time" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Persons';}">
                    <div class="clearfix"></div>
                  </div>

                  <div>
                    <input name="submit" type="submit" id="submitNewStep" value="Nuevo paso">
                    <input name="submit" type="submit" id="submitSteps" value="Continuar">
                  </div>

                  <!--RESUMEN DE LA RECETA-->
                  <div class="form-submit1">
                    <input name="submit" type="submit" id="submit" value="Send Recipe">
                  </div>
                  <div class="clearfix"></div>
                  </form>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import Banner from '../components/Banner.vue';
import useNewRecipe from '../composables/useNewRecipe';

export default {
  name: 'NewRecipe',
  components: {
      Banner
  },
  setup() {
    const router = useRouter();
    const { resgistreRecipe, resgistreIngredients, resgistreSteps, onRecipeForm, onIngredientsForm, onStepsForm, onNewRecipe } = useNewRecipe();

    return {
      resgistreRecipe,
      resgistreIngredients,
      resgistreSteps,
      onRecipeForm,
      onIngredientsForm,
      onStepsForm,
      onNewRecipe
    }
  }
}
</script>

<style>

</style>