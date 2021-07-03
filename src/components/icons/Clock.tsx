import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgClock(props: _SVGProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="Clock_svg__feather Clock_svg__feather-clock"
      {...props}>
      <Circle cx={12} cy={12} r={10} />
      <Path d="M12 6v6l4 2" />
    </Svg>
  );
}

export default SvgClock;
