import { Router } from 'express';
import {UsuarioController } from '../controllers/UsuarioController';

const router = Router();
const controller = new UsuarioController();

router.get('/users', (req, res) => controller.list(req, res));
router.get('/user:id', (req, res) => controller.getById(req, res));
router.post('user', (req, res) => controller.create(req, res));
router.get('/user:id', (req, res) => controller.update(req, res));
router.delete('/user:id', (req, res) => controller.delete(req, res));

export { router as produtoRoutes };