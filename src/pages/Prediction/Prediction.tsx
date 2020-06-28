import React from "react";
import BloodExamForm from "../../components/BloodExamForm/BloodExamForm";
import { Container, Header, Segment } from "semantic-ui-react";
import { bloodExamFields } from "../../service/blood-exam-fields";
import PredictionModal from "../../components/PredictionModal/PredictionModal";
import { TestPrediction, BloodExamData } from "../../service/types";
import { useMutation } from "react-query";
import { ServiceApi } from "../../service/api";
import DisclaimerModal from "../../components/DisclaimerModal/DisclaimerModal";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const [mutate] = useMutation<TestPrediction, BloodExamData>(ServiceApi.requestPrediction);
  const [showResultModal, setShowResultModal] = React.useState<boolean>(false);
  const [showDisclaimerModal, setShowDisclaimerModal] = React.useState<boolean>(true);
  const [testPrediction, setTestPrediction] = React.useState<TestPrediction | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const history = useHistory();

  const formSubmitHandler = (bloodExamData: BloodExamData) => {
    setShowResultModal(true);

    mutate(bloodExamData, {
      onSuccess: (data) => {
        setTestPrediction(data);
        setError(null);
      },
      onError: (error) => {
        //@ts-ignore
        const err: string = error;
        setError(err);
      },
    });
  };

  const modalCloseHandler = () => {
    setError(null);
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
        <Segment>
          <Header textAlign="center">Pleaser fill out the form to get a prediction</Header>
          <BloodExamForm fields={bloodExamFields} onSubmit={formSubmitHandler} />
        </Segment>
      </Container>

      {/* Result Modal */}
      {showResultModal ? (
        <PredictionModal
          testPrediction={testPrediction}
          error={error}
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
