import ColorRange from "./ColorRange";

type ColorScaleProps = {
  scaleName: string;
  colorScale: string[] | ((d: number) => string);
  height?: number;
  width?: number;
  numStops?: number;
};
const ColorScale = ({
  scaleName,
  colorScale,
  height,
  width,
  numStops,
}: ColorScaleProps) => {
  return (
    <div className="color-scale">
      <h3>{scaleName}</h3>
      <ColorRange
        scaleName={scaleName}
        colorScale={colorScale}
        height={height}
        width={width}
        numStops={numStops}
      />
    </div>
  );
};

export default ColorScale;
