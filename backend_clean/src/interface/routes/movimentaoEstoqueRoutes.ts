import { Router } from 'express';
import { MovimentacaoEstoqueController } from '../controllers/MovimentacaoEstoqueController';

const router = Router();
const controller = new MovimentacaoEstoqueController();

router.get('/movimentInventorys', (req, res) => controller.list(req, res));
router.get('/movimentInventory:id', (req, res) => controller.getById(req, res));
router.post('/movimentInventory', (req, res) => controller.create(req, res));
router.put('/movimentInventory:id', (req, res) => controller.update(req, res));
router.delete('/movimentInventory:id', (req, res) => controller.delete(req, res));

export { router as produtoRoutes };
