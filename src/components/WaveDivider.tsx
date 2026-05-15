interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
  height?: number;
}

export default function WaveDivider({ topColor, bottomColor, flip = false, height = 60 }: WaveDividerProps) {
  return (
    <div style={{ backgroundColor: topColor, lineHeight: 0, display: 'block' }}>
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          display: 'block',
          width: '100%',
          height: `${height}px`,
          transform: flip ? 'scaleX(-1)' : undefined,
        }}
      >
        <path
          d="M0 30C240 62 480 62 720 30C960 -2 1200 -2 1440 30V60H0V30Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
