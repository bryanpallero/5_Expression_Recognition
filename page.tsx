"use client";
import React from "react";
import { HiArrowCircleLeft } from "react-icons/hi";
import Link from "next/link";
import App from "./script";

import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandVscode } from "react-icons/tb";
import { LuScanFace } from "react-icons/lu";
import { SiTypescript } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";

function Project5() {
  return (
    <section id="project5">
      <div className="flex flex-col w-full h-[90vh] bg-cover bg-center z-0 font-primary space-y-10 py-44 md:py-10">
        <div className="fixed flex w-full flex-col md:flex-row top-0 z-50 bg-white px-5 md:px-0 justify-center text-center md:justify-between items-center">
          <div className="top-0 w-full md:w-screen flex flex-col md:flex-row justify-center md:justify-between text-center items-center">
            <div className="flex flex-col justify-center items-center pl-0 md:pl-5 z-50 md:w-16">
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col align-middle">
                  <Link href="/#project">
                    <HiArrowCircleLeft size={50} className="text-[#913F4D]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:relative flex flex-col w-full items-center justify-center px-0 md:px-24">
              <div className="w-full flex bg-transparent flex-col text-center items-center justify-center pt-2 px-4 pb-2 md:mt-0 md:py-2 md:pb-0 md:flex-row md:text-center md:pt-2">
                <h1 className="w-full font-bold text-center text-2xl md:text-4xl">
                  Predicting Face Expressions with Convolutional Neural Network
                  <hr className="w-full h-1 mt-2 bg-sky-800 rounded"></hr>
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center pr-0 md:pr-5 md:w-16 z-50">
              <Link href="/">
                <div className="flex w-[3.5rem] h-[3.5rem] items-center justify-center rounded-full bg-[#913F4D]">
                  <IoLogoGithub className="w-[2.5rem] h-[2.5rem] text-[#ffffff]" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="px-5 md:px-32 lg:px-52 py-6 md:py-10 bg-gray-100">
            <div className="text-center pb-2 mb-2">
              <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 text-[#5aa79f] justify-center text-center">
                Summary
              </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start space-y-10 md:space-y-0 md:space-x-6">
              <div className="items-center text-center md:w-1/3">
                <h1 className="font-bold text-sky-800 text-xl md:text-2xl">
                  WHAT
                </h1>
                <p>
                  <span className="text-[#913F4D] text-lg md:text-xl">
                    <strong>Face Classification</strong>
                  </span>{" "}
                  <br />
                  Using pretrained Convolutional Neural Network models
                </p>
              </div>
              <div className="items-center text-center md:w-1/3">
                <h1 className="font-bold text-sky-800 text-xl md:text-2xl">
                  HOW
                </h1>
                <div>
                  <span className="text-[#913F4D] text-lg md:text-xl">
                    <strong>99.38% of Accuracy</strong>
                  </span>{" "}
                  <br />
                  <p>of Expression Classification</p>
                </div>
              </div>
              <div className="items-center text-center md:w-1/3">
                <h1 className="font-bold text-sky-800 text-xl md:text-2xl">
                  RESULTS
                </h1>
                <p>
                  <span className="text-[#913F4D] text-lg md:text-xl">
                    <strong>It shows emotions probabilities</strong>
                  </span>{" "}
                  <br />
                  listing and ranking expressions by their probabilities
                </p>
              </div>
            </div>
            <div className="justify-center items-center text-center space-x-2 pt-8">
              <div className="text-sky-800 pb-2 md:pb-0">
                <strong>TECHNOLOGIES</strong>
              </div>
              <div className="flex flex-wrap justify-center space-x-2 md:space-x-8 md:pt-2">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex w-[4rem] h-[4rem] items-center justify-center rounded-full bg-sky-800">
                    <TbBrandVscode className="w-[3rem] h-[3rem] text-[#ffffff]" />
                  </div>
                  <p className="font-bold text-sky-800">VS Code</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex w-[4rem] h-[4rem] items-center justify-center rounded-full bg-sky-800">
                    <SiTypescript className="w-[3rem] h-[3rem] text-[#ffffff] rounded-full" />
                  </div>
                  <p className="font-bold text-sky-800">TypeScript</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex w-[4rem] h-[4rem] items-center justify-center rounded-full bg-sky-800">
                    <RiReactjsLine className="w-[3rem] h-[3rem] text-[#ffffff] rounded-full" />
                  </div>
                  <p className="font-bold text-sky-800">React</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex w-[4rem] h-[4rem] items-center justify-center rounded-full bg-sky-800">
                    <TbBrandNextjs className="w-[3rem] h-[3rem] text-[#ffffff] rounded-full" />
                  </div>
                  <p className="font-bold text-sky-800">Next.js</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex w-[4rem] h-[4rem] items-center justify-center rounded-full bg-sky-800">
                    <LuScanFace className="w-[3rem] h-[3rem] text-[#ffffff]" />
                  </div>
                  <p className="font-bold text-sky-800">Face-Api</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 px-5 md:px-32 lg:px-52">
            <div className="py-5">
              <h1 className="text-2xl md:text-3xl font-bold mb-1 text-[#5aa79f] justify-center text-center">
                Introduction
              </h1>
              <br />
              <div className="flex flex-row justify-left md:text-xl text-gray-700">
                <p>
                  When customers interact with products and services, buying
                  them or consuming their publicity, they feel excited, happy,
                  sad, angry, or inspired by what they see. These emotions can
                  create a desire or rejection to make an initial purchase or
                  continue buying them. Thus, identifying emotions during
                  interactions could be key to get feedback about how fitted the
                  company vision of customer thoughts is.
                  <br />
                  <br />
                  In this project I made an application to detect faces, through
                  your computer camera, and to classify your emotions on
                  real-time using a Convolutional Neural Network pretrained
                  model.
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-1 text-[#5aa79f] justify-center text-center">
                Methods
              </h1>
              <br />
              <div className="flex flex-col justify-left md:text-xl text-gray-700">
                <p>
                  I implemented Face-Api as a real-time expression recognition.
                  Face-Api is built in a Tensorflowjs library, with several
                  pretrained models from where I used:
                </p>
                <br />
                <ul
                  className="list-disc ml-6 md:px-10"
                  style={{ listStyleType: "decimal" }}
                >
                  <li>
                    <strong>Mobilenetv1 SSD</strong>: for detecting faces and to
                    make boxes over camera images.
                  </li>

                  <li>
                    <strong>FaceLandmark68Net</strong>: used to extract
                    position, and shape from detected faces.
                  </li>

                  <li>
                    <strong>FaceRecognitionNet</strong>: used to compare the
                    data extracted from faces with the existing data, making an
                    expression prediction.
                  </li>
                </ul>
                <br />
                <p>
                  <span className="text-xl md:text-2xl">
                    <strong>
                      The expression prediction has a 99.38% of Accuracy using
                      the dataset Labeled Faces in the Wild.
                    </strong>
                  </span>
                  <br />
                  <br />
                  This application was coded using Typescript in React Next.js.
                </p>
                <br />
                <br />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-1 text-[#5aa79f] justify-center text-center">
                Results
              </h1>
              <br />
              <div className="flex flex-col justify-left md:text-xl text-gray-700">
                <p>
                  In order to use it, you need to allow your web browser to use
                  your computer camera (only for this page).
                  <br />
                  <br />
                  The application shows boundaries of every face detected, and
                  below that we can see the different labels predicted with its
                  respective probabilities (from 0 to 1). This means that the
                  model could detect more than 1 expression and ranking them
                  from the higher to lower probability.
                </p>
                <div className="relative flex flex-col items-center justify-center text-center w-full pb-24 lg:pb-32 md:mb-10">
                  <App />
                </div>
              </div>
            </div>
            <div className="relative">
              <h1 className="text-3xl font-bold mb-1 text-[#5aa79f] justify-center text-center">
                Conclusion
              </h1>
              <br />
              <div className="flex flex-col justify-left md:text-xl text-gray-700">
                <p>
                  With this expression recognition solution commercial markets
                  can build indexes to evaluate the customer services quality,
                  or to rank emotions related to product in showcases. This
                  could lead to addressing issues related to negative emotions
                  in real-time or implement new ones searching for the improve
                  the emotional performance of some products.
                  <br />
                  <br />
                  This emotional quantification open doors to use human natural
                  (and mainly unconscious) responses to connect better with its
                  preferences, and therefore with the best products or services
                  we can offer.
                </p>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex text-center text-neutral-900 md:justify-center">
          <div className="text-neutral-500">© 2024 Bryan Morales</div>
        </div>
      </div>
    </section>
  );
}

export default Project5;
