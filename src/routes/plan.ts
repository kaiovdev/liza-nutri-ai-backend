import { Router, type Request, type Response } from "express";
import { DietPlanRequestSchema } from "../types";
import { generateDietPlan } from "../agent";

export const planRoutes = Router();

planRoutes.post("/plan", async (req: Request, res: Response) => {
  // Headers para SSE (stream)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Content-Type", "text/event-stream");

  const parse = DietPlanRequestSchema.safeParse(req.body);

  if (!parse.success) {
    return res.status(400).json({
      error: "ValidationError",
      details: parse.error.flatten((issue) => issue.message),
    });
  }

  try {
    for await (const delta of generateDietPlan(parse.data)) {
      res.write(delta); // envia os dados em tempo real
    }

    res.end(); // finaliza a stream
  } catch (error: any) {
    console.error(error);
    res.write(`event: error\n ${JSON.stringify(error.message)}`);
    res.end();
  }
});
