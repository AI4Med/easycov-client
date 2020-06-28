export type BloodExamData = {
  age: number;
  hematocrit: number;
  hemoglobin: number;
  platelets: number;
  mean_platelet_volume: number;
  red_blood_cells: number;
  lymphocytes: number;
  mchc: number;
  leukocytes: number;
  basophils: number;
  mch: number;
  eosinophils: number;
  mcv: number;
  monocytes: number;
  rdw: number;
  c_reactive_number: number;
};

export type TestPrediction = {
  prediction: string;
};
