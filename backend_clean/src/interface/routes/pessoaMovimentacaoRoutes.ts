import { Router } from 'express';
import { PessoaMovimentacaoController } from '../controllers/PessoaMovimentacaoController';

const router = Router();
const controller = new PessoaMovimentacaoController();

router.get('/movimentPersons', (req, res) => controller.list(req, res));
router.get('/movimentPerson:id', (req, res) => controller.getById(req, res));
router.post('/movimentPerson', (req, res) => controller.create(req, res));
router.put('/movimentPerson:id', (req, res) => controller.update(req, res));
router.delete('/movimentPerson:id', (req, res) => controller.delete(req, res));

export { router as produtoRoutes };
