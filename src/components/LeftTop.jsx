import React, { useState } from "react";
import Navbar from "./Navbar";

const LeftTop = () => {
  const [active, setActive] = useState("about");
  return (
    <div className="max-h-[46%] rounded-[18.89px] bg-[#363C43] shadow-rightShadow">
      <div className="flex gap-2 h-full py-[14px] px-[10px]">
        <div className="flex flex-col w-[6%] h-1/2 justify-between">
          <img src="/question.png" alt="" className="w-6 h-6 object-cover" />
          <img src="/blocks.png" alt="" className="w-6 h-6 object-cover" />
        </div>
        <div className="flex flex-col gap-5 flex-start w-[94%]">
          <Navbar active={active} setActive={setActive} />
          <div className="h-full overflow-y-scroll w-full font-normal text-xl text-[#969696]">
            {active == "about" && (
              <p className="w-[92%] h-full">
                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                working at this awesome company for 3 years now. I was born and
                raised in Albany, NY& have been living in Santa Carla for the
                past 10 years my wife Tiffany and my 4 year old twin daughters-
                Emma and Ella. Both of them are just starting school, so my
                calender is usually blocked between 9-10 AM. This is a Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Natus eum
                aliquam et eius quos quidem rerum iusto cumque corporis
                reiciendis?
              </p>
            )}
            {active == "experience" && (
              <p className="w-[92%] h-full">
                Experience tab has been opened. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Temporibus et est placeat
                perspiciatis quibusdam debitis magnam quam, quaerat aspernatur
                consequatur!
              </p>
            )}
            {active == "recommended" && (
              <p className="w-[92%] h-full">
                Recommended tab has been opened. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Temporibus et est placeat
                perspiciatis quibusdam debitis magnam quam, quaerat aspernatur
                consequatur!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftTop;
