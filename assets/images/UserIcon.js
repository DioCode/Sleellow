import * as React from "react";
import Svg, { Defs, Circle, G, Mask, Use, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

export const UserIcon = (props) => {
  return (
    <Svg width={115} height={115} viewBox="0 0 378 378" {...props}>
      <Defs>
        <Circle id="prefix__a" cx={186} cy={186} r={186} />
      </Defs>
      <G transform="translate(3 3)" fill="none" fillRule="evenodd">
        <Mask id="prefix__b" fill="#fff">
          <Use xlinkHref="#prefix__a" />
        </Mask>
        <G mask="url(#prefix__b)" strokeLinejoin="round">
          <G stroke="#FFF" strokeWidth={4}>
            <Path
              d="M150.083 188.654c1.177 18.54 1.422 33.085 0 44.614-1.59 12.901-5.856 1.004-48.897 26.553-28.693 17.033-45.992 40.923-51.896 71.67m272.611 0c-13.829-37.404-31-61.294-51.514-71.67-30.77-15.564-50.068-15.564-51.514-26.553-1.641-12.482-2.596-28.096-.638-45.704"
              strokeLinecap="round"
            />
            <Path
              d="M132.542 245.041c17.07 9.399 33.707 14.098 49.91 14.098 16.202 0 33.286-4.581 51.253-13.742"
              strokeLinecap="square"
            />
          </G>
          <G stroke="#FFF" strokeLinecap="round">
            <Path
              d="M136.48 127.38c-.194 15.735.196 19.52 2.022 31.542 1.826 12.023 5.814 22.094 11.963 30.212 9.224 12.177 21.545 16.769 33.704 17.226 12.159.457 20.836-4.184 32.571-17.226 7.824-8.695 12.76-18.765 14.806-30.212 2.047-11.446 2.047-17.625 1.945-31.542"
              strokeWidth={4}
            />
            <Path
              d="M232.193 158.082c-.81 2.135 8.432-.677 11.39-2.678 5.277-3.569 7.968-10.407 9.086-13.498 2.617-7.238 4.103-16.364-2.14-21.635-6.243-5.272-12.207 1.503-14.508 6.156-2.3 4.653-3.017 29.52-3.828 31.655zM137.807 158.082c.81 2.135-8.432-.677-11.39-2.678-5.277-3.569-7.968-10.407-9.086-13.498-2.617-7.238-4.103-16.364 2.14-21.635 6.243-5.272 12.207 1.503 14.508 6.156 2.3 4.653 3.017 29.52 3.828 31.655z"
              opacity={0.822}
              strokeWidth={4}
            />
            <Path
              d="M135.888 132.865c3.117-8.627 5.59-17.14 7.417-25.54 2.74-12.598 1.541-12.556 3.31-13.471 1.77-.915 19.42 3.206 38.556 3.206 19.137 0 34.66-4.499 37.891-3.206 3.232 1.293 2.595 11.45 4.96 20.868a112.167 112.167 0 006.231 18.143c3.368-12.74 5.382-21.253 6.044-25.54 1.935-12.537.7-17.58-.583-22.935-1.284-5.353-8.528-19.706-28.185-26.408-19.658-6.7-27.663-7.852-48.707 0-21.044 7.853-29.335 20.515-31.787 30.037-2.451 9.522-1.871 13.8-.742 20.816.754 4.677 2.618 12.688 5.595 24.03z"
              fill="#FFF"
            />
          </G>
        </G>
        <Circle stroke="#FFF" strokeWidth={5} cx={186} cy={186} r={186} />
      </G>
    </Svg>
  );
};
