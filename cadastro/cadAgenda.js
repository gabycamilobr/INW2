// requisitando o pacote mongoose
const mongoose = require('mongoose');

//criar a chave de 
mongoose.connect('mongodb://127.0.0.1:27017/agenda',
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        serverSelectionTimeoutMS : 20000
    }
);

//executando a conexão
const db = mongoose.connection;

//codigos de teste de conexão
db.on('error', console.error.bind(console, 'conection error: '))

db.once('open', function(){
    console.log("Estamos conectando ao mongoDB")
})


const pessoasSchema = new mongoose.Schema({

    numero : Number,
    nome: String,
    idade: Number,
    email: String,

});

//2 - criando a model

const Pessoas = mongoose.model('Pessoas', pessoasSchema)
 
//3 - colocar dados dentro dessa collection

const epaminondas = new Pessoas({
    numero: 1,
    nome: 'Epaminondas',
    idade: 17,
    email: 'epa@gmail.com'
});

epaminondas.save();

const carla = new Pessoas({
    numero: 2,
    nome: 'Carla',
    idade: 18,
    email: 'carla@gmail.com'
});

carla.save();
