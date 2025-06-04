import { Router } from 'express';
import { CategoriaController } from '../controllers/CategoriaController';

const router = Router();
const controller = new CategoriaController();

router.get('/categories', (req, res) => controller.list(req, res));
router.get('/category:id', (req, res) => controller.getById(req, res));
router.post('/category', (req, res) => controller.create(req, res));
router.put('/category:id', (req, res) => controller.update(req, res));
router.delete('/category:id', (req, res) => controller.delete(req, res));

export { router as produtoRoutes };
