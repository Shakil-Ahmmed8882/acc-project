import Img from "./Img";
import HiddenContent from "./HiddenContent";
import Div from "./Div";

const ExpandingImgContainer = ({ src1, src2, width1, width2, hiddenContent }) => {
  return (
    <div className="flex gap-8 mt-11">
      <Div width={width1}>
        {(isHovered) => (
          <>
            <Img src={src1} />
            <HiddenContent hiddenContent={hiddenContent} isHovered={isHovered} />
          </>
        )}
      </Div>

      <Div width={width2}>
        {(isHovered) => (
          <>
            <Img src={src2} />
            <HiddenContent hiddenContent={hiddenContent} isHovered={isHovered} />
          </>
        )}
      </Div>
    </div>
  );
};

export default ExpandingImgContainer;
