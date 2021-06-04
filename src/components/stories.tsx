import * as React from "react";
import { loremIspson } from "../constants/loremipson";
import SecondaryHeading from "../shared-components/secondary-heading";
import StoriesRow from "./stories-row";
import imgnat8 from "../img/nat-8.jpg";
import imgnat9 from "../img/nat-9.jpg";
import AnimatedArrow from "../shared-components/animated-arrow-button";
import BgVideo from "../shared-components/bg-video";
import vidv1 from "../img/video.mp4";
import vidv2 from "../img/video.webm";

export interface StoriesProps {}

const Stories: React.FC<StoriesProps> = (props) => {
  return (
    <section className="section-stories">
      <BgVideo
        vids={[
          { src: vidv1, type: "video/mp4" },
          { src: vidv2, type: "video/webm" },
        ]}
      />
      <SecondaryHeading
        heading="We make people genuinely happy"
        classes="u-margin-bottom-big"
      />
      <StoriesRow
        imageUrl={imgnat8}
        imageAltText="Person on a tour"
        heading="I had the best week ever with my family"
        desc={loremIspson}
        caption="Mary Smith"
      />
      <StoriesRow
        imageUrl={imgnat9}
        imageAltText="Person on a tour"
        heading="Wow! My life is completely different now"
        desc={loremIspson}
        caption="Jack Wilson"
      />
      <div className="u-center-text u-margin-top-huge">
        <AnimatedArrow buttonText="Read All Stories" href="#Top" />
      </div>
    </section>
  );
};

export default Stories;
