const HEIGHT = 30;
const WIDTH = 300;

type ColorRangeProps = {
  colorScale: (d: number) => string;
  scaleName: string;
};

const ColorRange = ({ colorScale, scaleName }: ColorRangeProps) => {
  const gradientId = `gradient--${scaleName}`;
  const numberOfStops = 30;
  const stops = new Array(numberOfStops)
    .fill(0)
    .map((_d, i) => i * (1 / (numberOfStops - 1)));

  return (
    <svg height={HEIGHT} width={WIDTH}>
      <defs>
        <linearGradient
          id={gradientId}
          x1="0%"
          x2="100%"
          y1="0%"
          y2="0%"
          spreadMethod="pad"
        >
          {stops.map((stopValue) => (
            <stop
              offset={stopValue}
              stopColor={colorScale(stopValue)}
              stopOpacity={1}
              key={stopValue}
            />
          ))}
        </linearGradient>
      </defs>
      <rect
        x={0}
        y={0}
        width={WIDTH}
        height={HEIGHT}
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
};

export default ColorRange;
