import axios from "axios";
import { BloodExamData, TestPrediction } from "./types";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "http://localhost:4000" : "http://localhost:3000",
});

export const ServiceApi = {
  /** Requests a prediction to the service API */
  requestPrediction: async (bloodExamData: BloodExamData): Promise<TestPrediction> => {
    try {
      const response = await api.post("/prediction", bloodExamData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
