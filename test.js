import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI("AIzaSyAuyFmrVlXOVdDSd5h692imAoDmPQT0_44");

(async () => {
  try {
    const models = await ai.listModels();
    console.log("Available models:", models);
  } catch (err) {
    console.error("Error listing models:", err);
  }
})();
