import React, { useEffect, useState } from 'react';
import './Loading.css';

const Loading = () => {
  const [svgList, setSvgList] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [visibleSvgIndex, setVisibleSvgIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (visibleSvgIndex < svgList.length - 1) {
        setVisibleSvgIndex((prevIndex) => prevIndex + 1);
      }
    }, 580);

    // Clear the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [visibleSvgIndex, svgList]);

  const renderLoadingSVG = (index) => {
    const showSVG = index <= visibleSvgIndex;
    switch (index) {
      case 0:
        return showSVG && <LoadingSVG1 key={index} />;
      case 1:
        return showSVG && <LoadingSVG2 key={index} />;
      case 2:
        return showSVG && <LoadingSVG3 key={index} />;
      case 3:
        return showSVG && <LoadingSVG4 key={index} />;
      case 4:
        return showSVG && <LoadingSVG5 key={index} />;
      case 5:
        return showSVG && <LoadingSVG6 key={index} />;
      case 6:
        return showSVG && <LoadingSVG7 key={index} />;
      default:
        return null;
    }
  };

  return <div>{svgList.map((_, index) => renderLoadingSVG(index))}</div>;
};

const LoadingSVG1 = () => {
  return (
    <div className="loader-container">
      <svg
        className="triangle animated"
        width="339"
        height="382"
        viewBox="0 0 339 382"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#D9D9D9", stopOpacity: 0 }} />
            <stop offset="100%" style={{ stopColor: "#1539CE" }} />
          </linearGradient>
        </defs>
        <g filter="url(#filter0_d_264_281)">
          <path
            d="M131.963 56.554L335 306.892L103.074 374C114.356 250.03 120.681 180.524 131.963 56.554Z"
            fill="url(#paint0_linear_264_281)"
            shape-rendering="crispEdges"
          />
          <path
            d="M103.642 373.316L132.352 57.8233L334.14 306.621L103.642 373.316Z"
            stroke="#EEEEEE"
            shape-rendering="crispEdges"
          />
        </g>
        <ellipse cx="127.068" cy="48.3721" rx="19.5657" ry="21.2661" fill="#D9D9D9" />
        <path
          d="M111 298C227 314 270 229 270 229M111 251C220 269 238 186 238 186M120 198C169 208 203 150 203 150M120 159C155 159 181 120 181 120M105 349C225.149 371.478 305 269 305 269"
          stroke="white"
          stroke-width="3"
        />
      </svg>
    </div>
  );
};

const LoadingSVG2 = () => {
  return (
    <div className="loader-container">
      <svg width="339" height="382" viewBox="0 0 339 382" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_264_291)">
<path d="M131.963 56.554L335 306.892L103.074 374C114.356 250.03 120.681 180.524 131.963 56.554Z" fill="url(#paint0_linear_264_291)" shape-rendering="crispEdges"/>
<path d="M103.642 373.316L132.352 57.8233L334.14 306.621L103.642 373.316Z" stroke="#EEEEEE" shape-rendering="crispEdges"/>
</g>
<ellipse cx="127.068" cy="48.3721" rx="19.5657" ry="21.2661" fill="#D9D9D9"/>
<path d="M111 298C227 314 270 229 270 229M111 251C220 269 238 186 238 186M120 198C169 208 203 150 203 150M120 159C155 159 181 120 181 120M105 349C225.149 371.477 305 269 305 269" stroke="white" stroke-width="3"/>
<defs>
<filter id="filter0_d_264_291" x="99.0745" y="56.554" width="239.926" height="325.446" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_264_291"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_264_291" result="shape"/>
</filter>
<linearGradient id="paint0_linear_264_291" x1="131.963" y1="56.554" x2="214.488" y2="341.762" gradientUnits="userSpaceOnUse">
<stop offset="0.729167" stop-color="#1539CE" stop-opacity="0"/>
<stop offset="1" stop-color="#1539CE"/>
</linearGradient>
</defs>
</svg>

    </div>
  );
};

const LoadingSVG3 = () => {
  return (
    <div className="loader-container">
      <svg width="339" height="382" viewBox="0 0 339 382" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_264_298)">
<path d="M131.963 56.5539L335 306.892L103.074 374C114.356 250.03 120.681 180.524 131.963 56.5539Z" fill="url(#paint0_linear_264_298)" shape-rendering="crispEdges"/>
<path d="M103.642 373.315L132.352 57.8232L334.14 306.621L103.642 373.315Z" stroke="#EEEEEE" shape-rendering="crispEdges"/>
</g>
<ellipse cx="127.068" cy="48.3721" rx="19.5657" ry="21.2661" fill="#D9D9D9"/>
<path d="M111 298C227 314 270 229 270 229M111 251C220 269 238 186 238 186M120 198C169 208 203 150 203 150M120 159C155 159 181 120 181 120M105 349C225.149 371.478 305 269 305 269" stroke="white" stroke-width="3"/>
<defs>
<filter id="filter0_d_264_298" x="99.0745" y="56.5539" width="239.926" height="325.446" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_264_298"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_264_298" result="shape"/>
</filter>
<linearGradient id="paint0_linear_264_298" x1="131.963" y1="56.5539" x2="214.488" y2="341.762" gradientUnits="userSpaceOnUse">
<stop offset="0.442708" stop-color="#1539CE" stop-opacity="0"/>
<stop offset="1" stop-color="#1539CE"/>
</linearGradient>
</defs>
</svg>


    </div>
  );
};


const LoadingSVG4 = () => {
  return (
    <div className="loader-container">
      <svg width="339" height="382" viewBox="0 0 339 382" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_264_305)">
<path d="M131.963 56.554L335 306.892L103.074 374C114.356 250.03 120.681 180.524 131.963 56.554Z" fill="url(#paint0_linear_264_305)" shape-rendering="crispEdges"/>
<path d="M103.642 373.316L132.352 57.8233L334.14 306.621L103.642 373.316Z" stroke="#EEEEEE" shape-rendering="crispEdges"/>
</g>
<ellipse cx="127.068" cy="48.3721" rx="19.5657" ry="21.2661" fill="#D9D9D9"/>
<path d="M111 298C227 314 270 229 270 229M111 251C220 269 238 186 238 186M120 198C169 208 203 150 203 150M120 159C155 159 181 120 181 120M105 349C225.149 371.477 305 269 305 269" stroke="white" stroke-width="3"/>
<defs>
<filter id="filter0_d_264_305" x="99.0745" y="56.554" width="239.926" height="325.446" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_264_305"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_264_305" result="shape"/>
</filter>
<linearGradient id="paint0_linear_264_305" x1="131.963" y1="56.554" x2="214.488" y2="341.762" gradientUnits="userSpaceOnUse">
<stop offset="0.0572917" stop-color="#1539CE" stop-opacity="0.12"/>
<stop offset="1" stop-color="#1539CE"/>
</linearGradient>
</defs>
</svg>


    </div>
  );
};

const LoadingSVG5 = () => {
  return (
    <div className="loader-container">
      <svg width="339" height="382" viewBox="0 0 339 382" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_264_312)">
<path d="M131.963 56.554L335 306.892L103.074 374C114.356 250.03 120.681 180.524 131.963 56.554Z" fill="#1539CE"/>
<path d="M103.642 373.316L132.352 57.8233L334.14 306.621L103.642 373.316Z" stroke="#EEEEEE"/>
</g>
<ellipse cx="127.068" cy="48.3721" rx="19.5657" ry="21.2661" fill="#D9D9D9"/>
<path d="M111 298C227 314 270 229 270 229M111 251C220 269 238 186 238 186M120 198C169 208 203 150 203 150M120 159C155 159 181 120 181 120M105 349C225.149 371.478 305 269 305 269" stroke="white" stroke-width="3"/>
<defs>
<filter id="filter0_d_264_312" x="99.0745" y="56.554" width="239.926" height="325.446" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_264_312"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_264_312" result="shape"/>
</filter>
</defs>
</svg>
    </div>
  );
};

const LoadingSVG6 = () => {
  return (
    <div className="loader-container">
      <svg width="339" height="382" viewBox="0 0 339 382" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_264_319)">
<path d="M131.963 56.554L335 306.892L103.074 374C114.356 250.03 120.681 180.524 131.963 56.554Z" fill="#1539CE"/>
<path d="M103.642 373.316L132.352 57.8233L334.14 306.621L103.642 373.316Z" stroke="#EEEEEE"/>
</g>
<ellipse cx="127.068" cy="48.3721" rx="19.5657" ry="21.2661" fill="#1539CE"/>
<path d="M111 298C227 314 270 229 270 229M111 251C220 269 238 186 238 186M120 198C169 208 203 150 203 150M120 159C155 159 181 120 181 120M105 349C225.149 371.478 305 269 305 269" stroke="white" stroke-width="3"/>
<defs>
<filter id="filter0_d_264_319" x="99.0745" y="56.554" width="239.926" height="325.446" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_264_319"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_264_319" result="shape"/>
</filter>
</defs>
</svg>

    </div>
  );
};
const LoadingSVG7 = () => {
  return (
    <div className="loader-container">
      <svg width="339" height="382" viewBox="0 0 339 382" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_264_354)">
<path d="M131.963 56.554L335 306.892L103.074 374C114.356 250.03 120.681 180.524 131.963 56.554Z" fill="#1539CE"/>
<path d="M103.642 373.316L132.352 57.8233L334.14 306.621L103.642 373.316Z" stroke="#EEEEEE"/>
</g>
<ellipse cx="127.068" cy="48.3721" rx="19.5657" ry="21.2661" fill="#1539CE"/>
<path d="M111 298C227 314 270 229 270 229M111 251C220 269 238 186 238 186M120 198C169 208 203 150 203 150M120 159C155 159 181 120 181 120M105 349C225.149 371.477 305 269 305 269" stroke="white" stroke-width="3"/>
<defs>
<filter id="filter0_d_264_354" x="99.0745" y="56.5542" width="239.926" height="325.446" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_264_354"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_264_354" result="shape"/>
</filter>
</defs>
</svg>


    </div>
  );
};



export default Loading;