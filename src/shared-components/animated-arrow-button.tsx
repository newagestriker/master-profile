import * as React from "react";

export interface AnimatedArrowProps {
  buttonText: string;
  onClick?: () => void;
  href?: string;
}

const AnimatedArrow: React.FC<AnimatedArrowProps> = (props) => {
  return (
    <a href={props.href} className="btn-text">
      {props.buttonText} &rarr;
    </a>
  );
};

export default AnimatedArrow;
