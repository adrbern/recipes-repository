<template>
    <ul class="feature">
        <li>
            <i class="icon-trophy"></i>
        </li>
        <li class="feature_right">
            <h4>{{ name }}</h4>
            <p>{{ size }} - {{ type }}</p>
        </li>
        <div class="clearfix"></div>
    </ul>    
</template>

<script>
export default {
  name: 'RecipeStep',
  components: {
  },
  props: {
    name: {
        type: String,
        required: true
    }, 
    type: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    }
  },
  setup(props) {
    console.log('asdasdasdasdad' + props)
    const properties = {...props};
    console.log(properties)
    return {
        properties
    }
  }
}
</script>

<style scoped>
</style>