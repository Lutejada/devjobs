const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slug');
const shortid = require('shortid');

const vacantesSchema = new mongoose.Schema({
    titulo: {
        type: String,
        trim: true,
        required: 'El Titulo es requerido'
    },
    empresa: {
        type: String,
        trim: true
    },
    ubicacion: {
        type: String,
        trim: true,
        required: 'La Ubicacion es Requerida'
    },
    salario: {
        type: String,
        trim: true,
        default: 0
    },
    contrato: {
        type: String,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        lowerCase: true
    },
    skills: [String],
    candidatos: [{
        nombre: String,
        email: String,
        cv: String
    }]


});

vacantesSchema.pre('save', function(next) {
    // crear la url
    const url = slug(this.titulo);
    this.url = `${url}-${shortid.generate()}`;
    next();
});

module.exports = mongoose.model('vacante', vacanteSSchema);