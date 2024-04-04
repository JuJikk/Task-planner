import { Router } from "express";
import postControllers from "./PostControllers.js";

const router = new Router();

router.post('/posts', postControllers.create);
router.get('/posts', postControllers.getAll);
router.put('/posts',  postControllers.update);
router.delete('/posts/:id', postControllers.delete);

export default router;
