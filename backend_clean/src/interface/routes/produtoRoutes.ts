import { Router } from 'express';
import { ProdutoController } from '../controllers/ProdutoController';

const router = Router();
const controller = new ProdutoController();

router.get('/products', (req, res) => controller.list(req, res));
router.get('/product:id', (req, res) => controller.getById(req, res));
router.post('/product', (req, res) => controller.create(req, res));
router.put('/product:id', (req, res) => controller.update(req, res));
router.delete('/product:id', (req, res) => controller.delete(req, res));

export { router as produtoRoutes };
