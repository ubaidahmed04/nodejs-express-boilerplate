import { Router } from "express";
import getController from "./controllers/get.js";
import postController from "./controllers/post.js";
import deleteController from "./controllers/delete.js";
import updateController from "./controllers/update.js";
import getSingleController from "./controllers/getSingle.js";

const router = Router();

router.get("/", getController)
router.post("/", postController)
router.post("/user/:id", getSingleController)
router.delete("/:id", deleteController)
router.put("/:id", updateController)

export default router;