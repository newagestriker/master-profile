import * as React from "react";

export interface SecondaryHeadingProps {
  heading: string;
  classes?: string;
}

const SecondaryHeading: React.FC<SecondaryHeadingProps> = (props) => {
  return (
    <div className="u-center-text">
      <h2 className={`heading-secondary ${props.classes}`}>{props.heading}</h2>
    </div>
  );
};

export default SecondaryHeading;
