<template>
    <!--Revisar si tengo que sacar el div del col-md-6 fuera para que no se rompa la estructura-->
        <div class="col-md-6 margin-verrtical7">
            <div class="living_box">
                <a href="#">
                    <img src="images/e1.jpg" class="img-responsive" alt=""/>
                    <span class="sale-box">
                        <span class="sale-label">Paso 1</span>
                    </span>
                </a>
                <div class="living_desc desc1">
                    <h3><a href="#">{{ title }}</a></h3>
                    <p>{{ description }}</p>
                    <p class="educate"><img src="images/star1.png" alt=""/></p>
                    <p class="price pr_box">{{ time }} minutos</p>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div> 
    </template>
    
    <script>
    export default {
      name: 'RecipeStepDetail',
      components: {
      },
      props: {
        img: {
            type: String,
            required: true,
        },
        title:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        }
      }
    }
    </script>
    
    <style scoped>
    </style>
