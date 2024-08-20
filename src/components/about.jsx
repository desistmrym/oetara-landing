import img1 from '../assets/images/intro.png'

const About = () => {
    return (
        <div className="p-10">
            <img src={img1} alt="" className="w-[100%]" />

            <div className='pt-5 flex justify-between'>
                <div className='text-justify text-[7em] w-[70%] tracking-[0.5em]'>INTRODUCTION</div>
                <div className='w-[30%] text-[40px]'>
                    <div className=''>Established in 2022</div>
                    <div>We are not only crafting the right message but also setting the measurable goals and will be your guidance through Digital World Crowdedness.</div>
                </div>
            </div>
            
            <div className='pt-[5em]'>
                <div className='text-[8em] font-["fusion-sans"]'>THE TEAM</div>
                <div className='flex justify-between'>
                    <div className='bg-black p-5 h-[50vh] w-[25%] mx-1'></div>
                    <div className='bg-black p-5 h-[50vh] w-[25%] mx-1'></div>
                    <div className='bg-black p-5 h-[50vh] w-[25%] mx-1'></div>
                    <div className='bg-black p-5 h-[50vh] w-[25%] mx-1'></div>
                </div>
            </div>

            <div className='pt-[5em]'>
                <div className='text-[8em] font-["fusion-sans"]'>OUR CLIENT</div>
            </div>
        </div>
    )
}

export default About;