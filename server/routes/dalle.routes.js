import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

const router = express.Router();
dotenv.config();

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Environment variables not set!");
}

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

router
  .route("/")
  .get((req, res) => {
    res.status(200).json({
      message: "Something is working!",
    });
  })
  .post(async (req, res, next) => {
    try {
      const { prompt } = req.body;

      const response = await openai.createImage({
        prompt,
        n: 1,
        size: "1024x1024",
        response_format: "b64_json",
      });

      const image = response.data.data[0].b64_json;

      res.status(200).json({ photo: image });
    } catch (error) {
      next(error);
    }
  });

export default router;
