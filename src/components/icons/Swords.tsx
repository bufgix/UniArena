import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgSwords(props: _SVGProps) {
  return (
    <Svg
      viewBox="0 0 210 210"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#swords_svg__clip0)">
        <Path d="M178.092 154.393l-21.378-21.378-23.699 23.699 21.378 21.378c6.544 6.544 17.155 6.544 23.699 0 6.544-6.545 6.544-17.155 0-23.699zM94.22 159.13a4.57 4.57 0 003.232-7.802l-5.37-5.37 89.241-72.962A4.572 4.572 0 00183 69.458V31.57a4.57 4.57 0 00-4.57-4.57h-37.889a4.57 4.57 0 00-3.538 1.677l-72.961 89.24-5.37-5.37a4.571 4.571 0 00-6.463 6.464l38.78 38.78a4.554 4.554 0 003.232 1.339zm60.326-110.14a4.57 4.57 0 116.463 6.464L81.294 135.17l-6.464-6.464 79.716-79.715zM55.608 178.092l21.377-21.378-23.699-23.699-21.378 21.378c-6.544 6.544-6.544 17.155 0 23.699 6.545 6.544 17.155 6.544 23.7 0z" />
        <Path d="M28.677 72.996l36.132 29.542 14.064-17.202L48.99 55.454a4.57 4.57 0 016.463-6.463l29.234 29.233 14.409-17.623-26.1-31.924A4.57 4.57 0 0069.457 27H31.57A4.57 4.57 0 0027 31.57v37.888a4.57 4.57 0 001.677 3.538zM151.328 112.548l-5.37 5.369-2.058-2.517-12.124 9.912 3.394 3.394-6.464 6.464-4.042-4.043-12.443 10.173 5.697 4.658-5.37 5.37a4.57 4.57 0 106.463 6.463l38.78-38.78a4.555 4.555 0 001.339-3.232 4.57 4.57 0 00-7.802-3.231z" />
      </G>
      <Defs>
        <ClipPath id="swords_svg__clip0">
          <Path fill="#fff" transform="translate(27 27)" d="M0 0h156v156H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgSwords;
