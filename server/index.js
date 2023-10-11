import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import dalleRoutes from "./routes/dalle.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALLE_AI" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something went wrong!" });
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));
