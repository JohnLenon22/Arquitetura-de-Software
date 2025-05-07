import { Router } from 'express';
import { ProdutoController } from '../controllers/ProdutoController';

const router = Router();
const controller = new ProdutoController();

router.get('/', (req, res) => controller.list(req, res));
router.post('/', (req, res) => controller.create(req, res));
router.post('/:id', (req, res) => controller.update(req, res));
router.delete('/:id', (req, res) => controller.delete(req, res));

export { router as produtoRoutes };
