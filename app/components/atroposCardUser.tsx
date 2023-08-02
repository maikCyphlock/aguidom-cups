"use client";
import Atropos from "atropos/react";
import { TrophyIcon } from "./TrophyIcon";

const BackgroundPattern = () => (
  <svg id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="a" patternUnits="userSpaceOnUse" width="70" height="8" patternTransform="scale(2) rotate(20)">
        <rect x="0" y="0" width="100%" height="100%" fill="hsla(0, 100%, 0%, 1)" />
        <path
          d="M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2c9.272 0 14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6 44.272-6 49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14c-9.272 0-14.215 5.258-18.7 10.339C11.918 1.306 8.353 6-.02 6.002"
          strokeWidth="1"
          stroke="hsla(54, 100%, 42%, .1)"
          fill="none"
        />
      </pattern>
    </defs>
    <rect width="800%" height="800%" transform="translate(-154,0)" fill="url(#a)" />
  </svg>
)

export default function atroposCardUser(props: any) {
  return (
    <div className=" lg:p-12">

      <Atropos className="block w-[90vw] md:w-[50vw] mx-auto rounded-2xl ">
        <div className="relative grid h-full gap-2 overflow-hidden border-2 border-yellow-500 rounded-xl bg-zinc-950 ">
          <div className="absolute inset-0 z-10 flex items-start justify-center ">
            <div className="h-full w-full [mask-image:linear-gradient(black_50%,transparent)]">
              <BackgroundPattern />
            </div>
          </div>
          <div className="flex items-center justify-center flex-1 gap-2 mt-10 mb-32">

            <div className="z-30 flex items-center justify-center gap-4">
              <div className="flex-1 ">
                <TrophyIcon className={"w-12 h-12 lg:w-32 lg:h-32 antialiased"} />
              </div>

              <h1 className="flex flex-col text-xl md:text-2xl lg:text-4xl"><span className="font-light text-yellow-400">Copa</span> <span className="font-extrabold tracking-wide">Aguidom</span></h1>
            </div>
            <div className="absolute z-30 md:left-1/3 md:right-1/3 top-1/2">
              <h3 className="text-xl text-sky-400">#{props.id}</h3>
              <h3 className="text-2xl font-extrabold tracking-wide w-52">{props.fullname}</h3>
              <h3 className="text-xl w-52">Edad: {props.age}</h3>

            </div>
          </div>
          <div className="absolute bottom-0 right-0 z-20 p-1">

            <img src={props.img} className="z-20 w-32 h-32 rounded-md lg:w-56 lg:h-56" alt="" />
          </div>
          <div className=" z-20  flex  py-4 px-8 text-[10px] lg:text-base ">
            <h3 className="flex flex-col"><span className="font-thin">Club</span><span className="font-normal">Aguidom</span></h3>
          </div>

        </div>
      </Atropos>
    </div>
  );
}
