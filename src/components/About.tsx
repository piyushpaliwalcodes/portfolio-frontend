import { Info } from "../User";
import Typewriter from "typewriter-effect";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Particles from "./magicui/Particles";
import Resumeviewer from "./Resumeviewer";
import { NeonGradientCard } from "./magicui/Neon-gradient-card";
const About = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div
        id="ABOUT"
        className="relative flex items-center justify-around h-[85vh] w-[100vw] overflow-hidden lg-mx:justify-between lg-mx:text-2xl 
        lg-mx:font-bold
        bs-mx:h-full
        bs-mx:w-full
        bs-mx:pt-10
        bs-mx:justify-center
        bs-mx:items-center
        bs-mx:font-bold
        bs-mx:flex-col-reverse 
        "
      >
        <Particles
          className="absolute inset-0 -z-20"
          quantity={700}
          ease={80}
          color="#64ffda"
          refresh
        />
        <div
          className="twothings flex items-center justify-around mr-16 
        bs-mx:h-full
        bs-mx:w-full
        bs-mx:overflow-
        bs-mx:!flex-col-reverse bs-mx:!items-center bs-mx:!justify-center
        bs-mx:gap-4

         "
        >
          <div className=" pt-16 bs-mx:pt-0 ml-24 mr-24 font-mono m-12 w-1/2 flex flex-col lg-mx:gap-2 text-justify pb-5  ">
            <div
              className="text-2xl text-primaryColor flex flex-col gap-4 lg-mx:!text-red-400 
            bs-mx:items-center
            bs-mx:justify-center
            bs-mx:!text-yellow-300"
            >
              Hi, I am
              <div
                className="text-6xl lg-mx:text-5xl font-bold text-white bs-mx:items-center
              bs-mx:!w-[500px]
              bs-mx:!text-center
              bs-mx:text-red-300 bs-mx:justify-center"
              >
                {Info.name}
              </div>
              <div className="text-white text-lg w-full lg-mx:text-[27px] bs-mx:items-center bs-mx:justify-center bs-mx:!text-center">
                I am a&nbsp;
                <div
                  className="inline-block text-lg text-primaryColor font-semibold bs-mx:items-center "
                  style={{
                    height: "3rem", // Fixes the height of the Typewriter container
                    lineHeight: "3rem", // Vertically centers the text
                  }}
                >
                  <Typewriter
                    options={{
                      strings: Info.stack,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              </div>
              <div className="text-textColor lg-mx:text-base text-xl font-semibold  bs-mx:items-center bs-mx:!text-center">
                {Info.bio}
              </div>
              <div className="buttoncontainer flex gap-4">
                {/* <Button
                  className="!text-bgcolor rounded-md p-2  !w-fit "
                  size="sm"
                  color="#64ffda"
                  onClick={open}
                >
                  CHECK RESUME
                </Button> */}
                <a href="/Resume.pdf" download={Info.name}>
                  <Button
                    variant={"outline"}
                    className="!text-white rounded-md p-2  !w-fit "
                    size="sm"
                    color="#64ffda"
                  >
                    DOWNLOAD RESUME
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div
            className=" h-[40vh] w-[40vh]  flex items-center justify-center rounded-full bs-mx:items-center"
            id="photo"
          >
            <NeonGradientCard className="w-full h-full rounded-full">
              <img
                className="w-full h-full object-cover rounded-full "
                src="profile.jpg"
                alt="Profile photo"
              />
            </NeonGradientCard>
          </div>
        </div>
      </div>
      <Resumeviewer opened={opened} close={close} />
    </>
  );
};

export default About;
