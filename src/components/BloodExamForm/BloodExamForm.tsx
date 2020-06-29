import React from "react";
import { Form, Button, Input } from "semantic-ui-react";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { BloodExamSpecification } from "../../service/types";
import styled from "styled-components";

const mustBeNumber = () => new Yup.number("Must be a number").required("Required");

const FormFieldContainer = styled.div`
  padding: 10px;
  marginbottom: 10;
  display: flex;
  flexdirection: row;
  justifycontent: space-evenly;
`;

const FormLabel = styled.label`
  flex: 1;
`;

const FormRightLabel = styled.label`
  margin-left: 10px;
  flex: 1;
`;

const CaptchaContainer = styled.div`
  margin: auto;
  padding: 10px;
`;

interface BloodExamFormProps {
  specification: BloodExamSpecification;
  onSubmit: (bloodExamData: any) => void;
}

/** The blood exam form is rendered based on a specification sent by the server. */
const BloodExamForm: React.FC<BloodExamFormProps> = ({ specification, onSubmit }) => {
  /** Convert list of fields to Formik's initial values */
  const initialValues = Object.keys(specification).reduce<{ [x: string]: number }>(
    (accumulator, currentValue) => {
      accumulator[currentValue] = 0.0;
      return accumulator;
    },
    {}
  );

  /** Convert list of fields to Yup schema */
  const validationSchema = Yup.object(
    Object.keys(specification).reduce<{ [x: string]: string }>((accumulator, currentValue) => {
      accumulator[currentValue] = mustBeNumber();
      return accumulator;
    }, {})
  );

  const submitHandler = (values: any, helpers: FormikHelpers<any>) => {
    // helpers.resetForm();
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
              {Object.keys(specification).map((field) => (
                <>
                  <FormFieldContainer key={field}>
                    <FormLabel htmlFor={field}>
                      {specification[field].label}

                      {formik.touched[field] && formik.errors[field] ? (
                        <div>{formik.errors[field]}</div>
                      ) : null}
                    </FormLabel>
                    <Input
                      style={{ flex: 2 }}
                      type="number"
                      step="any"
                      id={field}
                      // error={!!formik.touched[field] && !!formik.errors[field]}
                      error
                      {...formik.getFieldProps(field)}
                    />
                    <FormRightLabel htmlFor={field}>
                      {specification[field].unit} - {specification[field].comments}
                    </FormRightLabel>
                  </FormFieldContainer>
                </>
              ))}
            </div>
            <Button type="submit" fluid>
              Request prediction
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BloodExamForm;
