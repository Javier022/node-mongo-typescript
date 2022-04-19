import express from "express";
import morgan from "morgan";
import cors from "cors";
import { port } from "./config";
// routes
import videoRoutes from "./routes/videos.routes";

const app = express();
app.set("port", port);
app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", videoRoutes);

export default app;
