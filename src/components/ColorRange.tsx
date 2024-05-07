import React from "react";

type ColorRangeProps = {
  height?: number;
  width?: number;
  numStops?: number;
  colorScale: string[] | ((d: number) => string);
  scaleName: string;
};

const ColorRange = ({
  colorScale,
  scaleName,
  height = 30,
  width = 300,
  numStops = 30,
}: ColorRangeProps) => {
  const gradientId = `gradient--${scaleName}`;
  console.log(`isArray? ${scaleName}`, Array.isArray(colorScale));

  return (
    <svg height={height} width={width}>
      <defs>
        <linearGradient
          id={gradientId}
          x1="0%"
          x2="100%"
          y1="0%"
          y2="0%"
          spreadMethod="pad"
        >
          {typeof colorScale == "function" && (
            <FunctionStops colorScaleFn={colorScale} numberOfStops={numStops} />
          )}
          {Array.isArray(colorScale) && (
            <ArrayStops colorScaleArray={colorScale} />
          )}
        </linearGradient>
      </defs>
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
};

export default ColorRange;

function FunctionStops({
  colorScaleFn,
  numberOfStops,
}: {
  colorScaleFn: (d: number) => string;
  numberOfStops: number;
}) {
  const stops = new Array(numberOfStops)
    .fill(0)
    .map((_d, i) => i * (1 / (numberOfStops - 1)));
  return (
    <>
      {stops.map((stopValue) => (
        <stop
          offset={stopValue}
          stopColor={colorScaleFn(stopValue)}
          stopOpacity={1}
          key={stopValue}
        />
      ))}
    </>
  );
}

function ArrayStops({ colorScaleArray }: { colorScaleArray: string[] }) {
  return (
    <>
      {colorScaleArray.map((color, i) => (
        <React.Fragment key={color}>
          <stop
            offset={i * (1 / (colorScaleArray.length - 1))}
            stopColor={color}
            stopOpacity={1}
          />
          <stop
            offset={(i + 1) * (1 / (colorScaleArray.length - 1))}
            stopColor={color}
            stopOpacity={1}
          />
        </React.Fragment>
      ))}
    </>
  );
}
