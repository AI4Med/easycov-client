import React from "react";
import BloodExamForm from "../../components/BloodExamForm/BloodExamForm";
import { Container, Segment, Divider, Message } from "semantic-ui-react";
import PredictionModal from "../../components/PredictionModal/PredictionModal";
import { TestPrediction, BloodExamData } from "../../service/types";
import { useMutation, useQuery } from "react-query";
import { ServiceApi } from "../../service/api";
import DisclaimerModal from "../../components/DisclaimerModal/DisclaimerModal";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const [mutate] = useMutation<TestPrediction, BloodExamData>(ServiceApi.requestPrediction);
  const { data, status } = useQuery("specification", ServiceApi.requestBloodExamSpeficiation);

  const [showResultModal, setShowResultModal] = React.useState<boolean>(false);
  const [showDisclaimerModal, setShowDisclaimerModal] = React.useState<boolean>(true);
  const [testPrediction, setTestPrediction] = React.useState<TestPrediction | null>(null);
  const [formError, setFormError] = React.useState<string | null>(null);
  const history = useHistory();

  const formSubmitHandler = (bloodExamData: BloodExamData) => {
    setShowResultModal(true);

    mutate(bloodExamData, {
      onSuccess: (data) => {
        setTestPrediction(data);
        setFormError(null);
      },
      onError: (error) => {
        //@ts-ignore
        const err: string = error;
        setFormError(err);
      },
    });
  };

  const modalCloseHandler = () => {
    setFormError(null);
    setTestPrediction(null);
    setShowResultModal(false);
  };

  const declineDisclaimerHandler = () => {
    setShowDisclaimerModal(false);
    history.push("/");
  };

  const acceptDisclaimerHandler = () => {
    setShowDisclaimerModal(false);
  };

  return (
    <div>
      <Container text style={{ margin: "2%" }}>
        {status === "success" ? (
          <Segment>
            <p>Fill the form below to request a covid-19 diagnosis prediction.</p>
            <Message
              error
              header="This is a work in progress!"
              list={[
                "Although our API is able to yield a result from a prediction model, it is not correct yet.",
              ]}
            />
            <Divider />

            {data ? <BloodExamForm specification={data} onSubmit={formSubmitHandler} /> : null}
          </Segment>
        ) : status === "loading" ? (
          <p>Loading form...</p>
        ) : (
          <p>Something went wrong</p>
        )}
      </Container>

      {/* Result Modal */}
      {showResultModal ? (
        <PredictionModal
          testPrediction={testPrediction}
          error={formError}
          onClose={modalCloseHandler}
        />
      ) : null}

      {/* Disclaimer Modal */}
      <DisclaimerModal
        onAccept={acceptDisclaimerHandler}
        onDecline={declineDisclaimerHandler}
        open={showDisclaimerModal}
      />
    </div>
  );
};

export default Home;
