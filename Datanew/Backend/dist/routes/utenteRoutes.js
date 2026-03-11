// definiamo le rotte per il frontend
import { Router } from 'express';
import { getUtenti } from '../controllers/utenteController.js';
const router = Router();
// Rotte per gli utenti     
router.get('/', getUtenti);
/*router.get('/:id', getUtenteById);
router.post('/', createUtente);
router.put('/:id', updateUtente);
router.delete('/:id', deleteUtente);*/
export default router;
//# sourceMappingURL=utenteRoutes.js.map