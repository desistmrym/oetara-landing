import { useRef, useState } from "react";
import vid_about_static from "../assets/video/about-static.png";
import vid_about_animated from "../assets/video/about-moving.webp";
import vid_service_static from "../assets/video/blackhole-static.png";
import vid_service_animated from "../assets/video/blackhole-moving.webp";
import vid_work_static from "../assets/video/work-static.png";
import vid_work_animated from "../assets/video/work-moving.webp";
import vid_contact_static from "../assets/video/building-static.png";
import vid_contact_animated from "../assets/video/building-moving.webp";
import { arrow, A, W, C, S, oetara } from "../etc/images";
import About from "../components/about";
import Work from "../components/work";
import Service from "../components/service";
import Contact from "../components/contact";

const Pages = () => {
  const arrowRef = useRef();
  const [showAbout, setShowAbout] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [isServiceHovered, setIsServiceHovered] = useState(false);
  const [isWorkHovered, setIsWorkHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  const handleModal = (e, type) => {
    if (type === "about") {
      setShowAbout(!showAbout);
    } else if (type === "work") {
      setShowWork(!showWork);
    } else if (type === "service") {
      setShowService(!showService);
    } else if (type === "contact") {
      setShowContact(!showContact);
    }
  };

  const handleMouse = (event) => {
    const { current } = arrowRef;

    let x = current.offsetLeft + current.clientWidth / 2;
    let y = current.offsetTop + current.clientHeight / 2;
    let rad = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = rad * (180 / Math.PI) * -1 + 180;

    current.style.transform = "rotate(" + rot + "deg)";
    // eye.css({
    //   '-webkit-transform': 'rotate(' + rot + 'deg)',
    //   '-moz-transform': 'rotate(' + rot + 'deg)',
    //   '-ms-transform': 'rotate(' + rot + 'deg)',
    //   'transform': 'rotate(' + rot + 'deg)'
    // });
  };

  const handleServiceHover = (isHovering) => {
    setIsServiceHovered(isHovering);
  };

  const handleWorkHover = (isHovering) => {
    setIsWorkHovered(isHovering);
  };

  const handleContactHover = (isHovering) => {
    setIsContactHovered(isHovering);
  };

  const handleAboutHover = (isHovering) => {
    setIsAboutHovered(isHovering);
  };

  return (
    <>
      <div
        className="bg-cover h-[100vh] overflow-hidden"
        onMouseMove={(event) => handleMouse(event)}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "absolute",
            height: "100vh",
            width: "100%",
          }}
        ></div>
        <div className="pt-8 text-white text-[3rem] leading-5 tracking-[-2px] text-center font-['europa-grotesk-sh-med']">
          {/* Oetara */}
          <div className="absolute w-[100%]">
            <div className="flex justify-center">
              <img src={oetara} alt="" className="w-[2.5em]" />
            </div>
          </div>
        </div>
        <div>
          <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-0 pt-24">
            <div className="scale-95 content-area">
              <div
                onClick={(e) => handleModal(e, "about")}
                className="clip1 about-page"
                onMouseEnter={() => handleAboutHover(true)}
                onMouseLeave={() => handleAboutHover(false)}
              >
                  <div className="absolute z-[99] p-5 w-[100%] h-[100%] rounded-[50%]">
                    <img src={A} alt="" className="w-[100%] rounded-[50%]" />
                  </div>
                  <div className="absolute z-[999] p-5 w-[100%] h-[100%] rounded-[50%]">
                    <div className="text-about relative h-[100%] text-white text-[3vh] sm:text-[4vh] lg:text-[5vh] text-center pl-[1.5em] pt-[1em]">
                      About
                    </div>
                  </div>
                  <img
                    className="p-8 rounded-[50%] h-[100%] object-cover"
                    src={isAboutHovered ? vid_about_animated : vid_about_static}
                    alt="About"
                  />
              </div>
              <div
                onClick={(e) => handleModal(e, "work")}
                className="clip2"
                onMouseEnter={() => handleWorkHover(true)}
                onMouseLeave={() => handleWorkHover(false)}
              >
                <div className="absolute p-5 z-[99] w-[100%] h-[100%] rounded-[50%]">
                  <img src={W} alt="" className="w-[100%] rounded-[50%]" />
                </div>
                <div className="absolute p-5 z-[999] w-[100%] h-[100%] rounded-[50%]">
                  <div className="text-work relative text-white h-[100%] text-[3vh] sm:text-[4vh] lg:text-[6vh] text-center pl-[11em] md:pl-[10em] pt-[6em] md:pt-[6em]">
                    Work
                  </div>
                </div>
                <img
                  className="rounded-[50%] p-5 h-[100%] object-cover"
                  src={isWorkHovered ? vid_work_animated : vid_work_static}
                  alt="Work"
                />
              </div>
              <div
                onClick={(e) => handleModal(e, "contact")}
                className="clip3"
                onMouseEnter={() => handleContactHover(true)}
                onMouseLeave={() => handleContactHover(false)}
              >
                <div className="absolute p-5 z-[99] w-[100%] h-[100%] rounded-[50%]">
                  <img src={C} alt="" className="w-[100%] rounded-[50%]" />
                </div>
                <div className="absolute p-5 z-[99] w-[100%] h-[100%] rounded-[50%]">
                  <div className="text-white text-contact h-[100%] text-[3vh] md:text-[4vh] lg:text-[5vh] text-center pl-[8vh] lg:pl-[2em] pt-[11em] md:pt-[12vh] lg:pt-[14em]">
                    Contact
                  </div>
                </div>
                <img
                  className="rounded-[50%] p-5 h-[100%] object-cover"
                  src={
                    isContactHovered ? vid_contact_animated : vid_contact_static
                  }
                  alt="Contact"
                />
              </div>
              <div
                onClick={(e) => handleModal(e, "service")}
                className="clip4"
                onMouseEnter={() => handleServiceHover(true)}
                onMouseLeave={() => handleServiceHover(false)}
              >
                <div className="absolute p-5 z-[99] w-[100%] h-[100%] rounded-[50%]">
                  <img src={S} alt="" className="w-[100%] rounded-[50%]" />
                </div>
                <div className="absolute p-5 z-[99] w-[100%] h-[100%] rounded-[50%]">
                  <div className="text-service text-white h-[100%] text-[3vh] md:text-[4vh] lg:text-[5vh] text-center -ml-[8em] md:-ml-[13em] lg:-ml-[11em] pt-[5.5em] md:pt-[8em] lg:pt-[6.5em]">
                    Service
                  </div>
                </div>
                <img
                  className="rounded-[50%] p-5 h-[100%] object-cover"
                  src={
                    isServiceHovered ? vid_service_animated : vid_service_static
                  }
                  alt="Service"
                />
              </div>
            </div>
          </div>
          <div id="needle-landing">
            <div className="flex justify-center items-center w-[100%] h-[100vh]">
              <img ref={arrowRef} src={arrow} alt="" className="w-[8em] md:w-[10em]" />
            </div>
          </div>
        </div>
        {showAbout ? (
          <div className="modal fixed top-0 p-0 md:p-12 lg:p-16 lg:mt-5 w-[100%]">
            <div className="w-[100%] h-[100vh] bg-white overflow-y-scroll scroll-bar">
              <div className="fixed float-right w-[100%] px-0 md:px-[6em] lg:px-[8em]">
                <div
                  className='text-black text-2xl w-[100%] flex justify-end font-["europa-grotesk-sh-med"] pr-5 pt-3 cursor-pointer'
                  onClick={() => setShowAbout(false)}
                >
                  <div className="close-x">X</div>
                </div>
              </div>
              <About />
            </div>
          </div>
        ) : null}

        {showWork ? (
          <div className="modal fixed top-0 p-0 md:p-12 lg:p-16 md:mt-8 lg:mt-5 w-[100%]">
            <div className="w-[100%] h-[100vh] bg-white overflow-y-scroll scroll-bar">
              <div className="fixed float-right w-[100%] px-0 md:px-[6em] lg:px-[8em]">
                <div
                  className='text-black text-2xl flex justify-end font-["europa-grotesk-sh-med"] pr-5 pt-3 cursor-pointer'
                  onClick={() => setShowWork(false)}
                >
                  <div className="close-x">X</div>
                </div>
              </div>
              <Work />
            </div>
          </div>
        ) : null}

        {showService ? (
          <div className="modal fixed top-0 p-0 md:p-12 lg:p-16 md:mt-8 lg:mt-5 w-[100%]">
            <div className="w-[100%] h-[100vh] bg-white overflow-y-scroll scroll-bar">
              <div className="fixed float-right w-[100%] px-0 md:px-[6em] lg:px-[8em]">
                <div
                  className='text-black text-2xl flex justify-end font-["europa-grotesk-sh-med"] pr-5 pt-3 cursor-pointer'
                  onClick={() => setShowService(false)}
                >
                  <div className="close-x">X</div>
                </div>
              </div>
              <Service />
            </div>
          </div>
        ) : null}

        {showContact ? (
          <div className="modal fixed top-0 p-0 md:p-12 lg:p-16 md:mt-8 lg:mt-5 w-[100%]">
            <div className="w-[100%] bg-white overflow-y-scroll scroll-bar">
              <div className="w-[100%] fixed float-right px-0 md:px-[6em] lg:px-[8em]">
                <div
                  className='text-black w-[100%] text-2xl flex justify-end font-["europa-grotesk-sh-med"] pr-5 pt-3 cursor-pointer'
                  onClick={() => setShowContact(false)}
                >
                  <div className="close-x">X</div>
                </div>
              </div>
              <Contact />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Pages;
