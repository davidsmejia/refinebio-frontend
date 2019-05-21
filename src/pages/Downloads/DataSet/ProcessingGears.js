import React from 'react';

/**
 * Processing gears processing animation
 * centers of the shapes found with script from http://www.petercollingridge.co.uk/tutorials/svg/animation/rotation/
 */
export default function ProcessingGears({
  width = 209,
  height = 128,
  duration = 13,
}) {
  return (
    <svg width={`${width}px`} height={`${height}px`} viewBox="0 0 209 128">
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          transform="translate(104.500000, 64.000000) scale(-1, 1) translate(-104.500000, -64.000000) "
          fillRule="nonzero"
        >
          <path
            d="M157,57.306018 L157,43.6999235 C150.048824,41.2223072 145.670176,40.5330902 143.454118,35.1975999 C141.238059,29.8502265 143.87,26.2140126 147.018824,19.6010942 L137.406,9.98176363 C130.841,13.1010648 127.169353,15.7688099 121.804471,13.5466792 C116.457412,11.33049 115.762294,6.91593623 113.302647,0 L99.6973529,0 C97.2495882,6.88028708 96.5485294,11.33049 91.1955294,13.5466792 L91.1895882,13.5466792 C85.8425294,15.7688099 82.2184118,13.1307724 75.594,9.98176363 L65.9871176,19.6010942 C69.1181176,26.196188 71.7678824,29.844285 69.5518235,35.1975999 C67.3238824,40.5509148 62.8798824,41.2520148 56,43.6999235 L56,57.3000765 C62.8620588,59.7479852 67.3298235,60.4550268 69.5458824,65.8024001 C71.7797647,71.1973057 69.0646471,74.916701 65.9811765,81.3989058 L75.594,91.0182364 C82.1708824,87.8989352 85.8365882,85.2311901 91.1895882,87.4533208 L91.1955294,87.4533208 C96.5425882,89.66951 97.2436471,94.0959468 99.6973529,101 L113.296706,101 C115.744471,94.1197129 116.445529,89.681393 121.834176,87.4414377 L121.840118,87.4414377 C127.151529,85.2311901 130.757824,87.8632861 137.400059,91.0182364 L147.012882,81.3989058 C143.893765,74.8216366 141.226176,71.1616566 143.442235,65.8024001 C145.664235,60.4609683 150.132,59.7479852 157,57.306018 Z M106.733451,66.6044154 C97.4414508,66.6044154 89.9020979,59.064619 89.9020979,49.7661308 C89.9020979,40.4676427 97.4414508,32.9278462 106.733451,32.9278462 C116.025451,32.9278462 123.564804,40.4676427 123.564804,49.7661308 C123.564804,59.064619 116.025451,66.6044154 106.733451,66.6044154 Z"
            fill="#5689C9"
          >
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur={`${duration}s`}
              type="rotate"
              from="0 106.5 50.5"
              to="360 106.5 50.5"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M207,99.177952 L207,90.8256956 C202.732941,89.3047826 200.045059,88.8816989 198.684706,85.6064474 C197.324353,82.3239014 198.94,80.0917701 200.872941,76.0323548 L194.972,70.1274193 C190.942,72.0422378 188.688118,73.6798635 185.394824,72.3157833 C182.112471,70.9553503 181.685765,68.2454262 180.175882,64 L171.824118,64 C170.321529,68.2235426 169.891176,70.9553503 166.605176,72.3157833 L166.601529,72.3157833 C163.319176,73.6798635 161.094471,72.0604741 157.028,70.1274193 L151.130706,76.0323548 C153.052706,80.0808283 154.679294,82.3202541 153.318941,85.6064474 C151.951294,88.8926407 149.223294,89.323019 145,90.8256956 L145,99.174304 C149.212353,100.676981 151.954941,101.111007 153.315294,104.393553 C154.686588,107.705277 153.019882,109.98847 151.127059,113.967645 L157.028,119.872581 C161.065294,117.957762 163.315529,116.320136 166.601529,117.684217 L166.605176,117.684217 C169.887529,119.04465 170.317882,121.761868 171.824118,126 L180.172235,126 C181.674824,121.776457 182.105176,119.051944 185.413059,117.676922 L185.416706,117.676922 C188.677176,116.320136 190.890941,117.935879 194.968353,119.872581 L200.869294,113.967645 C198.954588,109.930114 197.317059,107.683393 198.677412,104.393553 C200.041412,101.114654 202.784,100.676981 207,99.177952 Z M176.143306,104.885879 C170.439306,104.885879 165.811189,100.257489 165.811189,94.5495061 C165.811189,88.8415232 170.439306,84.2131333 176.143306,84.2131333 C181.847306,84.2131333 186.475424,88.8415232 186.475424,94.5495061 C186.475424,100.257489 181.847306,104.885879 176.143306,104.885879 Z"
            fill="#80A6D6"
          >
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur={`${duration}s`}
              type="rotate"
              from="0 176 95"
              to="-360 176 95"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M56,39.7736337 L56,32.2296606 C52.1458824,30.8559327 49.7181176,30.4737926 48.4894118,27.5155009 C47.2607059,24.5506206 48.72,22.534502 50.4658824,18.8679334 L45.136,13.5344432 C41.496,15.2639567 39.4602353,16.7431025 36.4856471,15.5110301 C33.5209412,14.2822519 33.1355294,11.8345785 31.7717647,8 L24.2282353,8 C22.8710588,11.8148126 22.4823529,14.2822519 19.5143529,15.5110301 L19.5110588,15.5110301 C16.5463529,16.7431025 14.5369412,15.2804283 10.864,13.5344432 L5.53741176,18.8679334 C7.27341176,22.5246191 8.74258824,24.5473263 7.51388235,27.5155009 C6.27858824,30.4836755 3.81458824,30.8724043 0,32.2296606 L0,39.7703394 C3.80470588,41.1275957 6.28188235,41.5196188 7.51058824,44.4844991 C8.74917647,47.4757339 7.24376471,49.5379728 5.53411765,53.1320666 L10.864,58.4655568 C14.5105882,56.7360433 16.5430588,55.2568975 19.5110588,56.4889699 L19.5143529,56.4889699 C22.4790588,57.7177481 22.8677647,60.1720101 24.2282353,64 L31.7684706,64 C33.1256471,60.1851874 33.5143529,57.7243367 36.5021176,56.4823813 L36.5054118,56.4823813 C39.4503529,55.2568975 41.4498824,56.7162774 45.1327059,58.4655568 L50.4625882,53.1320666 C48.7331765,49.4852638 47.2541176,47.455968 48.4828235,44.4844991 C49.7148235,41.5229131 52.192,41.1275957 56,39.7736337 Z M28.1294381,44.9291808 C22.9774381,44.9291808 18.7972028,40.7486996 18.7972028,35.5931022 C18.7972028,30.4375049 22.9774381,26.2570237 28.1294381,26.2570237 C33.2814381,26.2570237 37.4616734,30.4375049 37.4616734,35.5931022 C37.4616734,40.7486996 33.2814381,44.9291808 28.1294381,44.9291808 Z"
            fill="#AAC4E4"
          >
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur={`${duration}s`}
              type="rotate"
              from="0 28 36"
              to="-360 28 36"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  );
}
