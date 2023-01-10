import { Router } from "express";
import { privatRoute } from "../configs/passport";
import * as UserController from "../controller/UsersController";

const router = Router();

router.get('/ping', (req, res) => { res.json({ pong: true }) })

router.post('/login', UserController.Login);
router.post('/register',privatRoute, UserController.Register);
router.get('/allUsers',privatRoute, UserController.allUsers);
router.delete('/deletUser/:id',privatRoute, UserController.DeletUsers);
router.put('/updatUser',privatRoute, UserController.UpdatUsers);

export default router;