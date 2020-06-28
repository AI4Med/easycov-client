import React from "react";
import { Container, Header, Divider } from "semantic-ui-react";

const Home: React.FC = () => {
  return (
    <div>
      <Container text>
        <Header as="h3">About this project</Header>
        <Divider />
        <p>
          EasyCoV (formerly ER-CoV) is a framework backed by Artificial Intelligence (AI) that uses
          simple blood exams to help predicting Covid-19 diagnosis. our focus is to determine which
          patients are likely to be negative for the coronavirus, such that more specific exams can
          be prioritized for those deemed as likely positive.
        </p>
        <p>
          To the best of our knowledge, this is the first solution of its kind. We developed a
          machine learning classifier that takes widely available simple blood exams as input and
          classifies samples as likely to be positive (having SARS-CoV-2) or negative (not having
          SARS-CoV-2). Our work has already been submitted to the Journal of the American Medical
          Informatics Association (JAMIA) and has been receiving media attention
          (https://bit.ly/2xNTes8). Our article preprint is already available online:
          https://www.medrxiv.org/content/10.1101/2020.04.10.20061036v2.
        </p>
        <Header as="h3">Performance</Header>
        <Divider />
        <p>
          <ul>
            <li>Specificity: 85.98% [95%CI 84.34 - 86.84]</li>
            <li>Sensitivity: 70.25% [95%CI 66.57 - 73.12]</li>
            <li>Negative Predictive Value (NPV): 94.92% [95%CI 94.37 - 95.37]</li>
            <li>Positive Predictive Value (PPV): 44.96% [95%CI 43.15 - 46.87]</li>
            <li>Area Under the ROC Curve (AUC): 86.78% [95%CI 85.65 - 87.90]</li>
          </ul>
        </p>
        <Header as="h3">See more</Header>
        <Divider />
        <p>
          More information can be found{" "}
          <a href="https://github.com/soares-f/ER-CoV" style={{ display: "inline" }}>
            in this repository.
          </a>
        </p>
      </Container>
    </div>
  );
};

export default Home;
