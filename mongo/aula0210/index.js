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

Alunos.insertMany([
    {nome : 'Paulo', idade : 16, turma : 'Turma1'},
    {nome : 'Maria', idade : 15, turma : 'Turma2'},
    {nome : 'Marcos', idade : 17, turma : 'Turma1'}
])

async function findAlunos(){
    try {
        const alunos = await Alunos.find({});
        console.log('Alunos :',alunos)
    }
    catch(error){
        console.error('Alunos não encontrados: ',error)
    }
}

findAlunos();