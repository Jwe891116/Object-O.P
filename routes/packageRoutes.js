import express from "express";
import path from "path";
const router = express.Router();
import { getHome, getPackage, getPackages, postPackages, getSearch, getInfo} from "../controllers/userController.js";
  
router.get("/", getHome);

router.get("/package", getPackage);

router.get("/packages", getPackages);

router.post("/package", postPackages);

router.get("/track_package", getSearch);

router.get("/search", getInfo);

// router.get('/test-db', testDbConnection);

export default router;
