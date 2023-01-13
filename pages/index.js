import Head from "next/head";
import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import helloImage from "/public/hello.jpeg";

const logo = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 687.5 75">
    <g
      id="svgGroup"
      strokeLinecap="round"
      fillRule="evenodd"
      stroke="var(--green)"
      strokeWidth="0.25mm"
      fill="#000"
    >
      {" "}
      <path
        d="M 38.9 73.5 L 22.7 73.5 A 6.709 6.709 0 0 1 21.714 73.433 Q 21.214 73.358 20.816 73.201 A 2.506 2.506 0 0 1 19.95 72.65 A 2.527 2.527 0 0 1 19.384 71.746 Q 19.1 70.999 19.1 69.9 L 19.1 57.1 L 3.8 36.6 Q 1.506 33.509 0.754 31.213 A 9.422 9.422 0 0 1 0.75 31.2 A 11.611 11.611 0 0 1 0.371 29.632 Q 0.083 28.002 0.018 25.684 A 50.053 50.053 0 0 1 0 24.3 L 0 5.1 A 6.709 6.709 0 0 1 0.067 4.114 Q 0.142 3.614 0.299 3.216 A 2.506 2.506 0 0 1 0.85 2.35 A 2.527 2.527 0 0 1 1.754 1.784 Q 2.502 1.5 3.6 1.5 L 19 1.5 A 6.709 6.709 0 0 1 19.986 1.567 Q 20.486 1.642 20.884 1.799 A 2.506 2.506 0 0 1 21.75 2.35 A 2.527 2.527 0 0 1 22.316 3.254 Q 22.6 4.002 22.6 5.1 L 22.6 21.5 A 22.326 22.326 0 0 0 22.654 23.023 A 25.913 25.913 0 0 0 22.7 23.6 A 4.173 4.173 0 0 0 23.259 25.322 A 5.124 5.124 0 0 0 23.5 25.7 L 28.1 32.9 A 6.052 6.052 0 0 0 28.434 33.437 Q 28.617 33.698 28.806 33.896 A 2.571 2.571 0 0 0 29.15 34.2 A 2.062 2.062 0 0 0 30.025 34.561 A 2.785 2.785 0 0 0 30.5 34.6 L 31.5 34.6 A 2.653 2.653 0 0 0 32.147 34.525 A 2.017 2.017 0 0 0 32.85 34.2 A 2.664 2.664 0 0 0 33.256 33.83 Q 33.588 33.463 33.9 32.9 L 38.5 25.7 Q 39.2 24.7 39.3 23.6 A 24.225 24.225 0 0 0 39.392 22.071 A 20.862 20.862 0 0 0 39.4 21.5 L 39.4 5.1 A 6.709 6.709 0 0 1 39.467 4.114 Q 39.542 3.614 39.699 3.216 A 2.506 2.506 0 0 1 40.25 2.35 A 2.527 2.527 0 0 1 41.154 1.784 Q 41.902 1.5 43 1.5 L 57.9 1.5 A 6.709 6.709 0 0 1 58.886 1.567 Q 59.386 1.642 59.784 1.799 A 2.506 2.506 0 0 1 60.65 2.35 A 2.527 2.527 0 0 1 61.216 3.254 Q 61.5 4.002 61.5 5.1 L 61.5 24.3 A 42.501 42.501 0 0 1 61.437 26.706 Q 61.31 28.937 60.928 30.435 A 9.386 9.386 0 0 1 60.7 31.2 A 14.421 14.421 0 0 1 59.985 32.876 Q 59.564 33.721 58.993 34.652 A 35.038 35.038 0 0 1 57.7 36.6 L 42.5 57.2 L 42.5 69.9 A 6.709 6.709 0 0 1 42.433 70.886 Q 42.358 71.386 42.201 71.784 A 2.506 2.506 0 0 1 41.65 72.65 A 2.527 2.527 0 0 1 40.746 73.216 Q 39.999 73.5 38.9 73.5 Z"
        id="0"
        vectorEffect="non-scaling-stroke"
        fill="var(--green)"
      ></path>{" "}
      <path
        d="M 133.9 20.5 L 133.9 54.6 Q 133.9 59.2 132.55 62.95 A 13.652 13.652 0 0 1 128.679 68.583 A 16.792 16.792 0 0 1 127.75 69.35 A 18.6 18.6 0 0 1 124.518 71.314 Q 122.846 72.124 120.815 72.775 A 39.509 39.509 0 0 1 118.25 73.5 A 44.449 44.449 0 0 1 113.256 74.414 Q 110.7 74.744 107.743 74.888 A 99.601 99.601 0 0 1 102.9 75 Q 96.207 75 91.171 74.223 A 42.607 42.607 0 0 1 87.5 73.5 Q 83.151 72.431 80.15 70.777 A 17.336 17.336 0 0 1 77.95 69.35 A 14.946 14.946 0 0 1 74.698 65.97 A 13.208 13.208 0 0 1 73.15 62.95 A 22.736 22.736 0 0 1 71.963 57.696 A 28.556 28.556 0 0 1 71.8 54.6 L 71.8 20.5 Q 71.8 15.9 73.15 12.15 A 13.894 13.894 0 0 1 76.917 6.575 A 17.178 17.178 0 0 1 77.95 5.7 Q 80.632 3.601 84.915 2.228 A 38.828 38.828 0 0 1 87.5 1.5 A 45.243 45.243 0 0 1 92.525 0.586 Q 95.092 0.257 98.053 0.112 A 99.834 99.834 0 0 1 102.9 0 A 95.817 95.817 0 0 1 108.91 0.177 Q 111.888 0.365 114.436 0.752 A 42.13 42.13 0 0 1 118.25 1.5 Q 124.3 3 127.75 5.7 A 15.377 15.377 0 0 1 130.949 9.044 A 13.404 13.404 0 0 1 132.55 12.15 A 22.736 22.736 0 0 1 133.737 17.404 A 28.556 28.556 0 0 1 133.9 20.5 Z M 94.5 24.1 L 94.5 51 A 4.301 4.301 0 0 0 95.818 54.179 A 5.313 5.313 0 0 0 96 54.35 Q 97.394 55.604 102.153 55.693 A 39.961 39.961 0 0 0 102.9 55.7 A 33.743 33.743 0 0 0 105.076 55.636 Q 108.249 55.429 109.523 54.566 A 2.567 2.567 0 0 0 109.8 54.35 A 4.471 4.471 0 0 0 110.981 52.706 A 4.486 4.486 0 0 0 111.3 51 L 111.3 24.1 A 4.175 4.175 0 0 0 109.982 21.021 A 5.574 5.574 0 0 0 109.8 20.85 Q 108.407 19.596 103.647 19.507 A 39.961 39.961 0 0 0 102.9 19.5 A 33.743 33.743 0 0 0 100.724 19.565 Q 97.551 19.771 96.277 20.635 A 2.567 2.567 0 0 0 96 20.85 Q 94.5 22.2 94.5 24.1 Z"
        id="1"
        vectorEffect="non-scaling-stroke"
        fill="var(--green)"
      ></path>{" "}
      <path
        d="M 180.1 73.5 L 163.9 73.5 A 6.709 6.709 0 0 1 162.914 73.433 Q 162.414 73.358 162.016 73.201 A 2.506 2.506 0 0 1 161.15 72.65 A 2.527 2.527 0 0 1 160.584 71.746 Q 160.3 70.999 160.3 69.9 L 160.3 20.8 L 145.6 20.8 A 6.709 6.709 0 0 1 144.614 20.733 Q 144.114 20.658 143.716 20.501 A 2.506 2.506 0 0 1 142.85 19.95 A 2.527 2.527 0 0 1 142.284 19.046 Q 142 18.299 142 17.2 L 142 5.1 A 6.709 6.709 0 0 1 142.067 4.114 Q 142.142 3.614 142.299 3.216 A 2.506 2.506 0 0 1 142.85 2.35 A 2.527 2.527 0 0 1 143.754 1.784 Q 144.502 1.5 145.6 1.5 L 198.4 1.5 A 6.709 6.709 0 0 1 199.386 1.567 Q 199.886 1.642 200.284 1.799 A 2.506 2.506 0 0 1 201.15 2.35 A 2.527 2.527 0 0 1 201.716 3.254 Q 202 4.002 202 5.1 L 202 17.2 A 6.709 6.709 0 0 1 201.933 18.186 Q 201.858 18.686 201.701 19.084 A 2.506 2.506 0 0 1 201.15 19.95 A 2.527 2.527 0 0 1 200.246 20.516 Q 199.499 20.8 198.4 20.8 L 183.7 20.8 L 183.7 69.9 A 6.709 6.709 0 0 1 183.633 70.886 Q 183.558 71.386 183.401 71.784 A 2.506 2.506 0 0 1 182.85 72.65 A 2.527 2.527 0 0 1 181.946 73.216 Q 181.199 73.5 180.1 73.5 Z"
        id="2"
        vectorEffect="non-scaling-stroke"
        fill="var(--green)"
      ></path>{" "}
      <path
        d="M 228.1 55.9 L 228.1 69.9 A 6.709 6.709 0 0 1 228.033 70.886 Q 227.958 71.386 227.801 71.784 A 2.506 2.506 0 0 1 227.25 72.65 A 2.527 2.527 0 0 1 226.346 73.216 Q 225.599 73.5 224.5 73.5 L 209.8 73.5 A 6.709 6.709 0 0 1 208.814 73.433 Q 208.314 73.358 207.916 73.201 A 2.506 2.506 0 0 1 207.05 72.65 A 2.527 2.527 0 0 1 206.484 71.746 Q 206.2 70.999 206.2 69.9 L 206.2 43.5 A 23.07 23.07 0 0 1 206.382 40.703 Q 206.557 39.273 206.901 37.683 A 42.814 42.814 0 0 1 207.15 36.6 A 55.531 55.531 0 0 1 208.01 33.492 Q 208.85 30.75 210.1 27.5 L 218.8 4.8 A 5.847 5.847 0 0 1 219.381 3.588 A 4.174 4.174 0 0 1 220.65 2.3 A 4.724 4.724 0 0 1 222.037 1.713 Q 222.648 1.557 223.366 1.515 A 9.261 9.261 0 0 1 223.9 1.5 L 250.8 1.5 Q 252.7 1.5 253.95 2.3 A 4.212 4.212 0 0 1 255.285 3.695 A 5.953 5.953 0 0 1 255.8 4.8 L 264.5 27.5 A 102.517 102.517 0 0 1 265.852 31.217 Q 266.48 33.058 266.947 34.701 A 51.496 51.496 0 0 1 267.45 36.6 A 38.293 38.293 0 0 1 268.065 39.62 Q 268.306 41.129 268.374 42.473 A 20.428 20.428 0 0 1 268.4 43.5 L 268.4 69.9 A 6.709 6.709 0 0 1 268.333 70.886 Q 268.258 71.386 268.101 71.784 A 2.506 2.506 0 0 1 267.55 72.65 A 2.527 2.527 0 0 1 266.646 73.216 Q 265.899 73.5 264.8 73.5 L 249.7 73.5 A 7.475 7.475 0 0 1 248.632 73.429 Q 247.425 73.254 246.75 72.65 Q 245.8 71.8 245.8 69.9 L 245.8 55.9 L 228.1 55.9 Z M 233.8 22.5 L 229.1 37.7 L 244.8 37.7 L 240.1 22.5 A 6.3 6.3 0 0 0 239.845 21.987 Q 239.559 21.475 239.25 21.2 Q 238.8 20.8 238.2 20.8 L 235.7 20.8 Q 235.1 20.8 234.65 21.2 A 2.311 2.311 0 0 0 234.347 21.534 Q 234.063 21.91 233.8 22.5 Z"
        id="3"
        vectorEffect="non-scaling-stroke"
        fill="var(--green)"
      ></path>{" "}
      <path
        d="M 299.2 73.5 L 284.3 73.5 A 6.709 6.709 0 0 1 283.314 73.433 Q 282.814 73.358 282.416 73.201 A 2.506 2.506 0 0 1 281.55 72.65 A 2.527 2.527 0 0 1 280.984 71.746 Q 280.7 70.999 280.7 69.9 L 280.7 5.1 A 6.709 6.709 0 0 1 280.767 4.114 Q 280.842 3.614 280.999 3.216 A 2.506 2.506 0 0 1 281.55 2.35 A 2.527 2.527 0 0 1 282.454 1.784 Q 283.202 1.5 284.3 1.5 L 300.4 1.5 A 6.021 6.021 0 0 1 301.566 1.607 Q 302.41 1.774 303.05 2.2 Q 303.857 2.738 304.575 3.806 A 10.287 10.287 0 0 1 305 4.5 L 314 20.8 A 15.27 15.27 0 0 0 314.269 21.267 Q 314.521 21.685 314.728 21.951 A 3.248 3.248 0 0 0 314.85 22.1 Q 315.2 22.5 315.8 22.5 L 316.7 22.5 Q 317.3 22.5 317.65 22.1 A 3.729 3.729 0 0 0 317.859 21.836 Q 318.141 21.447 318.5 20.8 L 327.4 4.5 Q 328.042 3.36 328.76 2.676 A 4.397 4.397 0 0 1 329.35 2.2 Q 330.342 1.539 331.825 1.502 A 7.111 7.111 0 0 1 332 1.5 L 348.2 1.5 A 6.709 6.709 0 0 1 349.186 1.567 Q 349.686 1.642 350.084 1.799 A 2.506 2.506 0 0 1 350.95 2.35 A 2.527 2.527 0 0 1 351.516 3.254 Q 351.8 4.002 351.8 5.1 L 351.8 69.9 A 6.709 6.709 0 0 1 351.733 70.886 Q 351.658 71.386 351.501 71.784 A 2.506 2.506 0 0 1 350.95 72.65 A 2.527 2.527 0 0 1 350.046 73.216 Q 349.299 73.5 348.2 73.5 L 332.8 73.5 A 6.709 6.709 0 0 1 331.814 73.433 Q 331.314 73.358 330.916 73.201 A 2.506 2.506 0 0 1 330.05 72.65 A 2.527 2.527 0 0 1 329.484 71.746 Q 329.2 70.999 329.2 69.9 L 329.2 34.7 L 323.3 45.6 A 8.082 8.082 0 0 1 322.576 46.742 Q 322.113 47.345 321.579 47.757 A 4.447 4.447 0 0 1 321.15 48.05 Q 319.9 48.8 318 48.8 L 314 48.8 Q 312.1 48.8 310.85 48.05 Q 309.737 47.382 308.901 45.961 A 9.268 9.268 0 0 1 308.7 45.6 L 302.8 34.7 L 302.8 69.9 A 6.709 6.709 0 0 1 302.733 70.886 Q 302.658 71.386 302.501 71.784 A 2.506 2.506 0 0 1 301.95 72.65 A 2.527 2.527 0 0 1 301.046 73.216 Q 300.299 73.5 299.2 73.5 Z"
        id="4"
        vectorEffect="non-scaling-stroke"
        fill="var(--green)"
      ></path>{" "}
      <path
        d="M 442.6 73.5 L 391.7 73.5 A 6.709 6.709 0 0 1 390.714 73.433 Q 390.214 73.358 389.816 73.201 A 2.506 2.506 0 0 1 388.95 72.65 A 2.527 2.527 0 0 1 388.384 71.746 Q 388.1 70.999 388.1 69.9 L 388.1 5.1 A 6.709 6.709 0 0 1 388.167 4.114 Q 388.242 3.614 388.399 3.216 A 2.506 2.506 0 0 1 388.95 2.35 A 2.527 2.527 0 0 1 389.854 1.784 Q 390.602 1.5 391.7 1.5 L 407.2 1.5 A 6.709 6.709 0 0 1 408.186 1.567 Q 408.686 1.642 409.084 1.799 A 2.506 2.506 0 0 1 409.95 2.35 A 2.527 2.527 0 0 1 410.516 3.254 Q 410.8 4.002 410.8 5.1 L 410.8 54.6 L 424.5 54.6 L 424.5 38.4 A 6.709 6.709 0 0 1 424.567 37.414 Q 424.642 36.914 424.799 36.516 A 2.506 2.506 0 0 1 425.35 35.65 A 2.527 2.527 0 0 1 426.254 35.084 Q 427.002 34.8 428.1 34.8 L 442.6 34.8 A 6.709 6.709 0 0 1 443.586 34.867 Q 444.086 34.942 444.484 35.099 A 2.506 2.506 0 0 1 445.35 35.65 A 2.527 2.527 0 0 1 445.916 36.554 Q 446.2 37.302 446.2 38.4 L 446.2 69.9 A 6.709 6.709 0 0 1 446.133 70.886 Q 446.058 71.386 445.901 71.784 A 2.506 2.506 0 0 1 445.35 72.65 A 2.527 2.527 0 0 1 444.446 73.216 Q 443.699 73.5 442.6 73.5 Z"
        id="6"
        vectorEffect="non-scaling-stroke"
        fill="var(--green)"
      ></path>{" "}
      <path
        d="M 507.6 73.5 L 461.2 73.5 A 6.709 6.709 0 0 1 460.214 73.433 Q 459.714 73.358 459.316 73.201 A 2.506 2.506 0 0 1 458.45 72.65 A 2.527 2.527 0 0 1 457.884 71.746 Q 457.6 70.999 457.6 69.9 L 457.6 5.1 A 6.709 6.709 0 0 1 457.667 4.114 Q 457.742 3.614 457.899 3.216 A 2.506 2.506 0 0 1 458.45 2.35 A 2.527 2.527 0 0 1 459.354 1.784 Q 460.102 1.5 461.2 1.5 L 507.6 1.5 A 6.709 6.709 0 0 1 508.586 1.567 Q 509.086 1.642 509.484 1.799 A 2.506 2.506 0 0 1 510.35 2.35 A 2.527 2.527 0 0 1 510.916 3.254 Q 511.2 4.002 511.2 5.1 L 511.2 16.8 A 6.709 6.709 0 0 1 511.133 17.786 Q 511.058 18.286 510.901 18.684 A 2.506 2.506 0 0 1 510.35 19.55 A 2.527 2.527 0 0 1 509.446 20.116 Q 508.699 20.4 507.6 20.4 L 480 20.4 L 480 28.1 L 499.5 28.1 A 6.709 6.709 0 0 1 500.486 28.167 Q 500.986 28.242 501.384 28.399 A 2.506 2.506 0 0 1 502.25 28.95 A 2.527 2.527 0 0 1 502.816 29.854 Q 503.1 30.602 503.1 31.7 L 503.1 42.4 A 6.709 6.709 0 0 1 503.033 43.386 Q 502.958 43.886 502.801 44.284 A 2.506 2.506 0 0 1 502.25 45.15 A 2.527 2.527 0 0 1 501.346 45.716 Q 500.599 46 499.5 46 L 480 46 L 480 54.6 L 507.6 54.6 A 6.709 6.709 0 0 1 508.586 54.667 Q 509.086 54.742 509.484 54.899 A 2.506 2.506 0 0 1 510.35 55.45 A 2.527 2.527 0 0 1 510.916 56.354 Q 511.2 57.102 511.2 58.2 L 511.2 69.9 A 6.709 6.709 0 0 1 511.133 70.886 Q 511.058 71.386 510.901 71.784 A 2.506 2.506 0 0 1 510.35 72.65 A 2.527 2.527 0 0 1 509.446 73.216 Q 508.699 73.5 507.6 73.5 Z"
        id="7"
        vectorEffect="non-scaling-stroke"
        fill="var(--green)"
      ></path>{" "}
      <path
        d="M 565.6 73.5 L 539.6 73.5 A 8.528 8.528 0 0 1 538.267 73.402 Q 537.531 73.285 536.923 73.03 A 4.639 4.639 0 0 1 536.45 72.8 A 3.558 3.558 0 0 1 535.376 71.85 Q 535.04 71.415 534.768 70.841 A 7.784 7.784 0 0 1 534.5 70.2 L 524.7 45.7 A 139.873 139.873 0 0 1 524.067 44.128 Q 523.821 43.504 523.604 42.935 A 77.013 77.013 0 0 1 523.2 41.85 A 40.275 40.275 0 0 1 522.528 39.846 A 33.465 33.465 0 0 1 522.2 38.7 A 18.644 18.644 0 0 1 521.68 35.858 A 20.688 20.688 0 0 1 521.65 35.55 Q 521.547 34.416 521.515 32.927 A 66.06 66.06 0 0 1 521.5 31.5 L 521.5 5.1 A 6.709 6.709 0 0 1 521.567 4.114 Q 521.642 3.614 521.799 3.216 A 2.506 2.506 0 0 1 522.35 2.35 A 2.527 2.527 0 0 1 523.254 1.784 Q 524.002 1.5 525.1 1.5 L 541 1.5 A 6.804 6.804 0 0 1 542.1 1.583 Q 542.682 1.679 543.148 1.884 A 3.06 3.06 0 0 1 543.9 2.35 Q 544.9 3.2 544.9 5.1 L 544.9 32.7 Q 544.9 33.7 545.1 34.7 A 13.391 13.391 0 0 0 545.428 35.989 A 16.479 16.479 0 0 0 545.7 36.8 L 550.4 50.8 Q 550.642 51.605 550.948 51.989 A 1.247 1.247 0 0 0 551.1 52.15 A 1.258 1.258 0 0 0 551.527 52.389 Q 551.714 52.453 551.943 52.48 A 3.058 3.058 0 0 0 552.3 52.5 L 553.4 52.5 Q 554.2 52.5 554.6 52.15 Q 555 51.8 555.3 50.8 L 560 36.7 A 15.694 15.694 0 0 0 560.413 35.397 A 12.76 12.76 0 0 0 560.6 34.6 Q 560.8 33.6 560.8 32.6 L 560.8 5.1 A 6.709 6.709 0 0 1 560.867 4.114 Q 560.942 3.614 561.099 3.216 A 2.506 2.506 0 0 1 561.65 2.35 A 2.527 2.527 0 0 1 562.554 1.784 Q 563.302 1.5 564.4 1.5 L 580.1 1.5 A 6.709 6.709 0 0 1 581.086 1.567 Q 581.586 1.642 581.984 1.799 A 2.506 2.506 0 0 1 582.85 2.35 A 2.527 2.527 0 0 1 583.416 3.254 Q 583.7 4.002 583.7 5.1 L 583.7 31.5 A 64.031 64.031 0 0 1 583.679 33.195 Q 583.661 33.857 583.629 34.446 A 30.866 30.866 0 0 1 583.55 35.55 A 19.048 19.048 0 0 1 583.096 38.323 A 17.374 17.374 0 0 1 583 38.7 A 35.066 35.066 0 0 1 582.422 40.634 A 42.153 42.153 0 0 1 582 41.85 A 79.432 79.432 0 0 1 581.508 43.165 Q 581.285 43.745 581.033 44.379 A 143.546 143.546 0 0 1 580.5 45.7 L 570.7 70.2 A 7.063 7.063 0 0 1 570.195 71.294 Q 569.6 72.324 568.75 72.8 Q 567.661 73.41 566.079 73.489 A 9.656 9.656 0 0 1 565.6 73.5 Z"
        id="8"
        vectorEffect="non-scaling-stroke"
        fill="var(--green)"
      ></path>{" "}
      <path
        d="M 632.5 73.5 L 616.3 73.5 A 6.709 6.709 0 0 1 615.314 73.433 Q 614.814 73.358 614.416 73.201 A 2.506 2.506 0 0 1 613.55 72.65 A 2.527 2.527 0 0 1 612.984 71.746 Q 612.7 70.999 612.7 69.9 L 612.7 57.1 L 597.4 36.6 Q 595.106 33.509 594.354 31.213 A 9.422 9.422 0 0 1 594.35 31.2 A 11.611 11.611 0 0 1 593.971 29.632 Q 593.683 28.002 593.618 25.684 A 50.053 50.053 0 0 1 593.6 24.3 L 593.6 5.1 A 6.709 6.709 0 0 1 593.667 4.114 Q 593.742 3.614 593.899 3.216 A 2.506 2.506 0 0 1 594.45 2.35 A 2.527 2.527 0 0 1 595.354 1.784 Q 596.102 1.5 597.2 1.5 L 612.6 1.5 A 6.709 6.709 0 0 1 613.586 1.567 Q 614.086 1.642 614.484 1.799 A 2.506 2.506 0 0 1 615.35 2.35 A 2.527 2.527 0 0 1 615.916 3.254 Q 616.2 4.002 616.2 5.1 L 616.2 21.5 A 22.326 22.326 0 0 0 616.254 23.023 A 25.913 25.913 0 0 0 616.3 23.6 A 4.173 4.173 0 0 0 616.859 25.322 A 5.124 5.124 0 0 0 617.1 25.7 L 621.7 32.9 A 6.052 6.052 0 0 0 622.034 33.437 Q 622.217 33.698 622.406 33.896 A 2.571 2.571 0 0 0 622.75 34.2 A 2.062 2.062 0 0 0 623.625 34.561 A 2.785 2.785 0 0 0 624.1 34.6 L 625.1 34.6 A 2.653 2.653 0 0 0 625.747 34.525 A 2.017 2.017 0 0 0 626.45 34.2 A 2.664 2.664 0 0 0 626.856 33.83 Q 627.188 33.463 627.5 32.9 L 632.1 25.7 Q 632.8 24.7 632.9 23.6 A 24.225 24.225 0 0 0 632.992 22.071 A 20.862 20.862 0 0 0 633 21.5 L 633 5.1 A 6.709 6.709 0 0 1 633.067 4.114 Q 633.142 3.614 633.299 3.216 A 2.506 2.506 0 0 1 633.85 2.35 A 2.527 2.527 0 0 1 634.754 1.784 Q 635.502 1.5 636.6 1.5 L 651.5 1.5 A 6.709 6.709 0 0 1 652.486 1.567 Q 652.986 1.642 653.384 1.799 A 2.506 2.506 0 0 1 654.25 2.35 A 2.527 2.527 0 0 1 654.816 3.254 Q 655.1 4.002 655.1 5.1 L 655.1 24.3 A 42.501 42.501 0 0 1 655.037 26.706 Q 654.91 28.937 654.528 30.435 A 9.386 9.386 0 0 1 654.3 31.2 A 14.421 14.421 0 0 1 653.585 32.876 Q 653.164 33.721 652.593 34.652 A 35.038 35.038 0 0 1 651.3 36.6 L 636.1 57.2 L 636.1 69.9 A 6.709 6.709 0 0 1 636.033 70.886 Q 635.958 71.386 635.801 71.784 A 2.506 2.506 0 0 1 635.25 72.65 A 2.527 2.527 0 0 1 634.346 73.216 Q 633.599 73.5 632.5 73.5 Z"
        id="9"
        vectorEffect="non-scaling-stroke"
        fill="var(--green)"
      ></path>{" "}
      <path
        d="M 683.9 73.5 L 663.7 73.5 A 6.709 6.709 0 0 1 662.714 73.433 Q 662.214 73.358 661.816 73.201 A 2.506 2.506 0 0 1 660.95 72.65 A 2.527 2.527 0 0 1 660.384 71.746 Q 660.1 70.999 660.1 69.9 L 660.1 49.6 A 6.709 6.709 0 0 1 660.167 48.614 Q 660.242 48.114 660.399 47.716 A 2.506 2.506 0 0 1 660.95 46.85 A 2.527 2.527 0 0 1 661.854 46.284 Q 662.602 46 663.7 46 L 683.9 46 A 6.709 6.709 0 0 1 684.886 46.067 Q 685.386 46.142 685.784 46.299 A 2.506 2.506 0 0 1 686.65 46.85 A 2.527 2.527 0 0 1 687.216 47.754 Q 687.5 48.502 687.5 49.6 L 687.5 69.9 A 6.709 6.709 0 0 1 687.433 70.886 Q 687.358 71.386 687.201 71.784 A 2.506 2.506 0 0 1 686.65 72.65 A 2.527 2.527 0 0 1 685.746 73.216 Q 684.999 73.5 683.9 73.5 Z"
        id="10"
        vectorEffect="non-scaling-stroke"
        fill="var(--orange)"
        stroke="var(--orange)"
      ></path>{" "}
    </g>{" "}
  </svg>
);

export default function Home() {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <>
      <Head>
        <title>Yotam Levy | Cellist</title>
        <meta
          name="description"
          content="Hi. I am Yotam Levy, a performing cellist and instructor from Hamilton."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.appbar}>{logo}</div>
        {/* {!imageLoaded ? (
          <h1>Loading</h1>
        ) : ( */}
        <>
          <div className={styles.hello}>
            <div className={styles.helloImage}>
              <Image
                src={helloImage}
                alt="hero-yotam"
                fill
                placeholder="blur"
                priority
              />
            </div>

            <h1>
              Hello! <br />I am Yotam
              <div
                style={{
                  marginTop: "16px",
                  fontSize: "24px",
                  fontFamily: "montserrat",
                }}
              >
                <span style={{ color: "orange" }}>
                  cellist | performer | teacher
                </span>
              </div>
            </h1>
          </div>

          <div className={styles.about}>
            <div className={styles.aboutImage}>
              <Image src="/about.jpeg" alt="about-yotam" fill />
            </div>
            <div className={styles.aboutText}>
              <h2>About</h2>
              <p>
                Israel-born Yotam Levy started playing the cello under the
                tutelage of Susan Berman, prior to coming to New Zealand in
                2003. He subsequently carried on his studies with Martin
                Griffiths for six years, and later graduated from the University
                of Waikato with a Bachelor of Music in cello performance. His
                musical activities are many and varied - a balance of teaching
                with an extensive involvement in a diverse stream of projects
                locally, from orchestral playing to chamber music; recording;
                multiple collaborations with local composers and artists,
                bringing new and original works to the performance stage.
              </p>
            </div>
          </div>
          <div className={styles.teaching}>
            <div className={styles.teachingImage}>
              <Image src="/teaching.jpg" alt="teaching-yotam" fill />
            </div>
            <div className={styles.teachingText}>
              <h2>My Teaching Style</h2>
              <p>
                Israel-born Yotam Levy started playing the cello under the
                tutelage of Susan Berman, prior to comingw to New Zealand in
                2003. He subsequently carried on his studies with Martin
                Griffiths for six years, and later graduated from the University
                of Waikato with a Bachelor of Music in cello performance. His
                musical activities are many and varied - a balance of teaching
                with an extensive involvement in a diverse stream of projects
                locally, from orchestral playing to chamber music; recording;
                multiple collaborations with local composers and artists,
                bringing new and original works to the performance stage.
              </p>
            </div>
          </div>

          <div className={styles.contact}>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Need a cello instructor or performer? <br />
              Feel free to drop me a line
            </p>
            <p
              style={{
                fontFamily: "montserrat",
                fontSize: "14px",
                margin: "16px 0",
                fontWeight: "bold",
              }}
            >
              yotamlevyvioloncellonz@gmail.com{" "}
            </p>

            <p
              style={{
                fontFamily: "montserrat",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Or feel out my lesson{" "}
              <a href="https://flni2grdqq9.typeform.com/to/KM0lwsMt">
                inquiry form
              </a>
            </p>
          </div>

          <div
            style={{
              textAlign: "center",
              margin: "32px 0",
              fontFamily: "montserrat",
              fontSize: "10px",
              color: "var(--yellow)",
            }}
          >
            <p>
              © <span style={{ fontFamily: "bungee" }}>Yotam Levy</span> 2023
            </p>
            <p style={{ marginTop: "8px" }}>
              Designed and built by Alejandro Larumbe
            </p>
          </div>
        </>
        {/* )} */}
      </main>
    </>
  );
}
