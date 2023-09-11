//requisitando o pacote mongoose
const mongoose = require('mongoose');

//criar a chave de 
mongoose.connect('mongodb://127.0.0.1:27017/escola',
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


const alunoSchema = new mongoose.Schema({

    matricula : String,

    nome: String,

    idade: Number,

    turma: String,

});

//2 - criando a model

const Alunos = mongoose.model('Alunos', alunoSchema)
 
//3 - colocar dados dentro dessa collection

const paulo = new Alunos({
    matricula: 'RM212',
    nome: 'Paulo Silva',
    idade: 16,
    turma: '2MIB'
});

paulo.save();

const mary = new Alunos({
    matricula: 'RM288',
    nome: 'Mary Oliveira',
    idade: 17,
    turma: '2MIB'
});

mary.save();

 