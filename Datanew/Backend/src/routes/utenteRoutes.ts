// definiamo le rotte per il frontend

import { Router } from 'express';
import {
     getUtenti,
     insertUtente} from '../controllers/utenteController.js';

const router = Router();

// Rotte per gli utenti     
router.get('/', getUtenti);
router.post('/', insertUtente);
/*router.get('/:id', getUtenteById);

router.put('/:id', updateUtente);
router.delete('/:id', deleteUtente);*/

export default router;
