import React from "react";

function Play({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="149"
      fill="none"
      viewBox="0 0 150 149"
      {...props}
    >
      <path
        fill="#fff"
        d="M0 74.093C0 33.173 33.173 0 74.093 0h1.814C116.827 0 150 33.173 150 74.093s-33.173 74.093-74.093 74.093h-1.814C33.173 148.186 0 115.013 0 74.093z"
      ></path>
      <g filter="url(#filter0_d_2973_37671)">
        <path
          fill="#3083FF"
          d="M67.526 52.156C64.193 50.204 60 52.608 60 56.47v35.247c0 3.862 4.193 6.266 7.526 4.315l30.103-17.621c3.299-1.931 3.299-6.7 0-8.63L67.527 52.154z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_2973_37671"
          width="56.103"
          height="61.262"
          x="52"
          y="45.463"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="2"></feOffset>
          <feGaussianBlur stdDeviation="4"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.129412 0 0 0 0 0.121569 0 0 0 0 0.329412 0 0 0 0.06 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2973_37671"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2973_37671"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Play;
