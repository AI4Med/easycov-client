import React from "react";
import { Header, Form, Button } from "semantic-ui-react";
import { BloodExamField } from "../../service/blood-exam-fields";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

interface BloodExamFormProps {
  fields: BloodExamField[];
  onSubmit: (bloodExamData: any) => void;
}

const BloodExamForm: React.FC<BloodExamFormProps> = ({ fields, onSubmit }) => {
  /** Convert list of fields to Formik's initial values */
  const initialValues = fields.reduce<{ [x: string]: number }>((accumulator, currentValue) => {
    accumulator[currentValue.key] = 0.0;
    return accumulator;
  }, {});

  /** Convert list of fields to Yup schema */
  const validationSchema = Yup.object(
    fields.reduce<{ [x: string]: string }>((accumulator, currentValue) => {
      accumulator[currentValue.key] = currentValue.validator;
      return accumulator;
    }, {})
  );

  const submitHandler = (values: any, helpers: FormikHelpers<any>) => {
    helpers.resetForm();
    onSubmit(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <div style={{ marginBottom: 20 }}>
              {fields.map((field) => (
                <div style={{ marginBottom: 10 }} key={field.key}>
                  <label htmlFor={field.key}>{field.name}</label>
                  <input
                    type="number"
                    step="any"
                    id={field.key}
                    {...formik.getFieldProps(field.key)}
                  />
                  {/*
                //@ts-ignore*/}
                  {formik.touched[field.key] && formik.errors[field.key] ? (
                    // @ts-ignore
                    <div>{formik.errors[field.key]}</div>
                  ) : null}
                </div>
              ))}
            </div>
            <Button type="submit" fluid>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BloodExamForm;
