import axios from "axios";
import { BloodExamData, TestPrediction, BloodExamSpecification } from "./types";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://covid-276819.rj.r.appspot.com/"
      : "http://localhost:3000",
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

  /** Requests the blood exam specification */
  requestBloodExamSpeficiation: async (): Promise<BloodExamSpecification> => {
    try {
      const response = await api.get("/prediction");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
