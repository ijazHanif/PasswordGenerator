import React from "react";
import heroImg from "../.././assets/heroImg.png";
import { Wrapper } from "../shared/Wrapper";
import { Button } from "../shared/Button";

export const Hero = () => {
  return (
    <>
      <Wrapper>
        <section className="flex flex-col md:flex-row items-center xl:items-end">
          <div className="flex-1 space-y-4">
            <p className="text-[#00616C]  sm:text-lg font-bold">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </p>
            <h1 className="text-4xl sm:text-[3.5rem] font-extrabold sm:leading-normal">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="md:text-xl max-w-[37.5rem] text-primary">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p className=" md:text-xl max-w-[37.5rem] text-primary">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <div className="pt-4">
              <Button text="Enroll Now" />
            </div>
          </div>

          <div className="flex-1">
            <img src={heroImg} alt="Dao Panaverse logo" />
          </div>
        </section>
      </Wrapper>
    </>
  );
};
