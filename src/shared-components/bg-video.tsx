import * as React from "react";

export interface BgVideoProps {
  vids: { src: string; type: string }[];
}

const BgVideo: React.FC<BgVideoProps> = (props) => {
  return (
    <div className="bg-video">
      <video className="bg-video__content" autoPlay loop muted>
        {props.vids.map((vid) => (
          <source key={vid.type} src={vid.src} type={vid.type} />
        ))}
      </video>
    </div>
  );
};

export default BgVideo;
