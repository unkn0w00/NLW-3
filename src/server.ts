import express from 'express';

import './database/connection';
import routes from './routes'

const app = express();

app.use(express.json());
app.use(routes)

// GET = Buscar uma informação (Lista, item)
// POST = Criando informações

// PUT = Editando uma informação
// DELETE = Deletando uma informação



app.listen(3333)