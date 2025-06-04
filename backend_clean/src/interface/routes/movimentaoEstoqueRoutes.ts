import { Router } from 'express';
import { MovimentacaoEstoqueController } from '../controllers/MovimentacaoEstoqueController';

const router = Router();
const controller = new MovimentacaoEstoqueController();

router.get('/', (req, res) => controller.list(req, res));
router.get('/:id', (req, res) => controller.getById(req, res));
router.post('/', (req, res) => controller.create(req, res));
router.put('/:id', (req, res) => controller.update(req, res));
router.delete('/:id', (req, res) => controller.delete(req, res));

export { router as movimentacaoEstoqueRoutes };
