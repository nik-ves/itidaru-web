import React from "react";
import { Link } from "react-router-dom";

import {
  Content,
  FooterBox,
  Paragraph,
  Title,
  TitleBox,
} from "./WelcomeBox.styles";

const WelcomeBox = () => {
  return (
    <Content>
      <TitleBox>
        <Title>Welcome!</Title>
      </TitleBox>

      <div>
        <Paragraph>
          Itidaru is a simple app which allows you to create todo items.
        </Paragraph>

        <Paragraph>
          To view or create them, first you will need to sign up or sign in{" "}
          <Link to="/auth">here</Link>.
        </Paragraph>

        <Paragraph>
          After authentication, you can start creating your todos.
        </Paragraph>

        <Paragraph>
          Each todo item will be saved on Firebase server and will be waiting
          for you the next time you log in.
        </Paragraph>

        <Paragraph>
          This version only has CRUD operations but more will be added in the
          future.
        </Paragraph>

        <FooterBox>
          <Paragraph>
            Made by{" "}
            <a href="https://nikves.com" target="_blank" rel="noreferrer">
              nikves
            </a>
            .
          </Paragraph>
        </FooterBox>
      </div>
    </Content>
  );
};

export default WelcomeBox;
