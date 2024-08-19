import { useRef } from 'react';
import vid_about from '../assets/video/about.mp4';
import { arrow, img1, img2, img4, img5 } from '../etc/images';

const Pages = () => {
    const arrowRef = useRef();

    const handleModal = (e, type) => {
        
    }

    const handleMouse = (event) => {
        // console.log(arrowRef.current.offsetLeft)
        // console.log(arrowRef)
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
            <div className="relative pt-6 text-white text-[3rem] leading-5 tracking-[-2px] text-center font-['europa-grotesk-sh-med']">
                Oetara
            </div>
            <div className='flex justify-center items-center w-[100%] h-[93vh]'>
                <div>
                    <div className='absolute top-[8%] left-[29%] z-0'>
                        <div className='content-area'>
                            <div className='clip1'>
                                <div id="c1" className='absolute z-[99] w-[100%] bg-[#555458]/70 h-[100%] rounded-[50%]'>
                                    <div className='text-white text-[6vh] text-center pl-[0em] pt-[0.5em]'>About</div>
                                </div>
                                <video
                                    preload="true"
                                    muted
                                    autoPlay
                                    loop
                                    className="rounded-[50%] h-[100%] object-cover"
                                    src={vid_about}
                                    type="video/mp4"
                                />
                            </div>
                            <div className='clip2'>
                                <div id="c2" className='absolute z-[99] w-[100%] bg-[#555458]/70 h-[100%] rounded-[50%]'>
                                    <div className='text-white text-[6vh] text-center pl-[11em] pt-[6.5em]'>Work</div>
                                </div>
                                <video
                                    preload="true"
                                    muted
                                    autoPlay
                                    loop
                                    className="rounded-[50%] h-[100%] object-cover"
                                    src={vid_about}
                                    type="video/mp4"
                                />
                            </div>
                            <div className='clip3'>
                                <div id="c3" className='absolute z-[99] w-[100%] bg-[#555458]/70 h-[100%] rounded-[50%]'>
                                    <div className='text-white text-[6vh] text-center pl-[0em] pt-[12.5em]'>Contact</div>
                                </div>
                                <video
                                    preload="true"
                                    muted
                                    autoPlay
                                    loop
                                    className="rounded-[50%] h-[100%] object-cover"
                                    src={vid_about}
                                    type="video/mp4"
                                />
                            </div>
                            <div className='clip4'>
                                <div id="c4" className='absolute z-[99] w-[100%] bg-[#555458]/70 h-[100%] rounded-[50%]'>
                                    <div className='text-white text-[6vh] text-center -ml-[11em] pt-[6.5em]'>Service</div>
                                </div>
                                <video
                                    preload="true"
                                    muted
                                    autoPlay
                                    loop
                                    className="rounded-[50%] h-[100%] object-cover"
                                    src={vid_about}
                                    type="video/mp4"
                                />
                            </div>
                        </div>
                    </div>
                    <div id="arrow">
                        <div className='flex justify-center items-center'>
                            <img ref={arrowRef} src={arrow} alt="" className='w-[8em]' />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex justify-center items-center h-[95vh]">
                <div className='content-area '>
                    <div className='cursor-pointer' onClick={(e) => handleModal(e, 'about')}> */}
                        {/* <div className='absolute z-[99]'>
                            <div className='flex justify-center'>
                                <img src={img2} alt="" className="clip1" />
                            </div>
                        </div> */}
                        {/* <video
                            preload="true"
                            muted
                            autoPlay
                            loop
                            className="rounded-[50%] h-[100%] object-cover clip1"
                            src={vid_about}
                            type="video/mp4"
                        /> */}
                    {/* </div> */}
                    {/* <div className='content'>
                        <div className='absolute z-[99]'>
                            <div className='flex justify-center'>
                                <img src={img2} alt="" className="clip2" />
                            </div>
                        </div>
                        <video
                            preload="true"
                            muted
                            autoPlay
                            loop
                            className="rounded-[50%] h-[100%] object-cover"
                            src={vid_about}
                            type="video/mp4"
                        />
                    </div>
                    <div className='content'>
                        <div className='absolute z-[99]'>
                            <div className='flex justify-center'>
                                <img src={img4} alt=""className='clip3' />
                            </div>
                        </div>
                        <video
                            preload="true"
                            muted
                            autoPlay
                            loop
                            className="rounded-[50%] h-[100%] object-cover"
                            src={vid_about}
                            type="video/mp4"
                        />
                    </div>
                    <div className='content'>
                        <div className='absolute z-[99]'>
                            <div className='flex justify-center'>
                                <img src={img5} alt="" className="clip4" />
                            </div>
                        </div>
                        <video
                            preload="true"
                            muted
                            autoPlay
                            loop
                            className="rounded-[50%] h-[100%] object-cover"
                            src={vid_about}
                            type="video/mp4"
                        />
                    </div> */}
                {/* </div>
            </div> */}
            {/* <div className="mt-[20vh] flex justify-center items-center">
                <div className="rounded-tl-[100%] w-[450px] h-[450px] bg-white rotate-45 absolute">
                    <div>
                        <video
                            preload="true"
                            muted
                            autoPlay
                            loop
                            className="h-[450px] rounded-tl-full object-cover w-[100%]"
                            src={vid_about}
                            type="video/mp4"
                        />
                        <div className='relative'>
                            <div className='absolute rotate-45 ml-[50vh] z-[9999] text-black'>ada</div>
                        </div>
                    </div>
                </div>
                <div className="rounded-tr-[100%] w-[450px] h-[450px] bg-white rotate-45 absolute ml-[39em] mt-[39em]">
                    <video
                        preload="true"
                        muted
                        autoPlay
                        loop
                        className="h-[450px] rounded-tr-full object-cover w-[100%]"
                        src={vid_work}
                        type="video/mp4"
                    />
                </div>
                <div className="rounded-br-[100%] w-[450px] h-[450px] bg-white rotate-45 absolute top-[67vh] mr-[12px]">
                    <video
                        preload="true"
                        muted
                        autoPlay
                        loop
                        className="h-[450px] rounded-br-full object-cover w-[100%]"
                        src={vid_about}
                        type="video/mp4"
                    />
                </div>
                <div className="rounded-bl-[100%] w-[450px] h-[450px] bg-white rotate-45 absolute ml-[-39em] mt-[38.9em]">
                    <video
                        preload="true"
                        muted
                        autoPlay
                        loop
                        className="h-[450px] rounded-bl-full object-cover w-[100%]"
                        src={vid_work}
                        type="video/mp4"
                    />
                </div>
            </div> */}
        </div>
    </>
  );
};

export default Pages;
