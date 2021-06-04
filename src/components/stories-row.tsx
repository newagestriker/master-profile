import * as React from "react";

import TertiaryHeading from "../shared-components/tertiary-heading";

export interface StoriesRowProps {
  imageUrl: string;
  imageAltText: string;
  caption?: string;
  desc?: string;
  heading: string;
}

const StoriesRow: React.FC<StoriesRowProps> = (props) => {
  return (
    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img
            src={props.imageUrl}
            alt={props.imageAltText}
            className="story__img"
          />
          <figcaption className="story__caption">{props.caption}</figcaption>
        </figure>
        <div className="story__text">
          <TertiaryHeading
            heading={props.heading!}
            classes="u-margin-bottom-small"
          />
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default StoriesRow;
