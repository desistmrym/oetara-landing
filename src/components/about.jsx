import img1 from '../assets/images/intro.png'

const About = () => {
    return (
        <div className="pt-10 lg:pt-0 p-4 lg:p-10">
            <img src={img1} alt="" className="w-[100%]" />

            <div className='pt-5 flex flex-wrap lg:flex-nowrap justify-between'>
                <div className='text-center lg:text-justify text-[2em] md:text-[3em] lg:text-[5em] w-[100%] lg:w-[70%] tracking-[0.5em]'>INTRODUCTION</div>
                <div className='w-[100%] lg:w-[30%] text-[40px]'>
                    <div className='text-[0.6em] md:text-[1em] lg:text-md'>Established in 2022</div>
                    <div className='text-[0.5em] md:text-[0.8em] lg:text-md'>We are not only crafting the right message but also setting the measurable goals and will be your guidance through Digital World Crowdedness.</div>
                </div>
            </div>
            
            <div className='pt-[1em] md:pt-[2em] lg:pt-[5em]'>
                <div className='text-[2em] md:text-[3em] lg:text-[8em] font-["fusion-sans"]'>THE TEAM</div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                    <div className='bg-black p-5 h-[50vh]'></div>
                    <div className='bg-black p-5 h-[50vh]'></div>
                    <div className='bg-black p-5 h-[50vh]'></div>
                    <div className='bg-black p-5 h-[50vh]'></div>
                </div>
            </div>

            <div className='py-[1em] md:py-[2em] lg:py-[5em]'>
                <div className='text-[2em] md:text-[3em] lg:text-[8em] font-["fusion-sans"]'>OUR CLIENT</div>
                <div className="py-2 grid grid-cols-6 gap-3">
                    <div className="bg-black p-5 h-[12vh]"></div>
                    <div className="bg-black p-5 h-[12vh]"></div>
                    <div className="bg-black p-5 h-[12vh]"></div>
                    <div className="bg-black p-5 h-[12vh]"></div>
                    <div className="bg-black p-5 h-[12vh]"></div>
                    <div className="bg-black p-5 h-[12vh]"></div>
                </div>
            </div>
        </div>
    )
}

export default About;