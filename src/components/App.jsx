import { motion } from "framer-motion";
import ThemeToggle from "./ui/items/ThemeToggle";
import Footer from "./ui/component/Footer";
import { body, path } from "framer-motion/client";
import { useEffect } from "react";
import React from "react";

export default function Home() {
  return (
    <div className="page">
      <div className="title">
        <h1>portfolio</h1>
        <div className="name">eko0 zero - clara del vecchio</div>
      </div>
      {/* about me  */}

      <div className="about-title-section">
        <h3 className="about-title">About me</h3>
        <div className="arrow-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
          >
            <g filter="url(#filter0_i_375_188)">
              <path
                d="M2.89115 34.694L34.694 2.89115M34.694 2.89115L2.89115 2.89115M34.694 2.89115L34.694 34.694"
                stroke="#E0FEC2"
                stroke-width="5.78233"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_375_188"
                x="0"
                y="0"
                width="37.5851"
                height="39.898"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2.31293" />
                <feGaussianBlur stdDeviation="1.15647" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.690196 0 0 0 0 0.992157 0 0 0 0 0.392157 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_375_188"
                />
              </filter>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
          >
            <g filter="url(#filter0_i_375_189)">
              <path
                d="M34.6939 2.89111L2.89111 34.6939M2.89111 34.6939H34.6939M2.89111 34.6939V2.89111"
                stroke="#E0FEC2"
                stroke-width="5.78233"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_375_189"
                x="0"
                y="0"
                width="37.5851"
                height="39.898"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2.31293" />
                <feGaussianBlur stdDeviation="1.15647" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.690196 0 0 0 0 0.992157 0 0 0 0 0.392157 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_375_189"
                />
              </filter>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
          >
            <g filter="url(#filter0_i_375_190)">
              <path
                d="M34.694 34.6939L2.89115 2.89111M2.89115 2.89111V34.6939M2.89115 2.89111H34.694"
                stroke="#E0FEC2"
                stroke-width="5.78233"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_375_190"
                x="0"
                y="0"
                width="37.5851"
                height="39.898"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2.31293" />
                <feGaussianBlur stdDeviation="1.15647" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.690196 0 0 0 0 0.992157 0 0 0 0 0.392157 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_375_190"
                />
              </filter>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
          >
            <g filter="url(#filter0_i_375_191)">
              <path
                d="M2.89112 2.89115L34.6939 34.694M34.6939 34.694L34.6939 2.89115M34.6939 34.694L2.89111 34.694"
                stroke="#E0FEC2"
                stroke-width="5.78233"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_375_191"
                x="0"
                y="0"
                width="37.5851"
                height="39.898"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2.31293" />
                <feGaussianBlur stdDeviation="1.15647" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.690196 0 0 0 0 0.992157 0 0 0 0 0.392157 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_375_191"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <div class="shape">
        <span className="rectangles"></span>
        <span className=" triangles-01"></span>
 <span className=" triangles-02"></span>
 <span className=" triangles-03"></span> <span className=" triangles-04"></span><span className=" triangles-05"></span><span className=" triangles-06"></span>
        <div className="about ">
        

          <p className="about-text">
            Hi! I’m Clara, but you can call me eko0 !I was born in March 2008
            and I'm passionate about UI/UX and graphic design. I like turning
            ideas into visual experiences. I'm currently learning 3D design with
            Blender to expand my creative skills and bring more depth and
            emotion to my work. My goal is to blend design, storytelling, and
            technology to create experiences that are both intuitive and
            inspiring.
          </p>
          
          {/* <img className="eko0-img" src="../src/assets/img/eko0-about-stikers.png" alt="" /> */}
          <div className="cv">
            <p>see my cv</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
            >
              <path
                d="M3.00003 38.8857L38.8857 3.00004M38.8857 3.00004H3.00003M38.8857 3.00004V38.8857"
                stroke="#B0FD64"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
