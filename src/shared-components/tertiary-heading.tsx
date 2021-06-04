import * as React from "react";

export interface TertiaryHeadingProps {
  heading: string;
  classes?: string;
}

const TertiaryHeading: React.FC<TertiaryHeadingProps> = (props) => {
  return (
    <h3
      className={`heading-tertiary  ${props.classes}`}
    >
      {props.heading}
    </h3>
  );
};

export default TertiaryHeading;
