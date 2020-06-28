import React from "react";
import { Modal, Header, Button } from "semantic-ui-react";

interface DisclaimerModalProps {
  open: boolean;
  onDecline: () => void;
  onAccept: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ open, onAccept, onDecline }) => {
  return (
    <>
      <Modal dimmer="blurring" open={open} onClose={onDecline}>
        <Modal.Header>Legal Disclaimer</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Please read carefully</Header>
            <p>
              The results of this tool do not replace any tests such as RT-PCR or IgG/IgM antibody
              detection.
            </p>
            <p>We are not responsible for how you use this tool. TODO: actual disclaimer</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={onDecline}>
            Decline
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Accept"
            onClick={onAccept}
          />
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default DisclaimerModal;
