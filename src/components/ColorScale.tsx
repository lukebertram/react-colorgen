import * as d3 from "d3";
import ColorRange from "./ColorRange";

type ColorScaleProps = {
  scaleName: string;
};
const ColorScale = ({ scaleName }: ColorScaleProps) => {
  const d3ColorScale = d3[scaleName];
  return (
    <div className="color-scale">
      <h3>Scale Name</h3>
      <ColorRange scaleName={scaleName} colorScale={d3ColorScale} />
    </div>
  );
};

export default ColorScale;
