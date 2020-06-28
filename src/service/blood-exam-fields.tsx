import * as Yup from "yup";

export type BloodExamField = {
  key: string;
  unit: string;
  name: string;
  comments?: string;
  validator: any;
};

const mustBeNumber = () => new Yup.number("Must be a number").required("Required");

export const bloodExamFields: BloodExamField[] = [
  {
    key: "age",
    unit: "years",
    name: "Age",
    validator: mustBeNumber(),
  },
  {
    key: "hematocrit",
    unit: "",
    name: "Hematocrits",
    validator: mustBeNumber(),
  },
  {
    key: "hemoglobin",
    unit: "",
    name: "Hemoglobin",
    validator: mustBeNumber(),
  },
  {
    key: "platelets",
    unit: "",
    name: "Platelets",
    validator: mustBeNumber(),
  },
  {
    key: "mean_platelet_volume",
    unit: "",
    name: "Mean Platelet Volume",
    validator: mustBeNumber(),
  },
  {
    key: "red_blood_cells",
    unit: "",
    name: "Red Blood Cells",
    validator: mustBeNumber(),
  },
  {
    key: "lymphocytes",
    unit: "",
    name: "Lymphocytes",
    validator: mustBeNumber(),
  },
  {
    key: "mchc",
    unit: "",
    name: "MCHC",
    validator: mustBeNumber(),
  },
  {
    key: "leukocytes",
    unit: "",
    name: "Leukocytes",
    validator: mustBeNumber(),
  },
  {
    key: "basophils",
    unit: "",
    name: "Basophils",
    validator: mustBeNumber(),
  },
  {
    key: "mch",
    unit: "",
    name: "MCH",
    validator: mustBeNumber(),
  },
  {
    key: "eosinophils",
    unit: "",
    name: "Eosinophils",
    validator: mustBeNumber(),
  },
  {
    key: "mcv",
    unit: "",
    name: "MCV",
    validator: mustBeNumber(),
  },
  {
    key: "monocytes",
    unit: "",
    name: "monocytes",
    validator: mustBeNumber(),
  },
  {
    key: "rdw",
    unit: "",
    name: "RDW",
    validator: mustBeNumber(),
  },
  {
    key: "c_reactive_protein",
    unit: "",
    name: "C Reactive Protein",
    validator: mustBeNumber(),
  },
];
