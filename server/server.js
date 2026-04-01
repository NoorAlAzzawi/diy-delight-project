import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import itemsRoutes from "./routes/buildsRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "BoltBucket API is running." });
});

app.use("/api", itemsRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
