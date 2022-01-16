const { Schema, model } = require('mongoose');

const RecipeSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    img: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    type: {
        type: String,
        required: true,
        enum: ['Vegetal', 'Meet', 'Fish' ]
    },
    decription: {
        type: String,
        required: [true, 'La descripcion es obligatorio']
    },
    // Array de pasos
    steps: {
        type: Array,
        default: []
    },
    /*times: {
        type: String,
        required: true,
        enum: ['15 minutos', '30 minutos', '40 minutos', '1 hora', '2 horas' ,'3 horas', 'Más de 3 horas' ]
    },*/
    persons: {
        type: Number,
        required: true,
        default: 1
    },
    /*ingredients: {
        type: Array,
        required: true
    },*/
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    /*
    comments: {

    }*/
    /*kcal: {
        type: Boolean,
        default: false
    }*/
})

/*
RecipeSchema.methods.toJSON = function() {
    const { __v, password, _id, ...userData } = this.toObject();

    userData.uid = _id;

    return userData;
}*/

module.exports = model('Recipe', RecipeSchema);