import React from "react";
import { Modal, Button, Message, Loader, Dimmer } from "semantic-ui-react";
import { TestPrediction } from "../../service/types";

interface PredictionProps {
  prediction: string;
}

const Prediction: React.FC<PredictionProps> = ({ prediction }) =>
  prediction === "positive" ? (
    <Message negative>
      <Message.Header>Positive</Message.Header>
    </Message>
  ) : (
    <Message positive>
      <Message.Header>Negative</Message.Header>
    </Message>
  );

interface PredictionModalProps {
  testPrediction: TestPrediction | null;
  error: string | null;
  onClose: () => void;
}

const PredictionModal: React.FC<PredictionModalProps> = ({ onClose, testPrediction, error }) => {
  return (
    <Modal dimmer="blurring" open onClose={onClose}>
      <Modal.Header>Requested prediction for Covid-19</Modal.Header>
      <Modal.Content>
        {error ? (
          <>
            // @ts-ignore
            <p>{error.message}</p>
            <p>{JSON.stringify(error)}</p>
          </>
        ) : testPrediction ? (
          <Modal.Description>
            <p>Your requested prediction was:</p>
            <Prediction prediction={testPrediction.prediction} />
          </Modal.Description>
        ) : (
          <Dimmer active>
            <Loader size="large">Your request is being processed.</Loader>
          </Dimmer>
        )}
      </Modal.Content>
      <Modal.Actions>
        <Button
          positive
          icon="checkmark"
          labelPosition="right"
          content="Continue"
          onClick={onClose}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default PredictionModal;
