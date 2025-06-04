import { Router } from 'express';
import { LocalArmazenamentoController } from '../controllers/LocalArmazenamentoController';

const router = Router();
const controller = new LocalArmazenamentoController();

router.get('/storageLocations', (req, res) => controller.list(req, res));
router.get('/storageLocation:id', (req, res) => controller.getById(req, res));
router.post('/storageLocation', (req, res) => controller.create(req, res));
router.put('/storageLocation:id', (req, res) => controller.update(req, res));
router.delete('/storageLocation:id', (req, res) => controller.delete(req, res));

export { router as produtoRoutes };
