import { useRef, useState } from 'react';
import vid_about from '../assets/video/about.mp4';
import vid_work from '../assets/video/work.mp4';
import vid_contact from '../assets/video/contact.mp4';
import { arrow, A, W, C, S, oetara } from '../etc/images';
import About from '../components/about';
import Work from '../components/work';
import Service from '../components/service';
import Contact from '../components/contact';

const Pages = () => {
    const arrowRef = useRef();
    const [showAbout, setShowAbout] = useState(false);
    const [showWork, setShowWork] = useState(false);
    const [showService, setShowService] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showVideo1, setVideo1] = useState(false);
    const [showVideo2, setVideo2] = useState(false);
    const [showVideo3, setVideo3] = useState(false);
    const [showVideo4, setVideo4] = useState(false);

    const handleModal = (e, type) => {
        if (type === 'about') {
            setShowAbout(!showAbout)
        } else if (type === 'work') {
            setShowWork(!showWork)
        } else if (type === 'service') {
            setShowService(!showService)
        } else if (type === 'contact') {
            setShowContact(!showContact)
        }
    }

    const handleMouse = (event) => {
        const { current } = arrowRef;

        let x = (current.offsetLeft) + (current.clientWidth / 2);
        let y = (current.offsetTop) + (current.clientHeight / 2);
        let rad = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (rad * (180 / Math.PI) * -1) + 180;

        current.style.transform = "rotate(" + rot + "deg)";
        // eye.css({
        //   '-webkit-transform': 'rotate(' + rot + 'deg)',
        //   '-moz-transform': 'rotate(' + rot + 'deg)',
        //   '-ms-transform': 'rotate(' + rot + 'deg)',
        //   'transform': 'rotate(' + rot + 'deg)'
        // });
    }
  return (
    <>
        <div className='bg-cover h-[100vh]' onMouseMove={(event) => handleMouse(event)}>
            <div className="pt-2 text-white text-[3rem] leading-5 tracking-[-2px] text-center font-['europa-grotesk-sh-med']">
                {/* Oetara */}
                <div className="flex justify-center">
                    <img src={oetara} alt="" className='w-[2.5em]' />
                </div>
            </div>
            <div>
                <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-0'>
                    <div className='content-area'>
                        <div onClick={(e) => handleModal(e, 'about')} className='clip1'>
                            <div className='absolute z-[99] w-[100%] h-[100%] rounded-[50%]'>
                                <img src={A} alt="" className='w-[100%] rounded-[50%]' />
                            </div>
                            <div className='absolute z-[999] w-[100%] h-[100%] rounded-[50%]'>
                                <div className='text-about relative h-[100%] text-white text-[3vh] sm:text-[4vh] lg:text-[5vh] text-center pl-[1.5em] pt-[1em]'>About</div>
                            </div>
                            <div className='flex justify-center items-center w-[100%]'>
                                <video
                                    muted
                                    autoPlay
                                    loop
                                    onMouseOver={event => event.target.play()}
                                    onMouseOut={event => event.target.pause()}
                                    className="rounded-[50%] w-[50%] h-[100%] object-contain"
                                    src={vid_about}
                                    type="video/mp4"
                                />
                            </div>
                        </div>
                        <div onClick={(e) => handleModal(e, 'work')} className='clip2'>
                            <div className='absolute z-[99] w-[100%] h-[100%] rounded-[50%]'>
                                <img src={W} alt="" className='w-[100%] rounded-[50%]' />
                            </div>
                            <div className='absolute z-[999] w-[100%] h-[100%] rounded-[50%]'>
                                <div className='text-work relative text-white h-[100%] text-[3vh] sm:text-[4vh] lg:text-[6vh] text-center pl-[11em] md:pl-[10em] pt-[6em] md:pt-[6em]'>Work</div>
                            </div>
                            <video
                                muted
                                autoPlay
                                loop
                                onMouseOver={event => event.target.play()}
                                onMouseOut={event => event.target.pause()}
                                className="rounded-[50%] h-[100%] object-contain"
                                src={vid_work}
                                type="video/mp4"
                            />
                        </div>
                        <div onClick={(e) => handleModal(e, 'contact')} className='clip3'>
                            <div className='absolute z-[99] w-[100%] h-[100%] rounded-[50%]'>
                                <img src={C} alt="" className='w-[100%] rounded-[50%]' />
                            </div>
                            <div className='absolute z-[99] w-[100%] h-[100%] rounded-[50%]'>
                                <div className='text-white text-contact h-[100%] text-[3vh] md:text-[4vh] lg:text-[5vh] text-center pl-[8vh] lg:pl-[2em] pt-[11em] md:pt-[12vh] lg:pt-[14em]'>Contact</div>
                            </div>
                            <video
                                muted
                                autoPlay
                                loop
                                onMouseOver={event => event.target.play()}
                                onMouseOut={event => event.target.pause()}
                                className="rounded-[50%] h-[100%] object-contain"
                                src={vid_contact}
                                type="video/mp4"
                            />
                        </div>
                        <div onClick={(e) => handleModal(e, 'service')} className='clip4'>
                            <div className='absolute z-[99] w-[100%] h-[100%] rounded-[50%]'>
                                <img src={S} alt="" className='w-[100%] rounded-[50%]' />
                            </div>
                            <div className='absolute z-[99] w-[100%] h-[100%] rounded-[50%]'>
                                <div className='text-service text-white h-[100%] text-[3vh] md:text-[4vh] lg:text-[5vh] text-center -ml-[8em] md:-ml-[13em] lg:-ml-[11em] pt-[5.5em] md:pt-[8em] lg:pt-[6.5em]'>Service</div>
                            </div>
                            <video
                                muted
                                autoPlay
                                loop
                                className="rounded-[50%] h-[100%] object-contain"
                                src={vid_about}
                                type="video/mp4"
                            />
                        </div>
                    </div>
                </div>
                <div className='-mt-11'>
                    <div className='flex justify-center items-center w-[100%] h-[100vh]'>
                        <img ref={arrowRef} src={arrow} alt="" className='w-[4em] lg:w-[14em]' />
                    </div>
                </div>
            </div>
            {showAbout ? 
                <div className='fixed top-0 p-0 md:p-12 lg:p-16 w-[100%]'>
                    <div className='w-[100%] h-[100vh] bg-white overflow-y-scroll scroll-bar'>
                        <div className="fixed float-right w-[100%] px-0 md:px-[6em] lg:px-[8em]">
                            <div className='text-black text-2xl text-right font-["europa-grotesk-sh-med"] pr-5 pt-3 cursor-pointer' onClick={() => setShowAbout(false)}>X</div>
                        </div>
                        <About />
                    </div>
                </div>
            : null}

            {showWork ? 
                <div className='fixed top-0 p-0 md:p-12 lg:p-16 w-[100%]'>
                    <div className='w-[100%] h-[100vh] bg-white overflow-y-scroll scroll-bar'>
                        <div className="fixed float-right w-[100%] px-0 md:px-[6em] lg:px-[8em]">
                            <div className='text-black text-2xl text-right font-["europa-grotesk-sh-med"] pr-5 pt-3 cursor-pointer' onClick={() => setShowWork(false)}>X</div>
                        </div>
                        <Work />
                    </div>
                </div>
            : null}

            {showService ? 
                <div className='fixed top-0 p-0 md:p-12 lg:p-16 w-[100%]'>
                    <div className='w-[100%] h-[100vh] bg-white overflow-y-scroll scroll-bar'>
                        <div className="fixed float-right w-[100%] px-0 md:px-[6em] lg:px-[8em]">
                            <div className='text-black text-2xl text-right font-["europa-grotesk-sh-med"] pr-5 pt-3 cursor-pointer' onClick={() => setShowService(false)}>X</div>
                        </div>
                        <Service />
                    </div>
                </div>
            : null}

            {showContact ? 
                <div className='fixed top-0 p-0 md:p-12 lg:p-16 w-[100%]'>
                    <div className='w-[100%] h-[100vh] bg-white overflow-y-scroll scroll-bar'>
                        <div className="w-[100%] fixed float-right px-0 md:px-[6em] lg:px-[8em]">
                            <div className='text-black w-[100%] text-2xl text-right font-["europa-grotesk-sh-med"] pr-5 pt-3 cursor-pointer' onClick={() => setShowContact(false)}>X</div>
                        </div>
                        <Contact />
                    </div>
                </div>
            : null}
        </div>
    </>
  );
};

export default Pages;
