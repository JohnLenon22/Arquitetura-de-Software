import { Router } from 'express';
import { LocalArmazenamentoController } from '../controllers/LocalArmazenamentoController';

const router = Router();
const controller = new LocalArmazenamentoController();

router.get('/', (req, res) => controller.list(req, res));
router.get('/:id', (req, res) => controller.getById(req, res));
router.post('/', (req, res) => controller.create(req, res));
router.put('/:id', (req, res) => controller.update(req, res));
router.delete('/:id', (req, res) => controller.delete(req, res));

export { router as localArmazenamentoRoutes };
