import Fb from "./assets/fb.svg";
import Ig from "./assets/ig.svg";
import X from "./assets/x.svg";
import Li from "./assets/li.svg";
import Ring from "./assets/ring.png";

function App() {
  return (
    <div className="bg-black text-white lg:pb-20 lg:pt-0 lg:px-20 md:p-10 p-5 w-full relative overflow-hidden min-h-screen">
      <p className="lg:text-[200px] md:text-[150px] text-8xl lg:text-right md:text-right font-normal lg:mt-14">
        The G&#8209;Team
      </p>
      <div className="flex justify-end justify-items-end mt-10 md:mt-10 lg:mt-10 ">
        <div className="lg:w-[50%] md:w-[60%]">
          <p className=" lg:text-[32px] md:text-[22px] lg:leading-[50px] font-normal sm:text-base">
            Genesis of Bold Brands. Transforming Visions into Stunning
            Identities with Design, Imagery, and Storytelling. ✨
          </p>
          <div className="flex lg:space-y-0 md:space-y-0 lg:space-y-0 gap-5 mt-8 text-[12px] md:text-[17px]">
            <button className="lg:ring-[0.74px] w-fit ring-[0.4px] lg:p-[16.29px] p-3 ring-white bg-black lg:rounded-3xl rounded-[8.26px]">
              Download Company Profile
            </button>
            <button className="lg:ring-[0.74px] w-fit lg:w-[226px] md:w-[226px] ring-[0.4px] lg:p-[16.29px] p-3 ring-white bg-black lg:rounded-3xl rounded-[8.26px] lg:ml-4">
              See our works
            </button>
          </div>
        </div>
      </div>

      <div className="lg:flex md:flex lg:justify-end md:justify-end lg:justify-items-end md:justify-items-end lg:mt-20 md:mt-16 mt-10 z-20 relative">
        <div className="mt-10">
          <ul className="text-base font-semibold">
            <li>Brand Identity Creation 🎨</li>
            <li>Art Direction 🎯</li>
            <li>Film Documentaries 🎥</li>
            <li>Strategic Consulting 💡</li>
          </ul>
        </div>

        <div className="lg:ml-60 md:ml-36 lg:space-y-3  space-y-1 lg:mt-0 mt-10">
          <div className="flex flex-wrap space-x-2.5">
            <img src={X} alt="social" className="lg:h-[44px] w-auto h-[30px]" />
            <a
              href="https://web.facebook.com/dynamicgraphiksmedia/"
              target="_blank"
            >
              <img
                src={Fb}
                alt="social"
                className="lg:h-[44px] w-auto h-[30px]"
              />
            </a>
            <img
              src={Li}
              alt="social"
              className="lg:h-[44px] w-auto h-[30px]"
            />
            <a href="https://instagram.com/dynamicgraphiks" target="_blank">
              <img
                src={Ig}
                alt="social"
                className="lg:h-[44px] w-auto h-[30px]"
              />
            </a>
          </div>
          <div>
            <a href="mailto:hello@dynamicgraphiks.com" target="_blank">
              <p className="underline underline-offset-4">
                Email: hello@dynamicgraphiks.com
              </p>
            </a>
          </div>
          <div>
            <a href="tel:+234 703 064 7319">
              <p className="underline underline-offset-4">
                Call: +234 703 064 7319
              </p>
            </a>
          </div>
        </div>
      </div>
      <img
        src={Ring}
        alt="ring"
        className="absolute lg:-bottom-[420px] lg:-left-[370px] lg:w-[938px] md:w-[700px] md:-bottom-[320px] md:-left-[270px] w-[471px] -bottom-[250px] -left-[120px] z-0"
      />
    </div>
  );
}

export default App;
