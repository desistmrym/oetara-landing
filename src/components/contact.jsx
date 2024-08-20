import vid_about from '../assets/video/about.mp4'

const Contact = () => {
    return (
        <div className='px-[3em] pt-[3em] pb-[6em]'>
            <video
                preload="true"
                muted
                autoPlay
                loop
                className="w-[100%] object-cover h-[70vh]"
                src={vid_about}
                type="video/mp4"
            />
            <div className='relative h-[70vh] w-[100%] z-[99] -mt-[70vh]' style={{background: "rgba(0, 0, 0, 0.5)"}}>
                <div className="flex justify-start items-center h-[100%] px-12">
                    <div className='text-white text-[2em]'>CONTACT.</div>
                </div>
            </div>
        </div>
    )
}

export default Contact;