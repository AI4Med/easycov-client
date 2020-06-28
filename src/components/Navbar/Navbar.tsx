import React from "react";
import { Menu, Container, Image, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const Navbar: React.FC = () => {
  const history = useHistory();

  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            <Image size="mini" src="/logo.png" style={{ marginRight: "1.5em" }} />
            EasyCoV
          </Menu.Item>

          <Menu.Item as="a" onClick={() => history.push("/")}>
            Home
          </Menu.Item>
          <Menu.Item as="a" onClick={() => history.push("/prediction")}>
            Covid-19 Prediction
          </Menu.Item>

          <Menu.Item as="a" link href="https://github.com/ai4med" position="right">
            <Icon name="github" size="large" />
            Help us on Github!
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};

export default Navbar;
