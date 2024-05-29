
import Img from "./Img";
import HiddenContent from "./HiddenContent";
import Div from "./Div";

const ExpandingImgContainer = ({ src1, src2, width1,width2, hiddenContent }) => {
  return (
    <div className="flex gap-8">
      <Div width={width1}>
        <Img src={src1} />
        <HiddenContent {...{hiddenContent}}/>
      </Div>

      <Div width={width2}>
        <Img src={src2} />
        <HiddenContent {...{hiddenContent}} />
      </Div>
    </div>
  );
};

export default ExpandingImgContainer;
