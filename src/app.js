require('./config/dotenv');
const cors = require('cors');
const express = require('express');

const port = process.env.PORT || 5000;
const app = express();

const projectRoute = require('./routers/projectRoute');
const authRoute = require('./routers/authRoute');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));    


app.get('/', (req, res) => { 

    res.send('Seja bem-vindo à API do meu Site Pessoal!');
})   

app.use('/projects', projectRoute);
app.use('/auth', require('./routers/authRoute'));



app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);

})