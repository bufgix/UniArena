import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgHome(props: _SVGProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </Svg>
  );
}

export default SvgHome;
