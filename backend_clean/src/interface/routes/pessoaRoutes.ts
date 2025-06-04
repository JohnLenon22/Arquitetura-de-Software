import { Router } from 'express';
import { PessoaController } from '../controllers/PessoaController';

const router = Router();
const controller = new PessoaController();

router.get('/persons', (req, res) => controller.list(req, res));
router.get('/person:id', (req, res) => controller.getById(req, res));
router.post('/person', (req, res) => controller.create(req, res));
router.put('/person:id', (req, res) => controller.update(req, res));
router.delete('/person:id', (req, res) => controller.delete(req, res));

export { router as produtoRoutes };
