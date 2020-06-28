export type TestPrediction = {
  prediction: string;
};

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
  c_reactive_protein: number;
};

/** Specifies an entry belonging to a blood exam */
export type BloodExamEntry<T> = {
  label: string;
  unit: string;
  comments?: string;
};

/** Blood exam specification */
export type BloodExamSpecification = { [key: string]: BloodExamEntry<number> };
