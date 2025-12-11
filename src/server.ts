import express from "express";
import cors from "cors";
import { planRoutes } from "./routes/plan";

const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

// Rota de teste
app.get("/teste", (req, res) => {
  res.send("Hello World");
});

// Rotas do sistema
app.use(planRoutes);

// Inicialização do servidor
const PORT = Number(process.env.PORT) || 3333;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
