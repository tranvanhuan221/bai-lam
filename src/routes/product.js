import { Express } from "express";
import { create, get,getAll, remove, update} from "../controllers/product";
const routes = express.Router();
routes.get("/products", getAll);
routes.get("/products/:id", get);
routes.post("/products", create);
routes.Patch("/products/:id", update);
routes.delete("/products/:id", remove);

export default router;