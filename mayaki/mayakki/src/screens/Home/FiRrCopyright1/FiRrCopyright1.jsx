/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const FiRrCopyright1 = ({ color = "black", className }) => {
  return (
    <svg
      className={`fi-rr-copyright-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_4_72)">
        <path
          className="path"
          d="M12 0C9.62662 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913446 7.4078C0.00519403 9.60051 -0.232446 12.0133 0.230577 14.3411C0.693599 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33114 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0V0ZM12 22C10.0222 22 8.08879 21.4135 6.4443 20.3147C4.79981 19.2159 3.51808 17.6541 2.7612 15.8268C2.00433 13.9996 1.8063 11.9889 2.19215 10.0491C2.578 8.10929 3.53041 6.32746 4.92893 4.92893C6.32746 3.53041 8.10929 2.578 10.0491 2.19215C11.9889 1.8063 13.9996 2.00433 15.8268 2.7612C17.6541 3.51808 19.2159 4.79981 20.3147 6.4443C21.4135 8.08879 22 10.0222 22 12C21.9971 14.6513 20.9426 17.1931 19.0679 19.0679C17.1931 20.9426 14.6513 21.9971 12 22Z"
          fill={color}
        />
        <path
          className="path"
          d="M15.5362 8.46409C15.7248 8.64625 15.9774 8.74705 16.2396 8.74477C16.5018 8.74249 16.7526 8.63732 16.938 8.45191C17.1234 8.26651 17.2286 8.01569 17.2309 7.7535C17.2331 7.4913 17.1323 7.2387 16.9502 7.0501C15.9712 6.0712 14.7239 5.40458 13.3661 5.13455C12.0082 4.86451 10.6008 5.00317 9.32174 5.53301C8.0427 6.06284 6.94949 6.96005 6.18035 8.11118C5.41121 9.26231 5.00069 10.6157 5.00069 12.0001C5.00069 13.3845 5.41121 14.7379 6.18035 15.889C6.94949 17.0401 8.0427 17.9374 9.32174 18.4672C10.6008 18.997 12.0082 19.1357 13.3661 18.8656C14.7239 18.5956 15.9712 17.929 16.9502 16.9501C17.1323 16.7615 17.2331 16.5089 17.2309 16.2467C17.2286 15.9845 17.1234 15.7337 16.938 15.5483C16.7526 15.3629 16.5018 15.2577 16.2396 15.2554C15.9774 15.2531 15.7248 15.3539 15.5362 15.5361C14.8369 16.2352 13.9459 16.7113 12.9761 16.9041C12.0062 17.0969 11.0009 16.9978 10.0874 16.6194C9.17384 16.2409 8.39302 15.6 7.84367 14.7778C7.29433 13.9556 7.00111 12.9889 7.00111 12.0001C7.00111 11.0112 7.29433 10.0446 7.84367 9.22238C8.39302 8.40016 9.17384 7.7593 10.0874 7.38082C11.0009 7.00235 12.0062 6.90325 12.9761 7.09607C13.9459 7.28889 14.8369 7.76496 15.5362 8.46409Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_4_72">
          <rect className="rect" fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

FiRrCopyright1.propTypes = {
  color: PropTypes.string,
};