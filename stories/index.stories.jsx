/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from "prop-types";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import Shelf from "../src/index";
import "./index.css";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

const Card = ({ image, headline, paragraph, date }) => {
  return (
    <div className="example-card">
      <img src={image} alt="Test" className="example-image" />
      <h2 className="example-headline">{headline}</h2>
      <p className="example-paragraph">{paragraph}</p>
      <date className="example-date">{date}</date>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

storiesOf("Shelf", module)
  .add("with text", () => (
    <Shelf>
      <Card
        image="https://images.unsplash.com/photo-1539139329395-ceb575183d8b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a756f17d86ed8d60f9c32269fcbfa6b&auto=format&fit=crop&w=800&q=60"
        headline="This is a headline"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        date="SEPTEMBER 9, 2017"
      />
      <Card
        image="https://images.unsplash.com/photo-1534832796130-37cfe118e925?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83fca2459a46db84a04e807aadd0c38c&auto=format&fit=crop&w=800&q=60"
        headline="Test"
        paragraph="test"
        date="date"
      />
      <Card
        image="https://images.unsplash.com/photo-1539139329395-ceb575183d8b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a756f17d86ed8d60f9c32269fcbfa6b&auto=format&fit=crop&w=800&q=60"
        headline="Test"
        paragraph="test"
        date="date"
      />
      <Card
        image="https://images.unsplash.com/photo-1539139329395-ceb575183d8b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a756f17d86ed8d60f9c32269fcbfa6b&auto=format&fit=crop&w=800&q=60"
        headline="Test"
        paragraph="test"
        date="date"
      />
      <Card
        image="https://images.unsplash.com/photo-1539139329395-ceb575183d8b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a756f17d86ed8d60f9c32269fcbfa6b&auto=format&fit=crop&w=800&q=60"
        headline="Test"
        paragraph="test"
        date="date"
      />
    </Shelf>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
