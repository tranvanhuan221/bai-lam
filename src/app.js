import Express from "express";
import productRouter from "./routes/product";


dotenv.config();
const app = express();

app.use(express.json());
 app.use("/api", productRouter);

 mongoose.connect("mogodb://localhost:5173/product");
 export const viteNodeApp = app;