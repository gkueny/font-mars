import React from "react";

const LeftTriangle = () => (
  <div
    className="w-0 h-0 border-solid z-10 hidden absolute lg:block"
    style={{
      borderWidth: "calc(100vh - 101px) 15vw 0px 0px",
      borderColor: "#ffffff transparent transparent transparent",
      left: "calc(65% - 1px)",
    }}
  ></div>
);

const RightTriangle = () => (
  <div
    className="h-0 h-0 border-solid z-20 hidden absolute lg:block"
    style={{
      left: "calc(100% - 15vw)",
      borderWidth: "0px 0px calc(100vh - 101px) 15vw",
      borderColor: "transparent transparent #ffffff transparent",
    }}
  ></div>
);

export { LeftTriangle, RightTriangle };
