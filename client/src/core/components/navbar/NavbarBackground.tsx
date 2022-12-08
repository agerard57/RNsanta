import React, { FC } from "react";

export const NavbarBackground: FC = () => (
  <svg
    width="390"
    height="100"
    viewBox="0 0 390 100"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%" }}
  >
    <rect y="37" width="390" height="63" fill="#FFFAEE" />
    <g filter="url(#filter0_d_0_1)">
      <path
        d="M390 37.5C390 56.0015 302.696 71 195 71C87.3045 71 0 56.0015 0 37.5C0 18.9985 87.3045 4 195 4C302.696 4 390 18.9985 390 37.5Z"
        fill="#FFFAEE"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_0_1"
        x="-1"
        y="0"
        width="392"
        height="71"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-3" />
        <feGaussianBlur stdDeviation="0.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_0_1"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
