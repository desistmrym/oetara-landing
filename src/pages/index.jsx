import { useRef, useState } from "react";
import vid_about_static from "../assets/video/building-static.png";
import vid_about_animated from "../assets/video/building-moving.webp";
import vid_service_static from "../assets/video/about-static.png";
import vid_service_animated from "../assets/video/about-moving.webp";
import vid_work_static from "../assets/video/work-static.png";
import vid_work_animated from "../assets/video/work-moving.webp";
import vid_contact_static from "../assets/video/blackhole-static.png";
import vid_contact_animated from "../assets/video/blackhole-moving.webp";
import { arrow, A, W, C, S, oetara, compass_white } from "../etc/images";
import { useNavigate } from "react-router-dom";
import { motion, useIsPresent } from 'framer-motion';

const Pages = () => {
  const arrowRef = useRef();
  const isPresent = useIsPresent();
  let navigate = useNavigate()
  const [isServiceHovered, setIsServiceHovered] = useState(false);
  const [isWorkHovered, setIsWorkHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  const handleRedirect = (e, type) => {
      navigate('/'+type)
  };

  const handleMouse = (event) => {
    const { current } = arrowRef;

    let x = current.offsetLeft + current.clientWidth / 2;
    let y = current.offsetTop + current.clientHeight / 2;
    let rad = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = (rad * (180 / Math.PI) * -1 + 180) + 90;

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="bg-cover h-[100vh] overflow-hidden"
        onMouseMove={(event) => handleMouse(event)}
      >
        <div
          // style={{
          //   backgroundColor: "rgba(0, 0, 0, 0.5)",
          //   position: "absolute",
          //   height: "100vh",
          //   width: "100%",
          // }}
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
          <div className="cursor-hover absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-0 pt-24">
            <div className="scale-95 content-area cursor-hover">
              <div
                onClick={(e) => handleRedirect(e, "navigation")}
                className="clip1 about-page cursor-hover"
                onMouseEnter={() => handleAboutHover(true)}
                onMouseLeave={() => handleAboutHover(false)}
              >
                  <div className={`absolute z-[99] p-5 w-[100%] top-[12%] flex justify-center rounded-[50%]`}>
                    <img src={A} alt="" className="w-[20%]" />
                  </div>
                  {isAboutHovered ?
                    <div className="absolute z-[999] flex justify-center w-[100%] h-[100%] rounded-[50%] font-['oswald']">
                      <div className={`relative w-[100%] h-[100%] text-animate text-white text-[1.5vh] md:text-[2.5vh] lg:text-[3vh] text-center pl-[4em] hover:pl-[5.5em] pt-[24%] md:pt-[22%]`}>
                        avigation
                      </div>
                    </div>
                  : null}
                  <img
                    className="absolute top-3 left-2 rounded-[50%] h-[100%] object-cover"
                    src={isAboutHovered ? vid_about_animated : vid_about_static}
                    alt="About"
                  />
                  <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} className="absolute w-full h-full top-3 rounded-[50%]"></div>
                  <img src={compass_white} alt="" className="absolute w-[100%] object-cover" />
              </div>
              <div
                onClick={(e) => handleRedirect(e, "email-us")}
                className="clip2 cursor-hover"
                onMouseEnter={() => handleContactHover(true)}
                onMouseLeave={() => handleContactHover(false)}
              >
                <div className={`absolute p-5 z-[99] flex justify-end right-[13%] lg:justify-center lg:left-[24%] text-contact top-[38%] md:top-[41%] w-[100%] rounded-[50%]`}>
                  <img src={C} alt="" className="w-[16%] rounded-[50%]" />
                </div>
                {isContactHovered ? 
                  <div className="absolute p-5 z-[999] w-[100%] h-[100%] flex justify-end rounded-[50%]">
                    <div className="relative text-white text-animate hover:pl-[17em] w-[100%] h-[100%] text-[1.5vh] sm:text-[2.5vh] lg:text-[3vh] text-center pl-[15em] pt-[12em] md:pt-[11em] lg:pt-[13em]">
                      mail <br></br>Us
                    </div>
                  </div>
                : null}
                  <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} className="absolute w-full h-full rounded-[50%] right-[2%]"></div>
                  <img src={compass_white} alt="" className="absolute w-[100%] object-cover" />
                <img
                  className="rounded-[50%] p-5 h-[100%] object-cover"
                  src={isContactHovered ? vid_work_animated : vid_work_static}
                  alt="Email-us"
                />
              </div>
              <div
                onClick={(e) => handleRedirect(e, "service")}
                className="clip3 cursor-hover"
                onMouseEnter={() => handleServiceHover(true)}
                onMouseLeave={() => handleServiceHover(false)}
              >
                <div className="absolute p-5 z-[99] bottom-[12%] flex justify-center w-[100%] rounded-[50%]">
                  <img src={S} alt="" className="w-[12%] rounded-[50%]" />
                </div>
                {isServiceHovered ? 
                  <div className="absolute p-5 z-[99] w-[100%] h-[100%] flex justify-end rounded-[50%]">
                    <div className="text-white text-animate hover:pl-[4.5em] w-[100%] h-[100%] text-[1.5vh] md:text-[2.5vh] lg:text-[3vh] text-center pl-[5vh] md:pl-[8vh] lg:pl-[3em] pt-[20em] md:pt-[15em] lg:pt-[21.5em]">
                      ervice
                    </div>
                  </div>
                : null}
                <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} className="absolute w-full h-full rounded-[50%] bottom-[2%]"></div>
                <img src={compass_white} alt="" className="absolute  w-[100%] object-cover" />
                <img
                  className="rounded-[50%] p-5 h-[100%] object-cover"
                  src={
                    isServiceHovered ? vid_contact_animated : vid_contact_static
                  }
                  alt="Service"
                />
              </div>
              <div
                onClick={(e) => handleRedirect(e, "work")}
                className="clip4 cursor-hover"
                onMouseEnter={() => handleWorkHover(true)}
                onMouseLeave={() => handleWorkHover(false)}
              >
                <div className="absolute z-[99] w-[100%] flex justify-center md:justify-start top-[44%] -left-[28%] md:left-[14%] rounded-[50%]">
                  <img src={W} alt="" className="w-[14%] rounded-[50%]" />
                </div>
                {isWorkHovered ? 
                  <div className="absolute p-5 z-[99] w-[100%] h-[100%] flex justify-start rounded-[50%]">
                    <div className="text-animate text-white w-[100%] h-[100%] text-[1.5vh] md:text-[2.5vh] lg:text-[3vh] pt-[22vh] lg:pt-[40vh] pl-[8.5vh] md:pl-[11vh] lg:pl-[18vh] hover:pl-[9.5vh] md:hover:pl-[20vh] lg:hover:pl-[20.5vh]">
                      ork
                    </div>
                  </div>
                : null}
                <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} className="absolute w-full h-full rounded-[50%]"></div>
                <img src={compass_white} alt="" className="absolute w-[100%] object-cover" />
                <img
                  className="rounded-[50%] p-5 h-[100%] object-cover"
                  src={
                    isWorkHovered ? vid_service_animated : vid_service_static
                  }
                  alt="Service"
                />
              </div>
            </div>
          </div>
          <div id="needle-landing">
            <div className="flex justify-center items-center w-[100%] h-[100vh]">
              <img ref={arrowRef} src={arrow} alt="" className="w-[8em] md:w-[20em] absolute" />
            </div>
          </div>
        </div>
      </div>
      {/* <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.8, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.8, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      /> */}
    </motion.div>
  );
};

export default Pages;
