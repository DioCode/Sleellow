import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

export const NoseIconInhale = () => {
  return (
    <Svg width={22 * 3} height={29 * 1.7} viewBox="0 0 22 29">
      <G fill="none" fillRule="evenodd" strokeLinejoin="round">
        <Path
          d="M6.572 25.01c-3.115-.196-5.248-.918-5.856-3.473-.77-3.24 1.973-3.78 3.426-8.628C5.112 9.677 6.01 5.553 6.835.535h7.507c.674 5.018 1.55 9.25 2.627 12.697 1.616 5.17 4.098 5.255 3.542 8.305-.48 2.628-2.92 3.3-6.169 3.473"
          stroke="#FFF"
          fill="#FFF"
          strokeLinecap="round"
        />
        <Path
          d="M14.433 22.706c2.177-.063 3.45-.415 3.82-1.054.553-.959-.66-2.02-2.308-1.542-1.648.478-1.512 3.349-1.512 4.403 0 1.054-1.48 3.314-3.882 3.314s-3.998-2.26-3.998-3.314c0-1.054.389-3.925-1.275-4.403-1.663-.478-2.945.583-2.308 1.542.424.64 1.619.99 3.583 1.054"
          stroke="#0A0D12"
        />
        <Path
          d="M13.433 24.513c0 .736-1.104 2.314-2.897 2.314-1.792 0-2.983-1.578-2.983-2.314"
          stroke="#FFF"
          fill="#FFF"
        />
      </G>
    </Svg>
  );
};
