import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgHelmet(props: _SVGProps) {
  return (
    <Svg
      viewBox="0 0 210 210"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M118.661 119.334v66.787L166 154.135l-2.891-55.164a58.187 58.187 0 00-116.218 0L44 154.135l47.338 31.986v-66.787l-24.411-13.466V83.552l33.671 11.174v56.218l4.401 5.101 4.401-5.101V94.726l33.671-11.174v22.316l-24.41 13.466z" />
      <Path d="M146.083 60.814a58.035 58.035 0 00-41.084-17.006 58.024 58.024 0 00-41.084 17.006A77.663 77.663 0 00105 71.992a77.663 77.663 0 0041.084-11.178z" />
      <Path d="M114.976 89.434l-9.977 5.833-9.977-5.833-1.76-57.511L104.999 24l11.738 7.923-1.761 57.511z" />
      <Path d="M104.999 66.66a2.975 2.975 0 00-2.976 2.976v23.87a2.977 2.977 0 005.952 0v-23.87a2.976 2.976 0 00-2.976-2.976z" />
    </Svg>
  );
}

export default SvgHelmet;
