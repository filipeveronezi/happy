import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

// Métodos HTTP: GET, POST, PUT, DELETE - possuem algumas diferenças, dentre elas valor semântico

// GET: busca de informação
// POST: criação de informação
// PUT: edição de informação
// DELETE: remoção de informação

// Query params: http://localhost:3333/users?search=filipe
// Route Params: http://localhost:3333/users/1
// Body: http://localhost:3333/users (Identificar um recurso)

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images') , OrphanagesController.create);

export default routes;

// {
// 	"name": "Casa do Caminho",
// 	"latitude": -23.096579,
// 	"longitude": -46.5534017,
// 	"about": "Sobre o orfanato",
// 	"instructions": "Traga amor!",
// 	"opening_hours": "9h-16h",
// 	"open_on_weekends": false
// }

// "name": "Lar Dona Mariquinha do Amaral",
//     "latitude": -23.1110297,
//     "longitude": -46.5599524,              REACT // TYPESCRIPT // REACT NATIVE
//     "about": "Sobre o orfanato",
//     "instructions": "Traga amor!",         VUE.JS // NODE.JS // FLUTTER
//     "opening_hours": "8h-17h",
//     "open_on_weekends": true
//   },