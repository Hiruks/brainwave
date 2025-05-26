import { brainwaveSymbol, check, astronaut } from "../assets";
import { collabApps, collabContent, collabText, visionMission} from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            Who are we?
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {visionMission.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button>Log In to Member Dashboard</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
          The Royal College Astronomical Society fosters a passion for space science through hands-on projects, lectures, and Olympiad training.
          We unite curious minds in the pursuit of knowledge, discovery, and national-level achievement.
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 overflow-visible rounded-full relative">
                  <img
                    src={astronaut}
                    width={600}
                    height={600}
                    alt="brainwave"
                     className="relative scale-[4.0]"
                  />
                </div>
              </div>
            </div>

            

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
