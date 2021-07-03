import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgArrowRight(props: _SVGProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ArrowRight_svg__feather ArrowRight_svg__feather-chevron-right"
      {...props}>
      <Path d="M9 18l6-6-6-6" />
    </Svg>
  );
}

export default SvgArrowRight;
