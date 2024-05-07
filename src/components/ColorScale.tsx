import ColorRange from "./ColorRange";

type ColorScaleProps = {
  scaleName: string;
  colorScale: string[] | ((d: number) => string);
};
const ColorScale = ({ scaleName, colorScale }: ColorScaleProps) => {
  return (
    <div className="color-scale">
      <h3>{scaleName}</h3>
      <ColorRange scaleName={scaleName} colorScale={colorScale} />
    </div>
  );
};

export default ColorScale;
